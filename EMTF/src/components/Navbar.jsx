import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import imageLogo from "../assets/LogoW.png";
import SidebarMenu from "./Sidebar";
const Navbar = () => {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
            lastScrollY = window.scrollY;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <nav className={`navbar ${scrolling ? 'navbar-hidden' : ''}`}>
                <div className="nav-container">
                    <div className="menu-icon" onClick={toggleMenu}>
                        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                    </div>
                    <Link to={"/"} className="nav-logo"><img src={imageLogo} alt="Logo" /></Link>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/elias.matacone" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTiktok} /></a>
                        <a href="https://www.instagram.com/elias.matalone/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="https://wa.me/541126601277" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faWhatsapp} /></a>
                    </div>
                </div>
            </nav>
            <SidebarMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
        </>
    );
}

export default Navbar;
