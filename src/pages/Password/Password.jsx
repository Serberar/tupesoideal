import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import './Password.css';

const Password = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Obtener el reset token desde la URL (no es necesario user_id ahora)
  const resetToken = searchParams.get('reset');

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
        reset: resetToken,  // Enviar el token 'reset' en lugar de 'token' y 'user_id'
        password,
      });

      if (response.status === 200) {
        setMensaje(response.data.message || '¡Contraseña actualizada correctamente!');
        // Redirigir a la página de inicio de sesión después de unos segundos
        setTimeout(() => navigate('/login'), 3000);
      } else {
        setMensaje(response.data.message || 'Ocurrió un error. Inténtalo nuevamente.');
      }
    } catch (error) {
      console.error(error);
      setMensaje('Error al restablecer la contraseña. Inténtalo nuevamente.');
    }
  };

  return (
    <div className="resetPasswordContainer">
      <h1>Restablecer Contraseña</h1>
      <form onSubmit={handleSubmit} className="resetPasswordForm">
        <div>
          <label htmlFor="password">Nueva contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmar contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {mensaje && <p style={{ color: mensaje.includes('Error') ? 'red' : 'green' }}>{mensaje}</p>}
        <button type="submit">Restablecer contraseña</button>
      </form>
    </div>
  );
};

export default Password;
