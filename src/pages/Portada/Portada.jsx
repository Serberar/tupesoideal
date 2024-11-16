import React, { useContext, useState, useEffect } from 'react'
import { myContext } from '../../components/Context'
import { Link } from 'react-router-dom'
import './Portada.css'

const Portada = () => {
  const { state, agregarAlCarrito } = useContext(myContext)
  const [verCarrito, setVerCarrito] = useState(false)
  const [elementoActivo, setElementoActivo] = useState(null)
  const [year, setYear] = useState(null)
  const post = state.post.find(post => post.id === 108);

  useEffect(() => {
    createYear()
  }, [])

  function createYear() {
    const date = new Date()
    setYear(date.getFullYear())
  }

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
        <h1>{state.post.find(post => post.id === 95)?.titulo}</h1>
      </div>
      <div className='header'>

        <div className='textoHeader'>
        
          
          <h3><b>
          <div dangerouslySetInnerHTML={{ __html: state.post.find(post => post.id === 95)?.bloques?.[0]?.texto}}>
          </div>
          </b></h3>
          <p>
          {state.post.find(post => post.id === 95)?.bloques?.[1]?.texto}
            <br /><br />
            {state.post.find(post => post.id === 95)?.bloques?.[2]?.texto}
          </p>
        </div>
        <div className='imagenHeader'>
          <img src='/img/portada1.png' alt='Nutrición' />
        </div>
      </div>

      <div className='parallax'>
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

      <h3 className='tituloConsultas'>{state.post.find(post => post.id === 108)?.titulo}</h3>
<div className='consultas'>
  {state.post.find(post => post.id === 108)?.bloques?.map((bloque, index) => {
    if (index % 3 === 0) { 
      return (
        <div key={index} className="razones">
          <img className="imgRazones" src={bloque?.imagen} alt={`Imagen ${index}`} />
          <p className="tituloRazones">{state.post.find(post => post.id === 108)?.bloques[index + 1]?.texto}</p>
          <div className="textoRazones">{state.post.find(post => post.id === 108)?.bloques[index + 2]?.texto}</div>
        </div>
      );
    }
    return null;
  })}
</div>

<div className='funciona'>
  <h4>Como funciona</h4>
</div>

<div className='acordeonDiv'>
<b>{state.post.find(post => post.id === 114)?.titulo}</b>
<br /><br />
  <div className='acordeon'>
    {state.post.find(post => post.id === 114)?.bloques?.map((bloque, index) => {
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
              <p>{state.post.find(post => post.id === 114)?.bloques[index + 1]?.texto}</p>
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
            <li>dieta deportiva</li>
            <li>nutrición para enfermedades</li>
          </ul>
        </div>

        <div className='footer-section'>
          <h4>Síguenos</h4>
          <ul>
            <li><a href='https://www.facebook.es'>Facebook</a></li>
            <li><a href='https://es.linkedin.com'>LinkedIn</a></li>
          </ul>
        </div>
        <p>copyright {year}</p>
      </div>
    </div>
  )
}

export default Portada
