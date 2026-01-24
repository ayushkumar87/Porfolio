import { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolio';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const About = () => {
    const { about, stats } = portfolioData;
    const [sectionRef, isVisible] = useIntersectionObserver();
    const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0));
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isVisible && !hasAnimated) {
            setHasAnimated(true);
            stats.forEach((stat, index) => {
                const isDecimal = stat.number.includes('.');
                const hasPlus = stat.number.includes('+');
                const numericValue = parseFloat(stat.number);
                const increment = numericValue / 50;
                let current = 0;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numericValue) {
                        setAnimatedStats(prev => {
                            const newStats = [...prev];
                            newStats[index] = stat.number;
                            return newStats;
                        });
                        clearInterval(timer);
                    } else {
                        setAnimatedStats(prev => {
                            const newStats = [...prev];
                            if (isDecimal) {
                                newStats[index] = current.toFixed(2);
                            } else {
                                newStats[index] = Math.floor(current) + (hasPlus ? '+' : '');
                            }
                            return newStats;
                        });
                    }
                }, 30);
            });
        }
    }, [isVisible, hasAnimated, stats]);

    return (
        <section id="about" className="about" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">{about}</p>
                        <div className="stats-grid">
                            {stats.map((stat, index) => (
                                <div key={index} className="stat-card">
                                    <div className="stat-number">{animatedStats[index]}</div>
                                    <div className="stat-label">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
