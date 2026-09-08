import { useState } from "react";

const EMAIL = "ericflyger@gmail.com";

function ContactForm() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    // Static site, no backend: hand off to the visitor's mail client.
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Hey Eric — from ${form.name || "your site"}`);
        const body = encodeURIComponent(
            `${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ""}`
        );
        window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    };

    return (
        <section id="contact" className="section">
            <div className="reveal">
                <p className="eyebrow">04 — say hi</p>
                <h2 className="section-title">Let's build something</h2>
                <p className="section-lead">
                    Open to backend roles, systems work and open-source. Drop a line — I
                    answer faster than a snail moves.
                </p>
            </div>

            <div className="contact-wrap">
                <div className="contact-links reveal">
                    <a className="panel contact-link" href={`mailto:${EMAIL}`}>
                        <span className="ci">✉</span>
                        <span>
                            <span className="cl">email</span><br />
                            {EMAIL}
                        </span>
                    </a>
                    <a className="panel contact-link" href="https://github.com/Mrsluggan"
                       target="_blank" rel="noopener noreferrer">
                        <span className="ci">⌥</span>
                        <span>
                            <span className="cl">github</span><br />
                            @Mrsluggan
                        </span>
                    </a>
                    <a className="panel contact-link" href="https://www.linkedin.com/in/eric-osterberg"
                       target="_blank" rel="noopener noreferrer">
                        <span className="ci">in</span>
                        <span>
                            <span className="cl">linkedin</span><br />
                            eric-osterberg
                        </span>
                    </a>
                </div>

                <form className="contact-form reveal" onSubmit={handleSubmit}>
                    <div className="field">
                        <label htmlFor="name">Your name</label>
                        <input id="name" name="name" value={form.name} onChange={update}
                               placeholder="Ada Lovelace" required />
                    </div>
                    <div className="field">
                        <label htmlFor="email">Your email</label>
                        <input id="email" name="email" type="email" value={form.email} onChange={update}
                               placeholder="ada@example.com" />
                    </div>
                    <div className="field">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows={5} value={form.message} onChange={update}
                                  placeholder="What are we building?" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Send message ▸</button>
                    <p className="contact-note">
                        Opens your mail app — no data touches a server. Static and honest.
                    </p>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
