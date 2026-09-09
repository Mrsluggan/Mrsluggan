#!/usr/bin/env node
/*
 * Writes rendered markup into the built html, so crawlers that don't run JS
 * see the page instead of an empty <div id="root">. Runs after vite build.
 * Compiles entry-server.tsx to a throwaway ssr bundle and calls it per page.
 */

import { build } from "vite";
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = fileURLToPath(new URL("..", import.meta.url));
const SSR_DIR = join(root, ".ssr-tmp");

const PAGES = [
    { page: "main", html: "dist/index.html" },
    { page: "photos", html: "dist/photos/index.html" },
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

const { render } = await import(pathToFileURL(join(SSR_DIR, "entry-server.js")).href);

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

rmSync(SSR_DIR, { recursive: true, force: true });
