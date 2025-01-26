import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { myContext } from '../Context'
import './Nav.css'

const Enlaces = () => {
  const { state, almacenarDatosUsuario, actualizarCantidadEnCarrito } = useContext(myContext)
  const { userData } = state
  const usuario = userData ? userData : null;
  const [menuVisible, setMenuVisible] = useState(false)

  const toggleMenu = () => {
    setMenuVisible(!menuVisible)
  }

  const cerrarSesion = () => {
    localStorage.removeItem('userData')
    localStorage.removeItem('carrito')
    almacenarDatosUsuario(null)
    actualizarCantidadEnCarrito([])
  }

  const cerrarMenu = () => {
    setMenuVisible(false) // Cierra el menú al hacer clic en un enlace del menú
  }

  // Crear un objeto para agrupar los productos por su ID y calcular la cantidad total
  const groupedItems = state.items.reduce((grouped, item) => {
    if (!grouped[item.id]) {
      grouped[item.id] = { ...item, totalQuantity: item.quantity }
    } else {
      grouped[item.id].totalQuantity += item.quantity
    }
    return grouped
  }, {})

  const groupedItemsArray = Object.values(groupedItems)
  const totalQuantity = groupedItemsArray.reduce((total, item) => total + item.totalQuantity, 0)
  return (
    <div className='nav-div'>
      <button className='hamburger-menu' onClick={toggleMenu}>
        <img className='icono' src='https://cdn-icons-png.flaticon.com/512/6209/6209279.png' alt='Menú' />
      </button>
      <nav className={`navbar ${menuVisible ? 'active' : ''}`}>
        <ul className='menu'>
          <li>
            <NavLink to='/' onClick={cerrarMenu}>Inicio</NavLink>
          </li>
          {usuario && (
            <li>
              <NavLink to='/cliente' onClick={cerrarMenu}>Área personal</NavLink>
            </li>
          )}
          {usuario && (
            <li>
              <NavLink to='/consulta' onClick={cerrarMenu}>Consulta</NavLink>
            </li>
          )}
          {!usuario && (
            <li>
              <NavLink to='/login' onClick={cerrarMenu}>Identifícate</NavLink>
            </li>
          )}
          <li>
            {totalQuantity > 0 && (
              <NavLink to='/carrito' onClick={cerrarMenu}>Carrito ({totalQuantity})</NavLink>
            )}
          </li>
         </ul>
         <ul className='usuario'>
         {usuario && (
            <li>
              <p className='saludo'>Bienvenido {usuario.usuario.nombre} {usuario.usuario.apellidos}</p>
            </li>
          )}
          {usuario && (
            <li>
              <button className='botonCerrarSesion' onClick={cerrarSesion}>Cerrar Sesión</button>
            </li>
          )}
        </ul>
      </nav>
      {totalQuantity > 0 && (
        <div className='carrito-movil'>
          <NavLink to='/carrito' onClick={cerrarMenu}>
            <img src='https://cdn-icons-png.flaticon.com/512/4305/4305700.png' alt='Carrito' />
            ({totalQuantity})
          </NavLink>
        </div>
      )}
    </div>
  )
}

export default Enlaces
