import React, { useState } from 'react';
import axios from 'axios';
import '../css/Registro.css';

const Registro = () => {
    const [formData, setFormData] = useState({
        set_paid: true,
        username: '',
        password: '',
        first_name: '',
        last_name: '',
    });

    const [mensaje, setMensaje] = useState(null);

    const MensajeResultado = (text) => {
        setMensaje({text});
        setTimeout(() => {
            setMensaje(null);
        }, 2000);
    };

    const handleChange = e => {
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        setFormData({ ...formData, [name]: val });
    }

    const registrarUsuario = async e => {
        e.preventDefault();

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/registro`, formData);
            console.log('Respuesta del servidor:', response.data);
            MensajeResultado('Usuario registrado correctamente');
            setFormData({
            username: '',
            password: '',
            first_name: '',
            last_name: '',
        });
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            MensajeResultado('Error al regustrar usuario');
        }
    }

    return (
    <div className='registroContainer'>
        <form action="" className="registroFormulario" onSubmit={registrarUsuario}>
            <h1>Registro de usuario</h1>

            <div className="registrocampo">
                <label htmlFor="username">Nombre de usuario</label>
                <input className='registroInput' type="text" name="username" value={formData.username} onChange={handleChange} />
            </div>
            <div className="registrocampo">
                <label htmlFor="password">Contraseña</label>
                <input className='registroInput' type="text" name="password" value={formData.password} onChange={handleChange} />
            </div>
            <div className="registrocampo">
                <label htmlFor="email">Correo electrónico</label>
                <input className='registroInput' type="text" name="email" value={formData.email} onChange={handleChange} />
            </div>

            <div className="registrocampo">
                <label htmlFor="first_name">Nombre</label>
                <input className='registroInput' type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
            </div>
            <div className="registrocampo">
                <label htmlFor="last_name">Apellido</label>
                <input className='registroInput' type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
            </div>
            <input className="registroBoton" type="submit" value="Registro" />
        </form>
        <div>{mensaje && mensaje.text}</div>
      </div>  
    );
}

export default Registro;