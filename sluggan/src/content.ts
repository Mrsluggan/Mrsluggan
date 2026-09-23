// Site copy and locale context for both locales. Data and hooks only — no
// JSX — so edits here don't defeat fast refresh for components that use it.
import { createContext, useContext } from "react";

export type Locale = "sv" | "en";

type Tile = { title: string; desc: string };
type Step = { title: string; desc: string };
type FaqItem = { q: string; a: string };

type SiteContent = {
    nav: {
        services: string;
        process: string;
        about: string;
        faq: string;
        contact: string;
        cta: string;
    };
    hero: {
        kicker: string;
        h1a: string;
        h1b: string;
        intro: string;
        ctaPrimary: string;
        ctaSecondary: string;
        asideLabel: string;
        asideItems: string[];
        asideNote: string;
    };
    services: { eyebrow: string; title: string; lead: string; tiles: Tile[] };
    process: { eyebrow: string; title: string; lead: string; steps: Step[] };
    about: {
        eyebrow: string;
        title: string;
        lead: string;
        bioParagraphs: string[];
        highlights: string[];
    };
    faq: { eyebrow: string; title: string; lead: string; items: FaqItem[] };
    contact: {
        eyebrow: string;
        title: string;
        lead: string;
        emailLabel: string;
        phoneLabel: string;
        addressLabel: string;
        address: string[];
        nameLabel: string;
        emailFieldLabel: string;
        messageLabel: string;
        namePlaceholder: string;
        emailPlaceholder: string;
        messagePlaceholder: string;
        submit: string;
        note: string;
        mailSubjectPrefix: string;
    };
    footer: { addressLine: string; emailLabel: string };
};

