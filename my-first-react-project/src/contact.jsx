


function Contact() {
    return (
        <>
            <section className="contact_section">
                <div className="container">

                    <h2 className = "contact_title">Get In Touch.</h2>

                    <div className="contact_grid">
                        <div className = "contact_form_grid">

                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" name="value" placeholder="Your name" />

                        </div>
                        <div className = "contact_info_socials">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;