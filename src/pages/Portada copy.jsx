import React, { useState } from 'react';
import '../css/Portada.css';

const Portada = () => {

  const [elementoActivo, setElementoActivo] = useState(null);

  const ControlCLickAcordeon = (index) => {
    setElementoActivo(elementoActivo === index ? null : index);
  };

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
            <br /><br />
            ¡Tu nueva vida empieza ahora!"
          </p></div>
        <div className='imagenHeader'>
          <img src="/img/portada1.png" alt="Nutrición" />
        </div>
      </div>

<div className='parallax'>
        <h3>Seleccionamos lo mejor para ti</h3>
        <ul>
          <li>Además de realizar una entrevista individual contigo, nos aseguramos de revisar tu historia clínica para darte una dieta elaborada exclusivamente para ti</li>
          <li>Cada sesión tendrás una dieta nueva elaborada acorde a tus necesidades</li>
        </ul>
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

      <div className='funciona'>
        <h4>¿Como funciona?</h4>
      </div>

<div className='acordeonDiv'>
      <div className="acordeon">
        <div className={`acordeonItem ${elementoActivo === 0 ? 'active' : ''}`}>
          <div className="acordeonTitulo" onClick={() => ControlCLickAcordeon(0)}>Pregunta 1</div>
          <div className={`acordeonContenido ${elementoActivo === 0 ? 'active' : ''}`}>
            <p>Respuesta a la pregunta 1.</p>
          </div>
        </div>
        <div className={`acordeonItem ${elementoActivo === 1 ? 'active' : ''}`}>
          <div className="acordeonTitulo" onClick={() => ControlCLickAcordeon(1)}>Pregunta 2</div>
          <div className={`acordeonContenido ${elementoActivo === 1 ? 'active' : ''}`}>
            <p>Respuesta a la pregunta 2.</p>
          </div>
        </div>
        <div className={`acordeonItem ${elementoActivo === 2 ? 'active' : ''}`}>
          <div className="acordeonTitulo" onClick={() => ControlCLickAcordeon(2)}>Pregunta 3</div>
          <div className={`acordeonContenido ${elementoActivo === 2 ? 'active' : ''}`}>
            <p>Respuesta a la pregunta 3.</p>
          </div>
        </div>
      </div>
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
