import React, { useContext } from 'react';
import { myContext } from '../components/Context';
import '../css/Carrito.css'

const Carrito = () => {
  const { state, eliminarDelCarrito } = useContext(myContext);

  return (
    <div className='carrito'>
      <h2>Carrito de compras</h2>
      <ul className='ulCarrito'>
        {state.items.map((item) => (
          <li key={item.id}>
            <div className='carritoItem'>
              <img src={item.image} alt={item.name} className='carritoImagen' />
              <div className='carritoInfo'>
                <span>{item.name}</span>
                <span>Cantidad: {item.quantity}</span>
                <span>Precio: {item.price * item.quantity}€</span>
              </div>
            </div>
            <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Subtotal: {state.subtotal}€</p>
      <button>Finalizar compra</button>
    </div>
  );
};

export default Carrito;
