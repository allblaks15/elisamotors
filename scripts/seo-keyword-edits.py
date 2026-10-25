"""One-off: align blog guides with the Kenyan keyword research (elisa motors research.xlsx).

For each guide it can: rename headings to the phrasing people search, add short sections that answer
real buyer questions the guide did not cover, and add FAQ entries. Safe to re-run: every edit checks
whether it was already applied. Prices in new text come from the live catalogue via h.P()/h.F().
"""
from pathlib import Path

BLOG = Path(__file__).resolve().parent.parent / 'src' / 'data' / 'blog'

EDITS = {
    'kenya-8-year-rule-car-import': {
        'rename': [
            ('<h2>The cut-off year for ${YEAR}</h2>', '<h2>The cut-off year for ${YEAR}: the oldest car you can import</h2>'),
            ('<h2>What happens to overage cars?</h2>', '<h2>What happens to overage cars? KRA penalties and re-export</h2>'),
        ],
        'faq': [
            r"""[`What is the oldest car year allowed to import to Kenya in ${h.YEAR}?`, `In ${h.YEAR}, the oldest cars you can import are those first registered in ${h.MIN_YEAR}. Cars registered in ${h.MIN_YEAR - 1} or earlier do not meet the 8-year rule.`]""",
            r"""[`When is the deadline to import a ${h.MIN_YEAR} car to Kenya?`, `A ${h.MIN_YEAR} car qualifies during ${h.YEAR}. From January ${h.YEAR + 1}, the cut-off moves to ${h.MIN_YEAR + 1}, so a ${h.MIN_YEAR} car should be shipped early enough to clear Mombasa before the year ends.`]""",
            r"""[`What is the KRA penalty for importing an overage car?`, `An overage car is not cleared for local use. Depending on the case, it may have to be re-exported at the owner's cost or face forfeiture, and port storage keeps adding up meanwhile. Always confirm the registration year before you pay.`]""",
        ],
    },
    'qisj-inspection-kenya': {
        'rename': [('<h2>What happens if a car fails?</h2>', '<h2>Failed QISJ inspection in Japan: what happens next?</h2>')],
        'faq': [r"""[`What happens if a car fails QISJ inspection in Japan?`, `The car cannot be shipped to Kenya until the faults are repaired and it passes a re-inspection. If the problem cannot be fixed economically, the car is sold elsewhere instead of being shipped.`]"""],
    },
    'japanese-car-auction-sheet-guide': {
        'rename': [('<h2>How to spot a fake or edited auction sheet</h2>', '<h2>Auction sheet verification: how to spot a fake or edited sheet</h2>')],
        'faq': [
            r"""[`How do I verify an authentic Japan car auction sheet?`, `Ask for the original sheet image with the auction house name and lot number, then have it checked against the auction's own records. ${h.site.name} verifies every auction sheet before purchase, including for Land Cruiser V8s and G-Wagons.`]""",
            r"""[`Can you import a grade R car from Japan to Kenya?`, `Yes, a grade R (repaired) car can be imported if it meets the 8-year rule and passes inspection. However, it should cost noticeably less, and the repair history must be checked carefully.`]""",
        ],
    },
    'buy-cars-from-japanese-auctions-kenya': {
        'rename': [('<h2>Who can bid?</h2>', '<h2>Who can bid? Direct bidding on Japanese auctions from Kenya</h2>')],
        'faq': [r"""[`Can I bid directly on Japanese car auctions from Kenya?`, `Japanese auctions such as USS only admit registered members, so Kenyan buyers bid through a licensed exporter or agent. ${h.site.name} places bids for you and shares the auction sheet first.`]"""],
    },
    'kra-import-duty-calculator-kenya': {
        'section_before': '<h2>Other costs besides KRA taxes</h2>',
        'section': r"""<h2>FOB and CIF Mombasa prices explained</h2>
<p>Japanese and UK exporters quote prices in two common ways. <b>FOB</b> (free on board) is the price of the car loaded onto the ship at the export port. It does not include sea freight or insurance. <b>CIF Mombasa</b> (cost, insurance and freight) adds shipping and marine insurance to Mombasa.</p>
<p>Neither figure is your final cost. After CIF, you still pay KRA taxes, port charges, clearing and registration. Moreover, KRA calculates duty from its CRSP value, not from the FOB or CIF invoice. That is why ${h.site.name} quotes one landed price instead.</p>
""",
        'faq': [
            r"""[`What does FOB price mean for a Kenyan car buyer?`, `FOB is the price of the car loaded onto the ship in Japan or the UK. It excludes sea freight, insurance, KRA duty, port charges and registration, so it is always well below the landed price in Kenya.`]""",
            r"""[`What does CIF Mombasa mean?`, `CIF Mombasa is the car's price plus sea freight and marine insurance to Mombasa port. You still pay KRA duty, port charges, clearing and registration on top.`]""",
        ],
    },
    'hybrid-and-electric-car-imports-kenya': {
        'faq': [r"""[`Is there a KRA duty reduction for hybrid cars from Japan?`, `Hybrids pay the same import duty structure as petrol cars, with excise based mainly on engine size, so a small-engine hybrid often pays less than a large petrol car. Fully electric cars have attracted lower excise duty, but rates change, so confirm current rates before you buy.`]"""],
    },
    'mombasa-port-car-clearing-guide': {
        'rename': [('<h2>Storage charges and how to avoid them</h2>', '<h2>Storage charges: how to avoid port delay charges at Mombasa</h2>')],
        'section_before': '<h2>How long does clearing take?</h2>',
        'section': r"""<h2>IDF, UCR number and the customs release order</h2>
<p>Three documents control every car import. First, the <b>Import Declaration Form (IDF)</b> is lodged through the KenTrade single window before the car arrives. Lodging it generates a <b>Unique Consignment Reference (UCR)</b> number, which follows the car through every step.</p>
<p>Next, the customs entry is lodged with KRA using the UCR, and duty is assessed and paid. Finally, after verification, KRA issues the <b>release order</b> that lets the car leave the port or the container freight station where it is held.</p>
<p>Private buyers can lodge these themselves through a licensed clearing agent. However, errors in names, chassis numbers or values cause delays. ${h.site.name} handles the IDF, UCR, entry and release for every car we import.</p>
""",
        'faq': [
            r"""[`How long does it take to clear a car at Mombasa port?`, `With complete documents, clearing usually takes about 3 to 7 working days after the ship docks. Missing documents, valuation disputes or verification delays can add more time and storage charges.`]""",
            r"""[`What is a UCR number for car imports in Kenya?`, `The Unique Consignment Reference (UCR) is generated when the Import Declaration Form is lodged on KenTrade. It links the car to its customs entry, duty payment and release order.`]""",
            r"""[`How do I avoid port delay charges at Mombasa?`, `Lodge the IDF before the ship arrives, have the bill of lading, inspection certificate and logbook ready, and pay duty promptly. Storage charges start after the free period, so delays cost money every day.`]""",
        ],
    },
    'car-import-scams-kenya': {
        'faq': [r"""[`What are the risks of a direct wire transfer to Japanese car brokers?`, `A telegraphic transfer is hard to reverse, so if the broker does not ship, recovering money abroad is slow and costly. Verify the company, confirm bank details by phone and keep every document, or use a Kenyan importer who is accountable locally.`]"""],
    },
    'car-asset-finance-and-insurance-kenya': {
        'section_before': '<h2>Logbook loans: when they make sense</h2>',
        'section': r"""<h2>Buying an imported car on instalments in Kenya</h2>
<p>Many Kenyans buy imported cars on instalments through bank or SACCO asset finance. Typically, you pay a deposit, the lender pays the balance, and you repay monthly over an agreed period. The car is registered jointly with the lender until the loan is cleared.</p>
<p>For direct imports, lenders usually want a pro forma invoice, the landed cost breakdown and proof of the car's age. Therefore, choose a finance-ready importer. ${h.site.name} provides these documents for every car, from a ${h.c('mazda-cx-5', 'Mazda CX-5')} to a ${h.c('toyota-land-cruiser-300', 'Land Cruiser V8')}.</p>
""",
        'faq': [r"""[`Can I buy an imported Japanese car on instalments in Kenya?`, `Yes. Banks and SACCOs offer asset finance for imported cars: you pay a deposit and repay the balance monthly. Lenders need a pro forma invoice and landed cost breakdown, which ${h.site.name} provides.`]"""],
    },
    'toyota-land-cruiser-v8-price-in-kenya': {
        'section_before': '<h2>Toyota V8 buying checklist</h2>',
        'section': r"""<h2>What can KES 12 million or KES 15 million buy?</h2>
<p>Budgets around <b>KES 12 million</b> fit a Land Cruiser 200 V8, such as the ${h.v('toyota-land-cruiser-200', 'gx-r-4-5-v8-diesel', 'LC200 GX-R')} at about ${h.P('toyota-land-cruiser-200', 'gx-r-4-5-v8-diesel')}. Around <b>KES 15 million</b>, you can choose a well-specified ${h.v('toyota-land-cruiser-200', 'vx-4-5-v8-diesel', 'LC200 VX')} (about ${h.P('toyota-land-cruiser-200', 'vx-4-5-v8-diesel')}).</p>
<p>The newer Land Cruiser 300 starts higher. For example, the ${h.v('toyota-land-cruiser-300', 'ax-3-3-twin-turbo-diesel', 'LC300 AX diesel')} lands at about ${h.P('toyota-land-cruiser-300', 'ax-3-3-twin-turbo-diesel')}. Therefore, tell us your budget and we will find the newest, lowest-mileage V8 within it.</p>
""",
        'faq': [
            r"""[`What Toyota Land Cruiser V8 can I get for KES 12 million?`, `About KES 12 million buys a Land Cruiser 200 V8 such as the GX-R or an entry VX (around ${h.P('toyota-land-cruiser-200', 'gx-r-4-5-v8-diesel')} for the GX-R). The Land Cruiser 300 starts from about ${h.F('toyota-land-cruiser-300')}.`]""",
            r"""[`Does colour change the Toyota V8 price in Kenya?`, `Slightly. White, pearl white and black V8s are the most demanded in Kenya, so they can cost a little more at auction and resell faster. Other colours can save money on the same grade and year.`]""",
        ],
    },
    'g-wagon-price-in-kenya': {
        'section_before': '<h2>G-Wagon buying checklist</h2>',
        'section': r"""<h2>What G-Wagon can KES 20, 30 or 40 million buy?</h2>
<p>At about <b>KES 20 million</b>, the diesel ${h.v('mercedes-benz-g-class', 'g400d', 'G400d')} is the entry point (about ${h.P('mercedes-benz-g-class', 'g400d')}). Around <b>KES 30 million</b>, you reach the ${h.v('mercedes-benz-g-class', 'g63-amg', 'G63 AMG')}, which lands at about ${h.P('mercedes-benz-g-class', 'g63-amg')}.</p>
<p>With <b>KES 40 million</b>, you can choose a late, low-mileage G63 with premium options such as the AMG Night package or carbon trim. Above that, special editions and customised cars are quoted individually.</p>
""",
        'faq': [
            r"""[`What G-Wagon can I buy for KES 20 million in Kenya?`, `About KES 20 million buys a G400d diesel G-Class (around ${h.P('mercedes-benz-g-class', 'g400d')}). A G63 AMG lands at about ${h.P('mercedes-benz-g-class', 'g63-amg')}.`]""",
            r"""[`Does a black G-Wagon cost more in Kenya?`, `Black and matte finishes are popular, especially on the G63, so they can cost slightly more and resell quickly. The grade, year and mileage affect the price far more than colour.`]""",
        ],
    },
    'harrier-cx5-prado-tx-price-in-kenya': {
        'section_before': '<h2>Buying checklist for Harrier, CX-5 and Prado</h2>',
        'section': r"""<h2>What KES 2.8 million, 3.5 million and 7 million buy</h2>
<p>About <b>KES 2.8 million</b> buys a fresh-import ${h.v('mazda-cx-5', '20s-2-0', 'Mazda CX-5 20S')} (about ${h.P('mazda-cx-5', '20s-2-0')}). At <b>KES 3.5 million</b>, you can choose a better-specified diesel ${h.v('mazda-cx-5', 'xd-2-2-diesel-4wd', 'CX-5 XD')}. A new-shape Toyota Harrier starts higher, from about ${h.F('toyota-harrier')}.</p>
<p>Around <b>KES 7 million</b> duty paid gets you a ${h.v('toyota-land-cruiser-prado', 'tx-2-7-petrol-7-seat', 'Prado TX 2.7 petrol')} (about ${h.P('toyota-land-cruiser-prado', 'tx-2-7-petrol-7-seat')}). The diesel TX starts from about ${h.P('toyota-land-cruiser-prado', 'tx-2-8-diesel')}.</p>
""",
        'faq': [
            r"""[`Can I get a Toyota Harrier for KES 3.5 million?`, `A ${h.MIN_YEAR}+ new-shape Harrier lands from about ${h.F('toyota-harrier')}, so KES 3.5 million is below its import price. At that budget, a Mazda CX-5 or Toyota RAV4 is the closer match.`]""",
            r"""[`Does colour affect the Harrier, CX-5 or Prado price?`, `A little. White, pearl and black are most in demand, and Mazda's Soul Red is a popular paid option. Colour matters less than year, grade and mileage.`]""",
        ],
    },
    'toyota-prado-price-in-kenya': {
        'section_before': '<h2>Prado buying checklist</h2>',
        'section': r"""<h2>Is the Prado TX good off-road?</h2>
<p>Yes. Every Prado TX has full-time four-wheel drive with a low-range transfer case, so it handles murram, mud and steep farm roads with ease. Higher grades add features such as crawl control and adaptive suspension. Moreover, its ground clearance and tough suspension suit rough upcountry roads.</p>
<h2>Is there a manual Prado TX?</h2>
<p>Japan-market Prados are automatic, so manual-gearbox Prados are rare in our source markets. If you specifically need a manual for heavy-duty work, ask us to search. Otherwise, the ${h.c('toyota-land-cruiser-70', 'Land Cruiser 70')} is the classic tough alternative.</p>
""",
        'faq': [r"""[`Does the Prado TX hold its value in Kenya?`, `Yes. The Prado TX is one of the best value-retaining cars in Kenya because demand is strong and parts are widely available. Diesel units and higher grades resell especially well.`]"""],
    },
    'toyota-harrier-price-in-kenya': {
        'section_before': '<h2>Harrier buying checklist</h2>',
        'section': r"""<h2>Harrier seating capacity and boot space</h2>
<p>The Toyota Harrier seats five adults. Its boot comfortably takes a family's weekly shopping or several suitcases, and the rear seats fold 60:40 for longer items. However, it has no third row, so larger families often compare it with the seven-seat ${h.c('mazda-cx-8', 'Mazda CX-8')}.</p>
""",
    },
    'import-cars-from-uk-to-kenya': {
        'section_before': '<h2>Common UK import mistakes to avoid</h2>',
        'section': r"""<h2>Check UK cars for road-salt rust underneath</h2>
<p>UK roads are salted in winter, and salt speeds up corrosion. Therefore, check the undercarriage of every ex-UK car: brake lines, subframes, sills and suspension mounts. Light surface rust is normal, but heavy corrosion is expensive to fix.</p>
<p>${h.site.name} asks for underbody photos and inspection notes before buying any UK car. As a result, you avoid rusty cars that look clean from above.</p>
<h2>A full turnkey UK car import service</h2>
<p>You do not have to manage the UK side yourself. With our turnkey service, you choose the car or custom-order a specific spec, and we buy, inspect, ship, clear and register it. You receive one all-inclusive landed price before you commit.</p>
""",
    },
    'uk-car-export-documents-kenya': {
        'section_before': '<h2>Documents needed in Kenya</h2>',
        'section': r"""<h2>Do you need a UK export licence?</h2>
<p>No. Ordinary used cars do not need an export licence to leave the UK. However, the DVLA must be told that the car is being permanently exported, using the V5C logbook. The seller or exporter completes this step.</p>
""",
        'faq': [r"""[`Do I need an export licence to ship a car from the UK to Kenya?`, `No. Ordinary used cars do not need a UK export licence. The DVLA must be notified of the permanent export using the V5C, and the car needs its export and inspection documents for Kenya.`]"""],
    },
}


