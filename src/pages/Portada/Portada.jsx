import React, { useContext, useState, useEffect } from 'react'
import { myContext } from '../../components/Context'
import { Link } from 'react-router-dom'
import './Portada.css'

const Portada = () => {
  const { state, agregarAlCarrito } = useContext(myContext)
  const [verCarrito, setVerCarrito] = useState(false)
  const [elementoActivo, setElementoActivo] = useState(null)
  const [year, setYear] = useState(null)
  const imagenParallax = state.post.find(post => post.id === 131)?.bloques?.[0]?.imagen

  const temporizadorVerCarrito = () => {
    setVerCarrito(true)
    setTimeout(() => {
      setVerCarrito(false)
    }, 3000) // Cambiar el tiempo de visualización del carrito
  }

  const ControlCLickAcordeon = (index) => {
    setElementoActivo(elementoActivo === index ? null : index)
  }

  console.log(state.post)

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
          <Link to='/carrito'>
            <button className='botonVerCestaProducto'>Ver cesta</button>
          </Link>
        </div>
      )}

      <div className='tituloHeader'>
        <h1>{state.post.find(post => post.id === 1)?.titulo}</h1>
      </div>
      <div className='header'>

        <div className='textoHeader'>
        
          
          <p>
          {state.post.find(post => post.id === 1)?.bloques?.[0]?.texto}
          <br /><br />
          {state.post.find(post => post.id === 1)?.bloques?.[1]?.texto}
            <br /><br />
            {state.post.find(post => post.id === 1)?.bloques?.[2]?.texto}
          </p>
        </div>
        <div className='imagenHeader'>
          <img className= 'imagenLateralHeader' src={state.post.find(post => post.id === 118)?.bloques?.[0]?.imagen} alt='Nutrición' />
        </div>
      </div>

      <div
      className="parallax" style={{backgroundImage: `url(${imagenParallax})`,}}>
        <h2 className='tituloProductos'>Conoce nuestros servicios</h2>
        <div className='productos'>
          {state.Productos.map((producto) => (
            <div className='divProductoIndex' key={producto.id}>
              <h3 className='tituloProductoIndex'>{producto.title}</h3>
              <img className='imagenProductoIndex' src={producto.images[0].src} alt={producto.title} />
              <div
                className='descripcionProductoIndex'
                dangerouslySetInnerHTML={{ __html: producto.description }}
              />
              <div className='precioProductoIndex'>
                <p className='ProductosIndex'>Este plan tiene un precio de: {producto.price}€</p>
              </div>
              <button
                className='botonCarrito'
                onClick={() => {
                  agregarAlCarrito(producto)
                  temporizadorVerCarrito()
                }}
              >
                Añadir al carrito
              </button>
            </div>
          ))}
        </div>
      </div>

      <h3 className='tituloConsultas'>{state.post.find(post => post.id === 122)?.titulo}</h3>
<div className='consultas'>
  {state.post.find(post => post.id === 122)?.bloques?.map((bloque, index) => {
    if (index % 3 === 0) { 
      return (
        <div key={index} className="razones">
          {/* Imagen */}
          {state.post.find(post => post.id === 122)?.bloques[index + 2]?.imagen && (
            <img className="imgRazones" src={state.post.find(post => post.id === 122)?.bloques[index + 2]?.imagen} alt={`Imagen ${index}`} />
          )}
          {/* Titulo */}
          <p className="tituloRazones">{bloque?.texto}</p>
          {/* Descripción */}
          <div className="textoRazones">{state.post.find(post => post.id === 122)?.bloques[index + 1]?.texto}</div>
        </div>
      );
    }
    return null;
  })}
</div>

<div className='funciona'>
  <h4 className='tituloFunciona'>
    {state.post.find(post => post.id === 139)?.titulo}
  </h4>

  {state.post.find(post => post.id === 139)?.bloques.map((bloque, index) => (
    <div key={index}>
      {/* Verifica si el texto comienza con un número (título) */}
      {bloque.texto.match(/^\d+/) ? (
        <p className='titulinFunciona'>
          <span className='numeroPaso'>{bloque.texto.match(/^\d+/)[0]}</span> {bloque.texto.replace(/^\d+/, '')}
        </p>
      ) : (
        <p className='textoFunciona'>{bloque.texto}</p>
      )}
    </div>
  ))}
</div>


<div className='acordeonDiv'>
<b>{state.post.find(post => post.id === 113)?.titulo}</b>
<br /><br />
  <div className='acordeon'>
    {state.post.find(post => post.id === 113)?.bloques?.map((bloque, index) => {
      if (index % 2 === 0) { 
        return (
          <div key={index} className={`acordeonItem ${elementoActivo === index / 2 ? 'active' : ''}`}>
            <div
              className='acordeonTitulo'
              onClick={() => ControlCLickAcordeon(index / 2)}
            >
              {bloque?.texto}
            </div>
            <div className={`acordeonContenido ${elementoActivo === index / 2 ? 'active' : ''}`}>
              <p>{state.post.find(post => post.id === 113)?.bloques[index + 1]?.texto}</p>
            </div>
          </div>
        );
      }
      return null;
    })}
  </div>
</div>

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

    </div>
  )
}

export default Portada
