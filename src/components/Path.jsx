import { Route, Routes } from 'react-router-dom'
import Portada from '../pages/Portada/Portada'
import Productos from '../pages/Productos/Productos'
import Carrito from '../pages/Carrito/Carrito'
import Registro from '../pages/Registro/Registro'
import Login from '../pages/Login/Login'
import Cliente from '../pages/AreaCliente/AreaCliente'
import Password from '../pages/Password/Password'
import Consulta from '../pages/Consulta/Consulta'

function Path () {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Portada />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cliente' element={<Cliente />} />
        <Route path='/password' element={<Password />} />
        <Route path='/consulta'  element={<Consulta />} />
      </Routes>
    </div>
  )
}

export default Path
