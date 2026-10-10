export default (h) => {
  const { YEAR, MIN_YEAR, P, c, v, cta, telA, waA } = h;
  return {
    slug: 'armoured-suv-price-kenya',
    keyword: 'armoured Toyota V8 and G-Wagon price in Kenya',
    tag: 'Buying guide',
    cluster: 'Toyota Land Cruiser',
    crumb: 'Armoured V8 & G-Wagon',
    title: `Armoured Toyota V8 & Bulletproof G-Wagon in Kenya (${YEAR})`,
    description: `Bulletproof Toyota V8, armoured Land Cruiser 300 and armoured G63 AMG in Kenya: protection levels, what armouring adds to the price, import rules and upkeep.`,
    h1: `Armoured and Bulletproof SUVs in Kenya: Toyota Land Cruiser V8, LC300 and Mercedes G-Wagon`,
    excerpt: `How armoured SUVs work, protection levels explained, what armouring adds to the cost of a V8 or G-Wagon, and what to know about importing and maintaining one in Kenya.`,
    published: '2026-10-10',
    updated: '2026-10-10',
    cars: ['toyota-land-cruiser-300', 'toyota-land-cruiser-200', 'mercedes-benz-g-class', 'lexus-lx'],
    html: `
<p>Embassies, NGOs, corporate security teams and high-profile individuals in Kenya use armoured vehicles. The Toyota Land Cruiser is the world's most common base for armouring, and the Mercedes G-Class is a popular premium choice. This guide explains how armoured SUVs work, what they cost and what to consider before importing one.</p>
${cta('Need an armoured vehicle?', 'We source factory-certified armoured SUVs on request.', 'Hi Elisa Motors, I need a quote for an armoured SUV.')}

<h2>What is an armoured SUV?</h2>
<p>An armoured SUV is a standard vehicle rebuilt by a specialist armourer. The armourer adds ballistic steel or composite panels inside the body, replaces the glass with thick multi-layer ballistic glass, and fits run-flat tyre inserts. In addition, the suspension, brakes and sometimes the hinges are upgraded to carry the extra weight.</p>

<h2>Protection levels explained</h2>
<p>Armoured vehicles are rated to recognised standards, such as the European CEN 1063 / EN 1522 scale (B4, B6, B7) and the VPAM scale (VR6, VR7 and above). As a rule, higher levels stop more powerful rounds but add more weight. For civilian use, B6 or VR6/VR7 is common. Always ask for the certificate from the armourer, not just a sticker.</p>

<h2>Bulletproof Toyota V8 price in Kenya</h2>
<p>An armoured Land Cruiser costs the price of the base car plus the cost of armouring. A standard ${v('toyota-land-cruiser-300', 'vx-3-3-twin-turbo-diesel', 'LC300 VX diesel')} lands at about <b>${P('toyota-land-cruiser-300', 'vx-3-3-twin-turbo-diesel')}</b>, and a ${v('toyota-land-cruiser-200', 'vx-4-5-v8-diesel', 'LC200 VX')} at <b>${P('toyota-land-cruiser-200', 'vx-4-5-v8-diesel')}</b>. Armouring can add a large sum on top, often comparable to or more than the car itself, depending on the level and the armourer.</p>
<p>Used armoured V8s from embassy or NGO fleets sometimes come up for sale. They can be good value. However, check the certificate, the age of the glass, the suspension condition and whether the car meets the 8-year rule.</p>

<h2>Armoured G63 AMG and bulletproof G-Wagon price</h2>
<p>The G-Class is armoured both by specialist firms and, on some models, through Mercedes-Benz's own Guard programme. A standard ${v('mercedes-benz-g-class', 'g63-amg', 'G63 AMG')} lands at about <b>${P('mercedes-benz-g-class', 'g63-amg')}</b> before armouring. An armoured G-Wagon is among the most expensive vehicles on Kenyan roads.</p>

<h2>Importing an armoured vehicle to Kenya</h2>
<p>Armoured vehicles face extra scrutiny. Beyond normal KRA duty and the KEBS 8-year rule (${MIN_YEAR} or newer in ${YEAR}), importers may need security clearances or permits from the relevant government authorities. Therefore, plan the paperwork early. KRA's valuation also considers the armouring, which can raise duty.</p>

<h2>Running an armoured SUV</h2>
<p>Armour adds hundreds of kilograms, sometimes over a tonne. As a result, fuel consumption rises, and brakes, suspension, tyres and wheel bearings wear faster. Ballistic glass can delaminate with age and heat. Moreover, doors are heavy, so hinges need regular checks. Use a garage with armoured-vehicle experience.</p>

<h2>Discreet protection: is armour the only option?</h2>
<p>Some buyers choose lighter protection, such as security film on glass, tracking, immobilisers and trained drivers. These are far cheaper. A security consultant can help you decide what level of protection you really need.</p>

<h2>Our services</h2>
<h3>1. Sourcing certified vehicles</h3>
<p>We source armoured SUVs with genuine certificates from reputable armourers.</p>
<h3>2. Base vehicle supply</h3>
<p>We can supply a standard Land Cruiser or G-Class for local or regional armouring.</p>
<h3>3. Documentation and clearing</h3>
<p>We handle import documents and clearing at Mombasa.</p>

${cta('Ready to discuss?', 'Tell us the base vehicle and protection level you need.', 'Hi Elisa Motors, I want to discuss an armoured vehicle import.')}

<h2>Talk to us</h2>
<p>Call ${telA()} or WhatsApp ${waA('Hi Elisa Motors, I want an armoured SUV quote.')}. Read our <a href="/blog/toyota-land-cruiser-300-price-in-kenya/">Land Cruiser 300 guide</a> and <a href="/blog/mercedes-g63-amg-price-in-kenya/">G63 AMG guide</a>.</p>
`,
    faq: [
      ['How much is a bulletproof Toyota V8 in Kenya?', `It costs the base car, about ${P('toyota-land-cruiser-300', 'vx-3-3-twin-turbo-diesel')} for an LC300 VX, plus armouring, which can cost as much as the car or more depending on the protection level.`],
      ['What protection level do I need?', 'For civilian use, B6 or VR6/VR7 is common. A security consultant can advise based on your risk.'],
      ['Can I import an armoured car to Kenya?', 'Yes, but expect extra scrutiny and possibly security permits, plus normal duty and the 8-year rule.'],
      ['Does armour affect fuel consumption?', 'Yes. Armour adds a lot of weight, so fuel use rises and brakes, suspension and tyres wear faster.'],
      ['Is the G-Wagon available armoured?', 'Yes. Specialist firms armour the G-Class, and Mercedes-Benz offers armoured versions of some models through its Guard programme.'],
    ],
  };
};
