import { portfolioData } from '../data/portfolio';

const Education = () => {
    const { education, certifications, hackathons } = portfolioData;

    return (
        <section id="education" className="education">
            <div className="container">
                <h2 className="section-title">Education & Certifications</h2>
                <div className="education-grid">
                    <div className="education-column">
                        <h3 className="subsection-title">Education</h3>
                        <div className="timeline">
                            {education.map((edu) => (
                                <div key={edu.id} className="timeline-item">
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        <h4 className="timeline-title">{edu.title}</h4>
                                        <p className="timeline-subtitle">{edu.institution}</p>
                                        <p className="timeline-meta">{edu.meta}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="education-column">
                        <h3 className="subsection-title">Certifications</h3>
                        <div className="certifications-list">
                            {certifications.map((cert) => (
                                <div key={cert.id} className="cert-item">
                                    <div className="cert-icon">📜</div>
                                    <div className="cert-content">
                                        <h4 className="cert-title">{cert.title}</h4>
                                        <p className="cert-date">{cert.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <h3 className="subsection-title" style={{ marginTop: '2rem' }}>Hackathons</h3>
                        <div className="certifications-list">
                            {hackathons.map((hackathon) => (
                                <div key={hackathon.id} className="cert-item">
                                    <div className="cert-icon">🏆</div>
                                    <div className="cert-content">
                                        <h4 className="cert-title">{hackathon.title}</h4>
                                        <p className="cert-date">{hackathon.date}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
