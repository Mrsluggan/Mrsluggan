// Build-time rendering, not shipped to the browser. See scripts/prerender.mjs.
// Everything reachable from here has to render without a DOM.
import { renderToString } from "react-dom/server";
import App from "./App.tsx";
import PhotosPage from "./PhotosPage.tsx";

export type Page = "main" | "photos";

export function render(page: Page): string {
    return renderToString(page === "photos" ? <PhotosPage /> : <App />);
}
