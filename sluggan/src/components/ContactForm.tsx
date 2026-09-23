import { useState } from "react";

const EMAIL = "ericflyger@gmail.com";
const PHONE_DISPLAY = "070-221 40 75";
const PHONE_HREF = "+46702214075";
const ADDRESS = ["Artillerigatan 6B", "Uppsala, Sverige"];
const WEB3FORMS_ACCESS_KEY = "e161f953-404a-4799-bc50-5be00c6a2aa6";

type Status = "idle" | "sending" | "success" | "error";

function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<Status>("idle");

    const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    // Static site, no backend: Web3Forms relays the submission to my inbox.
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `Ny projektförfrågan från ${form.name || "sluggan.com"}`,
                    from_name: "sluggan.com",
                    name: form.name,
                    email: form.email,
                    message: form.message,
                }),
            });
            const data = await res.json();
            if (data.success) {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <section id="contact" className="section">
            <div className="reveal">
                <p className="eyebrow">Kontakt</p>
                <h2 className="section-title">Kontakta mig</h2>
                <p className="section-lead">
                    Skicka ett meddelande med ungefär vad du är ute efter, eller hör av
                    dig direkt via mejl eller telefon. Du får en kostnadsfri offert — jag
                    svarar oftast inom ett par dagar, och inget säljsamtal krävs först.
                </p>
            </div>

            <div className="contact-wrap">
                <div className="contact-links reveal">
                    <a className="contact-link" href={`mailto:${EMAIL}`}>
                        <span className="cl">E-post</span>
                        {EMAIL}
                    </a>
                    <a className="contact-link" href={`tel:${PHONE_HREF}`}>
                        <span className="cl">Telefon</span>
                        {PHONE_DISPLAY}
                    </a>
                    <div className="contact-link contact-link-static">
                        <span className="cl">Adress</span>
                        {ADDRESS.map((line) => (
                            <span key={line}>{line}<br /></span>
                        ))}
                    </div>
                </div>

                {status === "success" ? (
                    <p className="contact-form contact-result contact-result-ok">
                        Tack! Meddelandet är skickat — jag hör av mig inom ett par dagar.
                    </p>
                ) : (
                    <form className="contact-form reveal" onSubmit={handleSubmit}>
                        <div className="field">
                            <label htmlFor="name">Ditt namn</label>
                            <input id="name" name="name" value={form.name} onChange={update}
                                   placeholder="Anna Andersson" required />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Din e-post</label>
                            <input id="email" name="email" type="email" value={form.email} onChange={update}
                                   placeholder="anna@example.com" />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Meddelande</label>
                            <textarea id="message" name="message" rows={5} value={form.message} onChange={update}
                                      placeholder="Vad vill du bygga?" required />
                        </div>

                        {/* honeypot: hidden from real visitors, bots tend to fill every field */}
                        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off"
                               className="sr-only" aria-hidden="true" />

                        <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
                            {status === "sending" ? "Skickar …" : "Skicka meddelande"}
                        </button>

                        {status === "error" && (
                            <p className="contact-result contact-result-error">
                                Något gick fel och meddelandet skickades inte. Mejla mig
                                gärna direkt istället: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                            </p>
                        )}

                        <p className="contact-note">Skickas direkt till min inkorg. Ingen mejlapp krävs.</p>
                    </form>
                )}
            </div>
        </section>
    );
}

export default ContactForm;
