export const rawCv = `2019 — Residency at Villa Medici, Rome
2020 — Group exhibition at Palais de Tokyo, Paris
2021 — Collaboration with XYZ Foundation, London
2022 — Solo exhibition at Gallery ABC, Berlin`;

export const experiences = [
  {
    id: 'villa-medici-2019',
    year: 2019,
    type: 'Residency',
    title: 'Residency at Villa Medici',
    institution: 'Villa Medici',
    city: 'Rome',
    country: 'Italy',
    description: 'A research residency imagined as a period of experimentation, field notes and studio development. In a production system, this text could be enriched from a longer CV, artist statement or interview transcript.',
    image: '/art/villa-medici.svg',
    gallery: ['/art/villa-medici.svg', '/art/villa-medici-2.svg'],
    source: 'Artist CV',
    confidence: 0.99
  },
  {
    id: 'palais-de-tokyo-2020',
    year: 2020,
    type: 'Group exhibition',
    title: 'Group exhibition at Palais de Tokyo',
    institution: 'Palais de Tokyo',
    city: 'Paris',
    country: 'France',
    description: 'A group exhibition entry structured as a reusable archive object, ready to connect with exhibition views, captions, credits, links and related collaborators.',
    image: '/art/palais.svg',
    gallery: ['/art/palais.svg', '/art/palais-2.svg'],
    source: 'Artist CV',
    confidence: 0.99
  },
  {
    id: 'xyz-foundation-2021',
    year: 2021,
    type: 'Collaboration',
    title: 'Collaboration with XYZ Foundation',
    institution: 'XYZ Foundation',
    city: 'London',
    country: 'United Kingdom',
    description: 'A collaboration record that could later link people, institutions, projects and media. The schema is intentionally extensible rather than tied to one page layout.',
    image: '/art/xyz.svg',
    gallery: ['/art/xyz.svg', '/art/xyz-2.svg'],
    source: 'Artist CV',
    confidence: 0.95
  },
  {
    id: 'gallery-abc-2022',
    year: 2022,
    type: 'Solo exhibition',
    title: 'Solo exhibition at Gallery ABC',
    institution: 'Gallery ABC',
    city: 'Berlin',
    country: 'Germany',
    description: 'A solo exhibition entry with a dedicated page, designed to hold installation images, description, dates, credits and external references as the archive grows.',
    image: '/art/berlin.svg',
    gallery: ['/art/berlin.svg', '/art/berlin-2.svg'],
    source: 'Artist CV',
    confidence: 0.99
  }
];
