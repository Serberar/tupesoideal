import { useState } from 'react';
import axios from 'axios';

const usePasswordReset = (resetToken, onSuccessNavigate) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setMensaje('Por favor, completa ambos campos.');
      return;
    }

    if (password !== confirmPassword) {
      setMensaje('Las contraseñas no coinciden. Inténtalo de nuevo.');
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_WP_CUSTOM}/update-password`, {
        reset: resetToken,
        password,
      });

      if (response.status === 200) {
        setMensaje(response.data.message || '¡Contraseña actualizada correctamente!');
        setTimeout(() => onSuccessNavigate(), 3000);
      } else {
        setMensaje(response.data.message || 'Ocurrió un error. Inténtalo nuevamente.');
      }
    } catch (error) {
      console.error(error);
      setMensaje('Error al restablecer la contraseña. Inténtalo nuevamente.');
    }
  };

  return {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    mensaje,
    handleSubmit,
  };
};

export default usePasswordReset;
