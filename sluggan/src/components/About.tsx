const highlights = [
    "Direct communication — you talk to the person building your project, always.",
    "Fixed, transparent pricing agreed before work starts.",
    "Small and one-off projects welcome, not just retainers.",
    "Background in production software engineering, not just freelancing.",
];

function About() {
    return (
        <section id="about" className="section">
            <div className="reveal">
                <p className="eyebrow">About</p>
                <h2 className="section-title">Run by an engineer, not an agency</h2>
                <p className="section-lead">
                    Sluggan AB is run by Eric Österberg, a software engineer based in
                    Uppsala, Sweden.
                </p>
            </div>

            <div className="about-grid reveal">
                <p className="about-bio">
                    Professional background spans backend systems in C#/.NET and Java/Spring
                    Boot, and full-stack web development with React and TypeScript —
                    including production work on positioning and integration systems for
                    the security industry. Sluggan AB brings that same engineering
                    discipline to smaller, practical projects: the goal is software that
                    quietly does its job, not extra complexity you'll have to manage later.
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
