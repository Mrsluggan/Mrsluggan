#!/usr/bin/env node
/*
 * Writes rendered markup into the built html, so crawlers that don't run JS
 * see the page instead of an empty <div id="root">. Runs after vite build.
 * Compiles entry-server.tsx to a throwaway ssr bundle and calls it per page.
 */

import { build } from "vite";
import { mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const SSR_DIR = join(root, ".ssr-tmp");

const PAGES = [
    { page: "main", html: "dist/index.html" },
    { page: "projekt", html: "dist/projekt/index.html" },
    { page: "privacy", html: "dist/integritetspolicy/index.html" },
];

const ROOT_DIV = '<div id="root"></div>';

await build({
    root,
    logLevel: "warn",
    build: {
        ssr: "src/entry-server.tsx",
        outDir: SSR_DIR,
        emptyOutDir: true,
        // client build already emitted these; urls still match since
        // vite hashes on content
        ssrEmitAssets: false,
        copyPublicDir: false,
    },
});

const { render, projects } = await import(pathToFileURL(join(SSR_DIR, "entry-server.js")).href);

for (const { page, html } of PAGES) {
    const file = join(root, html);
    const source = readFileSync(file, "utf8");

    if (!source.includes(ROOT_DIV)) {
        console.error(`${html}: no empty ${ROOT_DIV} to fill — did the markup change?`);
        process.exit(1);
    }

    const markup = render(page);
    writeFileSync(file, source.replace(ROOT_DIV, `<div id="root">${markup}</div>`));
    console.log(`  prerendered ${html}  ${(markup.length / 1024).toFixed(1)}KB of markup`);
}

// ---------- one page per project, from the template ----------

const SITE = "https://sluggan.com";
const TEMPLATE = join(root, "dist/projekt/_mall/index.html");
const template = readFileSync(TEMPLATE, "utf8");
const attr = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

for (const p of projects) {
    const url = `${SITE}/projekt/${p.slug}/`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: p.title,
        description: p.summary,
        url,
        dateCreated: p.year,
        ...(p.ogImage && { image: SITE + p.ogImage }),
        ...(p.tech.length && { keywords: p.tech.join(", ") }),
        creator: { "@id": `${SITE}/#eric` },
        publisher: { "@id": `${SITE}/#business` },
    };
    const html = template
        .replaceAll("__TITLE__", attr(p.title))
        .replaceAll("__DESCRIPTION__", attr(p.summary))
        .replaceAll("__URL__", url)
        .replaceAll("__IMAGE__", SITE + (p.ogImage || "/og.png"))
        // "</" can't appear inside the script tag
        .replace("__JSONLD__", JSON.stringify(jsonLd).replace(/</g, "\\u003c"))
        .replace(/<!-- Template for[\s\S]*?-->\n/, "")
        .replace(ROOT_DIV, `<div id="root" data-slug="${p.slug}">${render("case", p.slug)}</div>`);
    const out = join(root, "dist/projekt", p.slug, "index.html");
    mkdirSync(join(root, "dist/projekt", p.slug), { recursive: true });
    writeFileSync(out, html);
    console.log(`  prerendered dist/projekt/${p.slug}/index.html`);
}
rmSync(join(root, "dist/projekt/_mall"), { recursive: true, force: true });

// ---------- sitemap, so new projects are listed without editing it by hand ----------

const urls = [
    { loc: "/", priority: "1.0" },
    { loc: "/projekt/", priority: "0.7" },
    ...projects.map((p) => ({ loc: `/projekt/${p.slug}/`, priority: "0.6" })),
];
writeFileSync(
    join(root, "dist/sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url>\n    <loc>${SITE}${u.loc}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`).join("\n") +
    `\n</urlset>\n`,
);
console.log(`  sitemap.xml  ${urls.length} adresser`);

rmSync(SSR_DIR, { recursive: true, force: true });
