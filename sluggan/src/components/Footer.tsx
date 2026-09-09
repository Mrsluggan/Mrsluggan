const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <span>© {year} Eric Österberg · Uppsala, Sweden 🐌</span>
            <span>
                <a href="https://github.com/Mrsluggan" target="_blank" rel="noopener noreferrer">github</a>
                {"  ·  "}
                <a href="https://www.linkedin.com/in/eric-osterberg" target="_blank" rel="noopener noreferrer">linkedin</a>
                {"  ·  "}
                <a href="mailto:ericflyger@gmail.com">email</a>
            </span>
        </footer>
    );
};

export default Footer;
