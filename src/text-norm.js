// Normalise text the way people search, so "CX-5"/"cx5", "G-Wagon"/"g wagon", "KES"/"KSh",
// "colour"/"color" and "imports"/"import" all compare equal. Shared by the build and scripts.
const SAME = { colour: 'color', kes: 'ksh', kshs: 'ksh', instalment: 'installment', instalments: 'installment', armoured: 'armored', tyre: 'tire', tyres: 'tire', licence: 'license', salt: 'salty', disability: 'disabled', disabilities: 'disabled' };

export function stem(w) {
  if (w === 'japanese') return 'japan';
  if (SAME[w]) return SAME[w];
  if (/^\d/.test(w) || w.length <= 3) return w;
  return w.replace(/'s$/, '').replace(/(ing|ed)$/, '').replace(/ies$/, 'y').replace(/([^s])s$/, '$1');
}

export const norm = (t) => ` ${String(t).toLowerCase()
  .replace(/&amp;/g, '&').replace(/&#39;|&rsquo;|’/g, "'").replace(/<[^>]+>/g, ' ')
  .replace(/\bcx-?(\d)/g, 'cx $1').replace(/\blc-?(\d{3})\b/g, 'lc$1').replace(/\bksh\.?\b/g, 'ksh')
  .replace(/[^a-z0-9.' ]+/g, ' ').replace(/\.(?!\d)/g, ' ').replace(/\s+/g, ' ').trim()
  .split(' ').map(stem).join(' ')} `;

export const tokens = (t) => norm(t).trim().split(' ').filter(Boolean);
