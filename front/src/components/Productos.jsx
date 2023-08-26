import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Productos.css'

const Productos = () => {

const [productos, setProductos] = useState([])

  useEffect(() => {
    productosDescargados();
  }, []);
  
  const productosDescargados = async () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/producto`)
  
      .then(response => {
        console.log('Datos recibidos:', response.data.body);
        
      //transformamos el json para poder usarlo
      const responseData = JSON.parse(response.data.body);
      setProductos(responseData.products); 

      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
  };

  return (
  <div className='containerProductos'>
    <h1 className='h1Productos'>Bonos</h1>

      {productos.map(producto =>(
        <div className='divProducto' key = {producto.id}>
          <h3 className = 'tituloProducto'>{producto.title}</h3>
          <img className = 'imagenProducto' src={producto.images[0].src} alt={producto.title}/>
          <div className='descripcionProducto' dangerouslySetInnerHTML={{ __html: producto.description }} />
           <div className='precioProducto'><p className='pProductos'> Este plan tiene un precio de: {producto.price}€</p></div>
           <button className='botonCarrito'>Seleccionar este plan</button>
       </div>
      ))}
    </div>
  )};

export default Productos;