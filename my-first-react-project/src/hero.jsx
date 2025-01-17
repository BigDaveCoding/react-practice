import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

function HeroSection() {

    const intro = "Hi, I'm David."
    const description = "I craft stunning, user-focused websites and dynamic digital experiences that help businesses stand out and drive results.\ From design to development, I bring ideas to life online"

    const prefix = 'I am a ';
    const words = ['Web Developer', 'Designer', 'Software Engineer', 'Student', 'Problem Solver', 'Video Game Addict', 'Creative Thinker', 'Tech Enthusiast'];
    const typeSpeed = 0.15; // Typing speed in seconds per character
    const delayBetweenWords = 2; // Delay in seconds between words

    const autoTypeRef = useRef(null); // Reference to the text element

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1, repeatDelay: delayBetweenWords }); // Infinite loop with delay between words
        
        words.forEach((word) => {
            // Typing animation
            tl.to(autoTypeRef.current, {
                text: prefix + word + '.',
                duration: word.length * typeSpeed,
                ease: 'none',
            });
            // Pause between words
            tl.to({}, { duration: delayBetweenWords });
            // Deleting animation (from the end)
            tl.to(autoTypeRef.current, {
                text: '|',
                duration: word.length * typeSpeed,
                ease: 'none',
            });
        });

    }, []); 

    return (
        <>
            <section className="hero_section">
                <div className="container">
                    <div className="hero_photos">
                        <img className="pablo_image_hero" src="./src/assets/images/pablo_behind_head.JPG" alt="Photo of Pablo the dog" />
                        <img className="david_image_hero" src="./src/assets/images/David_and_Pablo_Sand_Dunes.jpg" alt="Photo of David and his dog pablo" />
                        <img className="cara_david_image_hero" src="./src/assets/images/cara_david_sedona.jpg" alt="Photo of David and Cara" />
                    </div>
                    <div className="hero_text">
                        <div className="hero_statement">
                            <h2>{intro}</h2>
                            <p><span ref={autoTypeRef}>|</span></p>
                        </div>
                        {/* <p>{description}</p> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;