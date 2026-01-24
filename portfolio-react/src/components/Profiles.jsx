import { portfolioData } from '../data/portfolio';

const Profiles = () => {
    const { profiles } = portfolioData;

    return (
        <section id="profiles" className="profiles">
            <div className="container">
                <h2 className="section-title">Coding Profiles & Blogs</h2>
                <div className="profiles-grid">
                    {profiles.map((profile) => (
                        <a
                            key={profile.id}
                            href={profile.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-card"
                        >
                            <div className="profile-icon">{profile.icon}</div>
                            <div className="profile-info">
                                <h3 className="profile-name">{profile.name}</h3>
                                <p className="profile-label">{profile.label || "View Profile"}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Profiles;
