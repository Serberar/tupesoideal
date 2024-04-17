import React, { useState } from 'react';
import axios from 'axios';
import './Registro.css';

const Registro = () => {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    first_name: '',
    last_name: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      // calcular username
      if (name === 'first_name' || name === 'last_name') {
        const fullName = updatedData.first_name + ' ' + updatedData.last_name;
        updatedData.username = fullName;
      }
  
      return updatedData;
    });
  };

  const registrarUsuario = async (e) => {
    e.preventDefault(); 
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
      console.log('Respuesta exitosa:', response.data);

    } catch (error) {
      console.error('Error al registrar el usuario:', error);

    }
  };

  return (
    <div className='registroContainer'>
      <form action="" className="registroFormulario" onSubmit={registrarUsuario}>
        <h1>Registro de usuario</h1>
        <div className="registrocampo">
          <label htmlFor="first_name">Nombre</label>
          <input className='registroInput' type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
        </div>
        <div className="registrocampo">
          <label htmlFor="last_name">Apellido</label>
          <input className='registroInput' type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
        </div>
        <div className="registrocampo">
          <label htmlFor="email">Correo electrónico</label>
          <input className='registroInput' type="text" name="email" value={formData.email} onChange={handleChange} />
        </div>
        {/* <div className="registrocampo">
          <label htmlFor="username">Nombre de usuario</label>
          <input className='registroInput' type="text" name="username" value={formData.username} onChange={handleChange} />
        </div> */}
        <div className="registrocampo">
          <label htmlFor="password">Contraseña</label>
          <input className='registroInput' type="password" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <input className="registroBoton" type="submit" value="Registro" />
      </form>
    </div>
  );
};

export default Registro;