// One order form for everything Elisa Motors does: accident repair, repairs, servicing, check-ups,
// diagnostics, hybrid service and car imports. Fields appear for the service chosen (data-for="...").
// Submitting opens WhatsApp with the full request (photos are shared too on phones that support it)
// and emails a copy via send-order.php. Behaviour lives in assets/js/app.js ([data-request-form]).

export const REQUEST_SERVICES = [
  ['accident', 'Accident repair'], ['repair', 'Repair'], ['service', 'Car service'], ['checkup', 'Check-up / inspection'],
  ['diagnostics', 'Diagnostics'], ['hybrid', 'Hybrid car service'], ['fabrication', 'Body fabrication (vans & trucks)'], ['import', 'Import a car'], ['other', 'Other'],
];
// Common motor insurers in Kenya, for the customer to say who THEIR insurer is (not an approval claim)
const INSURERS = ['Jubilee', 'Britam', 'CIC', 'APA', 'Madison', 'Old Mutual (UAP)', 'GA Insurance', 'ICEA LION', 'Heritage', 'Directline', 'Kenindia', 'Sanlam', 'First Assurance', 'Geminia', 'Occidental', 'Pacis', 'Trident', 'Takaful'];
const LEAD = ['Land Rover / Range Rover', 'Mercedes-Benz', 'BMW', 'Audi', 'Porsche', 'Toyota'];
const GARAGE = 'accident,repair,service,checkup,diagnostics,hybrid,fabrication,other';
// Commercial vehicle makes for body fabrication
const TRUCKS = ['Hino', 'FAW', 'Tata', 'Scania', 'MAN', 'Foton', 'Sinotruk'];

