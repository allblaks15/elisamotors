export default (h) => {
  const { YEAR, MIN_YEAR, P, F, T, c, v, cta, table, telA, waA } = h;
  const L2 = 'toyota-land-cruiser-200', L3 = 'toyota-land-cruiser-300';
  return {
    slug: 'land-cruiser-v8-grades-explained-kenya',
    keyword: 'Land Cruiser V8 grades explained: GX, AX, VX, ZX',
    tag: 'Buying guide',
    cluster: 'Toyota Land Cruiser',
    crumb: 'Land Cruiser V8 grades explained',
    title: `Land Cruiser V8 Grades Explained: GX, AX, VX, ZX, GR Sport Prices`,
    description: `Toyota Land Cruiser V8 grades explained: GX, AX, VX, ZX, Sahara, VXR, GR Sport and Executive Lounge, plus engines, dimensions and landed prices in Kenya.`,
    h1: `Toyota Land Cruiser V8 Grades Explained: GX, AX, VX, ZX, Sahara, VXR, GR Sport and Special Editions with Kenya Prices`,
    excerpt: `What each Land Cruiser V8 grade includes, the engines, size and weight, special editions and which grade gives Kenyan buyers the best value.`,
    published: '2026-10-10',
    updated: '2026-10-10',
    cars: [L2, L3, 'toyota-land-cruiser-70', 'lexus-lx'],
    html: `
<p>Every Toyota V8 has a grade badge: GX, AX, VX, ZX and more. The grade decides the equipment, the comfort and the price. Moreover, different export markets use different names, so a "Sahara" from the Middle East and a "ZX" from Japan can be very similar cars.</p>
<p>This guide explains every grade Kenyan buyers meet, with landed prices from the ${h.site.name} catalogue.</p>
${cta('Not sure which grade to choose?', 'Tell us how you will use the car and your budget.', 'Hi Elisa Motors, which Land Cruiser grade should I choose?')}

<h2>Land Cruiser V8 price list by grade (${YEAR})</h2>
${table([L2, L3], 'Land Cruiser landed prices in Kenya by grade')}

<h2>Land Cruiser 200 grades</h2>
<h3>Land Cruiser V8 GX price in Kenya</h3>
<p>GX (and GX-R) is the working grade. It has cloth seats, steel or simple alloy wheels and fewer electronics. NGOs, mining firms and government fleets love it because it is tough and simple. The ${v(L2, 'gx-r-4-5-v8-diesel', 'GX-R 4.5 V8 diesel')} lands at about <b>${P(L2, 'gx-r-4-5-v8-diesel')}</b>.</p>
<h3>Land Cruiser V8 AX price in Kenya</h3>
<p>AX is a Japanese-market grade between GX and VX. It adds alloys, better trim and more comfort features, while keeping the price down. AX cars are good value when you find one.</p>
<h3>Land Cruiser V8 VX price in Kenya</h3>
<p>VX is the most popular grade in Kenya. It has leather, a sunroof on many cars, power seats and better audio. The ${v(L2, 'vx-4-5-v8-diesel', 'VX 4.5 V8 diesel')} lands at about <b>${P(L2, 'vx-4-5-v8-diesel')}</b>. The Gulf-market <b>VXR</b> is a similar high grade, usually with a petrol V8 and extra features.</p>
<h3>Land Cruiser V8 ZX price in Kenya</h3>
<p>ZX is the Japanese luxury flagship, with 20-inch wheels, adaptive suspension, premium leather and every option. The ${v(L2, 'zx-4-6-v8-petrol', 'ZX 4.6 V8 petrol')} lands at about <b>${P(L2, 'zx-4-6-v8-petrol')}</b>. Some special-order ZX models were sold with extra trim packs, sometimes advertised as "ZX Horizon" or similar dealer names. Always check the actual options list.</p>
<h3>Land Cruiser V8 Sahara</h3>
<p>Sahara is the top grade in Australia and some export markets, roughly equal to the ZX in luxury. Sahara cars are usually diesel and well equipped for touring.</p>

<h2>Land Cruiser 300 grades</h2>
<p>The LC300 uses GX, AX, VX, ZX and GR Sport grades. The ${v(L3, 'gx-3-5-v6-petrol', 'GX 3.5 petrol')} lands at <b>${P(L3, 'gx-3-5-v6-petrol')}</b>, the ${v(L3, 'vx-3-3-twin-turbo-diesel', 'VX 3.3 diesel')} at <b>${P(L3, 'vx-3-3-twin-turbo-diesel')}</b> and the ${v(L3, 'zx-3-3-twin-turbo-diesel', 'ZX 3.3 diesel')} at <b>${P(L3, 'zx-3-3-twin-turbo-diesel')}</b>.</p>
<h3>Toyota Land Cruiser GR Sport price in Kenya</h3>
<p>The GR Sport is the off-road specialist. It has front and rear differential locks, the E-KDSS electronic stabiliser system and sporty styling. The ${v(L3, 'gr-sport-3-3-twin-turbo-diesel', 'LC300 GR Sport')} lands at about <b>${P(L3, 'gr-sport-3-3-twin-turbo-diesel')}</b>, at the top of the range.</p>
<h3>Land Cruiser Executive Lounge</h3>
<p>Executive Lounge is a luxury grade sold in some markets, with rear seat entertainment and upgraded rear comfort. It is rare in Kenya. We source it on request.</p>

<h2>Special editions: 70th Anniversary and Heritage Edition</h2>
<p>Toyota has released several special editions. The <b>70th Anniversary</b> edition marked 70 years of the Land Cruiser in 2021, with special badges and trim on certain grades and markets. The <b>Heritage Edition</b> was a US-market LC200 with retro styling. These cars are rare in Kenya and are priced on condition and history, usually above a standard car of the same grade.</p>

<h2>Engines: 1VD diesel, 1UR petrol and the LC300 V6</h2>
<h3>Toyota Land Cruiser 4.5 diesel (1VD-FTV)</h3>
<p>The 4.5 twin-turbo V8 diesel is the engine most Kenyans want. It has huge torque and long range. However, it needs clean fuel and timely injector service. Read our <a href="/blog/toyota-v8-fuel-consumption-maintenance-kenya/">V8 maintenance guide</a>.</p>
<h3>Toyota Land Cruiser 4.6 petrol (1UR-FE)</h3>
<p>The 4.6 V8 petrol is smooth and reliable, but thirstier. Most Japanese ZX cars use it.</p>
<h3>LC300: 3.3 twin-turbo diesel and 3.5 twin-turbo petrol</h3>
<p>The LC300 swaps V8s for twin-turbo V6s. The 3.3 diesel is more efficient than the old 4.5, with similar torque. As a result, many owners find it cheaper to run.</p>

<h2>Toyota V8 weight and dimensions</h2>
<p>The LC200 is roughly 4.95 m long, 1.98 m wide and 1.9 m tall, with a kerb weight of about 2.6–2.7 tonnes depending on grade. The LC300 is similar in size but around 200 kg lighter. Ground clearance is roughly 225–230 mm. Check exact figures for your grade, since wheels and options change them.</p>

<h2>Manual, single cab and double cab V8s</h2>
<p>Buyers sometimes search for a <b>manual V8</b>, a <b>single cab V8</b> or a <b>double cab V8</b>. These are Land Cruiser 70 Series models, which use the 4.5 V8 diesel (1VD) in many export markets. They are not the luxury 200 or 300. In Kenya, the ${c('toyota-land-cruiser-70', 'Land Cruiser 70')} is popular with safari operators and NGOs. Read our <a href="/blog/land-cruiser-70-series-price-in-kenya/">Land Cruiser 70 guide</a>.</p>

<h2>Which grade is best for Kenya?</h2>
<p>For value and resale, choose a VX diesel. For fleets and rough work, choose a GX. For luxury, choose a ZX. Finally, for serious off-road use, choose the LC300 GR Sport. In every case, make sure the car is first registered in ${MIN_YEAR} or later.</p>

<h2>Our services</h2>
<h3>1. Grade-matched sourcing</h3>
<p>We find the exact grade, engine and colour in Japan, the UK or other markets.</p>
<h3>2. Auction sheet and mileage verification</h3>
<p>We verify every car's auction sheet and mileage before purchase.</p>
<h3>3. One landed price</h3>
<p>Our quote includes shipping, duty, clearing and registration.</p>

${cta('Ready for a V8 quote?', 'Tell us the grade you want.', 'Hi Elisa Motors, I want a Land Cruiser quote for a specific grade.')}

<h2>Talk to us</h2>
<p>Call ${telA()} or WhatsApp ${waA('Hi Elisa Motors, I have a question about Land Cruiser grades.')}. Read our <a href="/blog/toyota-land-cruiser-v8-price-in-kenya/">Toyota V8 price guide</a> and <a href="/blog/toyota-v8-price-by-year-kenya/">V8 price by year</a>.</p>
`,
    faq: [
      ['What is the difference between Land Cruiser VX and ZX?', 'VX is the popular high grade with leather and comfort features. ZX is the Japanese luxury flagship with adaptive suspension, 20-inch wheels and every option.'],
      ['How much is a Land Cruiser V8 GX in Kenya?', `A Land Cruiser 200 GX-R 4.5 diesel lands at about ${P(L2, 'gx-r-4-5-v8-diesel')}.`],
      ['How much is the Land Cruiser GR Sport in Kenya?', `The LC300 GR Sport lands at about ${P(L3, 'gr-sport-3-3-twin-turbo-diesel')}.`],
      ['Is there a manual Toyota V8?', 'The luxury Land Cruiser 200 and 300 are automatic. Manual V8s are Land Cruiser 70 Series pickups and wagons with the 4.5 V8 diesel.'],
      ['How heavy is a Toyota V8?', 'An LC200 weighs roughly 2.6–2.7 tonnes depending on grade. The LC300 is around 200 kg lighter.'],
    ],
  };
};
