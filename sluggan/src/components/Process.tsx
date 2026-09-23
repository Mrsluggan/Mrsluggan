const steps = [
    {
        title: "We talk",
        description: "A quick call or a few emails back and forth about what you need and what problem it's actually solving.",
    },
    {
        title: "I put together a plan",
        description: "A clear scope and a price, agreed before anything gets built, so there are no surprises halfway through.",
    },
    {
        title: "I build it",
        description: "You'll hear from me along the way, not just at the very end — with real updates, not vague status reports.",
    },
    {
        title: "You're not on your own after",
        description: "Once it's live I'm still around for questions, small fixes, or bigger changes down the line.",
    },
];

function Process() {
    return (
        <section id="process" className="section section-alt">
            <div className="reveal">
                <p className="eyebrow">How it works</p>
                <h2 className="section-title">How a project usually goes</h2>
                <p className="section-lead">
                    Every project is a bit different, but it tends to follow roughly
                    this shape.
                </p>
            </div>

            <div className="entry-list reveal">
                {steps.map((s, i) => (
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

export default Process;