export const content: Record<Locale, SiteContent> = {
    sv: {
        nav: {
            services: "Tjänster",
            process: "Så funkar det",
            about: "Om mig",
            faq: "Frågor",
            contact: "Kontakt",
            cta: "Kontakta mig",
        },
        hero: {
            kicker: "Sluggan AB · Uppsala, Sverige",
            h1a: "Webb- och apputveckling",
            h1b: "för småföretag.",
            intro: "Jag heter Eric och driver Sluggan AB. Jag bygger webbplatser och appar åt småföretag och privatpersoner som vill ha något som fungerar, utan att gå via en stor byrå eller en lång säljprocess. Berätta vad du vill göra, så funderar vi tillsammans ut vad som faktiskt är vettigt att bygga.",
            ctaPrimary: "Kontakta mig",
            ctaSecondary: "Se vad jag gör",
            asideLabel: "Det jag bygger",
            asideItems: ["Webbplatser", "Webbapplikationer", "Mobilappar"],
            asideNote: "En person, direkt kontakt, ett fast pris som bestäms i förväg.",
        },
        services: {
            eyebrow: "Tjänster",
            title: "Vad jag gör",
            lead: "Mest de här tre sakerna. Passar det du behöver inte riktigt in i någon av dem, hör av dig ändå — det finns goda chanser att jag kan hjälpa till, eller åtminstone peka dig i rätt riktning.",
            tiles: [
                {
                    title: "Webbplatser",
                    desc: "Behöver du en webbplats för företaget — något som förklarar vad ni gör, ser ut som det tillhör ett riktigt företag, och som du faktiskt kan uppdatera själv efteråt — är det oftast här jag kan hjälpa som mest.",
                },
                {
                    title: "Webbapplikationer",
                    desc: "Ibland passar inte ett färdigt verktyg riktigt in i hur ditt företag jobbar. Jag bygger små, skräddarsydda webbapplikationer som fyller det hålet — bokningssystem, interna verktyg, kundportaler.",
                },
                {
                    title: "Mobilappar",
                    desc: "Appar för iOS och Android, oftast åt företag vars kunder behöver något i mobilen. Pratar gärna igenom om en app verkligen är rätt väg innan vi sätter igång.",
                },
            ],
        },
        process: {
            eyebrow: "Så går det till",
            title: "Så brukar ett projekt gå till",
            lead: "Varje projekt är lite olika, men det brukar följa ungefär den här formen.",
            steps: [
                {
                    title: "Vi pratar",
                    desc: "Ett kort samtal eller några mejl fram och tillbaka om vad du behöver och vilket problem det faktiskt löser.",
                },
                {
                    title: "Jag sätter ihop en plan",
                    desc: "En tydlig avgränsning och ett pris, bestämt innan något börjar byggas, så det inte blir några överraskningar halvvägs.",
                },
                {
                    title: "Jag bygger det",
                    desc: "Du hör av mig under resans gång, inte bara i slutet — med riktiga uppdateringar, inte vaga statusrapporter.",
                },
                {
                    title: "Du står inte ensam efteråt",
                    desc: "När det väl är lanserat finns jag fortfarande kvar för frågor, mindre fixar eller större förändringar längre fram.",
                },
            ],
        },
        about: {
            eyebrow: "Om mig",
            title: "Vem du skulle jobba med",
            lead: "Sluggan AB är jag — Eric Österberg, mjukvaruutvecklare baserad i Uppsala.",
            bioParagraphs: [
                "Jag har jobbat som professionell utvecklare i flera år, mest backend-system i C#/.NET och Java, och fullstack-webbutveckling med React och TypeScript. I vardagen har det handlat om saker som positioneringssystem inomhus och API-integrationer för säkerhetsbranschen, men jag har byggt en hel del mindre saker vid sidan om också.",
                "Jag startade Sluggan AB för att många småföretag antingen klarar sig utan en ordentlig webbplats eller app, eller betalar byråpriser för något som är mycket enklare än vad de faktiskt behöver. Jag bygger hellre det du behöver, pratar direkt med dig medan jag gör det, och tar ett rättvist, fast pris för det.",
            ],
            highlights: [
                "Du pratar alltid direkt med mig, inte en projektledare eller säljare.",
                "Jag kommer överens om ett pris innan jag börjar, så inget ändras på dig i efterhand.",
                "Små och enstaka jobb är välkomna, inte bara löpande uppdrag.",
                "Det här är mitt riktiga yrke, inte ett sidoprojekt jag lär mig på.",
            ],
        },
        faq: {
            eyebrow: "Frågor",
            title: "Vanliga frågor",
            lead: "Hittar du inte din fråga här är det vad kontaktformuläret är till för.",
            items: [
                {
                    q: "Vad kostar det?",
                    a: "Beror helt på omfattningen. En enkel webbplats kostar betydligt mindre än en skräddarsydd app med inloggning och backend. Jag bestämmer alltid ett fast pris innan jag börjar, när jag väl förstår vad du faktiskt behöver — hör av dig så ger jag dig en riktig siffra, inte ett löst intervall.",
                },
                {
                    q: "Hur lång tid tar det?",
                    a: "En enkel webbplats tar ofta ett par veckor. Något med backend, konton eller en mobilapp tar längre tid. Du får en realistisk tidsplan som en del av planen, och du hör av mig löpande istället för att få veta allt i slutet.",
                },
                {
                    q: "Bygger ni för både iOS och Android?",
                    a: "Ja. Beroende på projektet använder jag React Native eller liknande verktyg så en kodbas täcker båda, eller går nativt om det faktiskt passar bättre. Jag går igenom avvägningen innan vi sätter igång.",
                },
                {
                    q: "Jag har ingen tydlig idé än, är det ett problem?",
                    a: "Inte alls. De flesta projekt börjar som en lös idé. Vi pratar igenom den, och om det är vettigt hjälper jag dig forma den till något konkret innan någon kod skrivs.",
                },
                {
                    q: "Kan ni ta över eller förbättra något som redan finns?",
                    a: "Ja — en webbplats eller app som någon annan byggt, en du byggt själv, eller något som fastnat halvvägs. Jag tar en titt och säger ärligt vilket skick det är i och vad som krävs för att komma vidare.",
                },
                {
                    q: "Måste jag skriva på ett långt avtal?",
                    a: "Nej. Arbetet avgränsas och prissätts per projekt, inte som ett löpande uppdrag. Behöver du bara en sak byggd är det hela engagemanget.",
                },
                {
                    q: "Tänk om det bara är ett litet jobb, som en sida?",
                    a: "Det är helt okej. Små och enstaka jobb är välkomna, inte bara stora byggen — se avsnittet Om mig för mer om det.",
                },
            ],
        },
        contact: {
            eyebrow: "Kontakt",
            title: "Kontakta mig",
            lead: "Skicka ett meddelande med ungefär vad du är ute efter, eller hör av dig direkt via mejl eller telefon. Jag svarar oftast inom ett par dagar — inget säljsamtal krävs först.",
            emailLabel: "E-post",
            phoneLabel: "Telefon",
            addressLabel: "Adress",
            address: ["Artillerigatan 6B", "Uppsala, Sverige"],
            nameLabel: "Ditt namn",
            emailFieldLabel: "Din e-post",
            messageLabel: "Meddelande",
            namePlaceholder: "Anna Andersson",
            emailPlaceholder: "anna@example.com",
            messagePlaceholder: "Vad vill du bygga?",
            submit: "Skicka meddelande",
            note: "Det här öppnar din egen mejlapp. Inget skickas någon annanstans.",
            mailSubjectPrefix: "Ny projektförfrågan från",
        },
        footer: {
            addressLine: "Artillerigatan 6B, Uppsala, Sverige",
            emailLabel: "mejl",
        },
    },
    en: {
        nav: {
            services: "Services",
            process: "How it works",
            about: "About",
            faq: "FAQ",
            contact: "Contact",
            cta: "Get in touch",
        },
        hero: {
            kicker: "Sluggan AB · Uppsala, Sweden",
            h1a: "Web and app development",
            h1b: "for small businesses.",
            intro: "I'm Eric, and I run Sluggan AB. I build websites and apps for small businesses and private customers who need something that works, without going through a big agency or a long sales process. Tell me what you're trying to do, and we'll figure out together what actually makes sense to build.",
            ctaPrimary: "Get in touch",
            ctaSecondary: "See what I do",
            asideLabel: "What I build",
            asideItems: ["Websites", "Web applications", "Mobile apps"],
            asideNote: "One person, direct communication, a fixed price agreed up front.",
        },
        services: {
            eyebrow: "Services",
            title: "What I do",
            lead: "Mostly these three things. If what you need doesn't fit neatly into one of them, get in touch anyway — there's a good chance I can still help, or at least point you in the right direction.",
            tiles: [
                {
                    title: "Websites",
                    desc: "If you need a website for your business — something that explains what you do, looks like it belongs to a real company, and you can actually update yourself afterwards — this is usually where I can help the most.",
                },
                {
                    title: "Web applications",
                    desc: "Sometimes an off-the-shelf tool doesn't quite fit how your business works. I build small, custom web apps to cover that gap — booking systems, internal tools, customer portals.",
                },
                {
                    title: "Mobile apps",
                    desc: "Apps for iOS and Android, usually for businesses whose customers need something on their phone. Happy to talk through whether an app is the right call before we start.",
                },
            ],
        },
        process: {
            eyebrow: "How it works",
            title: "How a project usually goes",
            lead: "Every project is a bit different, but it tends to follow roughly this shape.",
            steps: [
                {
                    title: "We talk",
                    desc: "A quick call or a few emails back and forth about what you need and what problem it's actually solving.",
                },
                {
                    title: "I put together a plan",
                    desc: "A clear scope and a price, agreed before anything gets built, so there are no surprises halfway through.",
                },
                {
                    title: "I build it",
                    desc: "You'll hear from me along the way, not just at the very end — with real updates, not vague status reports.",
                },
                {
                    title: "You're not on your own after",
                    desc: "Once it's live I'm still around for questions, small fixes, or bigger changes down the line.",
                },
            ],
        },
        about: {
            eyebrow: "About",
            title: "Who you'd be working with",
            lead: "Sluggan AB is me — Eric Österberg, a software engineer based in Uppsala.",
            bioParagraphs: [
                "I've spent the last few years working as a professional developer, mostly backend systems in C#/.NET and Java, and full-stack web work with React and TypeScript. Day to day that's meant things like indoor positioning systems and API integrations for the security industry, but I've built plenty of smaller things on the side too.",
                "I started Sluggan AB because a lot of small businesses end up either going without a proper website or app, or paying agency prices for something a lot simpler than what they actually need. I'd rather just build the thing you need, talk to you directly while I'm doing it, and charge a fair, fixed price for it.",
            ],
            highlights: [
                "You'll always be talking directly to me, not a project manager or a sales rep.",
                "I agree on a price before I start, so nothing changes on you later.",
                "Small or one-off jobs are welcome, not just ongoing retainers.",
                "This is my actual profession, not a side project I'm learning on.",
            ],
        },
        faq: {
            eyebrow: "Questions",
            title: "Things people usually ask",
            lead: "If yours isn't here, that's what the contact form is for.",
            items: [
                {
                    q: "What does it cost?",
                    a: "Depends entirely on scope. A simple website is a lot cheaper than a custom app with logins and a backend. I always agree on a fixed price before I start, once I understand what you actually need — get in touch and I'll give you a real number, not a vague range.",
                },
                {
                    q: "How long does it take?",
                    a: "A straightforward website is often a couple of weeks. Something with a backend, accounts, or a mobile app takes longer. I'll give you a realistic timeline as part of the plan, and you'll hear from me along the way rather than finding out at the end.",
                },
                {
                    q: "Do you build for both iOS and Android?",
                    a: "Yes. Depending on the project I'll use React Native or similar cross-platform tools so one codebase covers both, or go native if that's genuinely the better fit. I'll walk you through the trade-off before we start.",
                },
                {
                    q: "I don't have a clear idea yet, is that a problem?",
                    a: "Not at all. Most projects start as a rough idea. We'll talk it through, and if it makes sense I'll help you shape it into something concrete before any code gets written.",
                },
                {
                    q: "Can you take over or improve something that already exists?",
                    a: "Yes — a website or app someone else built, one you built yourself, or something that's stalled halfway through. I'll take a look and tell you honestly what state it's in and what it'd take to move forward.",
                },
                {
                    q: "Do I have to sign a long contract?",
                    a: "No. Work is scoped and priced per project, not as an ongoing retainer. If you only need one thing built, that's the whole engagement.",
                },
                {
                    q: "What if it's just a small job, like one page?",
                    a: "That's fine. Small and one-off jobs are welcome, not just big builds — see the About section for more on that.",
                },
            ],
        },
        contact: {
            eyebrow: "Contact",
            title: "Get in touch",
            lead: "Send me a message with roughly what you're looking for, or just reach out directly by email or phone. I usually reply within a day or two — no sales call required first.",
            emailLabel: "Email",
            phoneLabel: "Phone",
            addressLabel: "Address",
            address: ["Artillerigatan 6B", "Uppsala, Sweden"],
            nameLabel: "Your name",
            emailFieldLabel: "Your email",
            messageLabel: "Message",
            namePlaceholder: "Anna Andersson",
            emailPlaceholder: "anna@example.com",
            messagePlaceholder: "What are you looking to build?",
            submit: "Send message",
            note: "This opens your own mail app. Nothing is sent anywhere else.",
            mailSubjectPrefix: "New project inquiry from",
        },
        footer: {
            addressLine: "Artillerigatan 6B, Uppsala, Sweden",
            emailLabel: "email",
        },
    },
};

// ---- locale context (data-only file: keeps fast refresh happy) ----
export const LocaleContext = createContext<Locale>("sv");

export function useLocale(): Locale {
    return useContext(LocaleContext);
}

export function useContent(): SiteContent {
    return content[useContext(LocaleContext)];
}