export function requestFormHtml({ makes, I, service = 'accident', idPrefix = 'rf' }) {
  const year = new Date().getFullYear();
  const opt = (arr, sel) => arr.map((x) => `<option${x === sel ? ' selected' : ''}>${x}</option>`).join('');
  const chips = (name, arr, checked = 0) => `<div class="chips">${arr.map((t, i) => `<label class="chip"><input type="radio" name="${name}" value="${t}"${i === checked ? ' checked' : ''}>${t}</label>`).join('')}</div>`;
  const otherMakes = makes.filter((m) => !['Land Rover', 'Mercedes-Benz', 'BMW', 'Audi', 'Porsche', 'Toyota'].includes(m));
  return `<form class="stack request-form" data-request-form novalidate>
  <label class="hp" aria-hidden="true">Website<input name="website" tabindex="-1" autocomplete="off"></label>
  <div class="field"><span class="field-label">What do you need? <b class="req">*</b></span>
    <div class="chips">${REQUEST_SERVICES.map(([v, t]) => `<label class="chip"><input type="radio" name="service" value="${t}" data-slug="${v}"${v === service ? ' checked' : ''}>${t}</label>`).join('')}</div></div>

  <div class="grid-2">
    <label class="field"><span>Car make <b class="req">*</b></span><select name="make" required><option value="">Choose make…</option><optgroup label="Our specialists">${opt(LEAD)}</optgroup><optgroup label="Other makes">${opt(otherMakes)}</optgroup><optgroup label="Trucks & lorries">${opt(TRUCKS)}<option>Other</option></optgroup></select></label>
    <label class="field"><span>Model <b class="req">*</b></span><input name="model" required placeholder="e.g. Range Rover Sport, C200, X5, Prado"></label>
    <label class="field"><span data-for="${GARAGE}">Year</span><span data-for="import" hidden>Year from</span><select name="year"><option value="">Select year</option>${opt(Array.from({ length: 25 }, (_, i) => year - i))}</select></label>
    <label class="field" data-for="${GARAGE}"><span>Registration no. <span class="muted small">(optional)</span></span><input name="reg" placeholder="e.g. KDA 123A" autocomplete="off"></label>
  </div>

  <div class="field" data-for="service"><span class="field-label">Type of service</span>${chips('service_type', ['Minor service', 'Major service', 'Full service', 'Not sure'])}</div>
  <div class="field" data-for="fabrication"><span class="field-label">Type of body</span>${chips('body_type', ['Box / closed body', 'Dropside / flatbed', 'High-side body', 'Cattle body', 'Tipper body', 'Van shelving / partitions', 'Body repair', 'Other'])}</div>
  <div class="field" data-for="checkup"><span class="field-label">Type of check-up</span>${chips('checkup_type', ['General check-up', 'Pre-purchase inspection', 'NTSA inspection prep'])}</div>

  <fieldset class="rf-group" data-for="accident">
    <legend>Accident details</legend>
    <div class="field"><span class="field-label">Is the car insured?</span>${chips('insured', ['Yes, comprehensive', 'Yes, third party', 'No'])}</div>
    <label class="field" data-insurer><span>Insurance company</span><select name="insurer"><option value="">Choose insurer…</option>${opt(INSURERS)}<option>Other</option></select></label>
    <div class="field"><span class="field-label">How will the repair be paid?</span>${chips('payment', ['Insurance claim', 'Cash (I will pay)', 'Not sure yet'])}</div>
    <div class="field"><span class="field-label">Can the car be driven?</span>${chips('drivable', ['Yes', 'No, it needs towing'])}</div>
  </fieldset>

  <fieldset class="rf-group" data-for="import" hidden>
    <legend>Import details</legend>
    <div class="grid-2">
      <label class="field"><span>Budget (landed, KES)</span><select name="budget">${opt(['Not sure yet', 'Under 2M', '2M – 4M', '4M – 7M', '7M – 12M', '12M – 20M', 'Above 20M'])}</select></label>
      <label class="field"><span>Import from</span><select name="origin">${opt(['Best price (any)', 'Japan', 'UK', 'South Africa'])}</select></label>
    </div>
    <div class="field"><span class="field-label">How will you pay?</span>${chips('finance', ['Cash', 'Bank / asset finance', 'Need help with finance'])}</div>
  </fieldset>

  <label class="field"><span data-for="accident,repair,diagnostics,hybrid">What is wrong with the car?</span><span data-for="service,checkup,other" hidden>Anything we should know?</span><span data-for="fabrication" hidden>Describe the body you need (size, material, use)</span><span data-for="import" hidden>Preferred version, colour or features</span>
    <textarea name="notes" rows="3" placeholder="e.g. front bumper and headlight damaged, check engine light on, AC not cooling, service due at 60,000 km…"></textarea></label>

  <label class="field rf-photos" data-for="${GARAGE}"><span>Photos <span class="muted small" data-for="accident">(recommended: damage and number plate)</span><span class="muted small" data-for="repair,service,checkup,diagnostics,hybrid,fabrication,other" hidden>(optional)</span></span>
    <input name="photos" type="file" accept="image/*" multiple>
    <span class="hint" data-photo-hint>Add up to 10 photos. On most phones they are sent to WhatsApp together with your request.</span></label>

  <div class="grid-2" data-for="${GARAGE}">
    <label class="field"><span>Preferred date</span><input name="date" type="date"></label>
    <label class="field"><span>Preferred time</span><select name="time">${opt(['Any time', 'Morning (8–11am)', 'Midday (11am–2pm)', 'Afternoon (2–5pm)'])}</select></label>
  </div>

  <div class="grid-2">
    <label class="field"><span>Your name <b class="req">*</b></span><input name="name" autocomplete="name" required></label>
    <label class="field"><span>Phone / WhatsApp <b class="req">*</b></span><input name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="07XX XXX XXX" required></label>
    <label class="field"><span>Email <span class="muted small">(optional)</span></span><input name="email" type="email" autocomplete="email"></label>
    <label class="field"><span>Your area</span><input name="town" placeholder="e.g. Westlands, Karen, Ruaka"></label>
  </div>
  <p class="error-msg" data-form-error hidden></p>
  <button class="btn btn-wa btn-block" type="submit">${I.wa} Send to WhatsApp</button>
  <p class="hint" style="text-align:center;margin:0">Your request goes straight to our WhatsApp and is also emailed to our team. No payment is needed now.</p>
</form>
<div class="success" hidden data-success></div>`;
}
