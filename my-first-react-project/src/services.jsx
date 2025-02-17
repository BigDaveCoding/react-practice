import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

function Services() {

    const intro = "Tired of websites that lack impact or fail to convert? I build premium web solutions that engage, drive results, and empower your business to thrive."
    const web_dev_text = "A well-designed website has the power to transform your brand and drive real growth.\
                            I create custom websites that not only reflect your unique vision but also offer intuitive, engaging experiences.\
                            By incorporating smooth animations and attention to detail, I ensure your audience stays captivated and returns for more."

    const web_design_text = "Enhance your digital presence with a website that resonates with your audience.\
                             I create visually captivating, user-focused designs that not only reflect your brand but also drive engagement,\
                              helping you achieve your business goals and grow effortlessly."

    const seo_text = "Drive traffic and boost visibility with websites optimized for search engines.\
                         I ensure your site is fast, accessible, and structured to rank higher, helping your audience find you effortlessly."


    const introSection = useRef(null)
    const webDevSection = useRef(null)
    const webDesignSection = useRef(null)
    const seoSection = useRef(null)

    useEffect(() => {
        const webDev = webDevSection.current;
        const webDesign = webDesignSection.current;
        const seo = seoSection.current;

    
        if (webDev && webDesign && seo) {
            gsap.to(webDev, {
                scrollTrigger: {
                    trigger: webDev,
                    start: 'top 10%', // Pin starts when the top of the element reaches the top of the viewport
                    endTrigger: seo,
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
                    endTrigger: seo,
                    end: 'top 25%',
                    pin: true,
                    pinSpacing: false,
                    // markers: true,
                }
            });

            gsap.to(seo, {
                scrollTrigger: {
                    trigger: seo,
                    start: 'top 25%',
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
        const seo = seoSection.current;

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

        if (seo) {
            gsap.fromTo(seo, {
                opacity: 0,
                x: -500,
            }, {
                opacity: 1,
                x: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: seo,
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
                    <h3 className="services_title">HOW I CAN HELP YOU</h3>
                    <div className="services_grid">
                        <span></span>
                        <div className="s_grid_intro">
                            <p><strong>(SERVICES)</strong></p>
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
                            <li><span className="service_list_key"><sup>01</sup></span>Custom Web Design</li>
                            <li><span className="service_list_key"><sup>02</sup></span>Motion & Animations</li>
                            <li><span className="service_list_key"><sup>03</sup></span>Interactive Features</li>
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
                            <li><span className="service_list_key"><sup>02</sup></span>Wireframing</li>
                            <li><span className="service_list_key"><sup>03</sup></span>UI/UX Design</li>
                        </ul>
                    </div>
                </div>

                <div ref={seoSection} className="services_grid s_grid_item">
                    <span className="s_grid_column_one">(03)</span>
                    <div className = "service">
                        <h4>SEO</h4>
                        <p>{seo_text}</p>
                        <ul>
                            <li><span className="service_list_key"><sup>01</sup></span>On-Page SEO</li>
                            <li><span className="service_list_key"><sup>02</sup></span>Analytics & reporting</li>
                            <li><span className="service_list_key"><sup>03</sup></span>Content Optimization</li>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Services