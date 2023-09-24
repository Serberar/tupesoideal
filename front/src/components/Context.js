import React, { Component } from 'react';
import axios from 'axios';

// Crea el contexto
export const myContext = React.createContext();

// Crea el componente Provider
export class MyProvider extends Component {
  state = {
    Productos: [],
    items: [],
    subtotal: 0
  }

  // Descargar la lista de productos
  productosDescargados = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/producto`);
      console.log('Productos descargados:', response.data);
  
      this.setState({
        Productos: response.data
      });
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  // Añadir producto al carrito
  agregarAlCarrito = (producto) => {

    // Revisa si el producto esta en el carrito
    let exists = this.state.items.filter(item => item.id === producto.id);
    
    // Si existe actualiza la cantidad
    if ( exists.length > 0 ) {
        const newState = { ...this.state };
        newState.items.forEach( item => {
            if ( item.id === exists[0].id ) {
                item.quantity = item.quantity + 1;
            }
        });

        newState.subtotal = this.calcularSubtotal();
        this.setState(newState);
        return;
    }

    // Si no esta lo añade al carrito
    const formattedProduct = {
      id: producto.id,
      name: producto.title,
      price: parseFloat(producto.price),
      image: producto.images[0].src,
      quantity: 1
    }
    const newState = {...this.state};
    newState.items.push(formattedProduct);
    newState.subtotal = this.calcularSubtotal();
    this.setState(newState);
  }

  // Eliminar productos del carrito
  eliminarDelCarrito = (id) => {
    const updatedItems = this.state.items.filter( item => item.id !== id );
    let subtotal = 0;

    if (updatedItems.length > 0) {
      updatedItems.forEach(item => {
        subtotal = subtotal + ( item.price * item.quantity );
        subtotal = this.round(subtotal, 2);
      });
    }

    this.setState({
      items: updatedItems,
      subtotal: subtotal
    })
  }

  // Calcula el subtotal
  calcularSubtotal = () => {
    let subtotal = 0;

    this.state.items.forEach(item => {
      subtotal = subtotal + ( item.price * item.quantity );
    });

    subtotal = this.round(subtotal, 2);
    return subtotal;
  }

  // Redondea decimales
  round = (value, decimals) => {
    return Number( Math.round(value+'e'+decimals)+'e-'+decimals );
  }

  render() {
    return (
      <myContext.Provider value={{ state: this.state, productosDescargados: this.productosDescargados, agregarAlCarrito: this.agregarAlCarrito, eliminarDelCarrito: this.eliminarDelCarrito }}>
      {this.props.children}
    </myContext.Provider>
    )
  }
}