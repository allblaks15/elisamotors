export default (h) => {
  const { YEAR, MIN_YEAR, c, cta, telA, waA } = h;
  return {
    slug: 'car-import-duty-exemptions-kenya',
    keyword: 'car import duty exemptions Kenya',
    tag: 'Import guide',
    cluster: 'Import costs, duty & clearing',
    crumb: 'Car import duty exemptions',
    title: `Car Import Duty Exemptions in Kenya (${YEAR}): Disability, Diplomats`,
    description: `Who can import a car duty-free in Kenya? Tax exemptions for persons with disabilities, diplomats and returning residents explained, with the process and common pitfalls.`,
    h1: `Car Import Duty Exemptions in Kenya: Persons With Disabilities, Diplomats and Returning Residents`,
    excerpt: `Most imported cars pay full KRA duty, but a few groups can apply for exemptions. Here is who qualifies, how the process works and what to check before you import.`,
    published: '2026-10-26',
    updated: '2026-10-26',
    cars: ['toyota-sienta', 'toyota-noah', 'honda-freed', 'toyota-land-cruiser-prado'],
    html: `
<p>Almost every car imported into Kenya pays import duty, excise duty, VAT and other levies to KRA. However, the law allows a few groups to apply for a <b>car import duty exemption</b>. The three main ones are persons with disabilities, diplomats and some returning residents.</p>
<p>This guide explains each exemption, how the process works and the mistakes that cause delays. Exemption rules are detailed and they change. Therefore, always confirm the current requirements with KRA and the responsible office before you buy a car.</p>
${cta('Applying for an exemption?', 'We can source a suitable car and prepare the import documents your application needs.', 'Hi Elisa Motors, I am applying for a car import duty exemption.')}

<h2>Who can import a car duty-free in Kenya?</h2>
<p>Exemptions are not automatic. You must qualify, apply and receive approval before the car is cleared. In general, three groups can apply:</p>
<ul><li><b>Persons with disabilities</b>, for a vehicle suited or adapted to their disability</li><li><b>Diplomats and accredited international organisations</b>, under diplomatic privileges</li><li><b>Returning residents</b>, for a car they owned and used abroad, subject to conditions</li></ul>
<p>Every other buyer pays the normal taxes. Moreover, an exemption covers the taxes only. The car must still meet the 8-year rule (${MIN_YEAR} or newer in ${YEAR}), be right-hand drive and pass pre-shipment inspection.</p>

<h2>Tax exemption on car import for persons with disabilities</h2>
<p>Kenya allows persons with disabilities to apply for an exemption on a motor vehicle suited to their needs. In practice, the applicant registers with the National Council for Persons with Disabilities, gets the required medical assessment, and applies for the exemption through the National Treasury. The approval is then presented to KRA during clearing.</p>
<p>Conditions usually apply. For example, the vehicle may need to be adapted for the disability, there can be limits on how often you use the exemption, and selling the car early can make the waived taxes payable. Therefore, get the approval in writing before you pay for a car.</p>
<p>Practical cars for this purpose include compact MPVs with sliding doors and low floors, such as the ${c('toyota-sienta', 'Toyota Sienta')}, ${c('honda-freed', 'Honda Freed')} and ${c('toyota-noah', 'Toyota Noah')}. They make wheelchair access and transfers easier.</p>

<h2>Diplomat car imports from Japan and the UK</h2>
<p>Accredited diplomats and some international organisation staff can import vehicles free of duty under diplomatic privileges. The request goes through their mission and the Ministry of Foreign Affairs protocol office, and KRA clears the car against that approval.</p>
<p>Diplomatic cars carry special registration. If a diplomat later sells the car to a non-exempt buyer, the duty usually becomes payable at that point. As a result, buyers of ex-diplomatic cars should confirm that duty has been settled before paying.</p>

<h2>Returning residents</h2>
<p>Kenyans returning after living abroad may qualify for a concession on a car they owned and used there, subject to conditions on ownership period and residence. Read our full ${h.a('/blog/returning-residents-car-import-kenya/', 'returning residents car import guide')} for the details.</p>

<h2>Common mistakes with exemptions</h2>
<p>First, buying and shipping the car before approval. If approval is delayed or refused, the car sits at Mombasa and storage charges grow. Second, choosing a car that does not fit the exemption conditions. Third, missing documents or names that do not match. Finally, assuming the exemption also waives the 8-year rule. It does not.</p>

<h2>Our services: exemption-ready imports</h2>
<p>${h.site.name} does not decide exemptions, but we make the import side simple. We help you choose a car that fits the conditions, provide the pro forma invoice and vehicle details your application needs, and time the shipment around your approval.</p>

<h2>Talk to us</h2>
<p>Call ${telA()} or WhatsApp ${waA('Hi Elisa Motors, I need help importing a car under a duty exemption.')}. You can also send an <a href="/import-request/">import request</a>, or read our ${h.a('/blog/kra-import-duty-calculator-kenya/', 'KRA duty calculator guide')} to see what normal duty would cost.</p>
`,
    faq: [
      ['Can a person with a disability import a car duty-free in Kenya?', 'Yes, persons with disabilities can apply for a tax exemption on a suitable vehicle. The process involves registering with the National Council for Persons with Disabilities and applying through the National Treasury. Get written approval before buying.'],
      ['How do diplomats import cars to Kenya?', 'Accredited diplomats import vehicles duty-free through their mission and the Ministry of Foreign Affairs protocol office. KRA clears the car against that approval, and duty may become payable if the car is later sold to a non-exempt buyer.'],
      [`Does a duty exemption remove the 8-year rule?`, `No. An exempt car must still meet the 8-year rule (${MIN_YEAR} or newer in ${YEAR}), be right-hand drive and pass pre-shipment inspection.`],
      ['What happens if I sell a duty-exempt car early?', 'Selling an exempt car to someone who does not qualify usually makes the waived taxes payable. Check the conditions of your approval before selling.'],
    ],
  };
};
