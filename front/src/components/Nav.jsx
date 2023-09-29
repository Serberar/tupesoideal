import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { myContext } from '../components/Context';
import '../css/Nav.css'

const Enlaces = () => {
  const { state } = useContext(myContext);
  const { userData } = state;

  const usuario = Array.isArray(userData) && userData.length > 0 ? userData[0] : null;

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
          <li>
            <NavLink to="/carrito">Carrito</NavLink>
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
        </ul>
      </nav>
    </div>
  );
}

export default Enlaces;
