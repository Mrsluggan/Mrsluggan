// Build-time rendering, not shipped to the browser. See scripts/prerender.mjs.
// Everything reachable from here has to render without a DOM.
import { renderToString } from "react-dom/server";
import App from "./App.tsx";
import ProjektPage from "./ProjektPage.tsx";
import PrivacyPage from "./PrivacyPage.tsx";

export type Page = "main" | "projekt" | "privacy";

export function render(page: Page): string {
    if (page === "projekt") return renderToString(<ProjektPage />);
    if (page === "privacy") return renderToString(<PrivacyPage />);
    return renderToString(<App />);
}
