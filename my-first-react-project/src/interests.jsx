import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

function Interests() {

    const intro = "I'm really into technology—whether it's building cool websites, diving into data, or working on fun video games.\
                     I love trying out new tools and techniques to see what’s possible, all with the goal of making digital experiences that stand out and make an impact."

    const web_dev_text = "Web development is what I’m all about. I love making websites that are smooth, interactive, and easy to use.\
                            I’m always excited to learn new frameworks and design tricks to keep improving and making sites more fun and efficient."

    const web_design_text = "I’m really into creating digital experiences that connect with people.\
                                Whether it’s designing websites that are easy to use and visually stunning, exploring new tech like animations and interactive features,\
                                or diving into data to understand what works best—I'm always learning and pushing my boundaries to build something meaningful"

    const data_analytics_text = "I love diving into data to uncover insights and tell stories."

    const game_dev_text = "I’ve always loved bringing stories to life through interactive experiences.\
                            Whether it’s developing gameplay mechanics or designing immersive environments, I enjoy combining creativity and coding to create fun and engaging video games.\
                             I focus on making the player experience seamless and exciting, always looking for new ways to enhance gameplay and push technical limits."


    const introSection = useRef(null)
    const webDevSection = useRef(null)
    const webDesignSection = useRef(null)
    const dataAnalyticsSection = useRef(null)
    const gameDevSection = useRef(null)

    useEffect(() => {
        const webDev = webDevSection.current;
        const webDesign = webDesignSection.current;
        const dataAnalytics = dataAnalyticsSection.current;
        const gameDev = gameDevSection.current;

    
        if (webDev && webDesign && gameDevSection && dataAnalytics) {
            gsap.to(webDev, {
                scrollTrigger: {
                    trigger: webDev,
                    start: 'top 10%', // Pin starts when the top of the element reaches the top of the viewport
                    endTrigger: gameDev,
                    end: 'top 25%', 
                    pin: true,
                    pinSpacing: false,
                    // markers: true,
                }
            });

            gsap.to(webDesign, {
                scrollTrigger: {
                    trigger: webDesign,
                    start: 'top 17.5%',
                    endTrigger: gameDev,
                    end: 'top 25%',
                    pin: true,
                    pinSpacing: false,
                    // markers: true,
                }
            });

            gsap.to(dataAnalytics, {
                scrollTrigger: {
                    trigger: dataAnalytics,
                    start: 'top 25%',
                    endTrigger: gameDev,
                    end: 'top 25%',
                    pin: true,
                    pinSpacing: false,
                    // markers: true,
                }
            });

            gsap.to(gameDev, {
                scrollTrigger: {
                    trigger: gameDev,
                    start: 'top 32.5%',
                    end: 'top 25%',
                    pin: true,
                    pinSpacing: false,
                    // markers: true,
                }
            });
        }
    
        // Cleanup ScrollTrigger on component unmount
        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    useEffect(() => {
        const intro = introSection.current;
        const webDev = webDevSection.current;
        const webDesign = webDesignSection.current;
        const dataAnalytics = dataAnalyticsSection.current;
        const gameDev = gameDevSection.current;

        if(intro) {
            gsap.fromTo(intro, {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 2,
                scrollTrigger: {
                    trigger: intro,
                    start: 'top 70%',
                    end: 'bottom 50%',
                    // markers: true,
                }
            })
        }


        if (webDev) {
            gsap.fromTo(webDev, {
                opacity: 0,
                x: -500,
            }, {
                opacity: 1,
                x: 0,
                duration: 1,

                scrollTrigger: {
                    trigger: webDev,
                    start: 'top 60%',
                    end: 'bottom 50%',
                }
            })
        }

        if (webDesign) {
            gsap.fromTo(webDesign, {
                opacity: 0,
                x: 500,
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: webDesign,
                    start: 'top 75%',
                    end: 'bottom 50%',
                }
            })
        }

        if (dataAnalytics) {
            gsap.fromTo(dataAnalytics, {
                opacity: 0,
                x: -500, 
            },  {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: dataAnalytics,
                    start: "top 75%",
                    end: "bottom 50%"
                }
            });

        }
        

        if (gameDev) {
            gsap.fromTo(gameDev, {
                opacity: 0,
                x: 500,
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: gameDev,
                    start: 'top 75%',
                    end: 'bottom 50%',
                }
            })
        }


        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };

    }, []);
    


    return (
        <>
            <section className="services_section">
                <div ref={introSection}>
                    <h3 className="services_title">AREAS I'M EXPLORING</h3>
                    <div className="services_grid">
                        <span></span>
                        <div className="s_grid_intro">
                            <p><strong>(INTERESTS)</strong></p>
                            <p>{intro}</p>
                        </div>
                    </div>
                </div>

                <div id="web_dev_service" ref={webDevSection} className="services_grid s_grid_item">
                    <span className="s_grid_column_one">(01)</span>
                    <div className = "service">
                        <h4>Web Development</h4>
                        <p>{web_dev_text}</p>
                        <ul>
                            <li><span className="service_list_key"><sup>01</sup></span>Custom User Interfaces</li>
                            <li><span className="service_list_key"><sup>02</sup></span>Smooth Animations</li>
                            <li><span className="service_list_key"><sup>03</sup></span>Fun, Interactive Features</li>
                        </ul>
                    </div>
                </div>

                <div ref={webDesignSection} className="services_grid s_grid_item">
                    <span className="s_grid_column_one">(02)</span>
                    <div className = "service">
                        <h4>Web Design</h4>
                        <p>{web_design_text}</p>
                        <ul>
                            <li><span className="service_list_key"><sup>01</sup></span>Responsive Design</li>
                            <li><span className="service_list_key"><sup>02</sup></span>CSS Frameworks</li>
                            <li><span className="service_list_key"><sup>03</sup></span>UI/UX Design</li>
                        </ul>
                    </div>
                </div>

                <div ref={dataAnalyticsSection} className="services_grid s_grid_item">
                    <span className="s_grid_column_one">(02)</span>
                    <div className = "service">
                        <h4>Data Analytics</h4>
                        <p>{data_analytics_text}</p>
                        <ul>
                            <li><span className="service_list_key"><sup>01</sup></span>Responsive Design</li>
                            <li><span className="service_list_key"><sup>02</sup></span>CSS Frameworks</li>
                            <li><span className="service_list_key"><sup>03</sup></span>UI/UX Design</li>
                        </ul>
                    </div>
                </div>

                <div ref={gameDevSection} className="services_grid s_grid_item">
                    <span className="s_grid_column_one">(03)</span>
                    <div className = "service">
                        <h4>Game Development</h4>
                        <p>{game_dev_text}</p>
                        <ul>
                            <li><span className="service_list_key"><sup>01</sup></span>Object-Oriented Programming</li>
                            <li><span className="service_list_key"><sup>02</sup></span>Efficient Alogorithms</li>
                            <li><span className="service_list_key"><sup>03</sup></span>Modular Code</li>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Interests