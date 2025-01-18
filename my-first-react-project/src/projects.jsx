import gsap from 'gsap';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Projects() {

    const email_auto_desc = "This Python script automates email organization by moving emails from a specified sender to a chosen folder on an IMAP server.\
     It handles authentication securely, processes emails in batches, and ensures efficient cleanup."

    const email_auto_skills = [
        "Python",
        "IMAP",
        "Email Parsing",
        "Error Handling",
        "Secure Authentication",
        "Batch Processing",
        "Folder Management"
    ];

    const react_cv_desc = "This React project creates a responsive, interactive online portfolio and CV.\
     Built with React, HTML, CSS, and JavaScript, it highlights skills and experiences while offering an engaging user experience with modern web design.";

    const react_cv_skills = [
        "React",
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "Performance Optimization",
        "UI/UX Design",
        "Interactive Portfolio"
    ];

    const kankei_desc = "This project involved developing a modern & professional website.\
     Designs and prototypes were created in Figma, with demonstrations built using HTML, CSS & JS.\
     Final website implemented on WordPress for client flexibility."

    const kankei_skills = [
        "Web Developemnt",
        "Client Collaboration",
        "SEO Basics",
        "Prototyping",
        "Wireframes",
        "UI / UX Design",
        "Figma"

    ];






    return (
        <>
            <section className="projects_section">

                <div className="projects_grid">

                <div className = "project">
                        <div className="trapezoid">
                        </div>
                        <div className="project_description">
                            <h4>Noteworthy Project</h4>

                            <h3>KANKEI 
                                <span className = "project_icons">
                                    <i class="fa-brands fa-wordpress"></i>
                                </span>
                            </h3>

                            <p>{kankei_desc}</p>
                        </div>
                        <div className="project_extra_info">
                            <div className="project_skills">
                                {kankei_skills.map((skill, index) => {
                                    return (
                                        <div key={index} className="project_skill"># {skill}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className = "project">
                        <div className="trapezoid">
                        </div>
                        <div className="project_description">
                            <h4>Noteworthy Project</h4>

                            <h3>React CV 
                                <span className = "project_icons">
                                    <i class="fa-brands fa-github"></i>
                                </span>
                                <span className = "project_icons">
                                    <i class="fa-solid fa-globe"></i>
                                </span>
                            </h3>
                            
                            <p>{react_cv_desc}</p>
                        </div>
                        <div className="project_extra_info">
                            <div className="project_skills">
                                {react_cv_skills.map((skill, index) => {
                                    return (
                                        <div key={index} className="project_skill"># {skill}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    <div className = "project">
                        <div className="trapezoid">
                        </div>
                        <div className="project_description">
                            <h4>Noteworthy Project</h4>

                            <h3>Email Automation 
                                <span className = "project_icons">
                                    <i class="fa-brands fa-github"></i>
                                </span>
                            </h3>
                            
                            <p>{email_auto_desc}</p>
                        </div>
                        <div className="project_extra_info">
                            <div className="project_skills">
                                {email_auto_skills.map((skill, index) => {
                                    return (
                                        <div key={index} className="project_skill"># {skill}</div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        
        </>
    )
}

export default Projects;