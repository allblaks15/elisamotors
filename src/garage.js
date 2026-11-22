// Elisa Motors Garage: car service, repairs, diagnostics and check-ups in Nairobi, with online booking.
// Facts about the workshop (address, hours, insurers) come from site.garage in src/config.js.
import { requestFormHtml } from './request-form.js';

export function buildGarage(h) {
  const { site, YEAR, I, esc, waLink, abs, add, layout, crumbs, faqHtml, faqLd, MAKES, carImg } = h;
  const g = site.garage;
  const tel = site.phone.replace(/\s/g, '');
  const where = g.address ? `${g.address}` : `${g.area}`;

  // Areas we serve (customers bring their cars from across Nairobi and nearby towns)
  const AREAS = ['Westlands', 'Kilimani', 'Kileleshwa', 'Lavington', 'Karen', 'Langata', 'Parklands', 'Upper Hill', 'Nairobi CBD', 'Industrial Area',
    'South B', 'South C', 'Nairobi West', 'Hurlingham', 'Garden Estate', 'Runda', 'Ridgeways', 'Muthaiga', 'Gigiri', 'Spring Valley', 'Kitisuru',
    'Roysambu', 'Kasarani', 'Kahawa Sukari', 'Ruiru', 'Ruaka', 'Githurai', 'Zimmerman', 'Eastleigh', 'Pangani', 'Ngara', 'Buruburu', 'Donholm',
    'Umoja', 'Embakasi', 'Syokimau', 'Mlolongo', 'Kitengela', 'Rongai', 'Ngong', 'Kikuyu', 'Kinoo', 'Uthiru', 'Kangemi', 'Kawangware', 'Dagoretti', 'Limuru'];
  const ROADS = ['Mombasa Road', 'Thika Road', 'Ngong Road', 'Waiyaki Way', 'Kiambu Road', 'Jogoo Road', 'the Eastern and Southern Bypass'];
  const BRANDS = ['Toyota', 'Subaru', 'Mazda', 'Nissan', 'Honda', 'Mitsubishi', 'Suzuki', 'Lexus', 'Mercedes-Benz', 'BMW', 'Audi', 'Volkswagen', 'Land Rover and Range Rover', 'Porsche', 'Volvo', 'Ford', 'Isuzu', 'Hyundai and Kia'];

  // Garage photos (Wikimedia Commons, credited on /credits/) live in assets/img/garage/
  const IMG = { hero: 'car-mechanic-garage-nairobi', repair: 'car-engine-repair-nairobi', service: 'car-service-oil-check-nairobi', accident: 'accident-car-repair-nairobi',
    hybrid: 'hybrid-car-service-nairobi', diagnostics: 'car-diagnostics-nairobi', inspection: 'car-inspection-garage-nairobi',
    fabrication: 'truck-body-fabrication-nairobi', fabrication2: 'lorry-dropside-body-fabrication-nairobi' };
  const img = (slot, sm) => `/assets/img/garage/${IMG[slot]}${sm ? '-sm' : ''}.webp`;
  const photo = (slot, alt) => `<figure class="garage-photo"><img src="${img(slot)}" alt="${esc(alt)}" title="${esc(alt)}" width="1200" height="800" loading="lazy"><figcaption>Representative photo. See <a href="/credits/">image credits</a>.</figcaption></figure>`;
  const SERVICES = [
    { slug: 'accident-repair', form: 'accident', short: 'Accident repair', icon: '🚗', img: 'accident', blurb: 'Panel beating, spray painting and mechanical repairs after an accident. Insurance or cash.' },
    { slug: 'car-repair', form: 'repair', short: 'Repairs', icon: '⚙', img: 'repair', blurb: 'Engine, gearbox, suspension, steering, brakes, cooling and AC repairs.' },
    { slug: 'car-service', form: 'service', short: 'Car service', icon: '🛠', img: 'service', blurb: 'Minor, major and full car service with genuine-grade oil, filters and fluids.' },
    { slug: 'car-diagnostics', form: 'diagnostics', short: 'Diagnostics & electrical', icon: '⚡', img: 'diagnostics', blurb: 'Computerised diagnostics, warning lights, batteries, alternators and wiring.' },
    { slug: 'hybrid-car-service', form: 'hybrid', short: 'Hybrid cars', icon: '🔋', img: 'hybrid', blurb: 'Servicing and repair for Toyota, Honda and Nissan hybrids.' },
    { slug: 'car-inspection', form: 'checkup', short: 'Check-ups & inspections', icon: '✓', img: 'inspection', blurb: 'Car check-ups, pre-purchase inspections and NTSA inspection preparation.' },
    { slug: 'body-fabrication', form: 'fabrication', short: 'Body fabrication', icon: '🏗', img: 'fabrication', blurb: 'Box, dropside, flatbed, high-side, cattle and tipper bodies for vans, trucks and lorries.' },
  ];
  // Specialist makes (the core of the garage business)
  const BRAND_PAGES = [
    { slug: 'range-rover-specialist', name: 'Range Rover & Land Rover', make: 'land-rover', car: 'land-rover-range-rover-sport',
      models: ['Range Rover', 'Range Rover Sport', 'Velar', 'Evoque', 'Discovery', 'Discovery Sport', 'Defender'],
      lead: 'Range Rovers and Land Rovers are complex luxury 4x4s that reward a garage that knows them.',
      jobs: ['Air suspension: compressors, air struts and height sensors', 'Land Rover diagnostics and warning lights', 'Coolant leaks and cooling system repairs', 'Oil leaks and engine repairs on V6 and V8 engines', 'ZF automatic gearbox fluid service', 'Brakes, suspension and steering'] },
    { slug: 'mercedes-benz-specialist', name: 'Mercedes-Benz', make: 'mercedes-benz', car: 'mercedes-benz-g-class',
      models: ['C-Class', 'E-Class', 'S-Class', 'GLC', 'GLE', 'G-Class (G-Wagon)', 'ML and GL'],
      lead: 'From the C-Class to the G-Wagon, we keep Mercedes-Benz cars running the way they should.',
      jobs: ['7G-Tronic and 9G-Tronic gearbox service', 'Airmatic air suspension repairs', 'Mercedes diagnostics and warning lights', 'Oil leaks and engine mountings', 'Diesel AdBlue and emissions faults', 'Brakes, suspension and steering'] },
    { slug: 'bmw-specialist', name: 'BMW', make: 'bmw', car: 'bmw-x5',
      models: ['3 Series', '5 Series', '7 Series', 'X1', 'X3', 'X5', 'X6'],
      lead: 'BMWs are built to drive well, and they need careful maintenance to stay that way.',
      jobs: ['Cooling system: water pump, thermostat and expansion tank', 'Oil leaks: valve cover and oil filter housing gaskets', 'Timing chain and VANOS faults', 'xDrive transfer case service', 'BMW diagnostics and electrical faults', 'Brakes, suspension and steering'] },
    { slug: 'audi-specialist', name: 'Audi', make: 'audi', car: 'audi-q7',
      models: ['A3', 'A4', 'A6', 'Q3', 'Q5', 'Q7', 'Q8'],
      lead: 'Audis combine quattro grip with advanced electronics, so diagnosis and servicing matter.',
      jobs: ['S tronic and DSG gearbox service', 'Timing chain tensioner checks on 2.0 TFSI engines', 'Oil consumption diagnosis', 'Coolant pump and cooling system leaks', 'Audi diagnostics and electrical faults', 'quattro, brakes and suspension'] },
    { slug: 'porsche-specialist', name: 'Porsche', make: 'porsche', car: 'porsche-cayenne',
      models: ['Cayenne', 'Macan', 'Panamera', '911', '718 Cayman and Boxster'],
      lead: 'Porsches deserve careful servicing and precise repairs to keep their performance and value.',
      jobs: ['PDK gearbox service', 'Air suspension and PASM repairs', 'Cooling system and coolant pipe repairs', 'High-performance brake service', 'Porsche diagnostics and warning lights', 'Major and minor servicing'] },
    { slug: 'toyota-specialist', name: 'Toyota', make: 'toyota', car: 'toyota-land-cruiser-prado',
      models: ['Land Cruiser V8 and LC300', 'Prado', 'Harrier', 'RAV4', 'Hilux', 'Fielder and Axio', 'Toyota hybrids'],
      lead: 'Toyota is Kenya\'s favourite make, from the Land Cruiser V8 and Prado to the Harrier and Fielder.',
      jobs: ['D-4D diesel injector problems', 'DPF faults on 2.8 diesel engines', 'CVT and automatic gearbox service', 'Hybrid system servicing and repairs', 'Suspension bushes and shock absorbers', 'Major and minor servicing'] },
  ].map((b) => ({ ...b, img: carImg(b.car) }));
  const formSlug = (pageSlug) => SERVICES.find((x) => x.slug === pageSlug)?.form || (BRAND_PAGES.some((x) => x.slug === pageSlug) ? 'repair' : '');

  const bookHref = (pageSlug) => `/garage/book/${formSlug(pageSlug) ? `?service=${formSlug(pageSlug)}` : ''}`;
  const waBook = (text) => waLink(`Hi, I would like to book ${text} at ${g.name}.`);

  // Local business data for Google (AutoRepair)
  const autoRepairLd = {
    '@context': 'https://schema.org', '@type': 'AutoRepair', '@id': abs('/garage/#autorepair'), name: g.name, url: abs('/garage/'),
    telephone: site.phone, email: site.email, image: abs('/assets/img/logo.png'), parentOrganization: { '@id': abs('/#dealer') },
    address: { '@type': 'PostalAddress', ...(g.address ? { streetAddress: g.address } : {}), addressLocality: 'Nairobi', addressCountry: 'KE' },
    ...(g.mapsUrl ? { hasMap: g.mapsUrl } : {}),
    openingHours: 'Mo-Sa 08:00-18:00', areaServed: ['Nairobi', ...AREAS].map((a) => ({ '@type': 'Place', name: a })),
    makesOffer: SERVICES.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.short, url: abs(`/garage/${s.slug}/`) } })),
  };

  const serviceNav = (current) => `<nav class="chips garage-nav" aria-label="Garage services"><a class="chip${current === '' ? ' on' : ''}" href="/garage/">Garage home</a>${SERVICES.map((s) => `<a class="chip${current === s.slug ? ' on' : ''}" href="/garage/${s.slug}/">${s.short}</a>`).join('')}<a class="chip${current === 'book' ? ' on' : ''}" href="/garage/book/">Book now</a></nav>`;
  const bookBox = (service, label) => `<div class="order-box garage-book-box">
    <div><div class="step-label">${esc(g.name)}</div><h2 style="font-size:1.3rem;margin:4px 0 0">Book ${esc(label)}</h2><p class="muted small" style="margin:6px 0 0">Choose a date, tell us about your car and we confirm on WhatsApp. No payment needed to book.</p></div>
    ${service === null ? '' : `<a class="btn btn-primary btn-block" href="${bookHref(service)}">Book online</a>`}
    <a class="btn btn-wa btn-block" href="${waBook(label)}" target="_blank" rel="noopener">${I.wa} Book on WhatsApp</a>
    <a class="btn btn-ghost btn-block" href="tel:${tel}">Call ${site.phone}</a>
    <table class="spec kv"><tbody><tr><th>Location</th><td>${esc(where)}${g.mapsUrl ? ` · <a href="${esc(g.mapsUrl)}" target="_blank" rel="noopener">Map</a>` : ''}</td></tr><tr><th>Hours</th><td>${esc(g.hours)}</td></tr></tbody></table>
  </div>`;
  const checks = (list) => `<ul class="feature-list">${list.map((f) => `<li>${I.check}<span>${f}</span></li>`).join('')}</ul>`;
  const areasHtml = `<h2>Serving drivers across Nairobi</h2>
<p>Customers bring their cars to ${esc(g.name)} from all over Nairobi and nearby towns, including ${AREAS.slice(0, -1).join(', ')} and ${AREAS.at(-1)}. We are easy to reach from ${ROADS.slice(0, -1).join(', ')} and ${ROADS.at(-1)}.</p>
<p>Book a slot online or on WhatsApp, and we will send you directions to the workshop${g.address ? ` at ${esc(g.address)}` : ''}.</p>`;
  const brandsHtml = `<h2>Makes we service and repair</h2>
<p>We work on the cars Kenyans drive most: ${BRANDS.slice(0, -1).join(', ')} and ${BRANDS.at(-1)}. That includes Japanese favourites such as the Toyota Harrier, Prado, Fielder and Probox, Subaru Forester and Outback, Mazda CX-5 and Demio, as well as German and British cars such as the Mercedes C-Class, BMW X5, VW Golf and Range Rover Sport. Hybrids such as the Toyota Aqua, Prius and Honda Fit Hybrid are welcome too. Driving something else? Ask us before you book.</p>`;
  const insurerFaq = g.insurers.length
    ? [`Are you an insurance approved garage in Nairobi?`, `Yes. ${g.name} is approved by ${g.insurers.join(', ')}. Bring your claim details when you book.`]
    : [`Can I use my insurance at your garage?`, `For insurance repairs, tell us your insurer when you book and we will confirm whether we can work with them on your claim.`];

  function page({ slug, title, description, h1, lead, body, faq, serviceName, label }) {
    const path = slug ? `/garage/${slug}/` : '/garage/';
    const cr = crumbs(slug ? [['Home', '/'], ['Garage', '/garage/'], [h1.split(':')[0].replace(/&amp;/g, '&'), path]] : [['Home', '/'], ['Garage', '/garage/']]);
    const serviceLd = serviceName ? { '@context': 'https://schema.org', '@type': 'Service', name: serviceName, serviceType: serviceName, url: abs(path), provider: { '@id': abs('/garage/#autorepair') }, areaServed: { '@type': 'City', name: 'Nairobi' } } : null;
    add(path, layout({ path, title, description, priority: slug ? 0.8 : 0.9,
      jsonld: [cr.ld, autoRepairLd, ...(serviceLd ? [serviceLd] : []), faqLd(faq)],
      body: `<div class="wrap">${cr.html}
<header class="page-head"><span class="eyebrow" style="color:var(--accent)">${esc(g.name)}</span><h1>${h1}</h1><p>${lead}</p>${serviceNav(slug)}</header>
<div class="two-col" style="padding-bottom:24px">
  <article class="prose">${body}
  <h2>Frequently asked questions</h2>${faqHtml(faq)}
  </article>
  <aside><div style="position:sticky;top:84px">${bookBox(slug, label)}</div></aside>
</div></div>
<section class="block" style="padding-top:8px"><div class="wrap"><div class="cta-band"><div><h2>Book your car in today</h2><p>Service, repair or check-up: pick a date and we confirm on WhatsApp.</p></div><div class="btns"><a class="btn btn-light" href="${bookHref(slug)}">Book online</a><a class="btn btn-wa" href="${waBook(label)}" target="_blank" rel="noopener">${I.wa} WhatsApp us</a></div></div></div></section>` }));
  }

  // ------------------------------------------------------------ hub
  page({
    slug: '', label: 'a service or repair',
    title: `Car Garage in Nairobi: Service, Repairs & Check-ups | ${g.name}`,
    description: `${g.name} is a trusted car garage in Nairobi for car service, engine and gearbox repairs, computerised diagnostics and pre-purchase inspections. Book online or on WhatsApp.`,
    h1: 'Car Garage in Nairobi: Service, Repairs &amp; Check-ups',
    lead: `${g.name} specialises in Range Rover, Mercedes-Benz, BMW, Audi, Porsche and Toyota: servicing, repairs, accident repairs, hybrid cars and diagnostics, with honest quotes before any work starts. We also build bodies for vans and trucks.`,
    serviceName: 'Car service and repair',
    body: `
${photo('inspection', 'Car check-up and inspection at a garage in Nairobi')}
${photo('diagnostics', 'Computerised car diagnostics with an OBD2 scanner in Nairobi')}
${photo('repair', 'Mechanic repairing a car engine in Nairobi')}
${photo('service', 'Mechanic checking engine oil during a car service in Nairobi')}
${photo('hero', 'Mechanics repairing a car at Elisa Motors Garage, Nairobi')}
<h2>Specialists in Range Rover, Mercedes-Benz, BMW, Audi, Porsche &amp; Toyota</h2>
<div class="brand-grid">${BRAND_PAGES.map((b) => `<a class="brand-card" href="/garage/${b.slug}/"><img src="${b.img.replace('.webp', '-sm.webp')}" alt="${esc(`${b.name} specialist garage Nairobi`)}" title="${esc(`${b.name} specialist garage Nairobi`)}" width="600" height="400" loading="lazy"><b>${esc(b.name)}</b><span>Service &amp; repair</span></a>`).join('')}</div>
<h2>Our garage services</h2>
<div class="svc-grid">${SERVICES.map((s) => `<a class="svc-card" href="/garage/${s.slug}/">${s.img ? `<img src="${img(s.img, true)}" alt="${esc(`${s.short} in Nairobi`)}" title="${esc(`${s.short} in Nairobi`)}" width="600" height="400" loading="lazy">` : `<span class="svc-ic" aria-hidden="true">${s.icon}</span>`}<b>${s.short}</b><span>${s.blurb}</span></a>`).join('')}</div>
<h2>Why drivers choose us as their car garage in Nairobi</h2>
${checks([
  '<b>Honest mechanics, clear quotes:</b> we diagnose first, explain the problem and agree the price with you before any work starts.',
  '<b>Computerised diagnostics:</b> modern scan tools read every control module, so we fix the cause instead of guessing.',
  '<b>Quality parts:</b> genuine or OEM-grade parts, with the old parts shown to you on request.',
  '<b>Car import experience:</b> the same team that inspects the cars we import from Japan and the UK checks yours.',
  '<b>WhatsApp updates:</b> photos and progress updates while your car is with us.',
  '<b>Business and fleet cars welcome:</b> we service company cars and small fleets on an agreed schedule.',
])}
<h2>Car service and repair under one roof</h2>
<p>From a routine <a href="/garage/car-service/">minor or major car service</a> to <a href="/garage/car-repair/">engine overhauls, gearbox repairs and suspension work</a>, our auto repair workshop handles the jobs most Nairobi drivers need. Moreover, when a warning light comes on, our <a href="/garage/car-diagnostics/">computerised car diagnostics</a> find the fault quickly. Buying a used car? Our <a href="/garage/car-inspection/">pre-purchase inspection</a> tells you what you are really paying for.</p>
${brandsHtml}
<h2>How booking works</h2>
<ol class="steps garage-steps"><li><h3>Book online</h3><p>Choose a service, repair or check-up and your preferred date.</p></li><li><h3>We confirm</h3><p>We confirm your slot on WhatsApp and answer any questions.</p></li><li><h3>Diagnose &amp; quote</h3><p>We inspect the car and agree the work and price with you first.</p></li><li><h3>Collect your car</h3><p>We test-drive, explain what we did and hand back your keys.</p></li></ol>
${areasHtml}`,
    faq: [
      ['Where is your garage in Nairobi?', `${g.name} is in ${where}. When you book, we send you directions and confirm your time slot on WhatsApp.`],
      ['What are your garage opening hours?', `We are open ${g.hours}. Book ahead online or on WhatsApp so your car is seen quickly.`],
      ['How do I book a car service or repair?', `Use our <a href="/garage/book/">online booking form</a>, WhatsApp us on ${site.phone}, or call. Tell us your car, the service you need and your preferred date.`],
      ['Do you give a quote before repairing my car?', 'Yes. We diagnose the problem first, explain what needs fixing and agree the price with you before any work starts.'],
      ['Which car makes do you service?', `We service and repair most makes on Kenyan roads, including ${BRANDS.slice(0, 8).join(', ')} and more, including hybrids.`],
      insurerFaq,
      ['Do you service company and fleet vehicles?', 'Yes. We service company cars and small fleets on an agreed schedule, with one point of contact and clear service records.'],
      ['How do I find trusted, honest mechanics in Nairobi?', 'Look for a garage that diagnoses before quoting, agrees the price before starting, uses quality parts and shows you the old parts. That is exactly how we work, and we keep you updated on WhatsApp.'],
      ['Is your garage affordable?', 'We quote clearly before any work and only fix what your car needs, so there are no surprise bills. For routine work, a regular service usually costs far less than the repairs it prevents.'],
      ['Do you service second hand and newly imported cars?', 'Yes. Many of our customers drive second hand or newly imported cars. We recommend a full service and check-up soon after you buy one, so you know its true condition.'],
    ],
  });

  // ------------------------------------------------------------ car service
  page({
    slug: 'car-service', label: 'a car service',
    title: `Car Service in Nairobi: Minor, Major & Full Service | ${g.name}`,
    description: `Full car service in Nairobi: minor service, major service, oil change, filters, brake fluid and coolant flush. Book a car service online with ${g.name}.`,
    h1: 'Car Service in Nairobi: Minor, Major &amp; Full Service',
    lead: 'Regular servicing keeps your car reliable, economical and worth more when you sell it. We offer minor, major and full car services for Japanese, German and British cars, with a clear checklist and quote before we start.',
    serviceName: 'Car service',
    body: `
<h2>Minor car service</h2>
<p>A minor service suits most cars every 5,000 to 10,000 km, depending on the manufacturer and the oil used. It covers the essentials that keep your engine healthy.</p>
${checks(['Engine oil change (mineral, semi-synthetic or full synthetic)', 'Oil filter replacement', 'Check and top up all fluids: coolant, brake, power steering, washer', 'Check tyres, brakes, lights, wipers and battery', 'Quick computerised scan for stored fault codes'])}
<h2>Major car service</h2>
<p>A major service, usually every 20,000 to 40,000 km, adds the deeper items that protect expensive parts. It is the best garage visit to book before a long safari or after buying a used car.</p>
${checks(['Everything in a minor service', 'Air filter and cabin (AC) filter replacement', 'Spark plugs (petrol) or fuel filter (diesel) as due', 'Brake fluid flush and coolant flush as due', 'Gearbox oil change where the manufacturer recommends it', 'Brake pads and discs measured, suspension and steering inspected', 'Full diagnostic scan of all control modules'])}
<h2>Full car service in Nairobi</h2>
<p>A full service combines the major service with a detailed inspection report and road test. As a result, you know the exact condition of the car and what will need attention next. It is ideal for second-hand cars with an unknown history.</p>
<h2>Oil change, fluids and filters</h2>
<p>We use the oil grade your engine needs, from synthetic oil for modern turbo and hybrid engines to the right grade for diesel engines. In addition, we offer standalone services such as gearbox oil change, brake fluid flush and coolant flush.</p>
<h2>Service intervals for Kenyan conditions</h2>
<p>Nairobi traffic, dust and rough roads count as "severe" driving for most manufacturers. Therefore, we often recommend shorter intervals than the handbook, especially for diesels and CVT gearboxes. We will advise based on how and where you drive.</p>
<h2>Car service packages for businesses</h2>
<p>For company cars and fleets, we agree a service schedule, keep service records for every vehicle and remind you when the next service is due.</p>
${brandsHtml}
${areasHtml}`,
    faq: [
      ['What is the difference between a minor and a major car service?', 'A minor service covers oil, oil filter and basic checks. A major service adds air and cabin filters, spark plugs or fuel filter, fluid flushes and a deeper inspection of brakes, suspension and steering.'],
      ['How much does a car service cost in Nairobi?', 'The cost depends on your car, engine size and the parts due for replacement. Book or WhatsApp us your car details and we quote the exact price before starting.'],
      ['How often should I service my car in Kenya?', 'Most cars need a minor service every 5,000 to 10,000 km and a major service every 20,000 to 40,000 km. Nairobi traffic and dusty roads often justify shorter intervals.'],
      ['How long does a car service take?', 'A minor service usually takes a few hours. A major or full service can take most of the day, depending on what we find.'],
      ['Do you use genuine parts?', 'We use genuine or OEM-grade parts and the correct oil grade for your engine, and we show you the old parts on request.'],
      ['What does a full car service in Nairobi include?', 'A full service includes everything in a major service (oil, filters, spark plugs or fuel filter, fluid checks and flushes as due) plus a detailed inspection report and road test.'],
    ],
  });

  // ------------------------------------------------------------ repairs
  page({
    slug: 'car-repair', label: 'a car repair',
    title: `Car Repair in Nairobi: Engine, Gearbox, Suspension & Brakes | ${g.name}`,
    description: `Car repair and maintenance in Nairobi: engine overhaul, automatic and CVT gearbox repair, clutch, suspension, steering, brakes, overheating and AC repair. Book with ${g.name}.`,
    h1: 'Car Repair in Nairobi: Engine, Gearbox, Suspension &amp; Brakes',
    lead: 'From strange noises to warning lights, our mechanics diagnose the real cause and fix it properly. We explain the problem and agree the price with you before any repair starts.',
    serviceName: 'Car repair',
    body: `
<h2>Engine repair and engine overhaul</h2>
<p>We repair engines that overheat, burn oil, misfire or lose power, up to a full engine overhaul. Common jobs include timing belt and timing chain replacement, cylinder head gasket repair, engine mounting replacement and fixing oil leaks. We also diagnose turbocharger, fuel pump, injector, EGR and DPF problems on modern diesel engines.</p>
<h2>Gearbox and transmission repair</h2>
<p>Gearbox problems need careful diagnosis, because many faults come from fluid, software or sensors rather than the gearbox itself. We diagnose and repair automatic transmissions, CVT gearboxes (common in Nissan X-Trail, Toyota and Subaru models), DSG gearboxes and manual gearboxes, including clutch replacement. In addition, we handle 4x4 transfer case and differential repairs.</p>
<h2>Suspension, steering and brake repair</h2>
<p>Kenyan roads are hard on suspension. We replace shock absorbers, control arm bushings, wheel bearings and CV joints, and repair steering racks and power steering pumps. For brakes, we replace brake pads and discs, repair ABS faults and adjust handbrakes. We also work on air suspension, including the Range Rover Sport.</p>
<h2>Cooling system, overheating and AC repair</h2>
<p>An overheating engine can be destroyed in minutes, so stop driving and call us. We repair radiators, water pumps and thermostats, and flush the cooling system. Furthermore, we repair car air conditioning, including AC compressor replacement and AC gas refills.</p>
<h2>Exhaust, alternator and starter repairs</h2>
<p>We repair exhaust systems, replace fan belts, and repair or replace alternators and starter motors. For electrical faults, see our <a href="/garage/car-diagnostics/">diagnostics and auto electrical</a> service.</p>
<h2>Common symptoms we fix</h2>
<div class="spec-table-wrap"><table class="spec kv"><tbody>
<tr><th>Car won't start</th><td>Battery, starter motor, alternator, immobiliser or fuel supply faults</td></tr>
<tr><th>Knocking sound</th><td>Engine wear, suspension joints, CV joints or loose components</td></tr>
<tr><th>Vibrating when driving</th><td>Wheel balance, worn engine mountings, CV joints or brake discs</td></tr>
<tr><th>White smoke from exhaust</th><td>Coolant entering the engine, often a head gasket problem</td></tr>
<tr><th>Black smoke (diesel)</th><td>Injectors, turbo, air filter or EGR problems</td></tr>
<tr><th>Losing power uphill</th><td>Fuel supply, turbo, clogged filters or gearbox slipping</td></tr>
<tr><th>Gearbox jerking</th><td>Low or old gearbox fluid, worn clutch packs or software issues</td></tr>
<tr><th>Overheating</th><td>Radiator, water pump, thermostat, fan or coolant leak</td></tr>
</tbody></table></div>
${brandsHtml}
${areasHtml}`,
    faq: [
      ['How much does an engine overhaul cost in Kenya?', 'It depends on the engine and which parts need replacing. We strip and inspect first, then quote the exact price for your car before work continues.'],
      ['Can you repair a CVT gearbox?', 'Yes. We diagnose CVT faults first, as many come from old fluid, sensors or software, then repair or replace parts as needed and agree the price with you.'],
      ['Why is my car overheating?', 'Common causes are a leaking radiator, failed water pump or thermostat, a faulty fan or a blown head gasket. Stop driving and have it checked to avoid engine damage.'],
      ['How long does a car repair take?', 'Simple repairs are often done the same day. Bigger jobs such as an engine overhaul or gearbox repair take longer, and we give you a timeline with the quote.'],
      ['Do you repair suspension and brakes?', 'Yes, including shock absorbers, bushings, wheel bearings, CV joints, steering racks, brake pads, discs and ABS faults.'],
    ],
  });

  // ------------------------------------------------------------ diagnostics & electrical
  page({
    slug: 'car-diagnostics', label: 'car diagnostics',
    title: `Car Diagnostics & Auto Electrician in Nairobi | ${g.name}`,
    description: `Computerised car diagnostics in Nairobi: check engine light, OBD2 scan, warning lights, batteries, alternators and car wiring faults. Book a diagnostic test with ${g.name}.`,
    h1: 'Car Diagnostics &amp; Auto Electrician in Nairobi',
    lead: 'Modern cars are run by computers. Our computerised car diagnostics read the fault codes and live data from every control module, so we find the real problem quickly and fix it right the first time.',
    serviceName: 'Car diagnostics and auto electrical repair',
    body: `
<h2>Computerised car diagnostics</h2>
<p>A diagnostic test connects a scan tool to your car's OBD2 port and reads every control module: engine, gearbox, ABS, airbags, body and more. We then check live sensor data and test the suspect parts. As a result, you only pay for repairs your car actually needs.</p>
<h2>Check engine light and dashboard warning lights</h2>
<p>A check engine light can mean anything from a loose fuel cap to a failing sensor or catalytic converter. We diagnose the cause, repair it and reset the warning light only when the fault is fixed. We also diagnose ABS, airbag, battery and gearbox warning lights.</p>
<h2>Auto electrician services</h2>
<p>Our auto electrician work covers the faults that leave Nairobi drivers stranded:</p>
${checks(['Car battery testing and replacement', 'Alternator charging test, repair and replacement', 'Starter motor repair', 'Parasitic battery drain tests (battery going flat overnight)', 'Short circuits, blown fuses and wiring repairs', 'Central locking, power windows, horn, wipers and lights', 'Sensor faults: crankshaft, camshaft, oxygen, mass air flow and ABS sensors'])}
<h2>Hybrid car diagnostics</h2>
<p>Hybrids such as the Toyota Aqua, Prius, Harrier Hybrid and Honda Fit Hybrid need a scan of the hybrid system as well as the engine. We check hybrid warning messages and system health, and advise on the right repair.</p>
<h2>Pre-purchase diagnostic scan</h2>
<p>Buying a used car? A full diagnostic scan reveals stored faults and cleared codes that a test drive will not show. Combine it with our <a href="/garage/car-inspection/">pre-purchase inspection</a> for complete peace of mind.</p>
${brandsHtml}
${areasHtml}`,
    faq: [
      ['How much does car diagnostics cost in Nairobi?', 'The price depends on the car and how many systems need checking. WhatsApp us your car details and we confirm the diagnostic test price before you come in.'],
      ['What does a computerised car diagnostic test show?', 'It shows stored and pending fault codes and live data from the engine, gearbox, ABS, airbag and body modules, which helps pinpoint the cause of a problem.'],
      ['Is it safe to drive with the check engine light on?', 'If the light is steady, drive gently and book a diagnostic soon. If it is flashing, the engine may be misfiring: stop driving and have it checked to avoid damage.'],
      ['Why does my car battery keep going flat?', 'Common causes are an old battery, a faulty alternator or a parasitic drain from an electrical fault. We test all three to find the cause.'],
      ['Do you work on hybrid cars?', 'Yes. We scan and diagnose hybrid systems on cars such as the Toyota Aqua, Prius, Harrier Hybrid and Honda Fit Hybrid.'],
    ],
  });

  // ------------------------------------------------------------ check-ups & inspection
  page({
    slug: 'car-inspection', label: 'a car check-up or inspection',
    title: `Car Check-up & Pre-Purchase Inspection in Nairobi | ${g.name}`,
    description: `Car check-ups and pre-purchase car inspection in Nairobi: mechanical inspection, diagnostic scan, mileage tampering check and NTSA inspection preparation. Book with ${g.name}.`,
    h1: 'Car Check-up &amp; Pre-Purchase Inspection in Nairobi',
    lead: 'Know exactly what condition a car is in before you buy it, before a long trip or before NTSA inspection. Our check-ups combine a hands-on mechanical inspection, a computerised scan and a road test.',
    serviceName: 'Car check-up and pre-purchase inspection',
    body: `
<h2>Pre-purchase car inspection</h2>
<p>Buying a second-hand car in Nairobi is risky without an independent check. Our pre-purchase inspection looks at the engine, gearbox, suspension, brakes, electrics and body, and includes a full diagnostic scan and road test. You get a clear report with photos, so you can negotiate or walk away.</p>
${checks(['Engine and gearbox condition, leaks and noises', 'Computerised scan for current and cleared fault codes', 'Mileage tampering check against service records and module data', 'Suspension, steering, brakes and tyres', 'Signs of accident repair, flood damage or rust', 'Road test and written report with photos'])}
<h2>Car check-up</h2>
<p>A general car check-up is ideal before a long safari, after a breakdown or when something just does not feel right. We inspect the key systems, scan for faults and tell you what needs attention now and what can wait.</p>
<h2>NTSA inspection preparation</h2>
<p>Before an NTSA motor vehicle inspection, we check the items inspectors look at, such as brakes, lights, tyres, suspension, steering, wipers and emissions, and fix any problems so your car passes first time.</p>
<h2>Inspection for imported cars</h2>
<p>We import cars from Japan and the UK, so we know what to look for on a newly imported car. If you bought a car through another importer, our check-up confirms its condition after it lands. Planning to import? See our <a href="/cars/">car import catalogue</a>.</p>
${brandsHtml}
${areasHtml}`,
    faq: [
      ['What does a pre-purchase car inspection include?', 'A mechanical inspection of the engine, gearbox, suspension, brakes and body, a full diagnostic scan, a mileage tampering check, a road test and a written report with photos.'],
      ['Can you check if a car\'s mileage has been tampered with?', 'Yes. We compare the odometer with service records and data stored in the car\'s control modules, which often reveals rolled-back mileage.'],
      ['How long does a pre-purchase inspection take?', 'Usually one to two hours, including the road test. We share the report and photos the same day.'],
      ['Can you help my car pass NTSA inspection?', 'Yes. We check the items NTSA inspects and fix any faults beforehand, so your car has the best chance of passing first time.'],
      ['Do you inspect cars before I buy them from a seller?', 'Yes. Book the inspection and agree a time with the seller, or bring the car to our garage.'],
    ],
  });

  // ------------------------------------------------------------ accident repair
  page({
    slug: 'accident-repair', label: 'an accident repair',
    title: `Accident Repair in Nairobi: Panel Beating, Spray Painting & Insurance Claims | ${g.name}`,
    description: `Accident car repair in Nairobi: panel beating, bumper and body repairs, spray painting and mechanical repairs after a crash. Insurance claims or cash. Send photos for a quote.`,
    h1: 'Accident Repair in Nairobi: Panel Beating, Painting &amp; Insurance Claims',
    lead: 'Had an accident? Send us photos of the damage and we will quote the repair, whether your insurer is paying or you are paying cash. We repair the body, paint and the mechanical damage underneath.',
    serviceName: 'Accident repair',
    body: `
${photo('accident', 'Accident damaged car awaiting repair at a garage in Nairobi')}
<h2>Accident car repair, from bodywork to mechanicals</h2>
<p>A collision rarely damages only the panels you can see. Therefore, we inspect the whole car: body, chassis alignment, suspension, steering, radiator, lights, airbags and sensors. Then we repair the body, paint it to match and fix the mechanical damage underneath.</p>
${checks(['Panel beating and dent repair', 'Bumper, bonnet, fender and door repair or replacement', 'Spray painting with colour matching', 'Chassis and body alignment checks', 'Radiator, suspension and steering damage', 'Headlights, sensors and airbag warning lights'])}
<h2>Insurance claims or cash: both welcome</h2>
<p>If your car is insured, tell us your insurer when you send the request. We prepare the repair estimate and photos your insurer needs for the claim. Paying cash? We quote clearly before any work starts, so you know the full cost.</p>
<h2>How to get an accident repair quote</h2>
<ol class="steps garage-steps"><li><h3>Send photos</h3><p>Use our order form: choose "Accident repair" and add photos of the damage.</p></li><li><h3>Insurance or cash</h3><p>Tell us if the car is insured and how you will pay.</p></li><li><h3>Inspection &amp; quote</h3><p>We inspect the car and confirm the full repair quote.</p></li><li><h3>Repair &amp; handover</h3><p>We repair, paint, road test and hand back your car.</p></li></ol>
${areasHtml}`,
    faq: [
      ['Do you repair accident cars in Nairobi?', 'Yes. We repair accident damage to the body, paint and mechanical parts, from minor bumper damage to bigger collision repairs.'],
      ['Can I pay for an accident repair through my insurance?', 'Yes. Tell us your insurer when you request a quote. We prepare the estimate and photos your insurer needs. You can also pay cash.'],
      ['How do I get a quote for accident repair?', 'Send photos of the damage through our order form or WhatsApp. We give an estimate from the photos and confirm the final quote after inspecting the car.'],
      ['What if my car cannot be driven after the accident?', 'Tell us in the form that the car is not drivable and we will advise on getting it to the workshop.'],
      ['Do you do spray painting and panel beating?', 'Yes. Panel beating, dent repair and spray painting with colour matching are part of our accident repair service.'],
    ],
  });

  // ------------------------------------------------------------ hybrid car service
  page({
    slug: 'hybrid-car-service', label: 'a hybrid car service',
    title: `Hybrid Car Service & Repair in Nairobi | ${g.name}`,
    description: `Hybrid car service and repair in Nairobi for Toyota Aqua, Prius, Harrier Hybrid, Honda Fit Hybrid, Vezel and Nissan Note e-Power: hybrid diagnostics, servicing and repairs.`,
    h1: 'Hybrid Car Service &amp; Repair in Nairobi',
    lead: 'Hybrids save fuel, but they need a garage that understands both the engine and the hybrid system. We service, diagnose and repair the hybrids Kenyans drive most.',
    serviceName: 'Hybrid car service and repair',
    body: `
${photo('hybrid', 'Hybrid car engine bay with orange high-voltage cables, serviced in Nairobi')}
<h2>Hybrid cars we service</h2>
<p>We work on Toyota hybrids such as the Aqua, Prius, Fielder and Axio Hybrid, Harrier Hybrid, RAV4 Hybrid and C-HR, as well as the Honda Fit Hybrid, Vezel Hybrid and Nissan Note and Serena e-Power.</p>
<h2>Hybrid servicing</h2>
<p>A hybrid service covers the engine (oil, filters, spark plugs and coolant) and the hybrid system: inverter coolant, the battery cooling fan and air intake filter, brake system checks and a full hybrid system scan. Moreover, a blocked battery cooling filter is a common cause of hybrid battery problems in dusty Nairobi.</p>
<h2>Hybrid diagnostics and repairs</h2>
${checks(['Hybrid system warning lights and "check hybrid system" messages', 'Hybrid battery health checks', 'Inverter and inverter coolant pump faults', 'e-CVT and hybrid gearbox problems, including Honda Fit Hybrid gearbox faults', '12V battery problems that stop a hybrid from starting', 'Regenerative braking and brake system faults'])}
${areasHtml}`,
    faq: [
      ['Do you service hybrid cars?', 'Yes. We service and repair Toyota, Honda and Nissan hybrids, including the Aqua, Prius, Harrier Hybrid, Fit Hybrid, Vezel and Note e-Power.'],
      ['What does a hybrid car service include?', 'Engine servicing plus hybrid checks: inverter coolant, battery cooling fan and filter, brakes and a full hybrid system scan.'],
      ['Why is my hybrid showing a check hybrid system warning?', 'Common causes include hybrid battery cooling problems, inverter faults or a weak 12V battery. A hybrid diagnostic scan finds the exact cause.'],
      ['How often should a hybrid be serviced?', 'Follow the same intervals as the engine service, usually every 5,000 to 10,000 km, and have the hybrid system checked at each service.'],
    ],
  });

  // ------------------------------------------------------------ body fabrication
  page({
    slug: 'body-fabrication', label: 'body fabrication',
    title: `Truck & Van Body Fabrication in Nairobi | ${g.name}`,
    description: `Body fabrication in Nairobi for vans, trucks and lorries: box bodies, dropside and flatbed bodies, high-side, cattle and tipper bodies, van shelving and body repairs.`,
    h1: 'Truck, Lorry &amp; Van Body Fabrication in Nairobi',
    lead: 'We build and repair bodies for vans, pickups, trucks and lorries, designed around what you carry. Tell us your vehicle and your load, and we quote the body that fits.',
    serviceName: 'Vehicle body fabrication',
    body: `
${photo('fabrication', 'Isuzu lorry with a fabricated box body, truck body fabrication in Nairobi')}
<h2>Bodies we build</h2>
${checks(['Box (closed) bodies for goods and deliveries', 'Dropside and flatbed bodies', 'High-side bodies for bulk loads', 'Cattle and livestock bodies', 'Tipper bodies', 'Van shelving, racks and partitions', 'Pickup canopies and carriers', 'Repairs and modifications to existing bodies'])}
${photo('fabrication2', 'Mitsubishi Fuso Canter lorry with a dropside body, Nairobi body fabrication')}
<h2>Vehicles we fabricate for</h2>
<p>We fabricate bodies for light and medium trucks such as the Isuzu NKR, NPR and FRR, Mitsubishi Fuso Canter, Toyota Dyna, Hino and FAW, as well as vans and pickups such as the Toyota Hiace, Nissan NV350, Toyota Probox and Hilux.</p>
<h2>Built for your business</h2>
<p>A good body matches the vehicle's payload, the load you carry and how you load it. Therefore, we agree the size, material and features with you before we start, and give you a clear quote and timeline.</p>
<h2>How to order a body</h2>
<p>Use our order form, choose "Body fabrication", and tell us the vehicle, the type of body and what you carry. Photos of the vehicle help us quote faster.</p>
${areasHtml}`,
    faq: [
      ['Do you build truck bodies in Nairobi?', 'Yes. We fabricate box, dropside, flatbed, high-side, cattle and tipper bodies for trucks and lorries, plus shelving and partitions for vans.'],
      ['Which trucks do you fabricate bodies for?', 'Light and medium trucks such as the Isuzu NKR, NPR and FRR, Mitsubishi Fuso Canter, Toyota Dyna, Hino and FAW, as well as vans and pickups.'],
      ['How do I get a quote for body fabrication?', 'Send the vehicle make and model, the body type and what you carry through our order form or WhatsApp. Photos of the vehicle help us quote faster.'],
      ['Do you repair existing truck bodies?', 'Yes. We repair and modify existing bodies, including floors, sides, doors and frames.'],
    ],
  });

  // ------------------------------------------------------------ brand specialist pages
  for (const b of BRAND_PAGES) {
    page({
      slug: b.slug, label: `your ${b.name}`,
      title: `${b.name} Specialist Garage in Nairobi: Service & Repair | ${g.name}`,
      description: `${b.name} service and repair in Nairobi: ${b.models.slice(0, 4).join(', ')} and more. Diagnostics, servicing, ${b.jobs.slice(0, 2).join(' and ').toLowerCase()}. Book with ${g.name}.`,
      h1: `${b.name} Service &amp; Repair in Nairobi`,
      lead: `${b.lead} Book a service, repair or diagnostic check for your ${b.name} online or on WhatsApp.`,
      serviceName: `${b.name} service and repair`,
      body: `
${b.img ? `<figure class="garage-photo"><img src="${b.img}" alt="${esc(`${b.name} service and repair in Nairobi`)}" title="${esc(`${b.name} specialist garage Nairobi`)}" width="1200" height="800" loading="lazy"><figcaption>${esc(b.name)}: representative photo.</figcaption></figure>` : ''}
<h2>${b.name} models we service</h2>
<p>We service and repair ${b.models.slice(0, -1).join(', ')} and ${b.models.at(-1)}, whether bought locally or imported from Japan or the UK.</p>
<h2>Common ${b.name} jobs we handle</h2>
${checks(b.jobs)}
<h2>${b.name} servicing</h2>
<p>We service your ${b.name} with the correct oil specification, quality filters and parts, and reset the service indicator. Moreover, a full diagnostic scan at every service catches faults early, before they become expensive repairs.</p>
<p>Want to buy one? See our ${b.make ? `<a href="/make/${b.make}/">${b.name} import prices</a>` : 'import catalogue'}.</p>
${areasHtml}`,
      faq: [
        [`Do you service and repair ${b.name} in Nairobi?`, `Yes. We service and repair ${b.models.slice(0, 4).join(', ')} and other ${b.name} models, including diagnostics, servicing and mechanical repairs.`],
        [`What ${b.name} problems do you fix?`, `Common jobs include ${b.jobs.slice(0, 4).map((j) => j.toLowerCase()).join(', ')}.`],
        [`How do I book my ${b.name} in?`, `Use our order form, choose the service you need and select ${b.name} as the make, or WhatsApp us on ${site.phone}.`],
      ],
    });
  }

  // ------------------------------------------------------------ booking page
  {
    const path = '/garage/book/';
    const cr = crumbs([['Home', '/'], ['Garage', '/garage/'], ['Book a service or repair', path]]);
    add(path, layout({ path, priority: 0.8,
      title: `Book a Car Service, Repair or Accident Repair in Nairobi | ${g.name}`,
      description: `Book a car service, repair, diagnostic test or check-up at ${g.name} in Nairobi. Choose a date and we confirm on WhatsApp.`,
      jsonld: [cr.ld, autoRepairLd],
      body: `<div class="wrap">${cr.html}
<header class="page-head" style="padding-bottom:12px"><span class="eyebrow" style="color:var(--accent)">${esc(g.name)}</span><h1>Order form: garage services, accident repair &amp; car imports</h1><p>Choose what you need, tell us about your car and send it straight to our WhatsApp. Add photos for accident repairs.</p>${serviceNav('book')}</header>
<div class="two-col" style="padding-bottom:48px">
  <div class="wizard">
    ${requestFormHtml({ makes: MAKES, I, service: 'repair' })}
  </div>
  <aside>${bookBox(null, 'by phone or WhatsApp')}</aside>
</div></div>`,
    }));
  }

  return { SERVICES, BRAND_PAGES, img, IMG };
}
