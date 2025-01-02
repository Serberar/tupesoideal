import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../../components/Context'
import './Carrito.css'

const Carrito = () => {
  const { state, eliminarDelCarrito, enviarPedido, actualizarCantidadEnCarrito } = useContext(myContext)

  // Verificar si hay datos de usuario en el estado
  const usuario = state.userData ? state.userData : null;
console.log('usuario',usuario);

  const aumentarCantidad = (itemId) => {
    const updatedItems = state.items.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 }
      }
      return item
    })
    actualizarCantidadEnCarrito(updatedItems)
  }

  const reducirCantidad = (itemId) => {
    const updatedItems = state.items.map((item) => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item
    })
    actualizarCantidadEnCarrito(updatedItems)
  }

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
                    onClick={() => reducirCantidad(item.id)}
                  >
                    -
                  </button>
                  <span>Cantidad: {item.quantity}</span>
                  <button
                    className='cantidadBoton'
                    onClick={() => aumentarCantidad(item.id)}
                  >
                    +
                  </button>
                </div>
                <span>Precio: {item.price * item.quantity}€</span>
              </div>
            </div>
            <button className='eliminar' onClick={() => eliminarDelCarrito(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p className='subtotalCarrito'>Subtotal: {state.subtotal}€</p>
      {/* Desactivar el botón de Comprar y mostrar un mensaje si el usuario no está autenticado */}
      {!usuario && (
        <div>
          <p>No has iniciado sesión. <Link to='/login'>Haz clic aquí</Link> para iniciar sesión.</p>
        </div>
      )}
      {/* Mostrar el botón de Comprar solo si el usuario está autenticado */}
      {usuario && (
        <button className='comprar' onClick={() => enviarPedido()}>Comprar</button>
      )}
    </div>
  )
}

export default Carrito
