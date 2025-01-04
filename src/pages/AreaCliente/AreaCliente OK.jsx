import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../../components/Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './AreaCliente.css';

const AreaCliente = () => {
  const { state } = useContext(myContext);
  const { userData } = state;
  const [privados, setPrivados] = useState(null);
  const [pedidos, setPedidos] = useState([]);
  const [editandoCampo, setEditandoCampo] = useState(""); 
  const [mensaje, setMensaje] = useState("");
  const [mensajeError, setMensajeError] = useState("");
  const navigate = useNavigate();
  const [datos, setDatos] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postcode: "",
  });

  const [seccionesAbiertas, setSeccionesAbiertas] = useState({
    datosPersonales: false,
    historicoPedidos: false,
  });

  const toggleSeccion = (seccion) => {
    setSeccionesAbiertas((prev) => ({
      ...prev,
      [seccion]: !prev[seccion],
    }));
  };

  useEffect(() => {
    if (!userData) {
      navigate('/');
      return;
    }

    const descargarDatosPrivados = async () => {
      try {
        const respuesta = await datosPrivados();
      } catch (error) {
        console.error('Error al obtener los datos privados:', error);
      }
    };

    descargarDatosPrivados();
    historicoPedidos();
    obtenerDatosCliente();
  }, [userData, navigate]);

  const obtenerDatosCliente = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/customers/${userData.usuario.id}`, {
        auth: {
          username: process.env.REACT_APP_USER,
          password: process.env.REACT_APP_PASSWORD,
        },
      });
      const datosUsuario = response.data;
      setDatos({
        first_name: datosUsuario.first_name || "",
        last_name: datosUsuario.last_name || "",
        email: datosUsuario.email || "",
        phone: datosUsuario.billing.phone || "",
        address: datosUsuario.billing.address_1 || "",
        city: datosUsuario.billing.city || "",
        state: datosUsuario.billing.state || "",
        postcode: datosUsuario.billing.postcode || "",
      });
    } catch (error) {
      console.error("Error al obtener los datos del usuario:", error);
      setMensajeError("No se pudieron cargar los datos del usuario.");
    }
  };

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setDatos((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
  };

  const guardarCambio = async (campo) => {
    try {
      const datosActualizados = { ...datos };
      datosActualizados.billing = {
        phone: datos.phone,
        address_1: datos.address,
        city: datos.city,
        state: datos.state,
        postcode: datos.postcode,
      };

      const response = await axios.put(`${process.env.REACT_APP_API}/customers/${userData.usuario.id}`, datosActualizados, {
        auth: {
          username: process.env.REACT_APP_USER,
          password: process.env.REACT_APP_PASSWORD,
        },
      });

      if (response.status === 200) {
        setMensaje("Dato actualizado correctamente.");
      } else {
        setMensajeError("Hubo un problema al actualizar el dato.");
      }
    } catch (error) {
      console.error("Error al actualizar el dato:", error);
      setMensajeError("Error al actualizar el dato.");
    }
    setEditandoCampo(""); // Salir del modo edición
  };

  const datosPrivados = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_WP_PRIVATE_LIST}${userData.usuario.email}`, {
        headers: {
          'Authorization': `Bearer ${userData.token}`,
        }
      })
      setPrivados(response.data);
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  }






  const descargarArchivo = (url) => {
  fetch(url, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${userData.token}`,
    },
  })
    .then(response => {
      if (response.status === 301 || response.status === 302) {
        // Manejar redirecciones
        const newUrl = response.headers.get('Location');
        console.log('Redirigiendo a:', newUrl);
        return fetch(newUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${userData.token}`,
          },
        });
      }
      if (!response.ok) {
        throw new Error(`Error en la respuesta: ${response.status} ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type'); // Detecta el tipo de archivo
      const contentDisposition = response.headers.get('content-disposition'); // Detecta el nombre del archivo
      return response.blob().then(blob => ({ contentType, contentDisposition, blob }));
    })
    .then(({ contentType, contentDisposition, blob }) => {
      // Extraer el nombre del archivo del encabezado content-disposition, si existe
      let filename = 'archivo';
      if (contentDisposition) {
        const match = contentDisposition.match(/filename="?(.+?)"?$/);
        if (match) {
          filename = match[1];
        }
      }

      // Si no hay filename en content-disposition, usa la extensión de content-type
      const extension = contentType.split('/')[1];
      if (!filename.includes('.')) {
        filename += `.${extension}`;
      }

      // Crear un enlace para la descarga
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    })
    .catch(error => {
      console.error('Error en la solicitud:', error);
    });
};







  const historicoPedidos = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API}/orders?customer=${userData.usuario.id}`, {
        auth: {
          username: process.env.REACT_APP_USER,
          password: process.env.REACT_APP_PASSWORD
        }
      })
      setPedidos(response.data);
    } catch (error) {
      console.error('error al descargar el historico de pedidos:', error);
    }
  }

  const renderizarHTML = (htmlString) => {
    return { __html: htmlString }
  }

  return (
    <div className='clienteContainer'>
      <h1>Área Cliente</h1>

      <h2>Archivos Privados</h2>
      {privados?.archivos_privados?.length > 0 && (
        <div>
          <ul>
            {privados.archivos_privados.map((archivo) => (
              <li key={archivo.ID}>
                <strong>{archivo.titulo}</strong>
                <br />
                <div dangerouslySetInnerHTML={renderizarHTML(archivo.contenido)} />
                <br /><br />
                <button onClick={() => descargarArchivo(`${process.env.REACT_APP_BACK}${archivo.enlace_descarga}`)}>
                  Descargar archivo
                </button>
                <br /><br />
              </li>
            ))}
          </ul>
        </div>
      )}

      {privados?.posts_sin_archivos?.length > 0 && (
        <div>
          <ul>
            {privados.posts_sin_archivos.map((post) => (
              <li key={post.ID}>
                <strong>{post.titulo}</strong>
                <br />
                <div dangerouslySetInnerHTML={renderizarHTML(post.contenido)} />
                <br /><br />
              </li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <h3 onClick={() => toggleSeccion('datosPersonales')}>
          Datos Personales {seccionesAbiertas.datosPersonales ? '-' : '+'}
        </h3>
        {seccionesAbiertas.datosPersonales && (
          <div className="editarDatosContainer">
            <h1>Editar datos personales</h1>
            {mensaje && <p className="mensaje">{mensaje}</p>}
            {mensajeError && <p className="mensajeError">{mensajeError}</p>}

            <div className="campo">
              <label>Nombre:</label>
              {editandoCampo === "first_name" ? (
                <>
                  <input
                    type="text"
                    name="first_name"
                    value={datos.first_name}
                    onChange={manejarCambio}
                  />
                  <button onClick={() => guardarCambio("first_name")}>Guardar</button>
                </>
              ) : (
                <>
                  <span>{datos.first_name}</span>
                  <button onClick={() => setEditandoCampo("first_name")}>Editar</button>
                </>
              )}
            </div>

            <div className="campo">
              <label>Apellidos:</label>
              {editandoCampo === "last_name" ? (
                <>
                  <input
                    type="text"
                    name="last_name"
                    value={datos.last_name}
                    onChange={manejarCambio}
                  />
                  <button onClick={() => guardarCambio("last_name")}>Guardar</button>
                </>
              ) : (
                <>
                  <span>{datos.last_name}</span>
                  <button onClick={() => setEditandoCampo("last_name")}>Editar</button>
                </>
              )}
            </div>

            <div className="campo">
              <label>Correo electrónico:</label>
              {editandoCampo === "email" ? (
                <>
                  <input
                    type="email"
                    name="email"
                    value={datos.email}
                    onChange={manejarCambio}
                  />
                  <button onClick={() => guardarCambio("email")}>Guardar</button>
                </>
              ) : (
                <>
                  <span>{datos.email}</span>
                  <button onClick={() => setEditandoCampo("email")}>Editar</button>
                </>
              )}
            </div>

            <div className="campo">
              <label>Teléfono:</label>
              {editandoCampo === "phone" ? (
                <>
                  <input
                    type="number"
                    name="phone"
                    value={datos.phone}
                    onChange={manejarCambio}
                  />
                  <button onClick={() => guardarCambio("phone")}>Guardar</button>
                </>
              ) : (
                <>
                  <span>{datos.phone}</span>
                  <button onClick={() => setEditandoCampo("phone")}>Editar</button>
                </>
              )}
            </div>

            <div className="campo">
              <label>Dirección:</label>
              {editandoCampo === "address" ? (
                <>
                  <input
                    type="text"
                    name="address"
                    value={datos.address}
                    onChange={manejarCambio}
                  />
                  <button onClick={() => guardarCambio("address")}>Guardar</button>
                </>
              ) : (
                <>
                  <span>{datos.address}</span>
                  <button onClick={() => setEditandoCampo("address")}>Editar</button>
                </>
              )}
            </div>

            <div className="campo">
              <label>Ciudad:</label>
              {editandoCampo === "city" ? (
                <>
                  <input
                    type="text"
                    name="city"
                    value={datos.city}
                    onChange={manejarCambio}
                  />
                  <button onClick={() => guardarCambio("city")}>Guardar</button>
                </>
              ) : (
                <>
                  <span>{datos.city}</span>
                  <button onClick={() => setEditandoCampo("city")}>Editar</button>
                </>
              )}
            </div>

            <div className="campo">
              <label>Estado:</label>
              {editandoCampo === "state" ? (
                <>
                  <input
                    type="text"
                    name="state"
                    value={datos.state}
                    onChange={manejarCambio}
                  />
                  <button onClick={() => guardarCambio("state")}>Guardar</button>
                </>
              ) : (
                <>
                  <span>{datos.state}</span>
                  <button onClick={() => setEditandoCampo("state")}>Editar</button>
                </>
              )}
            </div>

            <div className="campo">
              <label>Código Postal:</label>
              {editandoCampo === "postcode" ? (
                <>
                  <input
                    type="text"
                    name="postcode"
                    value={datos.postcode}
                    onChange={manejarCambio}
                  />
                  <button onClick={() => guardarCambio("postcode")}>Guardar</button>
                </>
              ) : (
                <>
                  <span>{datos.postcode}</span>
                  <button onClick={() => setEditandoCampo("postcode")}>Editar</button>
                </>
              )}
            </div>
          </div>
        )}
      </div>

      <div>
        <h3 onClick={() => toggleSeccion('historicoPedidos')}>
          Histórico de Pedidos {seccionesAbiertas.historicoPedidos ? '-' : '+'}
        </h3>
        {seccionesAbiertas.historicoPedidos && (
          <div>
            {pedidos?.length === 0 ? (
              <p>No tienes pedidos registrados</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Fecha</th>
                    <th>Producto</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {pedidos.map((pedido) => (
                    <tr key={pedido.id}>
                      <td>{new Date(pedido.date_created).toLocaleDateString()}</td>
                      <td>{pedido.line_items.map((item) => item.name).join(", ")}</td>
                      <td>{pedido.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AreaCliente;
