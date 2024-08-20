import Slider from "react-slick";
import VideoFile from "../assets/emtfHome.mp4";
import Imagereplace from "../assets/replace.png";
import ImagenHome from "../assets/emtHomeB.png";
import ImageBelow from "../assets/Home.jpg";
import ImageBelow1 from "../assets/Home-1.jpg";
import ImageBelow2 from "../assets/Home-2.jpg";
import ImageBelow3 from "../assets/Home-3.jpg";
import ImageBelow4 from "../assets/Home-4.jpg";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const scrollToCarousel = () => {
    const carouselContainer = document.getElementById('carousel-container');
    if (carouselContainer) {
      carouselContainer.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="main-container">
      <div className="video-container">
        <div className="video-wrapper">
          <video autoPlay loop muted width="100%">
            <source src={VideoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay-container">
            <div className="button-overlay-text">
              <p>Descubre tu mejor versión con</p>
            </div>
            <div className="button-overlay-image">
              <img src={ImagenHome} alt="Imagen Home" />
            </div>
            <a href="#carousel-container" onClick={scrollToCarousel} className="weight" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faDumbbell} />
            </a>
          </div>
        </div>
        {/* Imagen de reemplazo para pantallas pequeñas */}
        <div className="image-placeholder">
          <img src={Imagereplace} alt="Imagen de reemplazo" className="replace-image" />
        </div>
      </div>
      <div id="carousel-container" className="carousel-container">
        <Slider {...settings}>
          <div>
            <img src={ImageBelow3} alt="Image" />
            <p className="image-description">El entrenamiento regular no solo mejora tu condición física al aumentar tu fuerza, resistencia y flexibilidad, sino que también tiene un impacto positivo en tu salud mental.</p>
          </div>
          <div>
            <img src={ImageBelow1} alt="Image 1" />
            <p className="image-description">Fitness es más que solo entrenar en el gimnasio; se trata de adoptar un estilo de vida saludable y activo. Integrar el ejercicio en tu vida diaria te ayuda a mantener un equilibrio físico y mental, mejorando tu calidad de vida en general</p>
          </div>
          <div>
            <img src={ImageBelow4} alt="Image 2" />
            <p className="image-description">Consumir una dieta equilibrada y rica en nutrientes no solo te proporciona la energía necesaria para realizar tus ejercicios, sino que también acelera la recuperación muscular, mejora tu rendimiento y te ayuda a alcanzar tus objetivos de forma más efectiva</p>
          </div>
          <div>
            <img src={ImageBelow2} alt="Image 3" />
            <p className="image-description">Monitorear tu progreso es esencial para mantener la motivación y ajustar tu plan de entrenamiento según sea necesario. Celebrar cada pequeño logro te acerca un paso más a tus metas finales.</p>
          </div>
          <div>
            <img src={ImageBelow} alt="Image 4" />
            <p className="image-description">Entrenar te brinda apoyo, motivación y un sentido de comunidad que hace que el ejercicio sea más agradable y sostenible. El ambiente grupal y el ánimo de tus compañeros te inspiran a esforzarte más.</p>
          </div>
        </Slider>
      </div>
      <div className="benefits-section">
        <h2>Beneficios de EMT Fitness</h2>
        <div className="benefits-container">
          <div className="benefit">
            <div>
              <h3>Entrenamientos Personalizados</h3>
              <p>Recibe un plan de entrenamiento único y adaptado a tus necesidades individuales para ayudarte a alcanzar tus metas personales</p>
            </div>
          </div>
          <div className="benefit">
            <div>
              <h3>Resultados Garantizados</h3>
              <p>Nuestra metodología dinámica garantiza resultados visibles y sostenibles, respaldados por nuestro compromiso con tu progreso continuo</p>
            </div>
          </div>
          <div className="benefit">
            <div>
              <h3>Mejora Integral</h3>
              <p>Transforma tu vida con entrenamientos que fortalecen tanto tu cuerpo físico como tu bienestar mental, proporcionándote una mejora integral y duradera</p>
            </div>
          </div>
        </div>
        <Link to="/services">
          <button className="start-button">COMENCEMOS!</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
