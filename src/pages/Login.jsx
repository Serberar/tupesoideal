import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { myContext } from '../components/Context';
import '../css/Login.css';


const autenticarUsuarioFrontend = async (correo, contraseña) => {
  try {
    const base64Credentials = btoa(`${correo}:${contraseña}`); 
    const headers = {
      'Authorization': `Basic ${base64Credentials}`,
    };

    const apiUrl = process.env.REACT_APP_WP_URL_USER;
    const response = await axios.get(apiUrl, { headers });

    if (response.status === 200) {
      const userEmail = correo; 
      const username = process.env.REACT_APP_USER;
      const password = process.env.REACT_APP_PASSWORD;
      const base64Credentials = btoa(`${username}:${password}`); 

      const headers = {
        'Authorization': `Basic ${base64Credentials}`,
      };

      const responseUserData = await axios.get(`${apiUrl}?search=${userEmail}`, { headers });

      if (responseUserData.status === 200) {
        const responseData = responseUserData.data;
        return responseData;
      } else {
        console.error('Error al obtener los datos del usuario:', responseUserData.statusText);
        return { error: 'Error al obtener los datos del usuario' };
      }
    } else {
      console.error('Error de autenticación:', response.statusText);
      return { error: 'Error de autenticación' };
    }
  } catch (error) {
    console.error('Error al autenticar al usuario:', error);
    return { error: 'Error al autenticar al usuario' };
  }
};

const Login = () => {
  const [formData, setFormData] = useState({
    correo: '',
    contraseña: '',
  });
  const { almacenarDatosUsuario } = useContext(myContext);

  const handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    setFormData({ ...formData, [name]: val });
  }

  const enviarLogin = async e => {
    e.preventDefault();

    try {
      const { correo, contraseña } = formData;
      const response = await autenticarUsuarioFrontend(correo, contraseña);

      if (response.error) {
        console.error('Error al autenticar el usuario:', response.error);
      } else {
        almacenarDatosUsuario(response);
        setFormData({
          correo: '',
          contraseña: '',
        });
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  }

  return (
    <div className='loginContainer'>
      <form action="" className="loginFormulario" onSubmit={enviarLogin}>
        <h1>Identifícate</h1>

        <div className="logincampo">
          <label htmlFor="correo">Correo electrónico</label>
          <input className='loginInput' type="text" name="correo" value={formData.correo} onChange={handleChange} />
        </div>
        <div className="logincampo">
          <label htmlFor="contraseña">Contraseña</label>
          <input className='loginInput' type="text" name="contraseña" value={formData.contraseña} onChange={handleChange} />
        </div>

        <input className="loginBoton" type="submit" value="Entra" />
        <div className='enlaceRegistro'>No estás registrado? Regístrate aquí 
          <Link to="/registro">
            <button className='botonRegistroLogin'>Regístrate</button>
          </Link>
        </div>
      </form>
          {/* <div>{usuario && <span>Bienvenido, {usuario.name}</span>}</div> */}
    </div>  
  );
}

export default Login;
