# AEITOS — Contemporary Arts Archive Prototype

A small React/Vite prototype showing how an artist's unstructured CV can become a living digital archive.

## Prototype goals

- Transform raw CV text into structured JSON.
- Extract year, type, title, institution, city, country, description, media, source and confidence.
- Browse experiences as an editorial visual catalogue.
- Filter entries by type and city.
- Open each experience on a dedicated archive page.
- Keep a human review step between AI extraction and publication.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Main routes

- `/` — archive catalogue and approach
- `/ai-structure` — raw CV → structured data workflow
- `/archive/:id` — individual archive entry

The visual direction is intentionally editorial and art-led rather than dashboard/SaaS-like: warm paper tones, serif display typography, asymmetric image layouts and museum/archive metadata conventions.
