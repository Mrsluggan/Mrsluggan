import { useContent } from "../content.ts";

function Process() {
    const t = useContent().process;

    return (
        <section id="process" className="section process-band">
            <div className="reveal">
                <p className="eyebrow">{t.eyebrow}</p>
                <h2 className="section-title">{t.title}</h2>
                <p className="section-lead">{t.lead}</p>
            </div>

            <div className="steps-zigzag reveal">
                {t.steps.map((s, i) => (
                    <div className="step" key={s.title}>
                        <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                        <h3 className="step-title">{s.title}</h3>
                        <p className="step-desc">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Process;
