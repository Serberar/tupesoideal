import React, { useContext, useState } from 'react';
import { myContext } from '../components/Context';
import { Link } from 'react-router-dom';
import '../css/Portada.css';

const Portada = () => {
  const { state, agregarAlCarrito } = useContext(myContext);
  const [verCarrito, setVerCarrito] = useState(false);
  const [elementoActivo, setElementoActivo] = useState(null);

  const temporizadorVerCarrito = () => {
    setVerCarrito(true);
    setTimeout(() => {
      setVerCarrito(false);
    }, 3000); // Cambiar el tiempo de visualización del carrito según sea necesario
  };

  const ControlCLickAcordeon = (index) => {
    setElementoActivo(elementoActivo === index ? null : index);
  };

  return (
    <div className='portada'>
      {verCarrito && (
        <div className='carritoProducto'>
          <h2>Carrito de compras</h2>
          <ul className='ulCarritoProducto'>
            {state.items.map((item) => (
              <li key={item.id}>
                <img src={item.image} alt={item.name} className='carritoImagenProducto' />
                <span className='spanCarritoProducto'>{item.name}</span>
                <span className='spanCarritoProducto'>Cantidad: {item.quantity}</span>
                <span className='spanCarritoProducto'>Precio: {item.price * item.quantity}€</span>
              </li>
            ))}
          </ul>
          <p>Total: {state.subtotal}€</p>
          <Link to="/carrito">
            <button className='botonVerCestaProducto'>Ver cesta</button>
          </Link>
        </div>
      )}

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
          <h2 className="tituloProductos">Conoce nuestros servicios</h2>
        <div className="productos">
          {state.Productos.map((producto) => (
            <div className="divProductoIndex" key={producto.id}>
              <h3 className="tituloProductoIndex">{producto.title}</h3>
              <img className="imagenProductoIndex" src={producto.images[0].src} alt={producto.title} />
              <div
                className="descripcionProductoIndex"
                dangerouslySetInnerHTML={{ __html: producto.description }}
              />
              <div className="precioProductoIndex">
                <p className="ProductosIndex">Este plan tiene un precio de: {producto.price}€</p>
              </div>
              <button
                className='botonCarrito'
                onClick={() => {
                  agregarAlCarrito(producto);
                  temporizadorVerCarrito();
                }}
              >
                Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      </div>



      <h3 className='tituloConsultas'>¿Por qué elegir consultas online?</h3>
      <div className='consultas'>
        <div className='razones'>
          <img className='imgRazones' src='/img/icono1.jpg' alt="razón1" />
          <p className='tituloRazones'>Accesible y Rápido</p>
          <div className='textoRazones'>ELas consultas online ofrecen la comodidad de acceder a servicios de nutrición desde cualquier ubicación. Los usuarios pueden programar citas sin tener que desplazarse físicamente, lo que ahorra tiempo y esfuerzo. </div>
        </div>
        <div className='razones'>
          <img className='imgRazones' src='/img/icono1.jpg' alt="razón1" />
          <p className='tituloRazones'>Flexibilidad de horarios</p>
          <div className='textoRazones'>Las consultas en línea ofrecen horarios más flexibles, lo que permite a los usuarios elegir citas que se ajusten a sus agendas. Esto resulta beneficioso para personas con horarios ocupados o restricciones de tiempo. </div>
        </div>
        <div className='razones'>
          <img className='imgRazones' src='/img/icono1.jpg' alt="razón1" />
          <p className='tituloRazones'>Seguimiento y registro digital</p>
          <div className='textoRazones'>Las plataformas en línea pueden proporcionar herramientas para el seguimiento y registro digital de la dieta, el progreso y los objetivos. Esto facilita a los usuarios el acceso a su historial y les ayuda a mantenerse comprometidos con su plan alimenticio</div>
        </div>
        <div className='razones'>
          <img className='imgRazones' src='/img/icono1.jpg' alt="razón1" />
          <p className='tituloRazones'>Comunicación continua</p>
          <div className='textoRazones'>Las consultas en línea a menudo brindan una vía de comunicación continua entre el profesional de la salud y el usuario. Esto permite resolver dudas, recibir consejos y obtener apoyo adicional entre citas programadas</div>
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
