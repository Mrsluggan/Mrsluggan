const highlights = [
    "You'll always be talking directly to me, not a project manager or a sales rep.",
    "I agree on a price before I start, so nothing changes on you later.",
    "Small or one-off jobs are welcome, not just ongoing retainers.",
    "This is my actual profession, not a side project I'm learning on.",
];

function About() {
    return (
        <section id="about" className="section">
            <div className="reveal">
                <p className="eyebrow">About</p>
                <h2 className="section-title">Who you'd be working with</h2>
                <p className="section-lead">
                    Sluggan AB is me — Eric Österberg, a software engineer based in
                    Uppsala.
                </p>
            </div>

            <div className="about-grid reveal">
                <p className="about-bio">
                    I've spent the last few years working as a professional developer,
                    mostly backend systems in C#/.NET and Java, and full-stack web work
                    with React and TypeScript. Day to day that's meant things like indoor
                    positioning systems and API integrations for the security industry,
                    but I've built plenty of smaller things on the side too.
                    <br /><br />
                    I started Sluggan AB because a lot of small businesses end up either
                    going without a proper website or app, or paying agency prices for
                    something a lot simpler than what they actually need. I'd rather just
                    build the thing you need, talk to you directly while I'm doing it, and
                    charge a fair, fixed price for it.
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
