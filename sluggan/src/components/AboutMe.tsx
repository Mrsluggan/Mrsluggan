import profileImg from '../assets/profile.jpg';
import construction from '../assets/eb1b27863813653543914d222ceb9c-unscreen.gif';



function AboutMe() {
    return (
        <div id="about" className="component">
            <section className="section-content">

                <div className="section-text">
                    <h3>Page under construction</h3>
                    <img
                        src={construction}
                        alt="Bild på Eric Österberg"
                        style={{
                            width: '5rem',
                        }}
                    />
                    <h2 ><strong>Eric <br /> Österberg</strong></h2>
                    <p className="intro">
                        <span style={{fontSize:"10px"}}>Software Developer | Backend Architecture & Java</span> <br/>
                        <span><em>The simplest things are often the truest.</em></span>
                    </p>
                </div>

                <img
                    src={profileImg}
                    alt="Bild på Eric Österberg"
                    style={{
                        width: '20rem',
                        display: 'block',
                        filter: 'grayscale(100%)',
                        objectFit: 'cover',
                        borderRadius: '8px' // valfritt
                    }}
                />

            </section>
        </div>





    );
}

export default AboutMe;
