import { portfolioData } from '../data/portfolio';

const Skills = () => {
    const { skills } = portfolioData;

    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>
                <div className="skills-grid">
                    <div className="skill-category">
                        <h3 className="category-title">Languages</h3>
                        <div className="skill-items">
                            {skills.languages.map((skill, index) => (
                                <div key={index} className="skill-item">{skill}</div>
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">Frameworks</h3>
                        <div className="skill-items">
                            {skills.frameworks.map((skill, index) => (
                                <div key={index} className="skill-item">{skill}</div>
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">Databases</h3>
                        <div className="skill-items">
                            {skills.databases.map((skill, index) => (
                                <div key={index} className="skill-item">{skill}</div>
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">Tools & Others</h3>
                        <div className="skill-items">
                            {skills.tools.map((skill, index) => (
                                <div key={index} className="skill-item">{skill}</div>
                            ))}
                        </div>
                    </div>
                    <div className="skill-category">
                        <h3 className="category-title">Soft Skills</h3>
                        <div className="skill-items">
                            {skills.softSkills?.map((skill, index) => (
                                <div key={index} className="skill-item">{skill}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
