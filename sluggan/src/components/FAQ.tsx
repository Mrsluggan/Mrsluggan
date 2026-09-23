const faqs = [
    {
        q: "What does it cost?",
        a: "Depends entirely on scope. A simple website is a lot cheaper than a custom app with logins and a backend. I always agree on a fixed price before I start, once I understand what you actually need — get in touch and I'll give you a real number, not a vague range.",
    },
    {
        q: "How long does it take?",
        a: "A straightforward website is often a couple of weeks. Something with a backend, accounts, or a mobile app takes longer. I'll give you a realistic timeline as part of the plan, and you'll hear from me along the way rather than finding out at the end.",
    },
    {
        q: "Do you build for both iOS and Android?",
        a: "Yes. Depending on the project I'll use React Native or similar cross-platform tools so one codebase covers both, or go native if that's genuinely the better fit. I'll walk you through the trade-off before we start.",
    },
    {
        q: "I don't have a clear idea yet, is that a problem?",
        a: "Not at all. Most projects start as a rough idea. We'll talk it through, and if it makes sense I'll help you shape it into something concrete before any code gets written.",
    },
    {
        q: "Can you take over or improve something that already exists?",
        a: "Yes — a website or app someone else built, one you built yourself, or something that's stalled halfway through. I'll take a look and tell you honestly what state it's in and what it'd take to move forward.",
    },
    {
        q: "Do I have to sign a long contract?",
        a: "No. Work is scoped and priced per project, not as an ongoing retainer. If you only need one thing built, that's the whole engagement.",
    },
    {
        q: "What if it's just a small job, like one page?",
        a: "That's fine. Small and one-off jobs are welcome, not just big builds — see the About section for more on that.",
    },
];

function FAQ() {
    return (
        <section id="faq" className="section">
            <div className="reveal">
                <p className="eyebrow">Questions</p>
                <h2 className="section-title">Things people usually ask</h2>
                <p className="section-lead">
                    If yours isn't here, that's what the contact form is for.
                </p>
            </div>

            <div className="faq-list reveal">
                {faqs.map((f) => (
                    <details className="faq-item" key={f.q}>
                        <summary>
                            <span>{f.q}</span>
                            <span className="faq-toggle" aria-hidden="true" />
                        </summary>
                        <p>{f.a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}

export default FAQ;
