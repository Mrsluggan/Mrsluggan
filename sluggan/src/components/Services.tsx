const services = [
    {
        title: "Websites",
        description:
            "If you need a website for your business — something that explains what you do, looks like it belongs to a real company, and you can actually update yourself afterwards — this is usually where I can help the most.",
    },
    {
        title: "Web applications",
        description:
            "Sometimes an off-the-shelf tool doesn't quite fit how your business works. I build small, custom web apps to cover that gap — booking systems, internal tools, customer portals, that kind of thing.",
    },
    {
        title: "Mobile apps",
        description:
            "I also build apps for iOS and Android, usually for businesses whose customers need something on their phone. Happy to talk through whether an app is actually the right call before we start — often a website does the job just as well.",
    },
];

function Services() {
    return (
        <section id="services" className="section">
            <div className="reveal">
                <p className="eyebrow">Services</p>
                <h2 className="section-title">What I do</h2>
                <p className="section-lead">
                    Mostly these three things. If what you need doesn't fit neatly into
                    one of them, get in touch anyway — there's a good chance I can still
                    help, or at least point you in the right direction.
                </p>
            </div>

            <div className="entry-list reveal">
                {services.map((s, i) => (
                    <div className="entry" key={s.title}>
                        <span className="entry-num">{String(i + 1).padStart(2, "0")}</span>
                        <div>
                            <h3 className="entry-title">{s.title}</h3>
                            <p className="entry-desc">{s.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
