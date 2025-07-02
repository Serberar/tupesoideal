import { Link, useNavigate } from 'react-router-dom';
import useLogin from './useLogin';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const {
    mensajeError,
    modalAbierto,
    setModalAbierto,
    email,
    setEmail,
    mensajeModal,
    autenticarUsuario,
    enviarCorreo,
  } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    const correo = e.target.correo.value;
    const contraseña = e.target.contraseña.value;
    autenticarUsuario(correo, contraseña, () => navigate('/'));
  };

  const handleEnviarCorreo = (e) => {
    e.preventDefault();
    enviarCorreo(email);
  };

  return (
    <div className="loginContainer_login">
      <form className="loginFormulario_login" onSubmit={handleSubmit}>
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

      {modalAbierto && (
        <div className="modalOverlay_login">
          <div className="modal_login">
            <h2>Restablecer contraseña</h2>
            <form onSubmit={handleEnviarCorreo}>
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
              onClick={() => { setModalAbierto(false); }}
            >
              &times;
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
