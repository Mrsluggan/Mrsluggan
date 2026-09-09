import Navbar from "./components/Navbar.tsx";
import Gallery from "./components/Gallery.tsx";
import Footer from "./components/Footer.tsx";
import snail from "./assets/snail.svg";
import { useReveal } from "./hooks/useReveal.ts";

function PhotosPage() {
    useReveal();

    return (
        <>
            <a href="#main" className="skip-link">Skip to content</a>
            <Navbar variant="sub" current="/photos/" />
            <main id="main" tabIndex={-1} className="section photos-page">
                <div className="reveal">
                    <p className="eyebrow">photos</p>
                    <h1 className="section-title">Ones I actually like</h1>
                    <p className="section-lead">
                        Photos I took and didn't delete.
                    </p>
                </div>

                <Gallery />
            </main>
            <Footer />

            <div className="crawler" aria-hidden="true">
                <img src={snail} alt="" />
            </div>
        </>
    );
}

export default PhotosPage;
