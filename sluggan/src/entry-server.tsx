// Build-time rendering, not shipped to the browser. See scripts/prerender.mjs.
// Everything reachable from here has to render without a DOM.
import { renderToString } from "react-dom/server";
import App from "./App.tsx";
import ProjektPage from "./ProjektPage.tsx";
import PrivacyPage from "./PrivacyPage.tsx";
import ProjectPage from "./ProjectPage.tsx";
import { projects } from "./generated/projects.ts";

export { projects };

export type Page = "main" | "projekt" | "privacy" | "case";

export function render(page: Page, slug?: string): string {
    if (page === "case") {
        const project = projects.find((p) => p.slug === slug);
        if (!project) throw new Error(`Okänt projekt: ${slug}`);
        return renderToString(<ProjectPage project={project} />);
    }
    if (page === "projekt") return renderToString(<ProjektPage />);
    if (page === "privacy") return renderToString(<PrivacyPage />);
    return renderToString(<App />);
}
