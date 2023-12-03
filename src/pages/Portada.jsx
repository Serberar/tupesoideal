import React from 'react';
import '../css/Portada.css';

const Portada = () => {
  return (
    <div className='portada'>
      <div className='tituloHeader'>
        <h1>Consulta de nutrición online con expertos</h1>
      </div>
      <div className='header'>

        <div className='textoHeader'>
          <h3>Nutricionista titulada - Videollamada - Seguro y confidencial</h3>
          <p>En nuestra plataforma especializada, te ofrecemos la asesoría nutricional personalizada de una nutricionista titulada. ¡Todo desde la comodidad de tu hogar! 

Nos dedicamos a entender tus objetivos, tus hábitos alimenticios y tu situación personal para crear un plan que no solo sea efectivo, sino también realista y adaptable a tu estilo de vida. 
La individualidad es la clave, tendras un plan nutricional diseñado exclusivamente para ti.
<br/><br/>
 ¡Tu nueva vida empieza ahora!"
 </p>
 </div>
        <div className='imagenHeader'>
          {/* menos de 1100px hay que darle formato movil a la imagen */}
          <img src="/img/portada1.png" alt="Nutrición" />
        </div>
      </div>
      <div className='funciona'>
        <h4>¿Como funciona?</h4>
      </div>

      <h3 className='tituloConsultas'>¿Por qué elegir consultas online?</h3>
      <div className='consultas'>

        <div className='razones'>
          <img className='imgRazones' src='/img/icono1.jpg' alt="razón1" />
          <p className='tituloRazones'>Accesible y Rápido</p>
          <div className='textoRazones'>Estés donde estés, puedes acceder a tu consulta online en cualquier momento y en cualquier lugar. Puedes unirte a la sesión con un ordenador o tablet </div>
        </div>

        <div className='razones'>
          <img className='imgRazones' src='/img/icono1.jpg' alt="razón1" />
          <p className='tituloRazones'>Accesible y Rápido</p>
          <div className='textoRazones'>Estés donde estés, puedes acceder a tu consulta online en cualquier momento y en cualquier lugar. Puedes unirte a la sesión con un ordenador o tablet </div>
        </div>

        <div className='razones'>
          <img className='imgRazones' src='/img/icono1.jpg' alt="razón1" />
          <p className='tituloRazones'>Accesible y Rápido</p>
          <div className='textoRazones'>Estés donde estés, puedes acceder a tu consulta online en cualquier momento y en cualquier lugar. Puedes unirte a la sesión con un ordenador o tablet </div>
        </div>

        <div className='razones'>
          <img className='imgRazones' src='/img/icono1.jpg' alt="razón1" />
          <p className='tituloRazones'>Accesible y Rápido</p>
          <div className='textoRazones'>Estés donde estés, puedes acceder a tu consulta online en cualquier momento y en cualquier lugar. Puedes unirte a la sesión con un ordenador o tablet </div>
        </div>
      </div>

      <div className='parallax'>
        <h3>Seleccionamos lo mejor para ti</h3>
        <ul>
          <li>Además de realizar una entrevista individual contigo, nos aseguramos de revisar tu historia clínica para darte una dieta elaborada exclusivamente para ti</li>
          <li>Cada sesión tendrás una dieta nueva elaborada acorde a tus necesidades</li>
        </ul>
      </div>
      
      <div className='acordeon'>
        <h3>Preguntas frecuentes</h3>
        
      </div>
    
      <div className='footer'>
        <div className='footer-section'>
          <h4>Como podemos ayudarte</h4>
          <ul>
            <li>Dieta para adelgazar</li>
            <li>dieta deportiva</li>
            <li>nutrición para enfermedades</li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4>Síguenos</h4>
          <ul>
            <li><a href="https://www.facebook.es">Facebook</a></li>
            <li><a href="https://es.linkedin.com">LinkedIn</a></li>
          </ul>
        </div>
        <p>copyright 2023</p>
      </div>
    </div>
  );
};

export default Portada;
