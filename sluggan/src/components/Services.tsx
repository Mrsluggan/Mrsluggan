const services = [
    {
        title: "Websites",
        description:
            "Marketing sites, portfolios and small business websites that load fast, look sharp on every device, and are easy to update.",
    },
    {
        title: "Web applications",
        description:
            "Custom tools and internal systems built around the way your business actually works — bookings, dashboards, portals, and the like.",
    },
    {
        title: "Mobile apps",
        description:
            "iOS and Android apps, from a first idea through to the app store, kept as simple as the job allows.",
    },
];

function Services() {
    return (
        <section id="services" className="section">
            <div className="reveal">
                <p className="eyebrow">Services</p>
                <h2 className="section-title">What I do</h2>
                <p className="section-lead">
                    One person, three things done well — no oversized team, no
                    unnecessary complexity.
                </p>
            </div>

            <div className="services-grid reveal">
                {services.map((s) => (
                    <div className="panel service-card" key={s.title}>
                        <h3 className="service-title">{s.title}</h3>
                        <p className="service-desc">{s.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
