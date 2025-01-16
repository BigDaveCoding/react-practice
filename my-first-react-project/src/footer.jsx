import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
function Footer() {

    const footerRef = useRef(null);

    useEffect(() => {
        if (footerRef.current) {
            console.log(footerRef.current);

            gsap.to(footerRef.current, {
                opacity: 1,
                duration: 2,
                ease: 'power3.out',
            });
        }
    }, []);

    return (
        <>
            <footer>
                <hr />
                <div className="footer_copyright">
                    <a href="#"><i className="fas fa-copyright"></i></a>
                    <p>{new Date().getFullYear()} Big Dave Coding</p>
                </div>
                <div className="footer_phone">
                    <a href="tel: 07414949645"><i className="fas fa-phone"></i></a>
                    <p>07414949645</p>
                </div>
                <div className="footer_email">
                    <a href="mailto:draytoncoffee@gmail.com"><i className="fas fa-envelope"></i></a>
                    <p>bigdavecoding@gmail.com</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;