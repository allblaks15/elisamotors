export default (h) => {
  const { YEAR, MIN_YEAR, P, F, T, c, v, cta, table, telA, waA } = h;
  const S = 'land-rover-range-rover-sport', V = 'land-rover-range-rover-vogue', VE = 'land-rover-range-rover-velar', E = 'land-rover-range-rover-evoque';
  return {
    slug: 'range-rover-trims-explained-kenya',
    keyword: 'Range Rover trims and engines explained',
    tag: 'Buying guide',
    cluster: 'Range Rover & Land Rover',
    crumb: 'Range Rover trims explained',
    title: `Range Rover Trims Explained: HSE, Autobiography, SVR, LWB Prices`,
    description: `Range Rover trims and engines explained for Kenyan buyers: SE, HSE, Dynamic, Autobiography, SVR, LWB, SDV6, TDV6, P400e and P530, with landed prices in KSh.`,
    h1: `Range Rover Trims and Engines Explained: SE, HSE, Dynamic, Autobiography, SVR, LWB, Diesel, Petrol and Hybrid Prices in Kenya`,
    excerpt: `What every Range Rover trim and engine code means, which ones suit Kenyan roads and what each costs landed in ${YEAR}.`,
    published: '2026-10-10',
    updated: '2026-10-10',
    cars: [S, V, VE, E],
    html: `
<p>Range Rover names can be confusing. One car is an "HSE Dynamic P400", another an "Autobiography SDV8 LWB". Each part of the name tells you the trim, the engine and sometimes the body length. Once you understand the code, comparing prices becomes easy.</p>
<p>This guide explains every trim and engine name Kenyan buyers meet, with landed prices from the ${h.site.name} catalogue.</p>
${cta('Not sure which trim to choose?', 'Tell us your budget and we will suggest the best spec.', 'Hi Elisa Motors, which Range Rover trim should I choose?')}

<h2>Range Rover price list by version (${YEAR})</h2>
${table([E, VE, S, V], 'Range Rover landed prices in Kenya by trim')}

<h2>Range Rover trims, from base to flagship</h2>
<h3>Pure and S: the entry trims</h3>
<p>Pure (older cars) and S are the entry trims. They have cloth or basic leather, smaller wheels and fewer driver aids. On the Evoque, the <b>Evoque Pure</b> was the cheapest way into the badge. However, few are exported to Kenya, because buyers prefer better-equipped cars.</p>
<h3>SE: the sensible middle</h3>
<p>SE adds leather, larger wheels, better lights and more technology. For example, the ${v(E, 'd180-se', 'Evoque D180 SE')} lands at about <b>${P(E, 'd180-se')}</b>. On the full-size Range Rover, the <b>Vogue SE</b> sits above the plain Vogue trim.</p>
<h3>HSE: the most popular trim in Kenya</h3>
<p>HSE adds premium leather, upgraded audio, more electric adjustment and bigger wheels. It is the sweet spot for resale. The ${v(S, 'hse-3-0-sdv6', 'Range Rover Sport HSE 3.0 SDV6')} lands at about <b>${P(S, 'hse-3-0-sdv6')}</b>.</p>
<h3>Dynamic, R-Dynamic and HSE Dynamic</h3>
<p>"Dynamic" means sportier styling: darker trim, red brake calipers, sports seats and sometimes adaptive dampers. The ${v(VE, 'd200-r-dynamic-se', 'Velar D200 R-Dynamic SE')} lands at <b>${P(VE, 'd200-r-dynamic-se')}</b>, and the ${v(S, 'hse-dynamic-p400', 'Sport HSE Dynamic P400')} at <b>${P(S, 'hse-dynamic-p400')}</b>. The <b>Evoque Dynamic</b> follows the same pattern.</p>
<h3>Autobiography: the luxury flagship</h3>
<p>Autobiography is the top luxury trim, with semi-aniline leather, massage seats, Meridian Signature audio and every option. The ${v(S, 'autobiography-d350-l461', 'Sport Autobiography D350')} lands at <b>${P(S, 'autobiography-d350-l461')}</b>, while the ${v(V, 'range-rover-p530-autobiography-v8-l460', 'Range Rover P530 Autobiography')} reaches <b>${P(V, 'range-rover-p530-autobiography-v8-l460')}</b>. <b>Autobiography Black</b> was a limited edition with black exterior details and an even richer cabin.</p>
<h3>SVR and SV: the performance and bespoke models</h3>
<p>The <b>Range Rover Sport SVR</b> is the high-performance model, with a supercharged 5.0 V8 (later a 4.4 twin-turbo V8 in the SV). Buyers sometimes search for "SSVR" or "SRV", but the official name is SVR. A ${MIN_YEAR}–2022 SVR is rare and usually priced above the HSE Dynamic. Meanwhile, SV and SVAutobiography are bespoke flagships on the full-size Range Rover. We source them on request.</p>

<h2>Long wheelbase (LWB) Range Rover</h2>
<p>The <b>Range Rover LWB</b> adds rear legroom, making it the choice for chauffeur-driven executives. Long-wheelbase cars carry a premium over standard models. In addition, they are rarer, so allow more time to find the right one. The new-shape L460 also offers a seven-seat LWB option.</p>

<h2>Range Rover engines explained</h2>
<h3>Diesel: TDV6, SDV6, SDV8, D250, D300, D350</h3>
<p><b>TDV6</b> is the single-turbo 3.0 V6 diesel. <b>SDV6</b> is the twin-turbo, more powerful version, and <b>SDV8</b> is the 4.4 V8 diesel found in the Vogue. The ${v(V, 'vogue-4-4-sdv8', 'Vogue 4.4 SDV8')} lands at about <b>${P(V, 'vogue-4-4-sdv8')}</b>. From around 2020, the Ingenium six-cylinder diesels (D250, D300, D350) replaced the V6s. They are smoother and more efficient.</p>
<p>Older TDV6 and SDV6 Range Rovers from 2014–2018 trade locally. However, they are outside the import window in ${YEAR}.</p>
<h3>Petrol: supercharged V6 and V8, P400, P530</h3>
<p><b>Supercharged</b> refers to the 3.0 V6 and 5.0 V8 petrol engines. The 5.0 V8 is thrilling but very thirsty. Later, the P400 inline-six and the P530 4.4 twin-turbo V8 took over. Petrol Range Rovers are quieter, but fuel costs are high in Kenya.</p>
<h3>Plug-in hybrid: P400e, P440e, P510e</h3>
<p>The <b>P400e</b> pairs a 2.0 petrol engine with a battery you can charge at home. The ${v(V, 'vogue-p400e-plug-in-hybrid', 'Vogue P400e')} lands at about <b>${P(V, 'vogue-p400e-plug-in-hybrid')}</b>. Newer P440e and P510e models have much larger batteries and longer electric range.</p>

<h2>Diesel vs petrol Range Rover Sport in Kenya</h2>
<p>For most Kenyan buyers, diesel is the better choice. It returns better fuel economy on long upcountry trips and has strong torque for hills. However, modern diesels use DPFs, which need regular highway driving. If you only drive short trips in Nairobi traffic, a petrol or plug-in hybrid may suit you better. Read our <a href="/blog/range-rover-sport-price-in-kenya/">Range Rover Sport guide</a>.</p>

<h2>Best Range Rover trim for Kenyan roads</h2>
<p>For value and resale, choose an HSE diesel. For style, choose a Dynamic. For luxury, choose an Autobiography. Finally, for a chauffeur-driven car, choose a long-wheelbase Range Rover. Avoid 22-inch wheels on murram roads, since tyres are expensive and easier to damage.</p>

<h2>Our services</h2>
<h3>1. Spec-matched sourcing</h3>
<p>We find the exact trim, engine and options you want in the UK or Japan.</p>
<h3>2. Option verification</h3>
<p>We decode the build sheet so you know exactly which options the car has.</p>
<h3>3. One landed price</h3>
<p>Our quote includes shipping, duty, clearing and registration.</p>

${cta('Ready for a quote?', 'Tell us the trim and engine you want.', 'Hi Elisa Motors, I want a Range Rover quote for a specific trim.')}

<h2>Talk to us</h2>
<p>Call ${telA()} or WhatsApp ${waA('Hi Elisa Motors, I have a question about Range Rover trims.')}. Read our <a href="/blog/range-rover-price-in-kenya/">Range Rover price guide</a> and <a href="/blog/range-rover-price-by-year-kenya/">Range Rover price by year</a>.</p>
`,
    faq: [
      ['What is the difference between Range Rover SE and HSE?', 'HSE adds premium leather, better audio, more electric adjustment and larger wheels over SE. HSE is the most popular trim in Kenya and resells best.'],
      ['What does SDV6 mean on a Range Rover?', 'SDV6 is the twin-turbo 3.0 V6 diesel. TDV6 is the single-turbo version with less power. SDV8 is the 4.4 V8 diesel.'],
      ['Is there a Range Rover SSVR?', 'The official name is SVR, the high-performance Range Rover Sport with a supercharged 5.0 V8. "SSVR" and "SRV" are common misspellings.'],
      ['How much is a Range Rover Autobiography in Kenya?', `A Range Rover Sport Autobiography D350 lands at about ${P(S, 'autobiography-d350-l461')}, while a full-size P530 Autobiography reaches ${P(V, 'range-rover-p530-autobiography-v8-l460')}.`],
      ['Is a diesel or petrol Range Rover better for Kenya?', 'Diesel suits most buyers because of better economy and torque. Petrol or plug-in hybrid suits mostly short town trips.'],
    ],
  };
};
