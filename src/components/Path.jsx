import { Route, Routes } from 'react-router-dom';
import Portada from '../pages/Portada';
import Productos from '../pages/Productos';
import Carrito from '../pages/Carrito';
import Registro from '../pages/Registro';
import Login from '../pages/Login';

function Path() {

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Portada />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default Path;
