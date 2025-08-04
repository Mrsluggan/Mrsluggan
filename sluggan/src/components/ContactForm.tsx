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
        <section id="contact" className="component">
            <form className="contact-form" >
                <h2 className="section-title">Kontakta mig</h2>
                <label htmlFor="name">Ditt namn</label>
                <input/>
                <label htmlFor="name">Email</label>
                <input/>
                <label htmlFor="name">Meddelande</label>
                <textarea/>
                <button onClick={handleSubmit} className="submit-button">Skicka</button>
            </form>
        </section>


    );
}

export default ContactForm;
