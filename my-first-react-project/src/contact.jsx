import { useState, useEffect } from 'react';
import BioData from './contact_bio.json';
import '@fortawesome/fontawesome-free';


function Contact() {

    return (
        <>
            <section id="contact_section" className="contact_section">
                <div className="container">

                    <h2 className = "contact_title">Get In Touch.</h2>

                    <div className="contact_grid">
                        <div className = "contact_form_grid">

                            <form action="https://formsubmit.co/bigdavecoding@gmail.com" method="POST">
                                <div className="contact_form_item">
                                    <label htmlFor="name">Your name</label>
                                    <input type="text" id="name" name="name" placeholder="Your name" />
                                </div>
                                <div className="contact_form_item">
                                    <label htmlFor="email">Your email</label>
                                    <input className="contact_form_email_input" type="email" id="email" name="email" placeholder="Your email" />
                                </div>
                                <label htmlFor="message">Message / Enquiry</label>
                                <textarea className="contact_form_message" name="message" id="message" placeholder="Enter your message here"></textarea>
                                <input className="contact_form_submit" type="submit" value="Send" />
                            </form>

                        </div>
                        <div className = "contact_info_socials">

                            <div className="bio">
                            {BioData.bio.map((para, index) => (
                                        <p className="contact_bio" key={index}>{para}</p>
                                    ))}
                                <div className ="contact_form_icons">
                                    <i className="fa-brands fa-github"></i>
                                    <i className="fa-brands fa-linkedin"></i>
                                    <i className="fa-brands fa-instagram"></i>
                                    
                                </div>
                            </div>
                            

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;