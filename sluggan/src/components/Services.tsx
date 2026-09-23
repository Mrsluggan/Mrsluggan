const tiles = [
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
];

function Services() {
    return (
        <section id="services" className="section">
            <div className="reveal">
                <p className="eyebrow">Tjänster</p>
                <h2 className="section-title">Vad jag gör</h2>
                <p className="section-lead">
                    Mest de här tre sakerna. Passar det du behöver inte riktigt in i
                    någon av dem, hör av dig ändå — det finns goda chanser att jag kan
                    hjälpa till, eller åtminstone peka dig i rätt riktning.
                </p>
            </div>

            <div className="services-bento reveal">
                {tiles.map((tile, i) => (
                    <div className={`tile${i === 0 ? " tile-featured" : ""}`} key={tile.title}>
                        <span className="tile-num">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="tile-title">{tile.title}</h3>
                        <p className="tile-desc">{tile.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
