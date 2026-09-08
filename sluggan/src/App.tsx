import './assets/App.css';
import Navbar from "./components/Navbar.tsx";
import AboutMe from "./components/AboutMe.tsx";
import Projects from "./components/Projects.tsx";
import Employment from "./components/Employment.tsx";
import ContactForm from "./components/ContactForm.tsx";
import Footer from "./components/Footer.tsx";
import snail from "./assets/snail.svg";
import { useReveal } from "./hooks/useReveal.ts";

function App() {
    useReveal();

    return (
        <>
            <Navbar />
            <main>
                <AboutMe />
                <Projects />
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
