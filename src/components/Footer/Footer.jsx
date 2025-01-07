import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-section'>
      <h4>Como podemos ayudarte</h4>
      <ul>
        <li>Dieta para adelgazar</li>
        <li>Dieta deportiva</li>
        <li>Nutrición para enfermedades</li>
      </ul>
    </div>
  
    <div className='footer-section'>
      <h4>Síguenos</h4>
      <ul>
        <li><a href='https://www.facebook.es'><i className="fab fa-facebook-f"></i> Facebook</a></li>
        <li><a href='https://es.linkedin.com'><i className="fab fa-linkedin-in"></i> LinkedIn</a></li>
      </ul>
    </div>
  
    <div className='footer-section'>
      <h4>Suscríbete</h4>
      <p>Recibe nuestras noticias y consejos sobre nutrición.</p>
      <form className="footer-form">
        <input type="email" placeholder="Introduce tu correo" />
        <button type="submit">Suscribirse</button>
      </form>
    </div>
  
    <div className='footer-bottom'>
      <p>&copy; {new Date().getFullYear()} - Todos los derechos reservados.</p>
      <div className="footer-links">
        <a href="/about">Sobre nosotros</a> | 
        <a href="/privacy">Política de privacidad</a> | 
        <a href="/terms">Términos y condiciones</a>
      </div>
    </div>
  </div>
  );
};

export default Footer;
