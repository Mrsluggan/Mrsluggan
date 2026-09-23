import './assets/App.css';
import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Services from "./components/Services.tsx";
import Process from "./components/Process.tsx";
import About from "./components/About.tsx";
import FAQ from "./components/FAQ.tsx";
import ContactForm from "./components/ContactForm.tsx";
import Footer from "./components/Footer.tsx";
import { useReveal } from "./hooks/useReveal.ts";

function App() {
    useReveal();

    return (
        <>
            <a href="#main" className="skip-link">Skip to content</a>
            <Navbar />
            <main id="main" tabIndex={-1}>
                <Hero />
                <Services />
                <Process />
                <About />
                <FAQ />
                <ContactForm />
            </main>
            <Footer />
        </>
    );
}

export default App;
