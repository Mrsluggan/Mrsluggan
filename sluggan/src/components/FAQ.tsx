const faqs = [
    {
        q: "Vad kostar det?",
        a: "Beror helt på omfattningen. En enkel hemsida kostar betydligt mindre än en skräddarsydd app med inloggning och backend. Hör av dig så får du en kostnadsfri offert med ett fast pris, innan något börjar byggas.",
    },
    {
        q: "Hur lång tid tar det?",
        a: "En enkel hemsida tar ofta ett par veckor. Något med backend, konton eller en mobilapp tar längre tid. Du får en realistisk tidsplan som en del av planen, och du hör av mig löpande istället för att få veta allt i slutet.",
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
];

function FAQ() {
    return (
        <section id="faq" className="section">
            <div className="reveal">
                <p className="eyebrow">Frågor</p>
                <h2 className="section-title">Vanliga frågor</h2>
                <p className="section-lead">
                    Hittar du inte din fråga här är det vad kontaktformuläret är till för.
                </p>
            </div>

            <div className="faq-list reveal">
                {faqs.map((f) => (
                    <details className="faq-item" key={f.q}>
                        <summary>
                            <span>{f.q}</span>
                            <span className="faq-toggle" aria-hidden="true" />
                        </summary>
                        <p>{f.a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}

export default FAQ;
