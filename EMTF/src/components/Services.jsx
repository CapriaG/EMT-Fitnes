import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import Footer from "./Footer";

const Services = () => {
  const [lastProductId, setLastProductId] = useState(null);

  initMercadoPago('APP_USR-7bc4f162-a78e-4d34-8148-c65a581f827a', {
    locale: "es-AR",
  });

  const [preferenceId, setPreferenceId] = useState(null);

  const products = [
    {
      id: 1,
      title: "Plan VIP",
      quantity: 1,
      price: 5000,
      description: "Plan personalizado con dieta, rutina mensual y acceso al VIP",
    },
    {
      id: 2,
      title: "Plan VIP Premium",
      quantity: 1,
      price: 7500,
      description: "Plan personalizado con dieta, rutina mensual, acceso al VIP y reunión individual para priorizar progresos",
    },
    {
      id: 3,
      title: "Plan Progreso",
      quantity: 1,
      price: 1000,
      description: "Plan personalizado con dieta, rutina mensual, seguimiento y acceso a grupo de Whatsapp",
    },
    {
      id: 4,
      title: "Plan Progreso",
      quantity: 1,
      price: 1800,
      description: "Plan personalizado con dieta, rutina mensual, seguimiento y acceso a grupo de Whatsapp",
    }
  ];

  const handleBuy = async (product) => {
    try {
      const response = await axios.post("http://localhost:3000/create_preference", {
        title: product.title,
        quantity: product.quantity,
        price: product.price,
      });

      const { id } = response.data;
      if (id) {
        setPreferenceId(id);
        setLastProductId(product.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="services-background">
        <div className="services-container">
          <h2>Nuestros Planes</h2>
          <div className="services">
            {products.map(product => (
              <div key={product.id} className="service">
                <h3>{product.title}</h3>
                <p className="price">{product.price}</p>
                <p>{product.description}</p>
                <button onClick={() => handleBuy(product)} className="buy-button">Comprar</button>
                {lastProductId === product.id && preferenceId && (
                  <Wallet
                    key={preferenceId}
                    initialization={{ preferenceId }}
                    customization={{ texts: { valueProp: 'smart_option' } }}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="questions-button-container">
          <Link to="/contact">
              <button className="question-button">¿Tienes dudas?</button>
            </Link>
          </div>
        </div>
      </div>
    <Footer />
    </>
  );
};

export default Services;

