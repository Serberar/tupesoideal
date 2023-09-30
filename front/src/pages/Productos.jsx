import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../components/Context';
import '../css/Productos.css';

const Productos = () => {
  const { state, agregarAlCarrito } = useContext(myContext);
  const [productosOrdenados, setProductosOrdenados] = useState([]);
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  const ordenarProductos = (ascendente) => {
    const productosOrdenados = [...state.Productos].sort((a, b) => {
      return ascendente ? a.price - b.price : b.price - a.price;
    });
    setProductosOrdenados(productosOrdenados);
    setOrdenAscendente(ascendente);
  };

  useEffect(() => {

    ordenarProductos(ordenAscendente);
  }, [state.Productos]); 

  return (
    <div className="containerProductos">
      <h1 className="h1Productos">Bonos</h1>
      <div className="ordenarProductos">
        Ordenar por precio
        <button className="botonMenor" onClick={() => ordenarProductos(true)}>Menor</button>
        <button className="botonMayor" onClick={() => ordenarProductos(false)}>Mayor</button>
      </div>

      {productosOrdenados.map((producto) => (
        <div className="divProducto" key={producto.id}>
          <h3 className="tituloProducto">{producto.title}</h3>
          <img className="imagenProducto" src={producto.images[0].src} alt={producto.title} />
          <div
            className="descripcionProducto"
            dangerouslySetInnerHTML={{ __html: producto.description }}
          />
          <div className="precioProducto">
            <p className="Productos">Este plan tiene un precio de: {producto.price}€</p>
          </div>
          <button className='botonCarrito' onClick={() => agregarAlCarrito(producto)}>Añadir al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default Productos;
