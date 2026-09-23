const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <span>© {year} Sluggan AB · Artillerigatan 6B, Uppsala, Sverige</span>
            <span>
                <a href="mailto:ericflyger@gmail.com">mejl</a>
                {"  ·  "}
                <a href="tel:+46702214075">070-221 40 75</a>
            </span>
        </footer>
    );
};

export default Footer;
