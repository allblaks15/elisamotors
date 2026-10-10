export default (h) => {
  const { YEAR, MIN_YEAR, P, c, v, cta, table, telA, waA } = h;
  return {
    slug: 'kra-crsp-valuation-kenya',
    keyword: 'KRA CRSP value for imported cars',
    tag: 'Duty guide',
    cluster: 'Import costs, duty & clearing',
    crumb: 'KRA CRSP values explained',
    title: `KRA CRSP Values Explained: How KRA Values Imported Cars (${YEAR})`,
    description: `How KRA's CRSP list values imported cars, CRSP for G-Wagon, Harrier, CX-5 and Prado, how much tax to clear at Mombasa, and how to appeal an overvaluation.`,
    h1: `KRA CRSP Values Explained: How KRA Values Your Car, How Much Tax You Pay at Mombasa and How to Appeal`,
    excerpt: `What the CRSP list is, how KRA turns it into a duty bill for a G-Wagon, Harrier, CX-5 or Prado, why your invoice price does not matter, and what to do if KRA overvalues your car.`,
    published: '2026-10-10',
    updated: '2026-10-10',
    cars: ['toyota-harrier', 'mazda-cx-5', 'toyota-land-cruiser-prado', 'mercedes-benz-g-class', 'land-rover-range-rover-sport'],
    html: `
<p>When you import a car, KRA does not tax what you paid for it. Instead, it taxes the car's value on the <b>Current Retail Selling Price (CRSP)</b> list. That single fact explains most "surprise" duty bills at Mombasa. Understand CRSP, and you understand your tax.</p>
${cta('Want an exact duty figure?', 'We look up the current CRSP for your exact model and year.', 'Hi Elisa Motors, please calculate the duty on a car for me.')}

<h2>What is the KRA CRSP list?</h2>
<p>The CRSP list is a schedule KRA publishes showing a reference retail value for thousands of vehicle models, by make, model, engine, body and sometimes grade. KRA updates it from time to time. Each entry represents the value of a new car of that type. KRA then reduces it for age to get the customs value of a used import.</p>

<h2>How KRA determines the value of an imported car</h2>
<p>The process works in steps. First, KRA finds the matching CRSP entry for your car. Second, it applies a depreciation allowance based on the car's age. Third, it calculates import duty, excise duty, VAT, the IDF and the RDL on that value. Read our <a href="/blog/kra-import-duty-calculator-kenya/">KRA duty calculator guide</a> for each step.</p>
<p>Because of this, two identical cars bought at very different prices usually pay the same duty. Similarly, a cheap auction win does not reduce your tax.</p>

<h2>CRSP codes for UK and Japan-specific models</h2>
<p>Many Japanese-market and UK-specific versions do not appear on the CRSP list under their exact names. In that case, KRA matches the closest equivalent, by engine size, body and grade. As a result, the choice of match can change the duty. An experienced clearing agent knows how KRA usually classifies each model.</p>

<h2>CRSP value for a G-Wagon and G63 AMG</h2>
<p>The G-Class has some of the highest CRSP values of any SUV in Kenya. The G63 AMG, with its 4.0 V8, also falls into the highest excise band. A ${v('mercedes-benz-g-class', 'g63-amg', 'G63 AMG')} lands at about <b>${P('mercedes-benz-g-class', 'g63-amg')}</b> all-in, and a large share of that is tax. Read our <a href="/blog/g-wagon-import-duty-crsp-kenya/">G-Wagon duty guide</a>.</p>

<h2>Target CRSP values for Harrier, CX-5 and Prado (2019 models)</h2>
<p>Buyers often search for the "target CRSP" for a 2019 Harrier, CX-5 or Prado. CRSP values change with each KRA update, so we always look up the current figure for your exact model before quoting. What matters most for your budget is the final landed price, which includes all of it.</p>

<h2>How much tax to clear a Harrier, CX-5 or Prado at Mombasa</h2>
<h3>How much tax to clear a Toyota Harrier at Mombasa</h3>
<p>The Harrier's 2.0 petrol falls in a lower excise band than larger engines, while the 2.5 hybrid sits in a higher capacity band. A ${v('toyota-harrier', 'premium-2-0', 'Harrier Premium 2.0')} lands at about <b>${P('toyota-harrier', 'premium-2-0')}</b>, with tax included.</p>
<h3>How much tax to clear a Mazda CX-5 at Mombasa port</h3>
<p>The 2.0 petrol CX-5 pays less excise than the 2.5 petrol. Diesel bands use different engine-size limits. A ${v('mazda-cx-5', '20s-2-0', 'CX-5 20S')} lands at about <b>${P('mazda-cx-5', '20s-2-0')}</b>.</p>
<h3>How much tax to clear a Toyota Prado TX at Mombasa</h3>
<p>The Prado's 2.7 petrol and 2.8 diesel fall in different excise bands. A ${v('toyota-land-cruiser-prado', 'tx-2-7-petrol-5-seat', 'Prado TX 2.7 petrol')} lands at about <b>${P('toyota-land-cruiser-prado', 'tx-2-7-petrol-5-seat')}</b>, and a ${v('toyota-land-cruiser-prado', 'tx-l-2-8-diesel', 'TX-L 2.8 diesel')} at <b>${P('toyota-land-cruiser-prado', 'tx-l-2-8-diesel')}</b>.</p>
${table(['toyota-harrier', 'mazda-cx-5', 'toyota-land-cruiser-prado'], 'Landed prices including all KRA taxes')}

<h2>Clearing fee breakdown for a crossover</h2>
<p>Beyond KRA taxes, clearing a crossover involves several other charges. These include shipping line charges and the delivery order, KPA port charges and shore handling, any storage after the free days, the clearing agent's fee, the KEBS inspection, and NTSA registration and plates. A good quote lists each item. Read our <a href="/blog/mombasa-port-car-clearing-guide/">Mombasa clearing guide</a>.</p>

<h2>Appealing a KRA overvaluation</h2>
<p>Sometimes KRA assigns a value you believe is wrong, for example by matching a higher grade or larger engine. In that case, you or your agent can ask for a review. The usual steps are as follows.</p>
<p>First, gather evidence: the export certificate, specification sheets, the auction sheet and the build data. Second, lodge a request for review with the customs office handling the entry, through your clearing agent. Third, if the review fails, you can escalate through KRA's formal objection process and, if needed, the Tax Appeals Tribunal. Meanwhile, storage charges may keep running. Therefore, it is often wise to pay under protest and pursue a refund, depending on the amount.</p>

<h2>Manufacturing year vs registration year</h2>
<p>KRA and KEBS use different dates for different purposes. KEBS checks the year of first registration for the 8-year rule. KRA's depreciation is based on the car's age, with year of manufacture also recorded. Make sure both dates are clear on your documents. In ${YEAR}, cars first registered in ${MIN_YEAR} or later qualify. Read our <a href="/blog/kenya-8-year-rule-car-import/">8-year rule guide</a>.</p>

<h2>Our services</h2>
<h3>1. Current CRSP lookup</h3>
<p>We look up the exact CRSP entry KRA will use for your car.</p>
<h3>2. Correct declarations</h3>
<p>We declare the correct model, engine and grade to avoid disputes.</p>
<h3>3. One landed price</h3>
<p>Our quote includes every tax and fee, so there are no surprises.</p>

${cta('Get a duty-inclusive quote', 'Tell us the model, engine and year.', 'Hi Elisa Motors, please quote a car with all duty included.')}

<h2>Talk to us</h2>
<p>Call ${telA()} or WhatsApp ${waA('Hi Elisa Motors, I have a question about KRA CRSP values.')}. Browse ${c('toyota-harrier', 'Harrier')}, ${c('mazda-cx-5', 'CX-5')} and ${c('toyota-land-cruiser-prado', 'Prado')} prices.</p>
`,
    faq: [
      ['What is CRSP in Kenya?', 'CRSP means Current Retail Selling Price. It is KRA\'s reference value list for vehicles, used to calculate import duty, excise and VAT on imported cars.'],
      ['Does KRA use my purchase price to calculate duty?', 'No. KRA uses the CRSP value for your model, reduced for age, not your invoice price.'],
      ['How much tax will I pay to clear a Harrier at Mombasa?', `It depends on the current CRSP value and the car's age. Our landed price for a Harrier Premium 2.0, about ${P('toyota-harrier', 'premium-2-0')}, includes all taxes.`],
      ['Can I appeal a KRA valuation?', 'Yes. Your clearing agent can request a review with evidence such as the export certificate and specs. You can then escalate through KRA\'s objection process and the Tax Appeals Tribunal.'],
      ['What if my car is not on the CRSP list?', 'KRA matches it to the closest equivalent by engine, body and grade. The match can change the duty, so correct declarations matter.'],
    ],
  };
};
