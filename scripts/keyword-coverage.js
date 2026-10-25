// Keyword coverage report: how well the built site (dist/) targets each keyword in a keyword list.
// Usage: node scripts/keyword-coverage.js <keywords.json> [--missing] [--json out.json]
//   keywords.json = [{ "kw": "range rover price in kenya", "cat": 1 }, ...]
// Strong  = every meaningful word of the keyword in ONE <title>, <h1>, <h2>/<h3> or FAQ question of a page
// Weak    = phrase appears in a page's body text (or all key words appear on one page)
// Missing = no page covers it
import { readdirSync, statSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const DIST_ARG = process.argv.indexOf('--dist');
const root = DIST_ARG > 0 ? process.argv[DIST_ARG + 1] : join(import.meta.dirname, '..', 'dist');
const [file, ...flags] = process.argv.slice(2);
const keywords = JSON.parse(readFileSync(file, 'utf8'));

// Normalise text the way searchers type: lowercase, no punctuation, "cx-5"/"cx5" -> "cx 5", "g-wagon" -> "g wagon"
export const norm = (t) => ` ${String(t).toLowerCase()
  .replace(/&amp;/g, '&').replace(/&#39;|&rsquo;|’/g, "'").replace(/<[^>]+>/g, ' ')
  .replace(/\bcx-?(\d)/g, 'cx $1').replace(/\blc-?(\d{3})\b/g, 'lc$1').replace(/\bksh\.?\b/g, 'ksh')
  .replace(/[^a-z0-9.' ]+/g, ' ').replace(/\.(?!\d)/g, ' ').replace(/\s+/g, ' ').trim()
  .split(' ').map(stem).join(' ')} `;
// Light stemming so "imports"/"import", "japanese"/"japan", "meaning"/"mean" match, as search engines do
function stem(w) {
  if (w === 'japanese') return 'japan';
  // UK vs US spellings and Kenyan currency forms are the same word to a search engine
  const same = { colour: 'color', kes: 'ksh', kshs: 'ksh', instalment: 'installment', instalments: 'installment', armoured: 'armored', tyre: 'tire', tyres: 'tire', licence: 'license', salt: 'salty', disability: 'disabled', disabilities: 'disabled' };
  if (same[w]) return same[w];
  if (/^\d/.test(w) || w.length <= 3) return w;
  return w.replace(/'s$/, '').replace(/(ing|ed)$/, '').replace(/ies$/, 'y').replace(/([^s])s$/, '$1');
}
const STOP = new Set('in the of for to a an how much is what does do can i you my with from on and or vs by at per are it its which when'.split(' '));

const pages = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : p.endsWith('index.html') && pages.push(p); });
walk(root);
const docs = pages.map((p) => {
  const h = readFileSync(p, 'utf8');
  const main = (h.match(/<main[\s\S]*<\/main>/) || [h])[0];
  const heads = [h.match(/<title>(.*?)<\/title>/)?.[1], ...[...main.matchAll(/<h[1-3][^>]*>([\s\S]*?)<\/h[1-3]>/g)].map((m) => m[1]), ...[...main.matchAll(/<summary>([\s\S]*?)<\/summary>/g)].map((m) => m[1])];
  return { url: '/' + p.slice(root.length + 1).replace(/\\/g, '/').replace(/index\.html$/, ''), heads: heads.filter(Boolean).map(norm), body: norm(main) };
});

const res = keywords.map((k) => {
  const q = norm(k.kw);
  const toks = q.trim().split(' ').filter((t) => !STOP.has(t));
  const strong = docs.filter((d) => d.heads.some((hd) => toks.every((t) => hd.includes(` ${t} `)))).map((d) => d.url);
  if (strong.length) return { ...k, level: 'strong', pages: strong.slice(0, 3) };
  const phrase = docs.filter((d) => d.body.includes(q)).map((d) => d.url);
  if (phrase.length) return { ...k, level: 'weak', pages: phrase.slice(0, 3) };
  const tokens = docs.filter((d) => toks.every((t) => d.body.includes(` ${t} `))).map((d) => d.url);
  return tokens.length ? { ...k, level: 'weak', pages: tokens.slice(0, 3) } : { ...k, level: 'missing', pages: [] };
});

const cats = [...new Set(res.map((r) => r.cat))];
console.log('cat  strong  weak  missing  total');
for (const c of cats) {
  const r = res.filter((x) => x.cat === c);
  const n = (l) => r.filter((x) => x.level === l).length;
  console.log(`${String(c).padEnd(4)} ${String(n('strong')).padStart(6)} ${String(n('weak')).padStart(5)} ${String(n('missing')).padStart(8)} ${String(r.length).padStart(6)}`);
}
const tot = (l) => res.filter((x) => x.level === l).length;
console.log(`ALL  ${String(tot('strong')).padStart(6)} ${String(tot('weak')).padStart(5)} ${String(tot('missing')).padStart(8)} ${String(res.length).padStart(6)}`);
if (flags.includes('--missing')) res.filter((r) => r.level !== 'strong').forEach((r) => console.log(`[${r.cat}] ${r.level.padEnd(7)} ${r.kw}`));
const j = flags.indexOf('--json');
if (j >= 0) writeFileSync(flags[j + 1], JSON.stringify(res, null, 1));
