import { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { myContext } from '../../components/Context';

const useConsulta = () => {
  const { state } = useContext(myContext);
  const { userData } = state;
  const [privados, setPrivados] = useState(null);

  const obtenerDatosPrivados = useCallback(async () => {
    if (!userData) return;
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_WP_CUSTOM}/listar-privados?user_id=${userData.usuario.id}`,
        { headers: { Authorization: `Bearer ${userData.token}` } }
      );
      setPrivados(response.data);
    } catch (error) {
      console.error('Error al obtener datos privados:', error);
      setPrivados(null);
    }
  }, [userData]);

  useEffect(() => {
    obtenerDatosPrivados();
  }, [obtenerDatosPrivados]);

  const descargarArchivo = async (url) => {
    try {
      const response = await axios.get(url, {
        auth: {
          username: process.env.REACT_APP_USER,
          password: process.env.REACT_APP_PASSWORD,
        },
        responseType: 'blob',
      });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(response.data);
      a.download = privados?.archivos_privados?.[0]?.nombre_archivo || 'archivo';
      a.click();
    } catch (error) {
      console.error('Error al descargar archivo:', error);
    }
  };

  const detectarEnlaces = (contenido) => {
    const doc = new DOMParser().parseFromString(contenido, 'text/html');
    const texto = doc.body.textContent || '';
    const regex = /https?:\/\/[^\s"']+/g;
    return texto.match(regex);
  };

  const extraerContenidoSinEnlaces = (contenido) => {
    const doc = new DOMParser().parseFromString(contenido, 'text/html');
    let texto = doc.body.textContent || '';
    const enlaces = detectarEnlaces(contenido);
    if (enlaces) enlaces.forEach(url => (texto = texto.replace(url, '')));
    return texto;
  };

  const generarBotonesEnlaces = (contenido) => {
    const enlaces = detectarEnlaces(contenido);
    if (!enlaces) return null;
    return enlaces.map((url, i) => (
      <button key={i} className="reunion-button" onClick={() => window.open(url, '_blank')}>
        Entrar en la reunión
      </button>
    ));
  };

  return {
    privados,
    descargarArchivo,
    extraerContenidoSinEnlaces,
    generarBotonesEnlaces,
  };
};

export default useConsulta;
