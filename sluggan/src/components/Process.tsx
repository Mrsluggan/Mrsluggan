const steps = [
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
];

function Process() {
    return (
        <section id="process" className="section process-band">
            <div className="reveal">
                <p className="eyebrow">Så går det till</p>
                <h2 className="section-title">Så brukar ett projekt gå till</h2>
                <p className="section-lead">
                    Varje projekt är lite olika, men det brukar följa ungefär den här
                    formen.
                </p>
            </div>

            <div className="steps-zigzag reveal">
                {steps.map((s, i) => (
                    <div className="step" key={s.title}>
                        <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="step-title">{s.title}</h3>
                        <p className="step-desc">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Process;
