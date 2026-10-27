// "Related searches" tags: each page gets up to 8 keywords from the Kenyan keyword research
// (src/data/keywords.json) that genuinely match it, each linking to the page that best answers it.
import { norm, tokens } from './text-norm.js';

const MAX_TAGS = 8;
// Words that say nothing about WHICH car or topic a search is about. A keyword's remaining ("entity")
// words must all appear in a page's title, headings or model names for it to be tagged on that page.
const GENERIC = new Set(tokens(`price prices kenya kenyan nairobi mombasa ksh shilling cost how much is the a an of in for to from on at with and or vs
  by what does do can i my buy for sale used second hand brand new cheap cheapest affordable best top latest locally showroom ex duty paid
  import car vehicle list value review diesel petrol current today`));
// Searches that want to buy (send them to the car page) rather than read a guide
const BUYING = new Set(tokens('price prices cost buy sale cheap cheapest affordable used showroom ksh shilling'));
// Keyword research categories -> car makes they are about (4 = UK imports, 5 = Japan imports apply by origin)
const CAT_MAKES = { 1: ['Land Rover'], 2: ['Toyota'], 3: ['Mercedes-Benz'], 6: ['Toyota', 'Mazda'] };
const CAT_ORIGIN = { 4: 'UK', 5: 'Japan' };
const ORIGIN_PAGE = { 4: '/import-from/uk/', 5: '/import-from/japan/' };
// Where to send searches no page title matches, by topic (checked in order, before the UK/Japan import pages)
const TOPIC_PAGES = [
  [/\bmombasa\b.*\bnairobi\b|\bcarrier\b/, '/blog/mombasa-to-nairobi-car-transport/'],
  [/\b(exemption|exempt|diplomat|disabled|returning resident)\b/, '/blog/car-import-duty-exemptions-kenya/'],
  [/\b(clearance|clearing|ucr|idf|port|handling|release|demurrage|storage)\b/, '/blog/mombasa-port-car-clearing-guide/'],
  [/\b(duty|kra|excise|crsp|tax)\b/, '/blog/kra-import-duty-calculator-kenya/'],
  [/^car imports kenya$/, '/how-to-import-a-car-to-kenya/'],
];

const isYear = (t) => /^(19|20)\d\d$/.test(t);
const entity = (kw) => [...new Set(tokens(kw).filter((t) => !GENERIC.has(t) && !isYear(t)))];
// Make names are optional when the model words match ("land rover range rover" = "range rover")
const OPTIONAL = new Set(tokens('land toyota mercedes benz mazda'));
const core = (e) => (e.filter((t) => !OPTIONAL.has(t)).length ? e.filter((t) => !OPTIONAL.has(t)) : e);
const has = (text, toks) => toks.every((t) => text.includes(` ${t} `));
const count = (text, toks) => toks.filter((t) => text.includes(` ${t} `)).length;
const grab = (html, re) => [...html.matchAll(re)].map((m) => m[1]).join(' ');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const label = (kw) => kw.charAt(0).toUpperCase() + kw.slice(1);

