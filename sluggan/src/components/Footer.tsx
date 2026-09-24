const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <span>© {year} Sluggan · Artillerigatan 6B, Uppsala, Sverige</span>
            <span>
                <a href="mailto:eric.osterberg@sluggan.com">mejl</a>
                {"  ·  "}
                <a href="tel:+46702214075">070-221 40 75</a>
                {"  ·  "}
                <a href="/integritetspolicy/">integritetspolicy</a>
            </span>
        </footer>
    );
};

export default Footer;