def apply(slug, e):
    p = BLOG / f'{slug}.js'
    s = p.read_text('utf8')
    orig = s
    for old, new in e.get('rename', []):
        if new not in s:
            assert old in s, f'{slug}: heading not found: {old}'
            s = s.replace(old, new, 1)
    sec = e.get('section')
    if sec:
        first = sec.split('</h2>')[0]
        if first not in s:
            anchor = e['section_before']
            assert anchor in s, f'{slug}: anchor not found: {anchor}'
            s = s.replace(anchor, sec + '\n' + anchor, 1)
    for q in e.get('faq', []):
        key = q.split('`')[1]
        if key in s:
            continue
        i = s.rfind('\n    ],\n  };\n};')
        assert i > 0, f'{slug}: faq array end not found'
        s = s[:i] + '\n      ' + q + ',' + s[i:]
    if s != orig:
        p.write_text(s, 'utf8')
        print('updated', slug)


# Round 2: FAQ answers for the high-intent variations on each hub guide
# (used / brand new / cheapest / for sale in Nairobi / KSh / diesel / trims / ex-Japan & ex-UK ...)
RR = 'land-rover-range-rover'
EDITS2 = {
    'range-rover-price-in-kenya': {'faq': [
        r"""[`What is the cheapest Range Rover in Kenya?`, `The most affordable Range Rover to import is the ${h.c('land-rover-range-rover-evoque', 'Range Rover Evoque')}, from about ${h.F('land-rover-range-rover-evoque')} landed. The Velar starts from about ${h.F('land-rover-range-rover-velar')}.`]""",
        r"""[`How much does a Range Rover cost in Kenya shillings (KSh)?`, `Landed prices for ${h.MIN_YEAR}+ imports are roughly: Evoque ${h.F('land-rover-range-rover-evoque')} to ${h.T('land-rover-range-rover-evoque')}, Velar ${h.F('land-rover-range-rover-velar')} to ${h.T('land-rover-range-rover-velar')}, Range Rover Sport ${h.F('land-rover-range-rover-sport')} to ${h.T('land-rover-range-rover-sport')} and the full-size Range Rover ${h.F('land-rover-range-rover-vogue')} to ${h.T('land-rover-range-rover-vogue')}.`]""",
        r"""[`What is the price difference between a brand new and a second hand Range Rover in Kenya?`, `A brand new Range Rover from a showroom costs considerably more than a ${h.MIN_YEAR}+ second hand import. Importing a used Range Rover from the UK or Japan is the most common way Kenyans save money while still getting a recent model.`]""",
        r"""[`How much is a diesel Range Rover in Kenya?`, `Diesel models are the most popular. A Range Rover Sport HSE 3.0 SDV6 lands at about ${h.P('land-rover-range-rover-sport', 'hse-3-0-sdv6')}, and a full-size Range Rover Vogue 4.4 SDV8 diesel at about ${h.P('land-rover-range-rover-vogue', 'vogue-4-4-sdv8')}.`]""",
        r"""[`Can I buy a locally used Range Rover instead of importing?`, `Yes. Locally used Range Rovers in Nairobi and Mombasa can be cheaper, but you inherit any local wear and unknown service history. A ${h.MIN_YEAR}+ import comes with verifiable history and a fresh inspection.`]""",
    ]},
    'range-rover-trims-explained-kenya': {'faq': [
        r"""[`What is the Range Rover SVR or Supercharged price in Kenya?`, `The V8 supercharged and SVR models are rare special-order cars. We quote them individually based on the exact car, year and mileage you want.`]""",
        r"""[`What do TDV6, SDV6 and SDV8 mean on a Range Rover?`, `They are Land Rover diesel engines: TDV6 and SDV6 are 3.0-litre V6 diesels (SDV6 is the stronger, twin-turbo version) and SDV8 is the 4.4-litre V8 diesel used in the full-size Range Rover.`]""",
        r"""[`What is the Range Rover Autobiography price in Kenya?`, `The Autobiography is the top luxury trim. For example, a new-shape Range Rover P530 Autobiography lands at about ${h.P('land-rover-range-rover-vogue', 'range-rover-p530-autobiography-v8-l460')}, and a Range Rover Sport Autobiography D350 at about ${h.P('land-rover-range-rover-sport', 'autobiography-d350-l461')}.`]""",
    ]},
    'range-rover-sport-price-in-kenya': {'faq': [
        r"""[`Where can I buy a Range Rover Sport for sale in Kenya?`, `You can buy a locally used Range Rover Sport in Nairobi or Mombasa, or import a ${h.MIN_YEAR}+ unit from the UK or Japan with ${h.site.name}. Imports land from about ${h.F('land-rover-range-rover-sport')}, delivered to Nairobi, Mombasa or upcountry.`]""",
        r"""[`How much is a Range Rover Sport diesel in Kenya?`, `A Range Rover Sport HSE 3.0 SDV6 diesel lands at about ${h.P('land-rover-range-rover-sport', 'hse-3-0-sdv6')}. The newer Autobiography D350 diesel lands at about ${h.P('land-rover-range-rover-sport', 'autobiography-d350-l461')}.`]""",
    ]},
    'range-rover-velar-price-in-kenya': {'faq': [r"""[`What is the price of a Range Rover Velar in KSh?`, `A ${h.MIN_YEAR}+ Range Rover Velar lands at about ${h.F('land-rover-range-rover-velar')} to ${h.T('land-rover-range-rover-velar')}, depending on engine, trim, year and mileage. We deliver to Nairobi, Mombasa and upcountry.`]"""]},
    'range-rover-evoque-price-in-kenya': {'faq': [r"""[`What is the price of a Range Rover Evoque in KSh?`, `A ${h.MIN_YEAR}+ Range Rover Evoque lands at about ${h.F('land-rover-range-rover-evoque')} to ${h.T('land-rover-range-rover-evoque')}, making it the most affordable Range Rover to import.`]"""]},
    'toyota-land-cruiser-v8-price-in-kenya': {'faq': [
        r"""[`How much is a Toyota V8 in Kenya shillings?`, `A ${h.MIN_YEAR}+ Land Cruiser 200 V8 lands at about ${h.F('toyota-land-cruiser-200')} to ${h.T('toyota-land-cruiser-200')}, and the newer Land Cruiser 300 at about ${h.F('toyota-land-cruiser-300')} to ${h.T('toyota-land-cruiser-300')}.`]""",
        r"""[`What is the brand new Toyota V8 price in Kenya?`, `A brand new Land Cruiser 300 from a Nairobi showroom costs well above an imported ${h.MIN_YEAR}+ unit. Importing a nearly new LC300 from Japan or the UK is the usual way to save, from about ${h.F('toyota-land-cruiser-300')} landed.`]""",
        r"""[`Is a locally used Toyota V8 cheaper than an import?`, `Locally used V8s can be cheaper, especially older ones, but history and mileage are harder to verify. A direct import gives you a ${h.MIN_YEAR}+ car with an auction sheet or service records and a fresh inspection.`]""",
        r"""[`How much is a 2019 Toyota V8 ZX or VX?`, `For 2019 units, a Land Cruiser 200 VX diesel lands at about ${h.P('toyota-land-cruiser-200', 'vx-4-5-v8-diesel')} and the ZX petrol at about ${h.P('toyota-land-cruiser-200', 'zx-4-6-v8-petrol')}. 2018 and older V8s cannot be imported in ${h.YEAR}; they are only available locally used.`]""",
        r"""[`What is the Toyota V8 twin turbo diesel price in Kenya?`, `Both diesel V8 generations are twin-turbo: the LC200 4.5 V8 diesel (from about ${h.P('toyota-land-cruiser-200', 'gx-r-4-5-v8-diesel')}) and the LC300 3.3 twin-turbo V6 diesel (from about ${h.P('toyota-land-cruiser-300', 'ax-3-3-twin-turbo-diesel')}).`]""",
        r"""[`Is a Toyota V8 cheaper ex-Japan or ex-UK?`, `Ex-Japan V8s are usually cheaper to buy and ship, with auction sheets showing condition. Ex-UK V8s often have full dealer service history and higher trims. We compare both for you and quote the landed price.`]""",
        r"""[`What is the Land Cruiser V8 Sahara?`, `Sahara is the top Land Cruiser 200 grade name in some markets. The Japanese equivalents are the ZX and VX grades, which are what we usually import for Kenya.`]""",
        r"""[`What is the Toyota Land Cruiser V8 diesel fuel consumption?`, `The Land Cruiser 200 4.5 V8 diesel returns about 9 km/L and the LC300 3.3 twin-turbo diesel about 10 km/L, depending on traffic, load and driving style.`]""",
    ]},
    'g-wagon-price-in-kenya': {'faq': [
        r"""[`What is the cheapest G-Wagon in Kenya?`, `The most affordable new-shape G-Wagon to import is the ${h.v('mercedes-benz-g-class', 'g350d-2019-2021', 'G350d diesel')}, from about ${h.P('mercedes-benz-g-class', 'g350d-2019-2021')} landed. The G400d follows from about ${h.P('mercedes-benz-g-class', 'g400d')}.`]""",
        r"""[`What is the Mercedes G350d price in Kenya?`, `A 2019 to 2021 G350d lands at about ${h.P('mercedes-benz-g-class', 'g350d-2019-2021')}. It has the same three locking differentials as the G400d with a slightly less powerful inline-6 diesel.`]""",
        r"""[`How much is a G-Wagon in Kenya shillings?`, `A ${h.MIN_YEAR}+ G-Class lands at about ${h.F('mercedes-benz-g-class')} to ${h.T('mercedes-benz-g-class')}, from the G350d diesel to a fully loaded G63 AMG.`]""",
        r"""[`What is the price of a used vs brand new G-Wagon in Kenya?`, `A brand new G-Class from a showroom costs well above a ${h.MIN_YEAR}+ second hand import. Importing a used G-Wagon from the UK or Japan saves money and still gets you the current W463A model.`]""",
        r"""[`Is a G-Wagon cheaper ex-UK or ex-Japan?`, `Both work well. Ex-UK G-Wagons usually come with full Mercedes service history and UK-spec options, while ex-Japan cars often have low mileage. We compare both and quote one duty-paid price.`]""",
        r"""[`What does a Brabus G63 cost in Kenya?`, `Brabus G-Wagons are rare, highly customised cars, so prices vary widely. We source and quote them individually. A standard G63 AMG lands at about ${h.P('mercedes-benz-g-class', 'g63-amg')}.`]""",
        r"""[`What is the G63 AMG fuel consumption in Kenya?`, `Expect about 6 to 7 km/L from the G63's 4.0 twin-turbo V8, less in heavy Nairobi traffic. The G350d and G400d diesels return about 10 km/L.`]""",
    ]},
    'harrier-cx5-prado-tx-price-in-kenya': {'faq': [
        r"""[`Which is cheapest: Toyota Harrier, Mazda CX-5 or Prado TX?`, `The Mazda CX-5 is the cheapest to import (from about ${h.F('mazda-cx-5')}), followed by the Toyota Harrier (from about ${h.F('toyota-harrier')}) and the Prado TX (from about ${h.F('toyota-land-cruiser-prado')}).`]""",
        r"""[`Where can I buy a Harrier, CX-5 or Prado TX for sale in Nairobi?`, `You can buy locally used in Nairobi, or import a ${h.MIN_YEAR}+ unit with ${h.site.name} and have it delivered to Nairobi, Mombasa or upcountry. Imports come with a verified auction sheet and fresh inspection.`]""",
        r"""[`Are showroom prices in Nairobi higher than imports?`, `Usually yes. Showroom and brand new prices include dealer margins and newer stock, while a ${h.MIN_YEAR}+ direct import from Japan is typically the best value for a Harrier, CX-5 or Prado TX.`]""",
    ]},
    'toyota-prado-price-in-kenya': {'faq': [
        r"""[`Prado TX petrol vs diesel: which is better in Kenya?`, `The 2.8 diesel is stronger, more economical and resells better, so most Kenyans prefer it (from about ${h.P('toyota-land-cruiser-prado', 'tx-2-8-diesel')}). The 2.7 petrol is cheaper to buy (from about ${h.P('toyota-land-cruiser-prado', 'tx-2-7-petrol-5-seat')}) and simpler to maintain.`]""",
        r"""[`What is the Prado TX-L package price in Kenya?`, `The TX-L adds leather, a sunroof and power seats. The TX-L 2.8 diesel lands at about ${h.P('toyota-land-cruiser-prado', 'tx-l-2-8-diesel')} and the TX-L 2.7 petrol at about ${h.P('toyota-land-cruiser-prado', 'tx-l-2-7-petrol')}.`]""",
        r"""[`What is the Toyota Prado TZ-G (TX-G) price in Kenya?`, `The top TZ-G 2.8 diesel, sometimes called TXG in Kenya, lands at about ${h.P('toyota-land-cruiser-prado', 'tz-g-2-8-diesel')}. It adds adaptive suspension, KDSS and a multi-terrain monitor.`]""",
        r"""[`Is there a 3.0 D-4D Prado I can import?`, `The 3.0 D-4D diesel was replaced by the 2.8 diesel in 2015, so ${h.MIN_YEAR}+ Prados you can import have the 2.8. Older 3.0 D-4D Prados are only available locally used.`]""",
        r"""[`What is the brand new Toyota Prado price in Kenya?`, `A brand new Prado from a showroom costs considerably more than a ${h.MIN_YEAR}+ import. The newest Prado generation is the ${h.c('toyota-land-cruiser-250', 'Land Cruiser 250')}, which lands from about ${h.F('toyota-land-cruiser-250')} as a nearly new import.`]""",
    ]},
    'toyota-harrier-price-in-kenya': {'faq': [
        r"""[`What are the Harrier Progress, Premium and Elegance grades?`, `They are grades of the old-shape Harrier (sold until 2020): Elegance is the base grade, Premium adds more equipment, and Progress is the top grade with JBL audio and more safety tech. The new-shape Harrier uses grades such as Premium and Z.`]""",
        r"""[`What is the Toyota Harrier fuel consumption per km?`, `The 2.0 petrol Harrier returns about 14 km/L (roughly 7 litres per 100 km), and the 2.5 hybrid about 21 km/L. Nairobi traffic lowers these figures.`]""",
        r"""[`What is the Harrier ex-Japan price in Kenya?`, `A ${h.MIN_YEAR}+ ex-Japan Toyota Harrier lands at about ${h.F('toyota-harrier')} to ${h.T('toyota-harrier')}, including shipping, KRA duty, clearing and registration.`]""",
    ]},
    'mazda-cx-5-price-in-kenya': {'faq': [
        r"""[`What is the Mazda CX-5 XD L Package?`, `The XD L Package is the 2.2 diesel CX-5 with leather seats, power seats and extra comfort features. A ${h.MIN_YEAR}+ diesel CX-5 lands at about ${h.P('mazda-cx-5', 'xd-2-2-diesel-4wd')}.`]""",
        r"""[`What is the Mazda CX-5 ex-Japan price in Kenya?`, `A ${h.MIN_YEAR}+ ex-Japan CX-5 lands at about ${h.F('mazda-cx-5')} to ${h.T('mazda-cx-5')}, making it one of the cheapest mid-size SUVs to import.`]""",
        r"""[`Mazda CX-5 petrol vs diesel: which is better in Kenya?`, `The 2.2 diesel is more economical and stronger on highways, but it needs good-quality fuel and regular long drives. The 2.0 and 2.5 petrols are simpler and suit mostly town driving.`]""",
    ]},
    'import-cars-from-uk-to-kenya': {'faq': [
        r"""[`How much does it cost to import a car from the UK to Kenya?`, `The landed cost includes the UK price, shipping to Mombasa, KRA duty, port charges, clearing and registration. For example, a Range Rover Sport lands from about ${h.F('land-rover-range-rover-sport')}. We quote one all-inclusive price for any car.`]""",
        r"""[`How long does it take to import a car from the UK to Kenya?`, `Shipping from the UK to Mombasa takes about 5 to 7 weeks, plus about one week for clearing and registration. Allow roughly 6 to 9 weeks from purchase to collection.`]""",
        r"""[`What is the age limit for importing a car from the UK to Kenya?`, `The 8-year rule applies to UK imports too: in ${h.YEAR}, only cars first registered in ${h.MIN_YEAR} or later qualify. A ${h.MIN_YEAR - 1} car cannot be imported this year.`]""",
        r"""[`Can I get a VAT refund on a UK car exported to Kenya?`, `Some UK dealers sell VAT-qualifying cars at a lower export price because the car leaves the UK. Ask whether a car is VAT-qualifying; it can make UK prices more competitive.`]""",
        r"""[`Should I do an HPI and mileage check on a UK car?`, `Yes. An HPI or history check shows finance owed, write-off categories and mileage records, and MOT history confirms mileage over time. We run these checks before buying any UK car.`]""",
        r"""[`What UK cars can I import for under KES 3 million or 5 million?`, `Under KES 3 million fits compact cars such as a ${h.c('volkswagen-polo', 'VW Polo')} or ${h.c('volkswagen-golf', 'Golf')}. Under KES 5 million opens up SUVs such as a ${h.c('land-rover-discovery-sport', 'Discovery Sport')} or ${h.c('volkswagen-tiguan', 'Tiguan')}.`]""",
        r"""[`Is RoRo or container shipping better from the UK to Mombasa?`, `RoRo (roll-on roll-off) is usually cheaper for a single car. Container shipping costs more but protects high-value cars such as a Range Rover. Read our ${h.a('/blog/roro-vs-container-shipping-to-mombasa/', 'RoRo vs container guide')}.`]""",
    ]},
    'import-cars-from-japan-to-kenya': {'faq': [
        r"""[`How many days does a car take to ship from Japan to Kenya?`, `Shipping from Japanese ports such as Yokohama or Nagoya to Mombasa usually takes about 4 to 6 weeks, plus about one week for clearing and registration.`]""",
        r"""[`What are the main Japanese car auction sites for Kenyan buyers?`, `Major Japanese auctions include USS (the largest), TAA, JU and CAA groups. Kenyan buyers bid through a licensed exporter or importer, who shares the auction sheet before bidding.`]""",
        r"""[`Is the token deposit for a Japan car auction refundable?`, `Policies differ between agents. Typically the deposit is refunded or carried forward if you do not win, but it can be lost if you win and then cancel. Always get the refund terms in writing.`]""",
        r"""[`What is the IDF fee for Japanese car imports in Kenya?`, `The Import Declaration Fee is charged by KRA as a percentage of the customs value, alongside import duty, excise duty, VAT and the Railway Development Levy. Our landed price already includes it.`]""",
        r"""[`Does KRA need a translation of the Japanese export certificate?`, `Yes, an English translation of the Japanese export certificate is needed for registration in Kenya. ${h.site.name} provides it with every car we import.`]""",
        r"""[`What is the total landed cost of a car from Japan?`, `It is the car price, shipping and insurance to Mombasa, KRA duty, port charges, clearing and registration. For example, a Toyota Harrier lands from about ${h.F('toyota-harrier')} and a Mazda CX-5 from about ${h.F('mazda-cx-5')}.`]""",
    ]},
    'japanese-car-auction-sheet-guide': {'faq': [
        r"""[`What does auction sheet grade 4B mean?`, `Grade 4 is a good car with minor wear, and the letter after it is the interior grade, where B means good condition. A 4B car is a solid buy for Kenya.`]""",
        r"""[`What does auction sheet grade 3.5 mean?`, `Grade 3.5 means average condition with more visible wear or small dents. It can be good value, but check the body map and inspector comments carefully.`]""",
    ]},
}

for slug, e in {**EDITS}.items():
    apply(slug, e)
for slug, e in EDITS2.items():
    apply(slug, e)
