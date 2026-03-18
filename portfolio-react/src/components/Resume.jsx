const Resume = () => {
    return (
        <section id="resume" className="resume-section" style={{ padding: 'var(--spacing-xl) 0', background: 'var(--bg-secondary)' }}>
            <div className="container">
                <h2 className="section-title">My Resume</h2>
                <div className="resume-container" style={{ width: '100%', minHeight: '1150px', height: '140vh', border: '1px solid var(--bg-tertiary)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                    <iframe 
                        src="/cv.pdf" 
                        title="Resume"
                        width="100%" 
                        height="100%" 
                        style={{ border: 'none' }}
                    >
                        <p>Your browser does not support PDFs. <a href="/cv.pdf">Download the PDF</a>.</p>
                    </iframe>
                </div>
            </div>
        </section>
    );
};

export default Resume;
