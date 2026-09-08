import './assets/App.css';
import Navbar from "./components/Navbar.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Terminal from "./components/Terminal.tsx";
import Employment from "./components/Employment.tsx";
import ContactForm from "./components/ContactForm.tsx";
import Footer from "./components/Footer.tsx";
import snail from "./assets/snail.svg";
import { useReveal } from "./hooks/useReveal.ts";

function App() {
    useReveal();

    return (
        <>
            <a href="#main" className="skip-link">Skip to content</a>
            <Navbar />
            <main id="main" tabIndex={-1}>
                <AboutMe />
                <Terminal />
                <Employment />
                <ContactForm />
            </main>
            <Footer />

            {/* a very patient snail crossing the page */}
            <div className="crawler" aria-hidden="true">
                <img src={snail} alt="" />
            </div>
        </>
    );
}

export default App;
