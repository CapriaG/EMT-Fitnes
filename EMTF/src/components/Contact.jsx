import { useForm } from 'react-hook-form';
import Footer from "./Footer";

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://formspree.io/f/xleqvrnv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        alert('Mensaje enviado!');
        reset();
      } else {
        console.error('Error al enviar el mensaje:', response.statusText);
        alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
    }
  };

  return (
    <>
      <div className="background-container">
        <div className="container-contact">
          <h2>Contáctanos</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                id="name"
                {...register("name", { required: true })}
              />
              {errors.name && <span>Este campo es requerido</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                {...register("email", { required: true })}
              />
              {errors.email && <span>Este campo es requerido</span>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensaje:</label>
              <textarea
                id="message"
                {...register("message", { required: true })}
              />
              {errors.message && <span>Este campo es requerido</span>}
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    <Footer />
    </>
  );
};

export default Contact;
