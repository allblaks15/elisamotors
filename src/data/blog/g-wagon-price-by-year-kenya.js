export default (h) => {
  const { YEAR, MIN_YEAR, P, F, T, c, v, cta, table, telA, waA } = h;
  const G = 'mercedes-benz-g-class';
  const pos = (y, from, to) => (to <= from ? 'upper end' : (y - from) / (to - from) < 0.34 ? 'lower end' : (y - from) / (to - from) < 0.67 ? 'middle' : 'upper end');
  const years = (from) => Array.from({ length: YEAR - from + 1 }, (_, i) => from + i);
  const gy = (y) => y < MIN_YEAR ? [
    `<p>A ${y} G-Wagon is the ${y <= 2018 && y !== 2018 ? 'old-shape W463' : 'last of the old-shape W463 or the first new W463A, depending on build date'}. It cannot be imported in ${YEAR}, because the 8-year rule starts at ${MIN_YEAR}. Therefore, every ${y} G-Class in Kenya is locally used. Its value depends on mileage, service history and whether it is a genuine AMG or a converted G350/G500.</p>`,
    `<p>The ${y} G-Class is a local-market car only. It is ${YEAR - y} years old, so it fails the import age limit. Many ${y} cars wear G63 body kits, so check the chassis and engine codes to confirm what you are buying.</p>`,
    `<p>You will only find a ${y} G-Wagon (${y <= 2017 ? 'old-shape W463' : 'W463'}) on the Kenyan used market. Old-shape G-Wagons have a loyal following. However, parts, rust checks and electrical faults make an inspection essential.</p>`,
  ][y % 3]
    : `<p>A ${y} G-Wagon is the new-shape W463A${y >= 2024 ? ', updated with the 2024 facelift' : ''}. It lands at the ${pos(y, MIN_YEAR, YEAR)} of each band: about <b>${P(G, 'g400d')}</b> for the ${v(G, 'g400d', 'G400d diesel')}, <b>${P(G, 'g550-4-0-v8')}</b> for the ${v(G, 'g550-4-0-v8', 'G550 V8')} and <b>${P(G, 'g63-amg')}</b> for the ${v(G, 'g63-amg', 'G63 AMG')}. ${y === MIN_YEAR ? `It is the oldest G-Wagon you can import in ${YEAR}, so it is the cheapest route to a fresh-import new shape.` : y >= 2024 ? 'Facelift cars have the latest MBUX screens and, on the G500 and G63, mild-hybrid systems.' : ''}</p>`;
  return {
    slug: 'g-wagon-price-by-year-kenya',
    keyword: 'G-Wagon price by year in Kenya',
    tag: 'Price guide',
    cluster: 'Mercedes-Benz & G-Wagon',
    crumb: 'G-Wagon price by year',
    title: `G-Wagon Price in Kenya by Year (2013–${YEAR}): G63, G400d`,
    description: `Mercedes G-Wagon prices in Kenya by year, 2013 to ${YEAR}: G63 AMG, G400d and G550. Which years you can import, old vs new shape, and whether prices will drop.`,
    h1: `G-Wagon Price in Kenya by Year: Mercedes G-Class from 2013 to ${YEAR}`,
    excerpt: `Year-by-year Mercedes G-Wagon prices in Kenya, old shape vs new shape, the best year to import and where G-Wagon prices are heading.`,
    published: '2026-10-10',
    updated: '2026-10-10',
    cars: [G, 'mercedes-benz-gle', 'mercedes-benz-gls'],
    html: `
<p>A G-Wagon's price in Kenya depends on two things above all: the year and the engine. A <b>G-Wagon 2018 price in Kenya</b> is very different from a <b>2019 G-Wagon</b>, because 2018 is when the new shape arrived. Moreover, the year decides whether you can import the car or must buy locally.</p>
<p>In ${YEAR}, the KEBS 8-year rule admits cars first registered in ${MIN_YEAR} or later. Therefore, this guide gives landed prices for importable years and buying advice for older ones. All figures come from the ${h.site.name} catalogue and include shipping, KRA duty, clearing and registration.</p>
${cta('Want a G-Wagon of a specific year?', 'Tell us the year, engine and colour.', 'Hi Elisa Motors, I want a G-Wagon of a specific year. Please send options.')}

<h2>G-Wagon price list in Kenya (${YEAR})</h2>
${table([G], 'Mercedes G-Class landed prices in Kenya')}

<h2>Old shape vs new shape G-Wagon</h2>
<p>The <b>old shape G-Wagon</b> (W463) ran until 2018. It has the classic narrow body, older electronics and a harsher ride. In contrast, the new W463A arrived in 2018 for the 2019 model year. It looks similar but is wider, safer, quieter and much more modern inside.</p>
<p>The <b>new shape differences</b> include independent front suspension, a larger cabin, digital dashboards and far better safety systems. As a result, new-shape cars cost much more. In ${YEAR}, every importable G-Wagon is a new shape. Read our <a href="/blog/g-wagon-price-in-kenya/">G-Wagon price guide</a> for full details.</p>

<h2>G-Wagon price in Kenya by year</h2>
${years(2013).map((y) => `<h3>G-Wagon ${y} price in Kenya</h3>\n${gy(y)}`).join('\n')}

<h2>G-Wagon 2018 vs 2019 price in Kenya</h2>
<p>This is the most important comparison. A 2018 car may be the last old shape or the first new shape, depending on its build date. Meanwhile, almost every 2019 car is a new shape. The 2019 car is also ${MIN_YEAR <= 2019 ? 'importable in ' + YEAR + ', while the 2018 car is not' : 'newer and easier to resell'}.</p>
<p>Therefore, a 2019 car costs noticeably more, but it is a far better car. If budget allows, choose the 2019. If not, buy a 2018 only after confirming its chassis code and history.</p>

<h2>Best year to import a G-Wagon to Kenya</h2>
<p>For value, the best year is ${MIN_YEAR} or ${MIN_YEAR + 1}. These are the cheapest new-shape cars you can import, and they still have years of resale life. For longevity, choose ${MIN_YEAR + 2}–2023. These cars stay importable and easy to sell for longer.</p>
<p>Finally, choose 2024 or newer if you want the facelift with the latest screens and mild-hybrid engines. These cost the most, but they are the closest to a new car.</p>

<h2>G-Wagon price trend in Kenya: will prices drop?</h2>
<p>G-Wagon prices in Kenya rarely fall far. Demand is strong, supply is limited and the car holds its value well worldwide. However, three things can move prices. First, the shilling's exchange rate against the pound, yen and dollar. Second, changes to KRA's CRSP values. Third, the yearly shift of the 8-year window.</p>
<p>Each January, the oldest importable year drops out. Consequently, the cheapest importable G-Wagon becomes one year newer, and the entry price rises. If you want the cheapest new shape, buy before the window moves. Read our <a href="/blog/g-wagon-import-duty-crsp-kenya/">G-Wagon duty and CRSP guide</a> to see how tax affects price.</p>

<h2>Our services: G-Wagon imports by year</h2>
<h3>1. Year and spec sourcing</h3>
<p>We search the UK, Japan and other markets for the year, engine and colour you want. In addition, we confirm whether each car is a genuine AMG or a converted body kit.</p>
<h3>2. History and mileage checks</h3>
<p>We verify service history, mileage and registration date before buying. Therefore, the car you approve is the car that arrives.</p>
<h3>3. All-inclusive quotes</h3>
<p>One KSh figure covers the car, shipping, duty, clearing and registration. As a result, comparing a ${MIN_YEAR} G400d and a 2022 G63 is easy.</p>
<h3>4. Delivery across Kenya</h3>
<p>We clear the car at Mombasa and deliver it to Nairobi or any county.</p>

${cta('Comparing G-Wagon years?', 'We will quote two years side by side.', 'Hi Elisa Motors, please compare two G-Wagon years for me.')}

<h2>How to order a G-Wagon</h2>
<p>Open our ${c(G, 'Mercedes-Benz G-Class page')}, pick a version and tap "Order this spec". Alternatively, use the order form on this page. Call ${telA()} or WhatsApp ${waA('Hi Elisa Motors, I want a G-Wagon price by year.')}. Read also our <a href="/blog/mercedes-g63-amg-price-in-kenya/">G63 AMG price guide</a>.</p>
`,
    faq: [
      ['What is the oldest G-Wagon I can import in ' + YEAR + '?', `The oldest importable G-Wagon in ${YEAR} is one first registered in ${MIN_YEAR}. In practice, all importable G-Wagons are the new-shape W463A.`],
      ['How much is a 2019 G-Wagon in Kenya?', `${MIN_YEAR <= 2019 ? `A 2019 G-Wagon lands at about ${P(G, 'g400d')} for a G400d and ${P(G, 'g63-amg')} for a G63 AMG, near the lower end of each band.` : 'A 2019 G-Wagon is now outside the import window and only trades locally.'}`],
      ['What is the difference between the old and new shape G-Wagon?', 'The new shape (from 2018) is wider, with independent front suspension, a modern digital cabin and better safety. The old shape has a narrower body, older electronics and a firmer ride.'],
      ['Will G-Wagon prices drop in Kenya?', 'Unlikely by much. Demand is strong and the car holds its value. Exchange rates and CRSP changes can move prices slightly, and the entry price rises each year as the 8-year window moves.'],
      ['What is the best year to import a G-Wagon?', `${MIN_YEAR} or ${MIN_YEAR + 1} for value, ${MIN_YEAR + 2}–2023 for longer resale life, and 2024 or newer for the latest facelift.`],
    ],
  };
};
