import React, { useState } from 'react';
import axios from 'axios';
import './Registro.css';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
  const navigate = useNavigate(); 
  const [mensajeError, setMensajeError] = useState('');

  const registrarUsuario = async (e) => {
    e.preventDefault();

    const formData = {
      username: e.target.email.value, 
      password: e.target.password.value,
      email: e.target.email.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/customers`,
        formData,
        {
          auth: {
            username: process.env.REACT_APP_USER,
            password: process.env.REACT_APP_PASSWORD,
          },
        }
      );
      if (response.status === 200 || 201)  {
        navigate('/');
      } else {    
        setMensajeError('Error en el registro, por favor intente nuevamente.');
      }
    } catch (error) {
      if (error.response?.data?.message) {
        setMensajeError(error.response.data.message);
      } else {
        setMensajeError('Ha ocurrido un error inesperado. Inténtalo de nuevo más tarde.');
      }
      console.error('Error al registrar el usuario');
    }
  };

  return (
    <div className='registroContainer'>
      <form className='registroFormulario' onSubmit={registrarUsuario}>
        <h1>Registro de usuario</h1>
        {mensajeError && <p className="mensajeError">{mensajeError}</p>}
        <div className='registrocampo'>
          <label htmlFor='first_name'>Nombre</label>
          <input className='registroInput' type='text' name='first_name' />
        </div>
        <div className='registrocampo'>
          <label htmlFor='last_name'>Apellido</label>
          <input className='registroInput' type='text' name='last_name' />
        </div>
        <div className='registrocampo'>
          <label htmlFor='email'>Correo electrónico</label>
          <input className='registroInput' type='email' name='email' />
        </div>
        <div className='registrocampo'>
          <label htmlFor='password'>Contraseña</label>
          <input className='registroInput' type='password' name='password' />
        </div>
        <input className='registroBoton' type='submit' value='Registro' />
      </form>
    </div>
  );
};

export default Registro;