import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { myContext } from '../components/Context';
import '../css/Nav.css';

const Enlaces = () => {
  const { state, almacenarDatosUsuario } = useContext(myContext); 
  const { userData } = state;
  const usuario = Array.isArray(userData) && userData.length > 0 ? userData[0] : null;


  const cerrarSesion = () => {
    almacenarDatosUsuario(null);
    localStorage.removeItem('userData');
  };

  // Crear un objeto para agrupar los productos por su ID y calcular la cantidad total
  const groupedItems = state.items.reduce((grouped, item) => {
    if (!grouped[item.id]) {
      grouped[item.id] = { ...item, totalQuantity: item.quantity };
    } else {
      grouped[item.id].totalQuantity += item.quantity;
    }
    return grouped;
  }, {});

  const groupedItemsArray = Object.values(groupedItems);
  const totalQuantity = groupedItemsArray.reduce((total, item) => total + item.totalQuantity, 0);
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
            {totalQuantity > 0 && (
             <NavLink to="/carrito">Carrito ({totalQuantity})</NavLink>
             )}
           </li>
           {usuario && (
             <li>
               <button onClick={cerrarSesion}>Cerrar Sesión</button>
             </li>
           )}
         </ul>
       </nav>
     </div>
   );
 }
 
 export default Enlaces;
 
