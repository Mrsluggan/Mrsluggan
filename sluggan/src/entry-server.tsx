// Build-time rendering, not shipped to the browser. See scripts/prerender.mjs.
// Everything reachable from here has to render without a DOM.
import { renderToString } from "react-dom/server";
import App from "./App.tsx";

export function render(): string {
    return renderToString(<App />);
}
