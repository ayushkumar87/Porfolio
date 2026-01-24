const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <p>&copy; {currentYear} Ayush Kumar. Built with passion and code.</p>
            </div>
        </footer>
    );
};

export default Footer;
