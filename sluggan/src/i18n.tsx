import type { ReactNode } from "react";
import { LocaleContext, type Locale } from "./content.ts";

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
    return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}
