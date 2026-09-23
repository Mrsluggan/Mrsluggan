const steps = [
    {
        title: "Chat",
        description: "A short, no-pressure conversation about what you need and what it should do.",
    },
    {
        title: "Plan",
        description: "A clear, fixed-scope plan with a price up front — no surprises, no scope creep.",
    },
    {
        title: "Build",
        description: "I build it, keeping you in the loop with regular, plain-language updates.",
    },
    {
        title: "Support",
        description: "Launch, then ongoing support and small changes if and when you need them.",
    },
];

function Process() {
    return (
        <section id="process" className="section section-alt">
            <div className="reveal">
                <p className="eyebrow">How it works</p>
                <h2 className="section-title">Four simple steps</h2>
                <p className="section-lead">
                    No jargon, no lengthy contracts — just a clear path from idea to something
                    you can use.
                </p>
            </div>

            <div className="process-grid reveal">
                {steps.map((s, i) => (
                    <div className="process-step" key={s.title}>
                        <span className="process-num">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="process-title">{s.title}</h3>
                        <p className="process-desc">{s.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Process;
