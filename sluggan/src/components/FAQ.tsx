import { useContent } from "../content.ts";

function FAQ() {
    const t = useContent().faq;

    return (
        <section id="faq" className="section">
            <div className="reveal">
                <p className="eyebrow">{t.eyebrow}</p>
                <h2 className="section-title">{t.title}</h2>
                <p className="section-lead">{t.lead}</p>
            </div>

            <div className="faq-list reveal">
                {t.items.map((f) => (
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
