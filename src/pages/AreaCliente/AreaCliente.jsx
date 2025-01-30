import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../../components/Context';
import './AreaCliente.css';

const AreaCliente = () => {
  const { state, obtenerDatosCliente, guardarCambioDatosCliente, historicoPedidos, actualizarContraseña } = useContext(myContext);
  const [editandoCampo, setEditandoCampo] = useState("");
  const [datos, setDatos] = useState(state.datosUsuario);
  const [seccionesAbiertas, setSeccionesAbiertas] = useState({});
  const [mensaje, setMensaje] = useState(state.mensajeContraseña);

  useEffect(() => {
    if (state.userData) {
      obtenerDatosCliente();
      historicoPedidos();
    }
  }, [state.userData, obtenerDatosCliente, historicoPedidos]);

  useEffect(() => {
    setMensaje(state.mensajeContraseña);
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

  const manejarCambioContraseña = async (e) => {
    e.preventDefault();
    const currentPassword = e.target.currentPassword.value;
    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      setMensaje("Las contraseñas nuevas no coinciden.");
      return;
    }
    actualizarContraseña(currentPassword, newPassword);
    e.target.reset();
  };



  const CampoEditable = ({ label, name, type = "text" }) => (
    <div className="campoEditable">
      <label>{label}:</label>
      {editandoCampo === name ? (
        <>
          <input
            type={type}
            name={name}
            value={datos[name] || ""}
            onChange={manejarCambios}
          />
          <button className="guardarBtn" onClick={guardarCambio}>
            Guardar
          </button>
          <button className="cancelarBtn" onClick={() => setEditandoCampo("")}>
            Cancelar
          </button>
        </>
      ) : (
        <>
          <span>{datos[name] || "No disponible"}</span>
          <button className="editarBtn" onClick={() => setEditandoCampo(name)}>
            Editar
          </button>
        </>
      )}
    </div>
  );

  return (
    <div className="AreaClienteContainer">
    <h1>Área Personal</h1>
      <h3 onClick={() => mostrarSeccion('datosPersonales')} className="seccionTitulo">
        Datos Personales {seccionesAbiertas.datosPersonales ? '-' : '+'}
      </h3>
      {seccionesAbiertas.datosPersonales && (
        <div className="datosPersonalesContainer">
          <h2>Editar Datos Personales</h2>
          <CampoEditable label="Nombre" name="first_name" />
          <CampoEditable label="Apellido" name="last_name" />
          <CampoEditable label="Correo Electrónico" name="email" type="email" />
          <CampoEditable label="Teléfono" name="phone" type="number" />
          <CampoEditable label="Dirección" name="address" />
          <CampoEditable label="Ciudad" name="city" />
          <CampoEditable label="Población" name="state" />
          <CampoEditable label="Código Postal" name="postcode" type="number" />
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
          <form onSubmit={manejarCambioContraseña}>
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
          <p className={`mensaje ${mensaje.includes('Error') ? 'error' : 'exito'}`}>
            {mensaje}
          </p>
        </div>
      )}
    </div>
  );
};

export default AreaCliente;
