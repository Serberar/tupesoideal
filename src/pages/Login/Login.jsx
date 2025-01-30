import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../../components/Context';
import './Login.css';

const Login = () => {
  const { almacenarDatosUsuario } = useContext(myContext);
  const [mensajeError, setMensajeError] = useState('');
  const [modalAbierto, setModalAbierto] = useState(false);
  const [email, setEmail] = useState('');
  const [mensajeModal, setMensajeModal] = useState('');
  const navigate = useNavigate();

  const autenticarUsuario = async (e) => {
    e.preventDefault();

    const correo = e.target.correo.value;
    const contraseña = e.target.contraseña.value;
    try {
      const response = await axios.post(`${process.env.REACT_APP_WP_URL_USER}`, {
        username: correo,
        password: contraseña,
      });

      if (response.status === 200 && response.data.token) {
        almacenarDatosUsuario(response.data);
        navigate('/');
      }
    } catch (error) {
      console.error('Error al autenticar al usuario');
      setMensajeError('Error al validar los datos. Vuelve a intentarlo.');
    }
  };

  const enviarCorreo = async (e) => {
    e.preventDefault();
    setMensajeModal('');
    try {
      const response = await axios.post(`${process.env.REACT_APP_WP_CUSTOM}/reset-password`, {
        email,
      });

      if (response.status === 200) {
        setMensajeModal(response.data.message);
        setEmail('');
      } else {
        setMensajeModal(response.data.message || 'Ocurrió un error. Inténtalo de nuevo.');
      }
    } catch (error) {
      console.error(error);
      setMensajeModal('Error al enviar el correo. Inténtalo nuevamente.');
    }
  };

  return (
    <div className="loginContainer_login">
      <form className="loginFormulario_login" onSubmit={autenticarUsuario}>
        <h1>Identifícate</h1>

        <div className="logincampo_login">
          <label htmlFor="correo">Correo electrónico</label>
          <input className="loginInput_login" type="text" name="correo" />
        </div>
        <div className="logincampo_login">
          <label htmlFor="contraseña">Contraseña</label>
          <input className="loginInput_login" type="password" name="contraseña" />
        </div>

        {mensajeError && (
          <div className="mensajeError_login">
            <p>{mensajeError}</p>

            <span
              className="linkRestablecer_login"
              onClick={() => setModalAbierto(true)}
            >
              ¿Olvidaste tu contraseña?
            </span>

          </div>
        )}

        <input className="loginBoton_login" type="submit" value="Entra" />
        <div className="enlaceRegistro_login">
          No estás registrado? Regístrate aquí
          <Link to="/registro">
            <button className="botonRegistroLogin_login">Regístrate</button>
          </Link>
        </div>
      </form>

      {/* Modal */}
      {modalAbierto && (
        <div className="modalOverlay_login">
          <div className="modal_login">
            <h2>Restablecer contraseña</h2>
            <form onSubmit={enviarCorreo}>
              <div>
                <label htmlFor="email">Correo electrónico:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Enviar</button>
            </form>
            {mensajeModal && (
              <p
                style={{
                  color: mensajeModal.includes('Error') ? 'red' : 'green',
                }}
              >
                {mensajeModal}
              </p>
            )}
            <span
              className="closeModal_login"
              onClick={() => { setModalAbierto(false); setMensajeModal(''); }}
            >
              &times; {/* Esto es el símbolo de la "X" */}
            </span>

          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
