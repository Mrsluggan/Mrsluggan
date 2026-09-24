import { LINKEDIN_URL } from "../links.ts";

const capabilities = [
    "C#/.NET och Java på backend, React och TypeScript i frontend.",
    "API-integrationer, databaser och arbete i befintliga kodbaser.",
    "Nyutveckling, vidareutveckling och felsökning — inte bara greenfield.",
    "Baserad i Uppsala, öppen för hybrid- och distansuppdrag i övriga Sverige.",
];

function Consult() {
    return (
        <section id="consult" className="section section-soft">
            <div className="reveal">
                <p className="eyebrow">Konsultuppdrag</p>
                <h2 className="section-title">Behöver ni förstärkning i utvecklingsteamet?</h2>
                <p className="section-lead">
                    Jag tar uppdrag som systemutvecklare vid sidan av min anställning,
                    och går gärna in som förstärkning i ett befintligt utvecklingsteam.
                </p>
            </div>

            <div className="about-grid reveal">
                <div className="consult-pitch">
                    <p className="about-bio">
                        Om ni behöver en utvecklare som snabbt kan sätta sig in i ett
                        befintligt system snarare än en helt ny produkt, hör av er. Jag
                        berättar gärna mer om vad jag jobbat med och hur ett uppdrag
                        skulle kunna se ut.
                    </p>
                    <div className="hero-actions">
                        <a
                            className="btn btn-primary"
                            href="#contact"
                            onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                        >
                            Kontakta mig om ett uppdrag
                        </a>
                        <a className="link-arrow" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                            Min bakgrund på LinkedIn <span>↗</span>
                        </a>
                    </div>
                </div>

                <ul className="about-highlights">
                    {capabilities.map((c) => (
                        <li key={c}>{c}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default Consult;