export function addKeywordTags(pages, keywords, cars, minYear) {
  const bySlug = Object.fromEntries(cars.map((c) => [c.slug, c]));
  const docs = pages.filter((p) => p.html.includes('<!--KW_TAGS-->')).map((p) => {
    const [, slug, vid] = p.path.match(/^\/cars\/([^/]+)\/(?:([^/]+)\/)?$/) || [];
    const car = bySlug[slug];
    const isBlog = p.path.startsWith('/blog/');
    const head = norm(`${grab(p.html, /<title>([\s\S]*?)<\/title>/g)} ${grab(p.html, /<h1[^>]*>([\s\S]*?)<\/h1>/g)} ${car ? `${car.name} ${car.aka.join(' ')}` : ''}`);
    const sub = isBlog ? norm(grab(p.html, /<h2[^>]*>([\s\S]*?)<\/h2>/g)) : ' '; // section headings, not sub-sections listing example cars
    return {
      p, car, head, isBlog, isModel: !!car && !vid,
      text: `${head} ${norm(p.path.replace(/[-/]/g, ' '))}`, // car-model searches: title, headline and URL only
      textAll: `${head} ${sub} ${norm(p.path.replace(/[-/]/g, ' '))}`, // import-process searches may also match section headings
      urlText: norm(p.path.replace(/[-/]/g, ' ')),
      version: car && vid ? norm(car.variants.find((v) => v.id === vid)?.name || '') : ' ',
    };
  });
  const kws = keywords.map((k) => ({ ...k, e: entity(k.kw), t: tokens(k.kw), key: norm(k.kw) })).map((k) => ({ ...k, c: core(k.e) }))
    .filter((k, i, a) => a.findIndex((x) => x.key === k.key) === i) // "cx 5" vs "cx5" duplicates
    .map((k) => ({ ...k, old: k.t.some((t) => isYear(t) && +t < minYear), buying: k.t.some((t) => BUYING.has(t)) }));

  // A car page only takes searches about its own make (or general import searches for its origin)
  const fits = (k, d) => !d.car || (CAT_MAKES[k.cat] ? CAT_MAKES[k.cat].includes(d.car.make) : d.car.origin.includes(CAT_ORIGIN[k.cat]));

  // Best page for each keyword: its specific words in the title/heading; then most keyword words in the
  // URL and in the title; buying searches go to car model pages first, others to guides; then the most focused title.
  for (const k of kws) {
    const cands = docs.filter((d) => k.e.length && has(d.head, k.c) && fits(k, d));
    cands.sort((a, b) => count(b.urlText, k.t) - count(a.urlText, k.t) || count(b.head, k.t) - count(a.head, k.t)
      || (k.buying ? (b.isModel - a.isModel) || (b.isBlog - a.isBlog) : (b.isBlog - a.isBlog) || (b.isModel - a.isModel))
      || a.head.length - b.head.length);
    k.href = cands[0]?.p.path || TOPIC_PAGES.find(([re]) => re.test(k.kw))?.[1] || ORIGIN_PAGE[k.cat] || '/how-to-import-a-car-to-kenya/';
  }

  // General import searches ("import cars from japan to kenya") fill pages that have few specific matches
  const originKws = (o) => kws.filter((k) => k.e.length && k.e.every((t) => t === o)).sort((a, b) => a.n - b.n);
  // Searches that apply to any car shipped to Mombasa, whatever the source country (used for ex-South Africa cars)
  const NEUTRAL = ['car imports kenya', 'car carrier transport cost mombasa to nairobi', 'direct car container delivery from mombasa to nairobi',
    'driving newly imported car from mombasa to nairobi risks', 'shore handling fee mombasa port car import', 'simplified custom clearance for individual car importers', 'ucr number generation for car import kenya'];
  const fallback = { Japan: originKws('japan'), UK: originKws('uk'), 'South Africa': NEUTRAL.map((kw) => kws.find((k) => k.kw === kw)).filter(Boolean) };

  for (const d of docs) {
    // Order: current model years first, trim-specific searches first on version pages, then the research priority order
    const tags = kws.filter((k) => k.e.length && has(CAT_MAKES[k.cat] ? d.text : d.textAll, k.c) && fits(k, d))
      .sort((a, b) => a.old - b.old || count(d.version, b.e) - count(d.version, a.e) || a.n - b.n)
      .slice(0, MAX_TAGS);
    if (tags.length < MAX_TAGS) {
      const origins = d.car ? d.car.origin : ['Japan', 'UK'].filter((o) => d.head.includes(` ${o.toLowerCase()} `));
      const pools = (origins.length ? origins : ['Japan', 'UK']).map((o) => fallback[o]).filter(Boolean);
      for (let i = 0; tags.length < MAX_TAGS && pools.some((pool) => pool[i]); i++) {
        for (const pool of pools) if (pool[i] && tags.length < MAX_TAGS && !tags.includes(pool[i])) tags.push(pool[i]);
      }
    }
    const chips = tags.map((k) => k.href === d.p.path
      ? `<span class="chip kw-tag">${esc(label(k.kw))}</span>`
      : `<a class="chip kw-tag" href="${k.href}">${esc(label(k.kw))}</a>`).join('');
    d.p.html = d.p.html
      .replace('<!--KW_TAGS-->', tags.length ? `<nav class="kw-tags wrap" id="related-searches" aria-label="Related searches"><h2>Related searches</h2><div class="chips">${chips}</div></nav>` : '')
      .replace('<!--KW_META-->', tags.length ? `<meta name="keywords" content="${esc(tags.map((k) => k.kw).join(', '))}">` : '');
  }
  for (const p of pages) p.html = p.html.replace('<!--KW_TAGS-->', '').replace('<!--KW_META-->', '');
  return docs.length;
}
