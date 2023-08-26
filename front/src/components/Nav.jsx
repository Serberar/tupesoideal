import React from 'react'
import { NavLink } from 'react-router-dom';
import '../css/Nav.css'

const Enlaces = () => {
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
    </ul>
  </nav>
        </div>
      );
    }

export default Enlaces