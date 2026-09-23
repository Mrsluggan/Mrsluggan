import { useState } from "react";

const EMAIL = "ericflyger@gmail.com";
const PHONE_DISPLAY = "070-221 40 75";
const PHONE_HREF = "+46702214075";
const ADDRESS = ["Artillerigatan 6B", "Uppsala, Sweden"];

function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    // Static site, no backend: hand off to the visitor's mail client.
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const subject = encodeURIComponent(`New project inquiry from ${form.name || "your site"}`);
        const body = encodeURIComponent(
            `${form.message}\n\n${form.name}${form.email ? ` (${form.email})` : ""}`
        );
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="section">
            <div className="reveal">
                <p className="eyebrow">Contact</p>
                <h2 className="section-title">Get in touch</h2>
                <p className="section-lead">
                    Send me a message with roughly what you're looking for, or just
                    reach out directly by email or phone. I usually reply within a day
                    or two — no sales call required first.
                </p>
            </div>

            <div className="contact-wrap">
                <div className="contact-links reveal">
                    <a className="panel contact-link" href={`mailto:${EMAIL}`}>
                        <span className="ci">✉</span>
                        <span>
                            <span className="cl">Email</span><br />
                            {EMAIL}
                        </span>
                    </a>
                    <a className="panel contact-link" href={`tel:${PHONE_HREF}`}>
                        <span className="ci">☎</span>
                        <span>
                            <span className="cl">Phone</span><br />
                            {PHONE_DISPLAY}
                        </span>
                    </a>
                    <div className="panel contact-link contact-link-static">
                        <span className="ci">⌂</span>
                        <span>
                            <span className="cl">Address</span><br />
                            {ADDRESS.map((line) => (
                                <span key={line}>{line}<br /></span>
                            ))}
                        </span>
                    </div>
                </div>

                <form className="contact-form reveal" onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="name">Your name</label>
                        <input id="name" name="name" value={form.name} onChange={update}
                               placeholder="Anna Andersson" required />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Your email</label>
                        <input id="email" name="email" type="email" value={form.email} onChange={update}
                               placeholder="anna@example.com" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={5} value={form.message} onChange={update}
                                  placeholder="What are you looking to build?" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Send message</button>
                    <p className="contact-note">
                        This opens your own mail app. Nothing is sent anywhere else.
                    </p>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
