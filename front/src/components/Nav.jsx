import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { myContext } from '../components/Context';
import '../css/Nav.css';

const Enlaces = () => {
  const { state } = useContext(myContext);
  const { userData } = state;

  const usuario = Array.isArray(userData) && userData.length > 0 ? userData[0] : null;

  // Crear un objeto para agrupar los productos por su ID y calcular la cantidad total
  const groupedItems = state.items.reduce((grouped, item) => {
    if (!grouped[item.id]) {
      grouped[item.id] = { ...item, totalQuantity: item.quantity };
    } else {
      grouped[item.id].totalQuantity += item.quantity;
    }
    return grouped;
  }, {});

  // Convertir el objeto agrupado nuevamente en una matriz
  const groupedItemsArray = Object.values(groupedItems);

  // Calcular la cantidad total de productos en el carrito
  const totalQuantity = groupedItemsArray.reduce((total, item) => total + item.totalQuantity, 0);

  // Estado local para controlar la visibilidad del carrito
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    // Mostrar el carrito cuando el valor dentro de NavLink se actualiza y la cantidad total es mayor que 0
    if (totalQuantity > 0) {
      setShowCart(true);

      // Establecer un temporizador para ocultar el carrito después de 2 segundos
      const timeoutId = setTimeout(() => {
        setShowCart(false);
      }, 2000);

      // Limpia el temporizador si el componente se desmonta antes de que se oculte el carrito
      return () => clearTimeout(timeoutId);
    } else {
      setShowCart(false);
    }
  }, [totalQuantity]);

  return (
    <div className='nav-div'>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/productos">Productos</NavLink>
          </li>
          {usuario ? (
            <li>
              <span>Bienvenido, {usuario.name}</span>
            </li>
          ) : (
            <li>
              <NavLink to="/login">Identifícate</NavLink>
            </li>
          )}
          <li>
            {/* Mostrar el carrito solo cuando la cantidad total es mayor que 0 */}
            {totalQuantity > 0 && (
              <NavLink to="/carrito">Carrito ({totalQuantity})</NavLink>
            )}
          </li>
        </ul>
      </nav>
      <div className='carritoNavDiv'>
        {showCart && (
          <div className='carritoNav'>
            <h2>Carrito de compras</h2>
            <ul className='ulCarritoNav'>
              {groupedItemsArray.map((item) => (
                <li key={item.id}>
                  <img src={item.image} alt={item.name} className='carritoImagenNav' />
                  <span className='spanCarritoNav'>{item.name}</span>
                  <span className='spanCarritoNav'>Cantidad: {item.totalQuantity}</span>
                  <span className='spanCarritoNav'>Precio: {item.price * item.totalQuantity}€</span>
                </li>
              ))}
            </ul>
            <p>Total: {groupedItemsArray.reduce((total, item) => total + item.price * item.totalQuantity, 0)}€</p>
            <NavLink to="/carrito"><button className='botonVerCesta'>Ver cesta</button></NavLink>
          </div>
        )}
      </div>
    </div>
  );
}

export default Enlaces;
