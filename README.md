# Sluggan AB

Source for [sluggan.com](https://sluggan.com) — the company website for Sluggan AB,
a one-person consultancy in Uppsala, Sweden building websites, web apps and mobile
apps for small businesses and individuals.

The site lives in [`sluggan/`](sluggan), a Vite + React + TypeScript app,
statically prerendered and deployed to GitHub Pages on every push to `main`
(see [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)).

## Development

```bash
cd sluggan
npm install
npm run dev
```

## Build

```bash
npm run build      # type-check, build, and prerender to dist/
npm run preview    # serve the production build locally
```
