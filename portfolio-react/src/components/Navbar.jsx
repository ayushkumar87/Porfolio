import { useState, useEffect } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';

const Navbar = () => {
    const { scrollPosition, scrollDirection } = useScrollPosition();
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.3 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    const handleClick = (e, targetId) => {
        e.preventDefault();
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const shouldHide = scrollDirection === 'down' && scrollPosition > 100;

    return (
        <nav className={`navbar ${shouldHide ? 'navbar-hidden' : ''}`}>
            <div className="container">
                <div className="nav-brand">AK</div>
                <ul className="nav-menu">
                    <li>
                        <a
                            href="#home"
                            className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                            onClick={(e) => handleClick(e, '#home')}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
                            onClick={(e) => handleClick(e, '#about')}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                            onClick={(e) => handleClick(e, '#skills')}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                            onClick={(e) => handleClick(e, '#projects')}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#education"
                            className={`nav-link ${activeSection === 'education' ? 'active' : ''}`}
                            onClick={(e) => handleClick(e, '#education')}
                        >
                            Education
                        </a>
                    </li>
                    <li>
                        <a
                            href="#resume"
                            className={`nav-link ${activeSection === 'resume' ? 'active' : ''}`}
                            onClick={(e) => handleClick(e, '#resume')}
                        >
                            Resume
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                            onClick={(e) => handleClick(e, '#contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
