

function HeroSection() {

    const intro = "Hi, I'm David."
    const description = "I craft stunning, user-focused websites and dynamic digital experiences that help businesses stand out and drive results. From design to development, I bring ideas to life online"

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
                        <h2>{intro}</h2>
                        <p>{description}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection;