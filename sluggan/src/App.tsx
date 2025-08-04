import './assets/App.css';
import AboutMe from "./components/AboutMe.tsx";
import Projects from "./components/Projects.tsx";
import ContactForm from "./components/ContactForm.tsx";
import Navbar from "./components/Navbar.tsx";
import Employment from "./components/Employment.tsx";

function App() {


    return (
        <>
            <Navbar/>
            <div className="blur-overlay"></div>

            <div >
                <AboutMe />
                <Projects />
                <Employment/>
                <ContactForm />
            </div>

        </>
    );
}

export default App;
