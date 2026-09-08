const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <span>© {year} Eric Österberg · built slow, built to last 🐌</span>
            <span>
                <a href="https://github.com/Mrsluggan">github</a>
                {"  ·  "}
                <a href="https://www.linkedin.com/in/eric-osterberg">linkedin</a>
                {"  ·  "}
                <a href="mailto:ericflyger@gmail.com">email</a>
            </span>
        </footer>
    );
};

export default Footer;
