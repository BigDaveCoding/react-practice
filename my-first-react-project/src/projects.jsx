import gsap from 'gsap';

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

    const react_cv_desc = "poop";






    return (
        <>
            <div className="projects_grid">

                <div className = "project">
                    <div className="trapezoid">
                    </div>
                    <div className="project_description">
                        <h4>Noteworthy Project</h4>
                        <h3>React CV</h3>
                        <p>{react_cv_desc}</p>
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

                <div className = "project">
                    <div className="trapezoid">
                    </div>
                    <div className="project_description">
                        <h4>Noteworthy Project</h4>
                        <h3>Email Automation</h3>
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
        
        </>
    )
}

export default Projects;