import { useEffect } from 'react';
import { portfolioData } from '../data/portfolio';

/**
 * Hero Component
 * Displays the main introductory section with name, title, and CTA buttons.
 * Data is sourced from the 'personal' object in portfolio.js
 */
const Hero = () => {
    const { personal } = portfolioData;

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const heroBackground = document.querySelector('.hero-background');
            if (heroBackground) {
                heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="home" className="hero">
            <div className="hero-background"></div>
            <div className="container hero-content">
                <div className="hero-text">
                    <h1 className="hero-title">
                        <span className="greeting">Hello, I'm</span>
                        <span className="name">{personal.name}</span>
                    </h1>
                    <h2 className="hero-subtitle">{personal.title}</h2>
                    <p className="hero-description">{personal.description}</p>
                    <div className="hero-buttons" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-sm)' }}>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
                            <a href="#projects" className="btn btn-primary">
                                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.47c-.31.17-.69.17-1 0L3.53 17.38c-.32-.17-.53-.5-.53-.88V7.5c0-.38.21-.71.53-.88l7.97-4.47c.31-.17.69-.17 1 0l7.97 4.47c.32.17.53.5.53.88v9z" />
                                </svg>
                                View Projects
                            </a>
                            <a href="https://drive.google.com/file/d/1t0_cvs35FRoE9bo1F5DqxLijb36tWSfr/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                                </svg>
                                View CV
                            </a>
                            <a href="#profiles" className="btn btn-secondary">
                                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                                </svg>
                                Profiles
                            </a>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
                            <a href="#skills" className="btn btn-secondary">
                                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5.89 12.55L12 15.89l6.11-3.34c-.66.39-1.33.71-2.01.95L12 15.1l-4.1-.41c-.69-.24-1.36-.56-2.01-.95z" />
                                </svg>
                                Skills
                            </a>
                            <a href="#contact" className="btn btn-secondary">
                                <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                                Contact us
                            </a>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href={personal.github} target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                        <a href={`mailto:${personal.email}`} className="social-link" aria-label="Email">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-container">
                        <img src="/profile.jpg" alt="Ayush Kumar" className="hero-profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
