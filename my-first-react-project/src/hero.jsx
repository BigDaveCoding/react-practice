import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import TextPlugin from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

function HeroSection() {

    const intro = "Hi, I'm David."
    const description = "My journey as a developer began with creating video games in Unity, where I first discovered my passion for coding.\
                         I then deepened my knowledge by completing The Odin Project's foundations course and studying web development, computer science & data analytics on Codecademy. \
                         Fast forward to today, I am currently enrolled at iO Academy, studying software engineering with the goal of becoming a web developer."

    const prefix = 'I am a ';
    const words = ['Web Developer', 'Designer', 'Software Engineer', 'Student', 'Problem Solver', 'Video Game Addict', 'Creative Thinker', 'Tech Enthusiast'];
    const typeSpeed = 0.15; // Typing speed in seconds per character
    const delayBetweenWords = 2; // Delay in seconds between words
    const isTyping = false

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
                text: '',
                duration: word.length * (typeSpeed / 2),
                ease: 'none',
            });
        });

    }, []); 

    const textCursorRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({repeat: -1});

        tl.fromTo(textCursorRef.current, {
            opacity: 0,
            duration: 0,
            delay: 0.5,
            // duration: 0.5,
        }, {
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
            // duration: 0.5,
        });
    }, []);

    return (
        <>
            <section className="hero_section">
                <div className="container">
                    <div className="hero_photos">
                        <img className="pablo_image_hero" src="./public/images/pablo_behind_head.JPG" alt="Photo of Pablo the dog" />
                        <img className="david_image_hero" src="./public/images/David_and_Pablo_Sand_Dunes.jpg" alt="Photo of David and his dog pablo" />
                        <img className="cara_david_image_hero" src="./public/images/cara_david_sedona.jpg" alt="Photo of David and Cara" />
                    </div>
                    <div className="hero_content">
                        <div className="hero_statement">
                            <h2>{intro}</h2>
                            <p><span ref={autoTypeRef}></span><span ref={textCursorRef}>|</span></p>
                        </div>
                        <span></span>
                        <div className="hero_description">
                            <p>{description}</p>
                        </div>
                        {/* <p>{description}</p> */}
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;