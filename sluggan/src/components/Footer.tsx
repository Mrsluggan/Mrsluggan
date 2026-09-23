import { useContent } from "../content.ts";

const Footer = () => {
    const t = useContent().footer;
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <span>© {year} Sluggan AB · {t.addressLine}</span>
            <span>
                <a href="mailto:ericflyger@gmail.com">{t.emailLabel}</a>
                {"  ·  "}
                <a href="tel:+46702214075">070-221 40 75</a>
            </span>
        </footer>
    );
};

export default Footer;
