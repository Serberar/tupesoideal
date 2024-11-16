import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { myContext } from '../../components/Context';
import './Login.css';

const Login = () => {
  const { almacenarDatosUsuario } = useContext(myContext);
  const [mensajeError, setMensajeError] = useState('');
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
      setMensajeError('Error al validad los datos. Vuelve a intentarlo');
    }
  };
//falta opción de recuperar contraseña
http://localhost/wordpress/mi-cuenta/lost-password/

  return (
    <div className='loginContainer'>
      <form className='loginFormulario' onSubmit={autenticarUsuario}>
        <h1>Identifícate</h1>

        <div className='logincampo'>
          <label htmlFor='correo'>Correo electrónico</label>
          <input className='loginInput' type='text' name='correo' />
        </div>
        <div className='logincampo'>
          <label htmlFor='contraseña'>Contraseña</label>
          <input className='loginInput' type='password' name='contraseña' />
        </div>

        {mensajeError && <p className='mensajeError'>{mensajeError}</p>} 
        <input className='loginBoton' type='submit' value='Entra' />
        <div className='enlaceRegistro'>
          No estás registrado? Regístrate aquí
          <Link to='/registro'>
            <button className='botonRegistroLogin'>Regístrate</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
