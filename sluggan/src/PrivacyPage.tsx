import './assets/App.css';
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { useReveal } from "./hooks/useReveal.ts";

const EMAIL = "eric.osterberg@sluggan.com";

function PrivacyPage() {
    useReveal();

    return (
        <>
            <a href="#main" className="skip-link">Skip to content</a>
            <Navbar variant="page" current="/integritetspolicy/" />
            <main id="main" tabIndex={-1}>
                <section className="section">
                    <div className="reveal">
                        <p className="eyebrow">Integritetspolicy</p>
                        <h1 className="section-title">Så hanterar jag dina uppgifter</h1>
                        <p className="section-lead">
                            Kort och tydligt: vad som samlas in via kontaktformuläret,
                            varför, och vilka rättigheter du har.
                        </p>
                    </div>

                    <div className="legal reveal">
                        <div className="legal-block">
                            <h2>Vilka uppgifter samlas in</h2>
                            <p>
                                Namn, e-postadress och meddelandet du skriver i
                                kontaktformuläret. Inget annat samlas in automatiskt — den
                                här sajten använder varken analytics, spårningscookies
                                eller annonspixlar.
                            </p>
                        </div>

                        <div className="legal-block">
                            <h2>Varför</h2>
                            <p>
                                För att kunna svara på din förfrågan och ge dig en
                                offert. Uppgifterna används inte till något annat.
                            </p>
                        </div>

                        <div className="legal-block">
                            <h2>Hur uppgifterna skickas</h2>
                            <p>
                                Formuläret skickar informationen via{" "}
                                <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer">Web3Forms</a>,
                                en tredjepartstjänst som vidarebefordrar meddelandet
                                direkt till min mejl. Web3Forms sparar inte meddelandet
                                permanent hos sig — det fungerar som en ren
                                vidarebefordran. Eftersom Web3Forms är baserat i USA
                                innebär det en dataöverföring utanför EU/EES.
                            </p>
                        </div>

                        <div className="legal-block">
                            <h2>Hur länge uppgifterna sparas</h2>
                            <p>
                                Så länge det behövs för att hantera din förfrågan och ett
                                eventuellt kommande uppdrag. Blir det inget uppdrag av
                                raderas mejlkonversationen inom rimlig tid.
                            </p>
                        </div>

                        <div className="legal-block">
                            <h2>Dina rättigheter</h2>
                            <p>
                                Du har rätt att få veta vilka uppgifter jag har om dig,
                                få dem rättade eller raderade, och att invända mot
                                hanteringen. Hör av dig på{" "}
                                <a href={`mailto:${EMAIL}`}>{EMAIL}</a> om du vill utöva
                                någon av dessa rättigheter. Du har också rätt att klaga
                                till{" "}
                                <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer">Integritetsskyddsmyndigheten (IMY)</a>{" "}
                                om du tycker att dina uppgifter hanteras fel.
                            </p>
                        </div>

                        <div className="legal-block">
                            <h2>Cookies</h2>
                            <p>
                                Den här sajten använder inga spårningscookies. Om det
                                ändras uppdateras den här sidan.
                            </p>
                        </div>

                        <div className="legal-block">
                            <h2>Personuppgiftsansvarig</h2>
                            <p>
                                Eric Österberg, Sluggan, Uppsala.
                                Kontakt: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                            </p>
                            <p className="legal-updated">Senast uppdaterad: september 2026.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export default PrivacyPage;
