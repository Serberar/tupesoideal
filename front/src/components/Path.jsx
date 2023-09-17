import { Route, Routes } from 'react-router-dom';
import Portada from '../pages/Portada';
import Productos from '../pages/Productos';
import Carrito from '../pages/Carrito';

function Path() {


  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Portada />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </div>
  );
}

export default Path;
