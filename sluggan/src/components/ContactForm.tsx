import { useState } from "react";
import { useContent } from "../content.ts";

const EMAIL = "ericflyger@gmail.com";
const PHONE_DISPLAY = "070-221 40 75";
const PHONE_HREF = "+46702214075";

function ContactForm() {
    const t = useContent().contact;
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    // Static site, no backend: hand off to the visitor's mail client.
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const subject = encodeURIComponent(`${t.mailSubjectPrefix} ${form.name || "sluggan.com"}`);
        const body = encodeURIComponent(
            `${form.message}\n\n${form.name}${form.email ? ` (${form.email})` : ""}`
        );
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="section">
            <div className="reveal">
                <p className="eyebrow">{t.eyebrow}</p>
                <h2 className="section-title">{t.title}</h2>
                <p className="section-lead">{t.lead}</p>
            </div>

            <div className="contact-wrap">
                <div className="contact-links reveal">
                    <a className="contact-link" href={`mailto:${EMAIL}`}>
                        <span className="cl">{t.emailLabel}</span>
                        {EMAIL}
                    </a>
                    <a className="contact-link" href={`tel:${PHONE_HREF}`}>
                        <span className="cl">{t.phoneLabel}</span>
                        {PHONE_DISPLAY}
                    </a>
                    <div className="contact-link contact-link-static">
                        <span className="cl">{t.addressLabel}</span>
                        {t.address.map((line) => (
                            <span key={line}>{line}<br /></span>
                        ))}
                    </div>
                </div>

                <form className="contact-form reveal" onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="name">{t.nameLabel}</label>
                        <input id="name" name="name" value={form.name} onChange={update}
                               placeholder={t.namePlaceholder} required />
                    </div>
                    <div className="field">
                        <label htmlFor="email">{t.emailFieldLabel}</label>
                        <input id="email" name="email" type="email" value={form.email} onChange={update}
                               placeholder={t.emailPlaceholder} />
                    </div>
                    <div className="field">
                        <label htmlFor="message">{t.messageLabel}</label>
                        <textarea id="message" name="message" rows={5} value={form.message} onChange={update}
                                  placeholder={t.messagePlaceholder} required />
                    </div>
                    <button type="submit" className="btn btn-primary">{t.submit}</button>
                    <p className="contact-note">{t.note}</p>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
