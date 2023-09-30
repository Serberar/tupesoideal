import React, { useContext } from 'react';
import { myContext } from '../components/Context';
import '../css/Carrito.css';

const Carrito = () => {
  const { state, eliminarDelCarrito, enviarPedido } = useContext(myContext);

  const handleIncrement = (itemId) => {
    const updatedItems = state.items.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    // Actualiza el contexto con la nueva cantidad
    state.agregarAlCarrito(updatedItems);
  };

  const handleDecrement = (itemId) => {
    const updatedItems = state.items.map((item) => {
      if (item.id === itemId) {
        // Asegúrate de que la cantidad nunca sea menor que 0
        const newQuantity = item.quantity - 1 >= 0 ? item.quantity - 1 : 0;

        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });

    // Actualiza el contexto con la nueva cantidad
    state.agregarAlCarrito(updatedItems);
  };

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
                <div className='cantidadContenedor'>
                  <button
                    className='cantidadBoton'
                    onClick={() => handleDecrement(item.id)}
                  >
                    -
                  </button>
                  <span>Cantidad: {item.quantity}</span>
                  <button
                    className='cantidadBoton'
                    onClick={() => handleIncrement(item.id)}
                  >
                    +
                  </button>
                </div>
                <span>Precio: {item.price * item.quantity}€</span>
              </div>
            </div>
            <button onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Subtotal: {state.subtotal}€</p>
      <button onClick={() => enviarPedido()}>Comprar</button>
    </div>
  );
};

export default Carrito;
