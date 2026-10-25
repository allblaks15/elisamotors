// What Kenyans actually type into Google for these models (from the keyword research).
// The first name is used in the page title; all are used in headings, FAQs and image alt text.
export const searchNames = {
  'toyota-land-cruiser-200': ['Toyota V8', 'Land Cruiser V8', 'LC200'],
  'toyota-land-cruiser-300': ['Toyota V8 LC300', 'Land Cruiser V8 300', 'LC300'],
  'toyota-land-cruiser-prado': ['Prado TX', 'Toyota Prado'],
  'toyota-land-cruiser-250': ['New Prado', 'Prado 250'],
  'mercedes-benz-g-class': ['G-Wagon', 'Mercedes G Wagon', 'G63 AMG'],
  'mazda-cx-5': ['CX5', 'Mazda CX5'],
  'land-rover-range-rover-vogue': ['Range Rover', 'full-size Range Rover'],
  'land-rover-range-rover-sport': ['Range Rover Sport'],
  'toyota-harrier': ['Harrier'],
  'lexus-lx': ['Lexus V8', 'LX570'],
  'nissan-patrol': ['Nissan Patrol V8'],
};

// Models no longer built new (so there is no "brand new showroom" option to compare with)
export const discontinued = new Set([
  'toyota-land-cruiser-200', 'toyota-mark-x', 'toyota-premio', 'toyota-allion', 'toyota-esquire', 'toyota-prius-alpha', 'toyota-porte', 'toyota-tank',
  'mitsubishi-pajero', 'nissan-fuga', 'nissan-teana', 'nissan-sylphy', 'nissan-cube', 'nissan-juke', 'subaru-legacy-b4',
  'honda-grace', 'honda-jade', 'honda-legend', 'honda-nsx', 'honda-odyssey', 'honda-shuttle', 'honda-insight', 'mercedes-benz-x-class',
]);
