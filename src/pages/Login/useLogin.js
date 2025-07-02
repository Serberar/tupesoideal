import { useState, useContext } from 'react';
import axios from 'axios';
import { myContext } from '../../components/Context';

const useLogin = () => {
  const { almacenarDatosUsuario } = useContext(myContext);
  const [mensajeError, setMensajeError] = useState('');
  const [mensajeModal, setMensajeModal] = useState('');
  const [modalAbierto, setModalAbierto] = useState(false);
  const [email, setEmail] = useState('');

  const autenticarUsuario = async (correo, contraseña, onSuccess) => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_WP_URL_USER}`, {
        username: correo,
        password: contraseña,
      });

      if (response.status === 200 && response.data.token) {
        almacenarDatosUsuario(response.data);
        setMensajeError('');
        onSuccess();
      }
    } catch {
      setMensajeError('Error al validar los datos. Vuelve a intentarlo.');
    }
  };

  const enviarCorreo = async (email) => {
    setMensajeModal('');
    try {
      const response = await axios.post(`${process.env.REACT_APP_WP_CUSTOM}/reset-password`, { email });
      setMensajeModal(response.data.message || 'Operación completada.');
      setEmail('');
    } catch {
      setMensajeModal('Error al enviar el correo. Inténtalo nuevamente.');
    }
  };

  return {
    mensajeError,
    modalAbierto,
    setModalAbierto,
    email,
    setEmail,
    mensajeModal,
    autenticarUsuario,
    enviarCorreo,
  };
};

export default useLogin;
