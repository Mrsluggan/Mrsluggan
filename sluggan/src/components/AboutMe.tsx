import profileImg from '../assets/profile.png';



function AboutMe() {
    return (
        <div id="about" className="component">
            <section className="section-content">
                {/* Texten till vänster */}
                <div className="section-text">
                    <h2 style={{fontSize:"40px"}}><strong>Eric <br /> Österberg</strong></h2>
                    <p className="intro">
                        <span style={{fontSize:"10px"}}>Software Developer | Backend Architecture & Java</span> <br/>
                        <span><em>The simplest things are often the truest.</em></span>
                    </p>
                </div>

                {/* Bilden till höger */}
                <img
                    src={profileImg}
                    alt="Bild på Eric Österberg"
                    style={{
                        width: '60%',
                        height: 'auto',
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
