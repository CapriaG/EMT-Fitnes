import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section contact">
          <h3>Contacto</h3>
          <p>Teléfono: +54 1126601277</p>
          <p>Email: contacto@emtfitness.com</p>
        </div>
        <div className="footer-section back-to-top" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faAnglesUp} />
        </div>
        <div className="footer-section info">
          <h3>Información</h3>
          <p>Sobre nosotros</p>
          <p>Política de privacidad</p>
          <p>Términos y condiciones</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 EMT Fitness. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;