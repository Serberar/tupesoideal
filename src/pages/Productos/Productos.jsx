import React, { useContext, useState } from 'react';
import { myContext } from '../../components/Context';
import { Link } from 'react-router-dom';
import './Productos.css';

const Productos = () => {
  const { state, agregarAlCarrito } = useContext(myContext);
  const [verCarrito, setVerCarrito] = useState(false);


 
  const temporizadorVerCarrito = () => {
    setVerCarrito(true);

    
    setTimeout(() => {
      setVerCarrito(false);
    }, 2000);
  };

  return (
    <div>
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

      <div className="containerProductos">
        <h1 className="h1Productos">Bonos</h1>
        {state.Productos.map((producto) => (
          <div className="divProducto" key={producto.id}>
            <h3 className="tituloProducto">{producto.title}</h3>
            <img className="imagenProducto" src={producto.images[0].src} alt={producto.title} />
            <div
              className="descripcionProducto"
              dangerouslySetInnerHTML={{ __html: producto.description }}
            />
            <div className="precioProducto">
              <p className="Productos">Este plan tiene un precio de: {producto.price}€</p>
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
  );
};

export default Productos;
