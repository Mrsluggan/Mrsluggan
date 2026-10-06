// Kept in step with the packages in the portal and the OfferCatalog in index.html.
const BINDING_MONTHS = 12;
const NOTICE_MONTHS = 1;

const packages = [
    {
        name: "Enkel",
        price: 299,
        tagline: "För den riktigt lilla verksamheten.",
        features: [
            "Hemsida, anpassad för mobilen",
            "Meny och öppettider",
            "Karta och kontaktuppgifter",
            "Hosting och domänkoppling",
            "Mindre ändringar",
        ],
    },
    {
        name: "Företag",
        price: 599,
        tagline: "Det vanligaste valet för restauranger och småföretag.",
        featured: true,
        features: [
            "Allt i Enkel",
            "Galleri och bilder",
            "Instagram-flöde",
            "Lunchmeny",
            "Grundläggande SEO och Google",
            "Adminsida för egna ändringar",
            "Löpande uppdateringar",
            "Prioriterad support",
        ],
    },
    {
        name: "Premium",
        price: 999,
        tagline: "För dig som vill synas mer och växa.",
        features: [
            "Allt i Företag",
            "Mer avancerad design och fler sidor",
            "Sökmotoroptimering (SEO)",
            "Optimering av Google-företagsprofil",
            "Kampanjer",
            "Löpande innehållsändringar",
            "Statistik och analys",
        ],
    },
];

/** Prefills the contact form with the chosen package (ContactForm listens). */
function choose(name: string) {
    window.dispatchEvent(new CustomEvent("sluggan:paket", { detail: name }));
}

function Packages() {
    return (
        <section id="paket" className="section">
            <div className="reveal">
                <p className="eyebrow">Paket</p>
                <h2 className="section-title">Hemsida för en fast summa i månaden</h2>
                <p className="section-lead">
                    Har du en restaurang, en salong eller någon annan lokal verksamhet passar
                    ett paket oftast bäst. Jag bygger hemsidan, ser till att den fungerar och
                    gör ändringarna åt dig, så slipper du tänka på den.
                </p>
            </div>

            <div className="packages reveal">
                {packages.map((p) => (
                    <article className={p.featured ? "package package-featured" : "package"} key={p.name}>
                        {p.featured && <p className="package-flag">Vanligast</p>}
                        <h3 className="package-name">{p.name}</h3>
                        <p className="package-tagline">{p.tagline}</p>
                        <p className="package-price">
                            {p.price} kr<span>/mån</span>
                        </p>
                        <p className="package-terms">
                            <span className="nw">{BINDING_MONTHS} mån bindning</span>
                            <span className="dot" aria-hidden="true">·</span>
                            <span className="nw">{NOTICE_MONTHS} mån uppsägning</span>
                        </p>
                        <ul className="package-features">
                            {p.features.map((f) => <li key={f}>{f}</li>)}
                        </ul>
                        <a href="#contact" className="link-arrow" onClick={() => choose(p.name)}>
                            Välj {p.name} <span aria-hidden="true">→</span>
                        </a>
                    </article>
                ))}
            </div>

            <p className="packages-note reveal">
                Bygget ingår i månadsavgiften i stället för att du betalar en klumpsumma i början,
                därför har paketen {BINDING_MONTHS} månaders bindningstid. Sedan löper de vidare
                och kan sägas upp med {NOTICE_MONTHS} månads varsel. Ingen moms tillkommer, och
                domänen står du för själv. Vill du hellre betala en gång för en hemsida, eller
                behöver du en webbapp eller mobilapp, får du en kostnadsfri offert med fast pris.
            </p>
        </section>
    );
}

export default Packages;
