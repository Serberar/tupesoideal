import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import usePasswordReset from './usePasswordReset';
import './Password.css';

const Password = () => {
  const [searchParams] = useSearchParams();
  const resetToken = searchParams.get('reset');
  const navigate = useNavigate();

  const {
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    mensaje,
    handleSubmit,
  } = usePasswordReset(resetToken, () => navigate('/login'));

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
        {mensaje && (
          <p style={{ color: mensaje.toLowerCase().includes('error') ? 'red' : 'green' }}>
            {mensaje}
          </p>
        )}
        <button type="submit">Restablecer contraseña</button>
      </form>
    </div>
  );
};

export default Password;
