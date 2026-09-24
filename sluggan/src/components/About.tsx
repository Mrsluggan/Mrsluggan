const highlights = [
    "Du pratar alltid direkt med mig, inte en projektledare eller säljare.",
    "Jag kommer överens om ett pris innan jag börjar, så inget ändras på dig i efterhand.",
    "Små och enstaka jobb är välkomna, inte bara löpande uppdrag.",
    "Erfarenhet från riktiga produktionssystem — inte något jag lär mig på din bekostnad.",
];

function About() {
    return (
        <section id="about" className="section">
            <div className="reveal">
                <p className="eyebrow">Om mig</p>
                <h2 className="section-title">Vem du skulle jobba med</h2>
                <p className="section-lead">
                    Sluggan är jag — Eric Österberg, mjukvaruutvecklare baserad i
                    Uppsala.
                </p>
            </div>

            <div className="about-grid reveal">
                <p className="about-bio">
                    Jag jobbar idag som anställd mjukvaruutvecklare, mest med
                    backend-system i C#/.NET och Java, och fullstack-webbutveckling med
                    React och TypeScript. I vardagen har det handlat om saker som
                    positioneringssystem inomhus och API-integrationer för
                    säkerhetsbranschen.
                    <br /><br />
                    Vid sidan av jobbet driver jag Sluggan. Dels tar jag
                    konsultuppdrag som systemutvecklare, dels bygger jag hemsidor och
                    appar åt småföretag som annars antingen klarar sig utan en ordentlig
                    webbplats, eller betalar byråpriser för något mycket enklare än vad
                    de faktiskt behöver. Jag bygger hellre det du behöver, pratar direkt
                    med dig medan jag gör det, och tar ett rättvist pris för det.
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
