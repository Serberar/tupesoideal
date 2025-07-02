import React, { Component } from 'react'
import axios from 'axios'

// Crea el contexto
export const myContext = React.createContext()

// Crea el componente Provider
export class MyProvider extends Component {
  state = {
    Productos: [],
    items: [],
    subtotal: 0,
    userData: null,
    mensajeContraseña: "",
    post: [],
    datosUsuario: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      postcode: "",

    },
  }

  // Descarga los productos y comprueba localStorage automáticamente al cargar la página
  async componentDidMount() {
    const userDataFromLocalStorage = localStorage.getItem('userData')
    if (userDataFromLocalStorage) {
      const userData = JSON.parse(userDataFromLocalStorage)
      this.setState({ userData })
    }
    const carritoFromLocalStorage = localStorage.getItem('carrito')
    if (carritoFromLocalStorage) {
      const carrito = JSON.parse(carritoFromLocalStorage)
      this.setState({ items: carrito })
    }
    await this.productosDescargados();
    await this.descargarPost();
  }

  /******************* Componente Login ***************************************/
  almacenarDatosUsuario = (datosUsuario) => {
    localStorage.setItem('userData', JSON.stringify(datosUsuario))
    this.setState({ userData: datosUsuario })
  }


  /*******************Componente Area cliente ***************************************/

  obtenerDatosCliente = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/customers/${this.state.userData.usuario.id}`, {
        auth: {
          username: process.env.REACT_APP_USER,
          password: process.env.REACT_APP_PASSWORD,
        },
      });
      const datosUsuario = response.data;

      this.setState({
        datosUsuario: {
          first_name: datosUsuario.first_name || "",
          last_name: datosUsuario.last_name || "",
          email: datosUsuario.email || "",
          phone: datosUsuario.billing.phone || "",
          address: datosUsuario.billing.address_1 || "",
          city: datosUsuario.billing.city || "",
          state: datosUsuario.billing.state || "",
          postcode: datosUsuario.billing.postcode || "",
        },
      });
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
    }
  };

  guardarCambioDatosCliente = async (campo) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API}/customers/${this.state.userData.usuario.id}`, campo, {
        auth: {
          username: process.env.REACT_APP_USER,
          password: process.env.REACT_APP_PASSWORD,
        },
      });
    } catch (error) {
      console.error("Error al actualizar el dato:", error);
    }
  };

  historicoPedidos = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/orders?customer=${this.state.userData.usuario.id}`, {
        auth: {
          username: process.env.REACT_APP_USER,
          password: process.env.REACT_APP_PASSWORD
        }
      })
      this.setState({ historicoPedidos: response.data });
    } catch (error) {
      console.error('error al descargar el historico de pedidos:', error);
    }
  }

  actualizarContraseña = async (currentPassword, newPassword) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_WP_CUSTOM}/update-password`,
        {
          current_password: currentPassword,
          password: newPassword
        },
        {
          auth: {
            username: this.state.userData.usuario?.user,
            password: currentPassword
          }
        }
      );

      this.setState({
        mensajeContraseña: response.data?.message || "Contraseña actualizada correctamente.",
      });

    } catch (error) {
      this.setState({ mensajeContraseña: 'Error al realizar el cambio de contraseña' })
      console.error('Error al realizar la solicitud:', error.response?.data || error.message);
    }
  };

  cambioContraseña = async (e) => {
    e.preventDefault();
    const currentPassword = e.target.currentPassword.value;
    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      this.setState({ mensajeContraseña: 'Las contraseñas nuevas no coinciden.' })
      return;
    }
    this.actualizarContraseña(currentPassword, newPassword);
    e.target.reset();
  };

  /*******************Componente Portada ***************************************/

  //descargar los textos de la web desde wordpress
  descargarPost = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_WP_POST);
      const postDescargados = response.data.map(post => {
        const contenidoHTML = post.content.rendered;

        // Separar el contenido HTML en texto y figuras (imágenes)
        const fragmentoHTML = contenidoHTML.split(/(<figure class="wp-block-image[^>]*>.*?<\/figure>)/g);

        const bloques = [];
        fragmentoHTML.forEach(fragmento => {
          // Si el fragmento es una imagen, agregarla al bloque
          if (fragmento.trim().startsWith('<figure')) {
            const imagenURL = fragmento.match(/src="([^"]*)"/)[1];
            bloques.push({
              imagen: imagenURL
            });
          }
          // Si es texto, separar los párrafos y agregarlos como bloques individuales
          else if (fragmento.trim()) {
            // Separar los párrafos en bloques individuales, sin las etiquetas <p>
            const parrafos = fragmento
              .split(/<\/p>/g)
              .map(parrafo => parrafo.replace(/<\/?p>/g, '').trim())
              .filter(parrafo => parrafo); // Filtrar vacíos
            parrafos.forEach(parrafo => {
              bloques.push({
                texto: parrafo // Guardar solo el texto sin las etiquetas <p>
              });
            });
          }
        });

        return {
          id: post.id,
          titulo: post.title.rendered,
          bloques // Solo bloques, ya que no necesita `imagenes`
        };
      });

      // Guardar los posts en el estado
      this.setState({ post: postDescargados });
    } catch (error) {
      console.error("Error descargando los posts:", error);
    }
  };

  productosDescargados = () => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_API}/products`,
      auth: {
        username: process.env.REACT_APP_USER,
        password: process.env.REACT_APP_PASSWORD
      }
    })
      .then(response => {
        this.setState({
          Productos: response.data
        })
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error)
      })
  }

  /*******************Componente Carrito ***************************************/

  agregarAlCarrito = (producto) => {
    // Revisa si el producto esta en el carrito
    const exists = this.state.items.filter(item => item.id === producto.id)

    // Si existe actualiza la cantidad
    if (exists.length > 0) {
      const newState = { ...this.state }
      newState.items.forEach(item => {
        if (item.id === exists[0].id) {
          item.quantity = item.quantity + 1
        }
      })

      newState.subtotal = this.calcularSubtotal()
      this.setState(newState)
      localStorage.setItem('carrito', JSON.stringify(this.state.items))
      return
    }

    // Si no esta lo añade al carrito
    const formattedProduct = {
      id: producto.id,
      name: producto.name,
      price: parseFloat(producto.price),
      image: producto && producto.images && producto.images[0].src,
      quantity: 1
    }
    const newState = { ...this.state }
    newState.items.push(formattedProduct)
    newState.subtotal = this.calcularSubtotal()
    this.setState(newState)
    localStorage.setItem('carrito', JSON.stringify(this.state.items))
  }

  eliminarDelCarrito = (id) => {
    const updatedItems = this.state.items.filter(item => item.id !== id)
    let subtotal = 0

    if (updatedItems.length > 0) {
      updatedItems.forEach(item => {
        subtotal = subtotal + (item.price * item.quantity)
        subtotal = this.round(subtotal, 2)
      })
    }

    localStorage.setItem('carrito', JSON.stringify(updatedItems))

    this.setState({
      items: updatedItems,
      subtotal
    })
  }

  calcularSubtotal = () => {
    let subtotal = 0

    this.state.items.forEach(item => {
      subtotal = subtotal + (item.price * item.quantity)
    })

    subtotal = this.round(subtotal, 2)
    return subtotal
  }

  // Redondea decimales
  round = (value, decimals) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
  }

  enviarPedido = async () => {
    const { userData, items } = this.state;
    const usuario = userData ? userData : null;

    if (!usuario || !usuario.token) {
      console.error('No se encontraron datos de usuario válidos');
      return;
    }

    const userId = usuario.usuario.id

    const lineItems = items.map(item => ({
      product_id: item.id,
      quantity: item.quantity
    }));

    const pedido = {
      customer_id: userId,
      set_paid: true,        // Indica que el pedido está pagado
      line_items: lineItems
    };

    // console.log('Datos del pedido a enviar:', pedido)

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/orders`,
        pedido,
        {
          auth: {
            username: process.env.REACT_APP_USER,
            password: process.env.REACT_APP_PASSWORD
          },
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (response.status === 201) {
        console.log('Pedido enviado con éxito.')

        // Vaciar el carrito después de enviar el pedido
        this.setState({
          items: [],
          subtotal: 0
        })
      } else {
        console.error('Error al enviar el pedido:', response.statusText)
      }
    } catch (error) {
      console.error('Error al realizar la solicitud:', error)
    }
  }

  actualizarCantidadEnCarrito = (updatedItems) => {
    this.setState({
      items: updatedItems
    }, () => {
      const subtotal = this.calcularSubtotal()
      this.setState({ subtotal })
      localStorage.setItem('carrito', JSON.stringify(this.state.items))
    })
  }

  aumentarCantidad = (itemId) => {
    const updatedItems = this.state.items.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    this.actualizarCantidadEnCarrito(updatedItems);
  };

  reducirCantidad = (itemId) => {
    const updatedItems = this.state.items.map(item => {
      if (item.id === itemId && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    this.actualizarCantidadEnCarrito(updatedItems);
  };


  render() {
    return (
      <myContext.Provider value={{
        state: this.state,
        //Componente login
        almacenarDatosUsuario: this.almacenarDatosUsuario,
        //Componente area cliente
        obtenerDatosCliente: this.obtenerDatosCliente,
        guardarCambioDatosCliente: this.guardarCambioDatosCliente,
        historicoPedidos: this.historicoPedidos,
        actualizarContraseña: this.actualizarContraseña,
        cambioContraseña: this.cambioContraseña,
        //Componente portada
        descargarPost: this.descargarPost,
        productosDescargados: this.productosDescargados,
        // Componente carrito
        agregarAlCarrito: this.agregarAlCarrito,
        eliminarDelCarrito: this.eliminarDelCarrito,
        enviarPedido: this.enviarPedido,
        actualizarCantidadEnCarrito: this.actualizarCantidadEnCarrito,
        aumentarCantidad: this.aumentarCantidad,
        reducirCantidad: this.reducirCantidad
      }}
      >
        {this.props.children}
      </myContext.Provider>

    )
  }
}
