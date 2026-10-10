export default (h) => {
  const { YEAR, MIN_YEAR, P, F, T, c, v, cta, table, telA, waA } = h;
  const pos = (y, from, to) => (to <= from ? 'upper end' : (y - from) / (to - from) < 0.34 ? 'lower end' : (y - from) / (to - from) < 0.67 ? 'middle' : 'upper end');
  const years = (from) => Array.from({ length: YEAR - from + 1 }, (_, i) => from + i);
  const lc200 = (y) => y < MIN_YEAR ? [
    `<p>A ${y} Toyota V8 is a Land Cruiser 200${y >= 2016 ? ' with the 2015/2016 facelift' : y >= 2012 ? ' with the 2012 facelift' : ''}. It is ${YEAR - y} years old, so it cannot be imported in ${YEAR}. As a result, every ${y} V8 for sale is a locally used car. Prices swing widely with mileage, condition and whether the car has worked as a company or NGO vehicle.</p>`,
    `<p>The ${y} Land Cruiser V8 is only available on the Kenyan used market, because the 8-year rule now starts at ${MIN_YEAR}. ${y >= 2016 ? 'It has the facelift look that many buyers still love.' : 'It has the older pre-2016 face, which some owners upgrade with facelift kits.'} Check the mileage carefully, since high-mileage V8s are often "freshened up" before sale.</p>`,
    `<p>You will only find a ${y} Toyota V8 locally. Before you buy one, compare it with a ${MIN_YEAR} import. A ${y} car may cost less upfront. However, injectors, turbos and suspension parts on a tired 1VD diesel add up quickly.</p>`,
  ][y % 3]
    : `<p>A ${y} Toyota V8 is ${y === 2021 ? 'one of the last' : 'a late'} Land Cruiser 200 with the facelift styling. It lands at the ${pos(y, MIN_YEAR, 2021)} of each band: about <b>${P('toyota-land-cruiser-200', 'gx-r-4-5-v8-diesel')}</b> for the ${v('toyota-land-cruiser-200', 'gx-r-4-5-v8-diesel', 'GX-R 4.5 V8 diesel')}, <b>${P('toyota-land-cruiser-200', 'vx-4-5-v8-diesel')}</b> for the ${v('toyota-land-cruiser-200', 'vx-4-5-v8-diesel', 'VX 4.5 V8 diesel')} and <b>${P('toyota-land-cruiser-200', 'zx-4-6-v8-petrol')}</b> for the ${v('toyota-land-cruiser-200', 'zx-4-6-v8-petrol', 'ZX 4.6 V8 petrol')}. ${y === MIN_YEAR ? `This is the oldest V8 you can import in ${YEAR}, so it is the cheapest fresh-import Land Cruiser V8.` : y === 2021 ? 'Production of the LC200 ended in 2021, so these final cars hold their value very well.' : 'Most of these cars have Toyota Safety Sense and the latest multimedia of the LC200 era.'}</p>`;
  const lc300 = (y) => `<p>A ${y} Land Cruiser is the LC300, which most Kenyans still call "the new V8" even though it uses a twin-turbo V6. It lands at about <b>${P('toyota-land-cruiser-300', 'vx-3-3-twin-turbo-diesel')}</b> for the ${v('toyota-land-cruiser-300', 'vx-3-3-twin-turbo-diesel', 'VX 3.3 diesel')} and <b>${P('toyota-land-cruiser-300', 'zx-3-3-twin-turbo-diesel')}</b> for the ${v('toyota-land-cruiser-300', 'zx-3-3-twin-turbo-diesel', 'ZX 3.3 diesel')}. ${y} cars sit at the ${pos(y, 2022, YEAR)} of each band. ${y >= YEAR - 1 ? 'Nearly new cars sell close to showroom money, so compare them with a slightly older unit.' : ''}</p>`;
  return {
    slug: 'toyota-v8-price-by-year-kenya',
    keyword: 'Toyota V8 price by year in Kenya',
    tag: 'Price guide',
    cluster: 'Toyota Land Cruiser',
    crumb: 'Toyota V8 price by year',
    title: `Toyota V8 Price in Kenya by Year (2012–${YEAR}): LC200 & LC300`,
    description: `Toyota Land Cruiser V8 prices in Kenya by year, 2012 to ${YEAR}. Which years you can import under the 8-year rule and landed costs in KSh for LC200 and LC300.`,
    h1: `Toyota V8 Price in Kenya by Year: Land Cruiser 200 and 300 from 2012 to ${YEAR}`,
    excerpt: `Year-by-year Toyota Land Cruiser V8 prices in Kenya, which model years are importable in ${YEAR}, and how to value an older locally used V8.`,
    published: '2026-10-10',
    updated: '2026-10-10',
    cars: ['toyota-land-cruiser-200', 'toyota-land-cruiser-300', 'toyota-land-cruiser-250', 'toyota-land-cruiser-prado'],
    html: `
<p>In Kenya, "V8" means one car: the Toyota Land Cruiser. Buyers search for a <b>Toyota V8 2016 price in Kenya</b>, a <b>V8 2019 price</b> or a <b>2022 V8</b>. Each year has a different value. More importantly, the year decides whether you can import the car or must buy it locally.</p>
<p>In ${YEAR}, the KEBS 8-year rule admits cars first registered in ${MIN_YEAR} or later. Therefore, this guide gives landed prices for importable years and honest buying advice for older ones. All prices come from the ${h.site.name} catalogue and include shipping, KRA duty, clearing and registration.</p>
${cta('Looking for a specific V8 year?', 'Tell us the year, grade and budget.', 'Hi Elisa Motors, I want a Toyota V8 of a specific year. Please send options.')}

<h2>Toyota V8 price list in Kenya (${YEAR})</h2>
${table(['toyota-land-cruiser-200', 'toyota-land-cruiser-300'], 'Toyota Land Cruiser V8 landed prices in Kenya')}
<p>The oldest importable year sits at the lower end of each band, and the newest cars at the upper end. Mileage, grade and options move the price within the band.</p>

<h2>Which Toyota V8 years can you import in ${YEAR}?</h2>
<p>You can import a Land Cruiser first registered in <b>${MIN_YEAR} or later</b>. For the LC200, that means ${MIN_YEAR} to 2021 cars. For the LC300, every year qualifies, because it arrived in late 2021. In ${YEAR + 1}, the window moves to ${MIN_YEAR + 1}. Consequently, ${MIN_YEAR} V8s must be shipped this year. See our <a href="/blog/kenya-8-year-rule-car-import/">8-year rule guide</a>.</p>

<h2>Land Cruiser 200 (V8) price in Kenya by year</h2>
${years(2012).filter((y) => y <= 2021).map((y) => `<h3>Toyota V8 ${y} price in Kenya</h3>\n${lc200(y)}`).join('\n')}

<h2>Land Cruiser 300 price in Kenya by year</h2>
<p>The LC300 replaced the LC200 in late 2021. It drops the V8 for a 3.3 twin-turbo diesel V6 and a 3.5 twin-turbo petrol V6. However, Kenyans still call it the new V8.</p>
${years(2022).map((y) => `<h3>Land Cruiser V8 ${y} price in Kenya</h3>\n${lc300(y)}`).join('\n')}

<h2>Toyota V8 by grade and year</h2>
<h3>Land Cruiser V8 ZX 2019 price in Kenya</h3>
<p>A ${MIN_YEAR <= 2019 ? 'importable' : 'locally used'} 2019 ZX is the luxury LC200, with 20-inch wheels, adaptive suspension and a premium cabin. ${MIN_YEAR <= 2019 ? `It lands at about <b>${P('toyota-land-cruiser-200', 'zx-4-6-v8-petrol')}</b>, near the lower end of the band.` : 'It now only trades locally.'} Most ZX models in Japan use the 4.6 petrol V8, while UK and Middle East cars may be diesel.</p>
<h3>Land Cruiser V8 VX 2018 price in Kenya</h3>
<p>A 2018 VX cannot be imported in ${YEAR}. It is therefore a local-market car, and its price depends on mileage and condition. If your budget fits a 2018 VX, compare it with a ${MIN_YEAR} ${v('toyota-land-cruiser-200', 'vx-4-5-v8-diesel', 'VX 4.5 diesel')}, which lands at about <b>${P('toyota-land-cruiser-200', 'vx-4-5-v8-diesel')}</b>.</p>
<h3>Land Cruiser V8 2016 facelift price</h3>
<p>The 2015/2016 facelift gave the LC200 its sharper headlights, new grille and updated cabin. Many owners of older V8s fit "2016 facelift" or "upgrade to 2020" body kits to copy that look. A genuine 2016 car, however, is a local-market vehicle in ${YEAR}. Therefore, check the chassis plate to confirm the real year, since a facelift kit can hide an older car.</p>
<p>Learn more about each grade in our <a href="/blog/toyota-land-cruiser-200-price-in-kenya/">Land Cruiser 200 guide</a> and our <a href="/blog/toyota-land-cruiser-300-price-in-kenya/">Land Cruiser 300 guide</a>.</p>

<h2>Toyota V8 2012, 2013 and 2014: the local market</h2>
<p>Older V8s still sell fast in Kenya. A clean <b>2013 or 2014 Toyota Land Cruiser V8</b> remains a status car upcountry. However, these cars are well over the 8-year limit. As a result, they are all locally used, and many have done 250,000 km or more.</p>
<p>When you value one, look for these signs. First, oil leaks and smoke from the 1VD diesel. Second, worn suspension bushes and steering parts. Third, a mismatch between the odometer and the wear on pedals, seats and the steering wheel. Read our <a href="/blog/toyota-v8-fuel-consumption-maintenance-kenya/">V8 maintenance guide</a> before buying.</p>

<h2>Why the year matters so much for V8 prices</h2>
<p>The Land Cruiser holds its value better than almost any car in Kenya. Even so, each year shifts the price. Newer cars cost more in Japan or the UK, and they pay more duty because KRA's depreciation allowance is smaller. In return, they stay inside the import window longer, which supports resale.</p>
<p>For most buyers, a ${MIN_YEAR + 1} to 2021 LC200 is the best value. It has the final facelift, proven engines and strong resale. Meanwhile, a 2022 or newer LC300 suits buyers who want the latest technology and safety systems.</p>

<h2>Our services: Toyota V8 imports by year</h2>
<h3>1. Year-specific sourcing</h3>
<p>We search Japanese auctions, UK dealers and South African stock for the exact year and grade you want. In addition, we show nearby years so you can compare value.</p>
<h3>2. Registration date and mileage checks</h3>
<p>We verify the export certificate, auction sheet and mileage history before buying. Consequently, you never pay for a car that fails at Mombasa. Read our <a href="/blog/check-mileage-japanese-cars-kenya/">mileage check guide</a>.</p>
<h3>3. One all-inclusive KSh quote</h3>
<p>Our quote covers the car, shipping, duty, clearing and registration. Therefore, comparing a ${MIN_YEAR} VX with a 2021 VX takes seconds.</p>
<h3>4. Shipping, clearing and delivery</h3>
<p>We ship to Mombasa, clear the car and deliver it anywhere in Kenya. See our <a href="/blog/land-cruiser-v8-import-duty-kenya/">V8 import duty guide</a> for the tax breakdown.</p>

${cta('Comparing two V8 years?', 'We will quote both side by side.', 'Hi Elisa Motors, please compare two Toyota V8 years for me.')}

<h2>How to order a Toyota V8</h2>
<p>Choose a version on our ${c('toyota-land-cruiser-200', 'Land Cruiser 200')} or ${c('toyota-land-cruiser-300', 'Land Cruiser 300')} page and tap "Order this spec". Alternatively, use the order form on this page. Call ${telA()} or WhatsApp ${waA('Hi Elisa Motors, I want a Toyota V8 price by year.')}. For the full picture, read our <a href="/blog/toyota-land-cruiser-v8-price-in-kenya/">Toyota V8 price guide</a>.</p>
`,
    faq: [
      ['What is the oldest Toyota V8 I can import in ' + YEAR + '?', `The oldest importable Land Cruiser V8 in ${YEAR} is one first registered in ${MIN_YEAR}. Older cars fail the KEBS 8-year rule.`],
      ['How much is a 2019 Toyota V8 in Kenya?', `${MIN_YEAR <= 2019 ? `A 2019 Land Cruiser 200 lands at about ${P('toyota-land-cruiser-200', 'vx-4-5-v8-diesel')} for the VX diesel, near the lower end of the band.` : 'A 2019 Land Cruiser 200 is now outside the import window, so it only trades locally.'}`],
      ['Can I import a 2016 or 2017 Toyota V8?', `No. In ${YEAR}, only cars registered in ${MIN_YEAR} or later can be imported. A 2016 or 2017 V8 must be bought locally.`],
      ['How much is the new V8 (LC300) in Kenya?', `The Land Cruiser 300 lands from about ${F('toyota-land-cruiser-300')} to ${T('toyota-land-cruiser-300')}, depending on grade and year.`],
      ['Which Toyota V8 year is the best value?', `A ${MIN_YEAR + 1}–2021 Land Cruiser 200 offers the best balance of price, proven engines and resale value. Choose an LC300 if you want the newest technology.`],
    ],
  };
};
