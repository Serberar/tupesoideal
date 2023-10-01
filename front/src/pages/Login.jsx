import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { myContext } from '../components/Context';
import '../css/Login.css';

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
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, formData);
            almacenarDatosUsuario(response.data);
            console.log('Respuesta del servidor:', response.data);
            setFormData({
              correo: '',
              contraseña: '',
        });
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
        <div className='enlaceRegistro'>No estás registrado? registrate aquí 
        <Link to="/registro">
  <button className='botonRegistroLogin'>Registrate</button>
</Link>
</div>
        </form>

      </div>  
    );
}

export default Login;
