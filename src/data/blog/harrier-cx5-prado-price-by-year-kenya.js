export default (h) => {
  const { YEAR, MIN_YEAR, P, F, T, c, v, cta, table, telA, waA } = h;
  const HA = 'toyota-harrier', CX = 'mazda-cx-5', PR = 'toyota-land-cruiser-prado', L250 = 'toyota-land-cruiser-250';
  const pos = (y, from, to) => (to <= from ? 'upper end' : (y - from) / (to - from) < 0.34 ? 'lower end' : (y - from) / (to - from) < 0.67 ? 'middle' : 'upper end');
  const years = (from, to = YEAR) => Array.from({ length: to - from + 1 }, (_, i) => from + i);
  const local = (name, y, gen) => [
    `<p>A ${y} ${name} (${gen}) cannot be imported in ${YEAR}, because the 8-year rule starts at ${MIN_YEAR}. Therefore, every ${y} unit is locally used. Its price depends on mileage, condition and how it was used, for example as a private car or a ride-hailing vehicle.</p>`,
    `<p>The ${y} ${name} is a local-market car only. It is ${YEAR - y} years old, so it fails the import age limit. Before you buy, verify the mileage and get a mechanic's inspection, since odometer tampering is common on older ex-Japan cars.</p>`,
    `<p>You will only find a ${y} ${name} (${gen}) on the Kenyan used market, on Jiji, in yards or from private sellers. Compare its price with a ${MIN_YEAR} import first. Often, the import is the better long-term buy.</p>`,
  ][y % 3];
  const harrier = (y) => y < MIN_YEAR ? local('Toyota Harrier', y, 'XU60')
    : y <= 2019 ? `<p>A ${y} Toyota Harrier is the old-shape XU60. It is the cheapest Harrier you can import in ${YEAR}, and it usually lands below the new-shape bands shown in the table. However, it drops out of the import window in ${y + 8}, so buy soon if you want one. Look for the 2017 facelift features, such as sequential indicators and Toyota Safety Sense.</p>`
    : `<p>A ${y} Toyota Harrier is ${y === 2020 ? 'either a late XU60 or an early new-shape XU80, so check the chassis code' : 'the new-shape XU80'}. New-shape cars land at about <b>${P(HA, 'premium-2-0')}</b> for the ${v(HA, 'premium-2-0', 'Premium 2.0')}, <b>${P(HA, 'z-2-0-leather-package')}</b> for the ${v(HA, 'z-2-0-leather-package', 'Z Leather Package')} and <b>${P(HA, 'hybrid-z-2-5-e-four')}</b> for the ${v(HA, 'hybrid-z-2-5-e-four', 'Hybrid Z E-Four')}. ${y} cars sit at the ${pos(y, 2020, YEAR)} of each band.</p>`;
  const cx5 = (y) => y < MIN_YEAR ? local('Mazda CX-5', y, y <= 2016 ? 'KE' : 'KF')
    : `<p>A ${y} Mazda CX-5 is the second-generation KF${y >= 2022 ? ' with the 2022 facelift' : y >= 2021 ? ' with the 2021 update and larger screen' : ''}. It lands at about <b>${P(CX, '20s-2-0')}</b> for the ${v(CX, '20s-2-0', '20S 2.0 petrol')}, <b>${P(CX, '25s-l-package-4wd')}</b> for the ${v(CX, '25s-l-package-4wd', '25S L Package')} and <b>${P(CX, 'xd-2-2-diesel-4wd')}</b> for the ${v(CX, 'xd-2-2-diesel-4wd', 'XD 2.2 diesel')}. ${y} cars sit at the ${pos(y, MIN_YEAR, YEAR)} of each band.</p>`;
  const prado = (y) => y < MIN_YEAR ? local('Toyota Prado TX', y, y >= 2017 ? 'J150, 2017 facelift' : 'J150')
    : y <= 2023 ? `<p>A ${y} Toyota Prado is the J150 with the 2017 facelift${y >= 2021 ? ' and, on diesels, the stronger 204 hp 2.8 engine' : ''}. It lands at about <b>${P(PR, 'tx-2-7-petrol-5-seat')}</b> for the ${v(PR, 'tx-2-7-petrol-5-seat', 'TX 2.7 petrol')}, <b>${P(PR, 'tx-l-2-8-diesel')}</b> for the ${v(PR, 'tx-l-2-8-diesel', 'TX-L 2.8 diesel')} and <b>${P(PR, 'tz-g-2-8-diesel')}</b> for the ${v(PR, 'tz-g-2-8-diesel', 'TZ-G')}. ${y} cars sit at the ${pos(y, MIN_YEAR, 2023)} of each band.</p>`
    : `<p>A ${y} Prado is the all-new Land Cruiser 250 (J250). It lands at about <b>${P(L250, 'gx-2-8-diesel')}</b> for the ${v(L250, 'gx-2-8-diesel', 'GX 2.8 diesel')} and up to <b>${P(L250, 'zx-2-8-diesel')}</b> for the ${v(L250, 'zx-2-8-diesel', 'ZX')}. It is a much bigger step in price than any J150.</p>`;
  return {
    slug: 'harrier-cx5-prado-price-by-year-kenya',
    keyword: 'Harrier, CX-5 and Prado TX price by year in Kenya',
    tag: 'Price guide',
    cluster: 'SUVs & crossovers',
    crumb: 'Harrier, CX-5 & Prado price by year',
    title: `Harrier, CX-5 & Prado TX Price in Kenya by Year (2015–${YEAR})`,
    description: `Toyota Harrier, Mazda CX-5 and Prado TX prices in Kenya by year, 2015 to ${YEAR}. Which years you can import, landed costs in KSh and the ${YEAR} price trend.`,
    h1: `Toyota Harrier, Mazda CX-5 and Prado TX Price in Kenya by Year (2015 to ${YEAR})`,
    excerpt: `Year-by-year prices for Kenya's three favourite SUVs, which model years you can import in ${YEAR}, and where prices are heading.`,
    published: '2026-10-10',
    updated: '2026-10-10',
    cars: [HA, CX, PR, L250],
    html: `
<p>The Harrier, the CX-5 and the Prado TX are Kenya's most searched SUVs. Most buyers search by year: a <b>Toyota Harrier 2018 price in Kenya</b>, a <b>Mazda CX-5 2019 price</b> or a <b>Prado TX 2020 price</b>. The year changes the price a lot. Moreover, it decides whether you can import the car or must buy locally.</p>
<p>In ${YEAR}, the KEBS 8-year rule admits cars first registered in ${MIN_YEAR} or later. Therefore, this guide gives landed prices for importable years and buying advice for older years. All prices come from the ${h.site.name} catalogue and include shipping, KRA duty, clearing and NTSA registration.</p>
${cta('Know the year you want?', 'Tell us the model, year and budget.', 'Hi Elisa Motors, I want a Harrier, CX-5 or Prado of a specific year.')}

<h2>Harrier, CX-5 and Prado price list in Kenya (${YEAR})</h2>
${table([HA, CX, PR], 'Harrier, CX-5 and Prado landed prices in Kenya')}

<h2>Toyota Harrier price in Kenya by year</h2>
${years(2015).map((y) => `<h3>Toyota Harrier ${y} price in Kenya</h3>\n${harrier(y)}`).join('\n')}

<h2>Mazda CX-5 price in Kenya by year</h2>
${years(2015).map((y) => `<h3>Mazda CX-5 ${y} price in Kenya</h3>\n${cx5(y)}`).join('\n')}

<h2>Toyota Prado TX price in Kenya by year</h2>
${years(2015).map((y) => `<h3>Toyota Prado TX ${y} price in Kenya</h3>\n${prado(y)}`).join('\n')}

<h2>Toyota Prado TX 2015 facelift and 2016–2017 models</h2>
<p>Many buyers ask about the <b>Prado TX 2015 facelift</b>, the 2016 model and the 2017 model. The big change came in late 2017, when Toyota gave the J150 a new front end and an updated dashboard. Cars from 2015 and 2016 have the older face. Some owners upgrade them with "new face" kits.</p>
<p>All of these cars are outside the 8-year window in ${YEAR}. As a result, they are locally used, and their values depend on condition. Read our <a href="/blog/prado-tx-common-problems-kenya/">Prado TX common problems guide</a> before you buy one.</p>

<h2>Harrier 2015–2017 and CX-5 2015–2017 prices</h2>
<p>A <b>Toyota Harrier 2015, 2016 or 2017</b> and a <b>Mazda CX-5 2015 diesel</b> or <b>2016 petrol</b> are popular local buys. They cost much less than a fresh import. However, they are all locally used. Mileage can be hard to verify. Therefore, read our <a href="/blog/check-mileage-japanese-cars-kenya/">mileage check guide</a> and get a mechanic's inspection.</p>
<p>The <b>CX-5 2017 new shape</b> (the KF) arrived in Japan in early 2017. A 2017 KF is a good local buy with a modern cabin. Even so, it cannot be imported in ${YEAR}.</p>

<h2>Prado, Harrier and CX-5 prices for 2024</h2>
<p>A <b>2024 Toyota Prado</b> is the new Land Cruiser 250, a different and more expensive car. A <b>2024 Harrier</b> is a late XU80, often with the latest safety software. Meanwhile, a <b>2024 CX-5</b> is a late facelift KF. All three are nearly new. Consequently, they cost the most but will stay importable and easy to resell for years.</p>
<p>See our <a href="/blog/toyota-prado-price-in-kenya/">Prado price guide</a>, our <a href="/blog/toyota-harrier-price-in-kenya/">Harrier price guide</a> and our <a href="/blog/mazda-cx-5-price-in-kenya/">CX-5 price guide</a> for full grade details.</p>

<h2>Mazda CX-5 and Prado TX price trend in Kenya (${YEAR})</h2>
<p>Prices for all three cars follow the same pattern. Each January, the oldest importable year drops out, so the cheapest import becomes one year newer. As a result, entry prices tend to rise slightly every year.</p>
<p>Exchange rates also matter. A weaker shilling against the yen raises landed prices, while a stronger shilling lowers them. Finally, KRA's CRSP updates can move duty up or down. The Prado holds its value best, the Harrier is close behind, and the CX-5 offers the most car for the money. Read our <a href="/blog/kra-import-duty-calculator-kenya/">KRA duty calculator guide</a> to see how tax changes affect prices.</p>

<h2>Which year should you buy?</h2>
<p>For the lowest price, buy a ${MIN_YEAR} import before it drops out of the window. For longer resale life, buy a ${MIN_YEAR + 2}–2022 car. Finally, for the latest technology, buy a 2023 or newer model.</p>

<h2>Our services</h2>
<h3>1. Year-specific sourcing from Japan</h3>
<p>We search Japanese auctions for the exact year, grade and colour you want. In addition, we verify the auction sheet and mileage.</p>
<h3>2. One all-inclusive KSh quote</h3>
<p>Our quote covers the car, shipping, duty, clearing and registration. Therefore, comparing two years takes seconds.</p>
<h3>3. Clearing and delivery</h3>
<p>We clear the car at Mombasa and deliver it to Nairobi or any county. Read our <a href="/blog/import-cars-from-japan-to-kenya/">Japan import guide</a> for the full process.</p>

${cta('Comparing two years?', 'We will quote both side by side.', 'Hi Elisa Motors, please compare two model years for me.')}

<h2>How to order</h2>
<p>Pick a version on our ${c(HA, 'Toyota Harrier')}, ${c(CX, 'Mazda CX-5')} or ${c(PR, 'Toyota Prado')} page and tap "Order this spec". Alternatively, use the order form on this page. Call ${telA()} or WhatsApp ${waA('Hi Elisa Motors, I want a Harrier, CX-5 or Prado price by year.')}.</p>
`,
    faq: [
      ['Can I import a 2018 Harrier, CX-5 or Prado to Kenya in ' + YEAR + '?', `No. In ${YEAR}, only cars first registered in ${MIN_YEAR} or later can be imported. A 2018 car must be bought locally.`],
      ['How much is a 2019 Mazda CX-5 in Kenya?', `${MIN_YEAR <= 2019 ? `A 2019 CX-5 lands at about ${P(CX, '20s-2-0')} for a 20S petrol, near the lower end of the band.` : 'A 2019 CX-5 is now outside the import window and only trades locally.'}`],
      ['How much is a 2020 Toyota Prado TX in Kenya?', `A 2020 Prado TX lands at about ${P(PR, 'tx-2-7-petrol-5-seat')} for the 2.7 petrol and ${P(PR, 'tx-l-2-8-diesel')} for the TX-L diesel.`],
      ['Is the 2024 Prado the same as the old Prado TX?', 'No. From 2024, the Prado is the all-new Land Cruiser 250, which is larger, more modern and more expensive than the J150 Prado TX.'],
      ['Will Harrier, CX-5 and Prado prices drop in ' + YEAR + '?', 'Large drops are unlikely. Entry prices tend to rise slightly each year as the 8-year window moves. Exchange rates and CRSP updates can shift prices either way.'],
    ],
  };
};
