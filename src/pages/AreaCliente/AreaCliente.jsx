import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../../components/Context';
import CampoEditable from './CampoEditable';
import './AreaCliente.css';

const AreaCliente = () => {
  const { state, obtenerDatosCliente, guardarCambioDatosCliente, historicoPedidos, cambioContraseña } = useContext(myContext);
  const [editandoCampo, setEditandoCampo] = useState("");
  const [datos, setDatos] = useState(state.datosUsuario);
  const [seccionesAbiertas, setSeccionesAbiertas] = useState({});
  const [mensajeContraseña, setMensajeContraseña] = useState(state.mensajeContraseña);

  useEffect(() => {
    if (state.userData) {
      obtenerDatosCliente();
      historicoPedidos();
    }
  }, [state.userData, obtenerDatosCliente, historicoPedidos]);

  useEffect(() => {
    setMensajeContraseña(state.mensajeContraseña);
    setDatos(state.datosUsuario);
  }, [state.datosUsuario, state.mensajeContraseña]);

  const mostrarSeccion = (seccion) => {
    setSeccionesAbiertas((prev) => ({
      ...prev,
      [seccion]: !prev[seccion],
    }));
  };

  const manejarCambios = (e) => {
    const { name, value } = e.target;
    setDatos((prevDatos) => ({
      ...prevDatos,
      [name]: value,
    }));
  };

  const guardarCambio = () => {
    guardarCambioDatosCliente(datos);
    setEditandoCampo("");
  };

  return (
    <div className="AreaClienteContainer">
      <h1>Área Personal</h1>
      <h3 onClick={() => mostrarSeccion('datosPersonales')} className="seccionTitulo">
        Datos Personales {seccionesAbiertas.datosPersonales ? '-' : '+'}
      </h3>
      {seccionesAbiertas.datosPersonales && (
        <div className="datosPersonalesContainer">
          <h2>Editar Datos Personales</h2>
          <CampoEditable
            label="Nombre"
            name="first_name"
            valor={datos.first_name}
            enEdicion={editandoCampo === 'first_name'}
            onCambiar={manejarCambios}
            onGuardar={guardarCambio}
            onCancelar={() => setEditandoCampo('')}
            onEditar={(campo) => setEditandoCampo(campo)}
          />
          <CampoEditable
            label="Apellido"
            name="last_name"
            valor={datos.last_name}
            enEdicion={editandoCampo === 'last_name'}
            onCambiar={manejarCambios}
            onGuardar={guardarCambio}
            onCancelar={() => setEditandoCampo('')}
            onEditar={(campo) => setEditandoCampo(campo)}
          />
          <CampoEditable
            label="Correo Electrónico"
            name="email"
            type="email"
            valor={datos.email}
            enEdicion={editandoCampo === 'email'}
            onCambiar={manejarCambios}
            onGuardar={guardarCambio}
            onCancelar={() => setEditandoCampo('')}
            onEditar={(campo) => setEditandoCampo(campo)}
          />
          <CampoEditable
            label="Teléfono"
            name="phone"
            type="number"
            valor={datos.phone}
            enEdicion={editandoCampo === 'phone'}
            onCambiar={manejarCambios}
            onGuardar={guardarCambio}
            onCancelar={() => setEditandoCampo('')}
            onEditar={(campo) => setEditandoCampo(campo)}
          />
          <CampoEditable
            label="Dirección"
            name="address"
            valor={datos.address}
            enEdicion={editandoCampo === 'address'}
            onCambiar={manejarCambios}
            onGuardar={guardarCambio}
            onCancelar={() => setEditandoCampo('')}
            onEditar={(campo) => setEditandoCampo(campo)}
          />
          <CampoEditable
            label="Ciudad"
            name="city"
            valor={datos.city}
            enEdicion={editandoCampo === 'city'}
            onCambiar={manejarCambios}
            onGuardar={guardarCambio}
            onCancelar={() => setEditandoCampo('')}
            onEditar={(campo) => setEditandoCampo(campo)}
          />
          <CampoEditable
            label="Población"
            name="state"
            valor={datos.state}
            enEdicion={editandoCampo === 'state'}
            onCambiar={manejarCambios}
            onGuardar={guardarCambio}
            onCancelar={() => setEditandoCampo('')}
            onEditar={(campo) => setEditandoCampo(campo)}
          />
          <CampoEditable
            label="Código Postal"
            name="postcode"
            type="number"
            valor={datos.postcode}
            enEdicion={editandoCampo === 'postcode'}
            onCambiar={manejarCambios}
            onGuardar={guardarCambio}
            onCancelar={() => setEditandoCampo('')}
            onEditar={(campo) => setEditandoCampo(campo)}
          />
        </div>
      )}

      <h3 onClick={() => mostrarSeccion('historicoPedidos')} className="seccionTitulo">
        Histórico de Pedidos {seccionesAbiertas.historicoPedidos ? '-' : '+'}
      </h3>
      {seccionesAbiertas.historicoPedidos && (
        <div className="historicoPedidosContainer">
          {state.historicoPedidos?.length === 0 ? (
            <p className="mensajeNoPedidos">No tienes pedidos registrados</p>
          ) : (
            <table className="tablaPedidos"> 
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Producto</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {state.historicoPedidos.map((pedido) => (
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

      <h3 onClick={() => mostrarSeccion('cambiarContraseña')} className="seccionTitulo">
        Cambiar Contraseña {seccionesAbiertas.cambiarContraseña ? '-' : '+'}
      </h3>
      {seccionesAbiertas.cambiarContraseña && (
        <div className="cambiarContraseñaContainer">
          <form onSubmit={cambioContraseña}>
            <div className="campo">
              <label>Contraseña Actual:</label>
              <input
                type="password"
                name="currentPassword"
                placeholder="Introduce tu contraseña actual"
                required
              />
            </div>
            <div className="campo">
              <label>Nueva Contraseña:</label>
              <input
                type="password"
                name="newPassword"
                placeholder="Introduce tu nueva contraseña"
                required
              />
            </div>
            <div className="campo">
              <label>Repetir Nueva Contraseña:</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Repite tu nueva contraseña"
                required
              />
            </div>
            <button type="submit" className="cambiarContraseñaBtn">
              Cambiar Contraseña
            </button>
          </form>
          <p className={`mensaje ${mensajeContraseña.includes('Error') ? 'error' : 'exito'}`}>
            {mensajeContraseña}
          </p>
        </div>
      )}
    </div>
  );
};

export default AreaCliente;
