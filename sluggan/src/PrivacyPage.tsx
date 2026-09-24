import './assets/App.css';
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import { useReveal } from "./hooks/useReveal.ts";

const EMAIL = "eric.osterberg@sluggan.com";

function PrivacyPage() {
    useReveal();

    return (
        <>
            <a href="#main" className="skip-link">Hoppa till innehållet</a>
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
                                kontaktformuläret. När du skickar formuläret registreras
                                också teknisk information som din IP-adress, tidpunkt och
                                vilken sida du kom från. Utöver det använder den här
                                sajten varken analytics, spårningscookies eller
                                annonspixlar.
                            </p>
                        </div>

                        <div className="legal-block">
                            <h2>Varför, och med vilken rätt</h2>
                            <p>
                                För att kunna svara på din förfrågan och ge dig en
                                offert. Uppgifterna används inte till något annat.
                            </p>
                            <p>
                                Den rättsliga grunden är att du själv ber om kontakt
                                inför ett möjligt uppdrag (artikel 6.1 b i GDPR, åtgärder
                                före ett avtal på din begäran).
                            </p>
                        </div>

                        <div className="legal-block">
                            <h2>Hur uppgifterna skickas</h2>
                            <p>
                                Formuläret skickas via{" "}
                                <a href="https://web3forms.com" target="_blank" rel="noopener noreferrer">Web3Forms</a>{" "}
                                (drivs av Web3Creative), som tar emot inskicket och
                                vidarebefordrar det till min mejl. Web3Forms är mitt
                                personuppgiftsbiträde och behandlar uppgifterna enligt
                                ett personuppgiftsbiträdesavtal.
                            </p>
                            <p>
                                Web3Creative drivs från Indien och använder
                                underleverantörer i bland annat USA (Amazon Web Services,
                                Cloudflare) och EU (Hetzner). Din IP-adress och
                                e-postadress kontrolleras även av spamfilter (CleanTalk
                                och Akismet) i USA. Uppgifterna kan alltså föras över
                                till länder utanför EU/EES. Överföringen skyddas av
                                EU-kommissionens standardavtalsklausuler.
                            </p>
                        </div>

                        <div className="legal-block">
                            <h2>Hur länge uppgifterna sparas</h2>
                            <p>
                                I min mejl sparas konversationen så länge det behövs för
                                att hantera din förfrågan och ett eventuellt uppdrag. Blir
                                det inget uppdrag av raderar jag den inom rimlig tid.
                            </p>
                            <p>
                                Web3Forms sparar inskicket hos sig i upp till tre år
                                enligt sina egna villkor, oberoende av min mejl.
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
