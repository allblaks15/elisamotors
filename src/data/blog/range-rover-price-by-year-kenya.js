export default (h) => {
  const { YEAR, MIN_YEAR, P, F, T, c, v, cta, table, telA, waA } = h;
  // Where a model year sits inside a version's landed price band
  const pos = (y, from, to) => (to <= from ? 'upper end' : (y - from) / (to - from) < 0.34 ? 'lower end' : (y - from) / (to - from) < 0.67 ? 'middle' : 'upper end');
  const old = (name, y, gen) => [
    `<p>A ${y} ${name} (${gen}) cannot be imported to Kenya in ${YEAR}, because the KEBS 8-year rule only admits cars first registered in ${MIN_YEAR} or later. Every ${y} unit is therefore already in the country, on Jiji, in a yard or with a private seller. Its price depends on condition, mileage and history far more than on the year.</p>`,
    `<p>The ${y} ${name} is a local-market car only. It is ${YEAR - y} years old, so it fails the import age limit. Asking prices vary widely, and a cheap one often hides suspension, cooling or electrical work. Therefore, insist on a specialist inspection and the full service record before paying.</p>`,
    `<p>You will only find a ${y} ${name} (${gen}) on the Kenyan used market. Compare it with a ${MIN_YEAR} import before you decide. In fact, the price gap often shrinks once you add the repairs an older car needs in its first year.</p>`,
  ][y % 3];
  const years = (from) => Array.from({ length: YEAR - from + 1 }, (_, i) => from + i);
  const sport = (y) => y < MIN_YEAR ? old('Range Rover Sport', y, 'L494')
    : y <= 2022 ? `<p>A ${y} Range Rover Sport is the L494 generation. It sits at the ${pos(y, MIN_YEAR, 2022)} of the L494 band: about <b>${P('land-rover-range-rover-sport', 'hse-3-0-sdv6')}</b> for the ${v('land-rover-range-rover-sport', 'hse-3-0-sdv6', 'HSE 3.0 SDV6 diesel')} and <b>${P('land-rover-range-rover-sport', 'hse-dynamic-p400')}</b> for the ${v('land-rover-range-rover-sport', 'hse-dynamic-p400', 'HSE Dynamic P400 petrol')}. ${y >= 2021 ? 'From 2021, most cars use the newer Ingenium six-cylinder engines (D250, D300, P400), which are smoother and more efficient.' : 'These cars mostly use the SDV6 and SDV8 diesels or the supercharged V6 and V8 petrols.'} ${y === MIN_YEAR ? `This is the oldest year you can import in ${YEAR}, so it is the cheapest legal way into a fresh-import Sport.` : ''}</p>`
    : `<p>A ${y} Range Rover Sport is the new-shape L461. It costs about <b>${P('land-rover-range-rover-sport', 'autobiography-d350-l461')}</b> for the ${v('land-rover-range-rover-sport', 'autobiography-d350-l461', 'Autobiography D350')}, with ${y >= YEAR - 1 ? 'nearly new cars at the very top of that band' : `${y} cars at the ${pos(y, 2023, YEAR)} of that band`}. Lower SE and Dynamic SE trims cost less, while the SV and P550e plug-in hybrid cost more.</p>`;
  const vogue = (y) => y < MIN_YEAR ? old('Range Rover Vogue', y, 'L405')
    : y <= 2021 ? `<p>A ${y} full-size Range Rover is the L405 generation. The ${v('land-rover-range-rover-vogue', 'vogue-4-4-sdv8', 'Vogue 4.4 SDV8')} lands at about <b>${P('land-rover-range-rover-vogue', 'vogue-4-4-sdv8')}</b>, and ${y} cars sit at the ${pos(y, MIN_YEAR, 2021)} of that range. The ${v('land-rover-range-rover-vogue', 'vogue-p400e-plug-in-hybrid', 'P400e plug-in hybrid')} costs <b>${P('land-rover-range-rover-vogue', 'vogue-p400e-plug-in-hybrid')}</b>. ${y >= 2020 ? 'From 2020, the D300 and D350 six-cylinder diesels replaced the SDV6 in many markets.' : ''}</p>`
    : `<p>A ${y} Range Rover is the new-shape L460. The ${v('land-rover-range-rover-vogue', 'range-rover-d350-hse-l460-2022', 'D350 HSE')} lands at about <b>${P('land-rover-range-rover-vogue', 'range-rover-d350-hse-l460-2022')}</b>, while the ${v('land-rover-range-rover-vogue', 'range-rover-p530-autobiography-v8-l460', 'P530 Autobiography V8')} reaches <b>${P('land-rover-range-rover-vogue', 'range-rover-p530-autobiography-v8-l460')}</b>. ${y} cars sit at the ${pos(y, 2022, YEAR)} of each band. Long-wheelbase (LWB) and SV versions cost more again.</p>`;
  const velar = (y) => y < MIN_YEAR ? (y < 2017 ? `<p>There is no ${y} Range Rover Velar. The Velar was launched in 2017, so the first cars on Kenyan roads are 2017 models, and none of those can be imported in ${YEAR}.</p>` : old('Range Rover Velar', y, 'first-year production'))
    : `<p>A ${y} Range Rover Velar costs about <b>${P('land-rover-range-rover-velar', 'd200-r-dynamic-se')}</b> for the ${v('land-rover-range-rover-velar', 'd200-r-dynamic-se', 'D200 R-Dynamic SE')} and <b>${P('land-rover-range-rover-velar', 'p400-hse')}</b> for the ${v('land-rover-range-rover-velar', 'p400-hse', 'P400 HSE')}. ${y} cars sit at the ${pos(y, MIN_YEAR, YEAR)} of each band. ${y >= 2023 ? 'Cars from late 2023 onwards have the facelift with the larger Pivi Pro screen and fewer physical buttons.' : y >= 2021 ? 'From 2021, the Velar gained the faster Pivi Pro infotainment system, which is worth looking for.' : 'Early cars use the older Touch Pro Duo system, which is slower but works well.'}</p>`;
  const evoque = (y) => y < MIN_YEAR ? old('Range Rover Evoque', y, y <= 2018 ? 'first generation, L538' : 'second generation')
    : `<p>A ${y} Range Rover Evoque is the second generation (L551). It lands at about <b>${P('land-rover-range-rover-evoque', 'd180-se')}</b> for the ${v('land-rover-range-rover-evoque', 'd180-se', 'D180 SE')} and <b>${P('land-rover-range-rover-evoque', 'p250-r-dynamic')}</b> for the ${v('land-rover-range-rover-evoque', 'p250-r-dynamic', 'P250 R-Dynamic')}. ${y} cars sit at the ${pos(y, MIN_YEAR, YEAR)} of each band. ${y === MIN_YEAR ? 'Most 2019 cars have the mild-hybrid diesel engine, which helps in Nairobi traffic.' : ''}</p>`;
  return {
    slug: 'range-rover-price-by-year-kenya',
    keyword: 'Range Rover price by year in Kenya',
    tag: 'Price guide',
    cluster: 'Range Rover & Land Rover',
    crumb: 'Range Rover price by year',
    title: `Range Rover Price in Kenya by Year (2014–${YEAR}): Sport, Vogue`,
    description: `Range Rover prices in Kenya by year, 2014 to ${YEAR}: Sport, Vogue, Velar and Evoque. Which years you can import under the 8-year rule and the cost in KSh.`,
    h1: `Range Rover Price in Kenya by Year: Sport, Vogue, Velar and Evoque from 2014 to ${YEAR}`,
    excerpt: `Year-by-year Range Rover prices in Kenya shillings, which model years are importable in ${YEAR}, and how to value an older locally used car.`,
    published: '2026-10-10',
    updated: '2026-10-10',
    cars: ['land-rover-range-rover-sport', 'land-rover-range-rover-vogue', 'land-rover-range-rover-velar', 'land-rover-range-rover-evoque'],
    html: `
<p>Kenyan buyers rarely search for "a Range Rover". Instead, they search for a <b>Range Rover Sport 2018 price in Kenya</b> or a <b>Range Rover Vogue 2019 price</b>. The model year changes the price more than almost anything else. It also decides whether you can import the car at all.</p>
<p>In ${YEAR}, the KEBS 8-year rule allows imports first registered in ${MIN_YEAR} or later. Therefore, this guide splits every model into two groups. First, the importable years, where we quote landed prices in Kenya shillings. Second, the older years, which only exist on the local market.</p>
<p>All prices below are indicative landed figures from the ${h.site.name} catalogue. They include shipping to Mombasa, KRA duty, clearing and NTSA registration. In addition, every price links to a full specification page.</p>
${cta('Know the year you want?', 'Tell us the model, year and budget and we will send matching cars.', 'Hi Elisa Motors, I want a Range Rover of a specific year. Please send options.')}

<h2>Range Rover price list in Kenya (${YEAR})</h2>
<p>Start with the full price table. Then use the year-by-year sections to see where a given year falls inside each band.</p>
${table(['land-rover-range-rover-evoque', 'land-rover-range-rover-velar', 'land-rover-range-rover-sport', 'land-rover-range-rover-vogue'], 'Range Rover landed prices in Kenya by version')}
<p>As a rule, the oldest importable year sits at the lower end of each band. The newest cars sit at the upper end. Mileage, colour and options then move the price within that band.</p>

<h2>Which Range Rover years can you import in ${YEAR}?</h2>
<p>You can import any Range Rover first registered in <b>${MIN_YEAR} or later</b>. The date that counts is the first registration, not the model year badge. For example, a car built in late ${MIN_YEAR - 1} but first registered in January ${MIN_YEAR} can qualify. However, KEBS checks the documents carefully, so we confirm the date before buying.</p>
<p>The window moves every January. In ${YEAR + 1}, ${MIN_YEAR} cars drop out and the cut-off becomes ${MIN_YEAR + 1}. Consequently, if you want the cheapest importable year, buy before the end of ${YEAR}. Read our <a href="/blog/kenya-8-year-rule-car-import/">8-year rule guide</a> for the details.</p>

<h2>Range Rover Sport price in Kenya by year</h2>
${years(2014).map((y) => `<h3>Range Rover Sport ${y} price in Kenya</h3>\n${sport(y)}`).join('\n')}

<h2>Range Rover Vogue price in Kenya by year</h2>
<p>Most Kenyans call the full-size Range Rover the "Vogue", although Vogue was originally a trim name. Here is how each year prices out.</p>
${years(2015).map((y) => `<h3>Range Rover Vogue ${y} price in Kenya</h3>\n${vogue(y)}`).join('\n')}

<h2>Range Rover Velar price in Kenya by year</h2>
${years(2017).map((y) => `<h3>Range Rover Velar ${y} price in Kenya</h3>\n${velar(y)}`).join('\n')}

<h2>Range Rover Evoque price in Kenya by year</h2>
${years(2016).map((y) => `<h3>Range Rover Evoque ${y} price in Kenya</h3>\n${evoque(y)}`).join('\n')}

<h2>Range Rover 2015, 2016 and 2017 prices: the local market</h2>
<p>Searches for a <b>Range Rover 2015 price in Kenya</b>, a 2016 or a 2017 are very common. These cars look like bargains next to a fresh import. However, they all predate the 8-year window. As a result, they are only sold locally, and many have high mileage.</p>
<p>When you value one, start from its condition, not its year. Check the air suspension, the timing chain on SDV6 and SDV8 diesels, the cooling system and every electronic feature. Then ask for a full service history. If the seller cannot show it, assume big repairs are due. Read our <a href="/blog/range-rover-maintenance-cost-kenya/">Range Rover maintenance guide</a> before you buy.</p>
<p>A locally used ${MIN_YEAR - 2} car can easily need major repairs in its first year. In contrast, a ${MIN_YEAR} import arrives with verified mileage and history. Therefore, compare the total three-year cost, not just the asking price.</p>

<h2>New shape Range Rover price in Kenya (2022 onwards)</h2>
<p>The new-shape full-size Range Rover (L460) arrived in 2022, and the new Range Rover Sport (L461) followed shortly after. Both are a big step up in price. The ${v('land-rover-range-rover-vogue', 'range-rover-d350-hse-l460-2022', 'Range Rover D350 HSE')} lands at about <b>${P('land-rover-range-rover-vogue', 'range-rover-d350-hse-l460-2022')}</b>. Meanwhile, the ${v('land-rover-range-rover-sport', 'autobiography-d350-l461', 'Sport Autobiography D350')} costs <b>${P('land-rover-range-rover-sport', 'autobiography-d350-l461')}</b>.</p>
<p>So, what does the extra money buy? You get a cleaner design, a far better infotainment system, rear-wheel steering on many cars and quieter cabins. In addition, these cars are young enough to stay importable and resellable for years.</p>

<h2>Range Rover 2022, 2023 and 2024 prices in Kenya</h2>
<p>A <b>Range Rover 2022 price in Kenya</b> depends on which generation the car is. Early 2022 Sports are still L494, while later 2022 cars may be L461 models. Therefore, always check the chassis code. By contrast, 2023 and 2024 cars are almost all new-shape models, so they sit in the upper bands shown above.</p>
<p>Nearly new cars are often cheaper to import than to buy from a local showroom. They also come from the UK with remaining manufacturer warranty in some cases. We check warranty status on every UK car.</p>

<h2>Why the year matters so much for Range Rover prices</h2>
<p>Three things change with every year. First, the car's value in the export market. Second, KRA's depreciation allowance, which reduces the taxable value of older cars. Third, the remaining time the car stays inside the 8-year window, which affects resale.</p>
<p>Consequently, a newer car pays more duty but also holds its value better. For most buyers, a two- to four-year-old car is the best balance of price and resale. Read our <a href="/blog/kra-import-duty-calculator-kenya/">KRA duty calculator guide</a> to see how depreciation works.</p>

<h2>Our services: Range Rover imports by year and spec</h2>
<h3>1. Year-specific sourcing</h3>
<p>Tell us the exact year you want, and we search UK dealers, trade auctions and Japanese auctions for it. In addition, we show you the year above and below so you can compare value.</p>
<h3>2. Registration date checks</h3>
<p>We check the V5C logbook or Japanese export certificate before buying. As a result, you never pay for a car that fails the 8-year rule at Mombasa.</p>
<h3>3. All-inclusive landed quotes</h3>
<p>Our quote covers the car, shipping, duty, clearing and registration in one KSh figure. Therefore, comparing a ${MIN_YEAR} and a ${MIN_YEAR + 2} car takes seconds.</p>
<h3>4. Inspection and history</h3>
<p>We check MOT history, service records, fault codes and the air suspension. Moreover, we send photos and video before you approve.</p>
<h3>5. Shipping, clearing and delivery</h3>
<p>We ship to Mombasa, clear the car and deliver it to Nairobi or any county. Read our <a href="/blog/import-range-rover-from-uk-to-kenya/">Range Rover UK import guide</a> for the full process.</p>

${cta('Comparing two years?', 'We will quote both side by side.', 'Hi Elisa Motors, please compare two Range Rover years for me.')}

<h2>How to choose the right Range Rover year</h2>
<p>If budget is tight, choose the oldest importable year, ${MIN_YEAR}, with full history. If you plan to keep the car five years or more, choose ${MIN_YEAR + 2} or newer so it stays easy to sell. Finally, if you want the latest technology, go for a 2023 or newer new-shape car.</p>
<p>Not sure which model fits? Read our <a href="/blog/range-rover-price-in-kenya/">Range Rover price guide</a>, the <a href="/blog/range-rover-sport-price-in-kenya/">Range Rover Sport guide</a>, the <a href="/blog/range-rover-vogue-price-in-kenya/">Vogue guide</a>, the <a href="/blog/range-rover-velar-price-in-kenya/">Velar guide</a> and the <a href="/blog/range-rover-evoque-price-in-kenya/">Evoque guide</a>.</p>

<h2>How to order</h2>
<p>Pick a model on our ${c('land-rover-range-rover-sport', 'Range Rover Sport')}, ${c('land-rover-range-rover-vogue', 'Range Rover')}, ${c('land-rover-range-rover-velar', 'Velar')} or ${c('land-rover-range-rover-evoque', 'Evoque')} page, then tap "Order this spec". Alternatively, use the order form on this page. Call ${telA()} or WhatsApp ${waA('Hi Elisa Motors, I want a Range Rover price by year.')}.</p>
`,
    faq: [
      ['What is the oldest Range Rover I can import to Kenya in ' + YEAR + '?', `The oldest importable Range Rover in ${YEAR} is one first registered in ${MIN_YEAR}. Cars registered earlier fail the KEBS 8-year rule and cannot be cleared at Mombasa.`],
      ['How much is a Range Rover Sport 2019 in Kenya?', `A ${MIN_YEAR <= 2019 ? '2019 Range Rover Sport is importable and' : '2019 Range Rover Sport is no longer importable but'} lands at about ${P('land-rover-range-rover-sport', 'hse-3-0-sdv6')} for the HSE SDV6 diesel. It sits near the lower end of the L494 price band.`],
      ['Can I import a 2018 Range Rover to Kenya?', `No. In ${YEAR}, only cars first registered in ${MIN_YEAR} or later can be imported. A 2018 Range Rover can only be bought locally.`],
      ['How much is a new shape Range Rover in Kenya?', `A new-shape Range Rover (L460) lands from about ${P('land-rover-range-rover-vogue', 'range-rover-d350-hse-l460-2022')} for the D350 HSE, up to ${T('land-rover-range-rover-vogue')} for a P530 Autobiography.`],
      ['Are 2015 to 2017 Range Rovers a good buy in Kenya?', 'They can be, but only with full service history and a specialist inspection. They are outside the import window, so they are all locally used, and many need air suspension or engine work.'],
    ],
  };
};
