import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useRegistro = () => {
  const [mensajeError, setMensajeError] = useState('');
  const navigate = useNavigate();

  const registrarUsuario = async (datosFormulario) => {
    setMensajeError('');

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API}/customers`,
        datosFormulario,
        {
          auth: {
            username: process.env.REACT_APP_USER,
            password: process.env.REACT_APP_PASSWORD,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        navigate('/login');
      } else {
        setMensajeError('Error en el registro, por favor intente nuevamente.');
      }
    } catch (error) {
      if (error.response?.data?.message) {
        setMensajeError(error.response.data.message);
      } else {
        setMensajeError('Ha ocurrido un error inesperado. Inténtalo de nuevo más tarde.');
      }
      console.error('Error al registrar el usuario', error);
    }
  };

  return { mensajeError, registrarUsuario };
};

export default useRegistro;
