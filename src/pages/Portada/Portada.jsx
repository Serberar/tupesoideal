import React, { useContext, useState, useEffect } from 'react';
import { myContext } from '../../components/Context';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import './Portada.css';

const Portada = () => {
  const { state, agregarAlCarrito } = useContext(myContext);
  const [verCarrito, setVerCarrito] = useState(false);
  const [acordeonActivo, setAcordeonActivo] = useState(null);

  // Posts con nombre y su ID de wordpress
  const headerPost = state.post.find(post => post.id === 1);
  const imagenHeaderPost = state.post.find(post => post.id === 118);
  const serviciosPost = state.post.find(post => post.id === 131);
  const consultasPost = state.post.find(post => post.id === 122);
  const comoFuncionaPost = state.post.find(post => post.id === 139);
  const acordeonPost = state.post.find(post => post.id === 113);

  const mostrarCarritoTemporizado = () => {
    setVerCarrito(true);
  };

  useEffect(() => {
    if (verCarrito) {
      const timer = setTimeout(() => setVerCarrito(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [verCarrito]);

  const toggleAcordeon = (index) => {
    setAcordeonActivo(acordeonActivo === index ? null : index);
  };

  return (
    <div className='portada'>
      {verCarrito && (
        <div className='carritoProducto'>
          <h2>Carrito de compras</h2>
          <ul className='ulCarritoProducto'>
            {state.items.map(item => (
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
        <h1>{headerPost?.titulo}</h1>
      </div>

      <div className='header'>
        <div className='textoHeader'>
          <p>
            {headerPost?.bloques?.[0]?.texto}<br /><br />
            {headerPost?.bloques?.[1]?.texto}<br /><br />
            {headerPost?.bloques?.[2]?.texto}
          </p>
        </div>
        <div className='imagenHeader'>
          <img
            className='imagenLateralHeader'
            src={imagenHeaderPost?.bloques?.[0]?.imagen}
            alt='Nutrición'
          />
        </div>
      </div>

      <div
        className="parallax"
        style={{ backgroundImage: `url(${serviciosPost?.bloques?.[0]?.imagen})` }}
      >
        <h2 className='tituloProductos'>Conoce nuestros servicios</h2>
        <div className='productos'>
          {state.Productos
            .sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
            .map(producto => (
              <div className='divProductoIndex' key={producto.id}>
                <h3 className='tituloProductoIndex'>{producto.name}</h3>
                <img
                  className='imagenProductoIndex'
                  src={producto.images[0]?.src}
                  alt={producto.name}
                />
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
                    agregarAlCarrito(producto);
                    mostrarCarritoTemporizado();
                  }}
                >
                  Añadir al carrito
                </button>
              </div>
            ))}
        </div>
      </div>

      <h3 className='tituloConsultas'>{consultasPost?.titulo}</h3>
      <div className='consultas'>
        {consultasPost?.bloques?.map((bloque, index) => {
          if (index % 3 !== 0) return null;
          return (
            <div key={index} className="razones">
              {consultasPost?.bloques[index + 2]?.imagen && (
                <img
                  className="imgRazones"
                  src={consultasPost.bloques[index + 2].imagen}
                  alt={`Imagen ${index}`}
                />
              )}
              <p className="tituloRazones">{bloque?.texto}</p>
              <div className="textoRazones">{consultasPost.bloques[index + 1]?.texto}</div>
            </div>
          );
        })}
      </div>

      <div className='funciona'>
        <h4 className='tituloFunciona'>{comoFuncionaPost?.titulo}</h4>
        {comoFuncionaPost?.bloques.map((bloque, index) => (
          <div key={index}>
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
        <b>{acordeonPost?.titulo}</b>
        <br /><br />
        <div className='acordeon'>
          {acordeonPost?.bloques?.map((bloque, index) => {
            if (index % 2 !== 0) return null;
            const itemIndex = index / 2;
            return (
              <div
                key={index}
                className={`acordeonItem ${acordeonActivo === itemIndex ? 'active' : ''}`}
              >
                <div
                  className='acordeonTitulo'
                  onClick={() => toggleAcordeon(itemIndex)}
                >
                  {bloque?.texto}
                </div>
                <div className={`acordeonContenido ${acordeonActivo === itemIndex ? 'active' : ''}`}>
                  <p>{acordeonPost.bloques[index + 1]?.texto}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Portada;
