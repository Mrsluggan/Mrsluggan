# Sluggan

Source for [sluggan.com](https://sluggan.com) — the site for Sluggan, a
one-person consultancy (sole proprietorship, not yet registered) in Uppsala,
Sweden, run by Eric Österberg: systems development consulting plus websites,
web apps and mobile apps for small businesses and individuals.

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
