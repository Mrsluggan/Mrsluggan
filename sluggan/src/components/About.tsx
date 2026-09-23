const highlights = [
    "Du pratar alltid direkt med mig, inte en projektledare eller säljare.",
    "Jag kommer överens om ett pris innan jag börjar, så inget ändras på dig i efterhand.",
    "Små och enstaka jobb är välkomna, inte bara löpande uppdrag.",
    "Det här är mitt riktiga yrke, inte ett sidoprojekt jag lär mig på.",
];

function About() {
    return (
        <section id="about" className="section">
            <div className="reveal">
                <p className="eyebrow">Om mig</p>
                <h2 className="section-title">Vem du skulle jobba med</h2>
                <p className="section-lead">
                    Sluggan AB är jag — Eric Österberg, mjukvaruutvecklare baserad i
                    Uppsala.
                </p>
            </div>

            <div className="about-grid reveal">
                <p className="about-bio">
                    Jag har jobbat som professionell utvecklare i flera år, mest
                    backend-system i C#/.NET och Java, och fullstack-webbutveckling med
                    React och TypeScript. I vardagen har det handlat om saker som
                    positioneringssystem inomhus och API-integrationer för
                    säkerhetsbranschen, men jag har byggt en hel del mindre saker vid
                    sidan om också.
                    <br /><br />
                    Jag startade Sluggan AB för att många småföretag antingen klarar sig
                    utan en ordentlig webbplats eller app, eller betalar byråpriser för
                    något som är mycket enklare än vad de faktiskt behöver. Jag bygger
                    hellre det du behöver, pratar direkt med dig medan jag gör det, och
                    tar ett rättvist, fast pris för det.
                </p>

                <ul className="about-highlights">
                    {highlights.map((h) => (
                        <li key={h}>{h}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default About;
