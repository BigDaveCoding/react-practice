import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
// import 'font-awesome/css/font-awesome.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Header() {

    const name = 'David Smith'
    const role = 'Web Designer & Developer'

    const [dateTime, setDateTime] = useState(
        {
            date: '',
            time: '',
        }
    );

    const headerRef = useRef(null);

    const updateDateTime = () => {

        const now = new Date();
        const day = now.getUTCDate().toString().padStart(2, '0');
        const month = (now.getUTCMonth() + 1).toString().padStart(2, '0');
        const year = now.getUTCFullYear();
        const hours = now.getUTCHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');

        setDateTime({
            date: `${day}/${month}/${year}`,
            time: `${hours}:${minutes}`,
        });
    };

    useEffect(() => {
        updateDateTime();
        const interval = setInterval(updateDateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {

        if (headerRef.current) {
            // console.log(headerRef.current);
            gsap.to(headerRef.current, {
                opacity: 1,
                duration: 1,
                ease: 'power3.out',
            });
        }  
    }, []);

    const handleScroll = (e, targetId) => {
        e.preventDefault()
        const element = document.getElementById(targetId);
        if (element) {
            const offset = 10 * window.innerHeight / 100;
            const targetPos = element.offsetTop - offset

            window.scrollTo({
                top: targetPos,
                behavior: 'smooth',
            });
        }
    };
    

    return (
        <header ref={headerRef}>
            <div className="header_grid">
                <div className="date_time header_grid_item">
                    <div>
                        <i className="fas fa-calendar"></i>
                        <p>{dateTime.date}</p>
                    </div>
                    <div>
                        <i className="fas fa-clock"></i>
                        <p>{dateTime.time}</p>
                    </div>
                </div>
                <div className="page_title header_grid_item">
                    <h1>{name.toUpperCase()}</h1>
                    <p>{role.toUpperCase()}</p>
                </div>
                <nav className="header_grid_item">
                    <ul>
                        <li><a href="#hero_section" onClick={(e) => handleScroll(e, 'hero_section')} >Home</a></li>
                        <li><a href="#interests_section" onClick={(e) => handleScroll(e, 'interests_section')} >About</a></li>
                        <li><a href="#projects_section" onClick={(e) => handleScroll(e, 'projects_section')} >Projects</a></li>
                        <li><a href="#contact_section" onClick={(e) => handleScroll(e, 'contact_section')} >Contact</a></li>
                    </ul>
                </nav>
            </div>
            <hr />
        </header>
    )
}

export default Header;