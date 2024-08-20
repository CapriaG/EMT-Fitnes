import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaHome, FaEnvelope, FaTimes, FaBook } from 'react-icons/fa';
import Logo from "../assets/LogoW.png";
import Firma from "../assets/firmaEMT.png";

const SidebarMenu = ({ isOpen, toggleMenu }) => {
    return (
        <div className={`sidebar-menu ${isOpen ? 'open' : ''}`}>
            <FaTimes className="sidebar-close" onClick={toggleMenu} />
            <img src={Logo} alt="Logo" className="sidebar-logo" />
            <div className="sidebar-title">EMT FITNESS</div>
            <Link to={"/"} className="sidebar-link" onClick={toggleMenu}>
                <FaHome className="sidebar-icon" /> Inicio
            </Link>
            <Link to={"/services"} className="sidebar-link" onClick={toggleMenu}>
                <FaBook className="sidebar-icon" /> Nuestros planes
            </Link>
            <Link to={"/contact"} className="sidebar-link" onClick={toggleMenu}>
                <FaEnvelope className="sidebar-icon" /> Contactanos
            </Link>
            <img className="firma" src={Firma} alt="firmaEmt"/>
        </div>
    
    );
};

SidebarMenu.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleMenu: PropTypes.func.isRequired,
};

export default SidebarMenu;
