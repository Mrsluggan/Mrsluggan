import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Formulär skickat:", formData);
        setSubmitted(true);
        // Lägg till logik för att skicka formuläret här
    };

    return (
        <section id="contact" className="component contact-bg">
            <div className="section-content" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                <h2 className="section-title">Kontakta mig</h2>
                {!submitted ? (
                    <form className="contact-form" onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '600px' }}>
                        <div>
                            <label htmlFor="name">Namn</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="email">E-post</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="message">Meddelande</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={5}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Skicka</button>
                    </form>
                ) : (
                    <p>Tack för ditt meddelande! Jag återkommer så snart jag kan.</p>
                )}
            </div>
        </section>


    );
}

export default ContactForm;
