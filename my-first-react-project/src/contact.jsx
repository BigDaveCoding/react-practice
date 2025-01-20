


function Contact() {
    return (
        <>
            <section className="contact_section">
                <div className="container">

                    <h2 className = "contact_title">Get In Touch.</h2>

                    <div className="contact_grid">
                        <div className = "contact_form_grid">

                            <div className="contact_form_item">
                                <label htmlFor="name">Your name</label>
                                <input type="text" id="name" name="value" placeholder="Your name" />
                            </div>

                            <div className="contact_form_item">
                                <label htmlFor="email">Your email</label>
                                <input className="contact_form_email_input" type="email" id="email" name="value" placeholder="Your email" />
                            </div>

                            <label htmlFor="message">Message / Enquiry</label>
                            <textarea className="contact_form_message" name="message" id="message" placeholder="Enter your message here"></textarea>

                            <input className="contact_form_submit" type="submit" value="Send" />

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