import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../../components/Context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Consulta.css';

const Consulta = () => {
  const { state } = useContext(myContext);
  const { userData } = state;
  const [privados, setPrivados] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData) {
      navigate('/');
      return;
    }

    const descargarDatosPrivados = async () => {
      try {
        await datosPrivados();
      } catch (error) {
        console.error('Error al obtener los datos privados:', error);
      }
    };

    descargarDatosPrivados();
  }, [userData, navigate]);

  const datosPrivados = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_WP_CUSTOM}/listar-privados?user_id=${userData.usuario.id}`, {
        headers: {
          'Authorization': `Bearer ${userData.token}`,
        },
      });
      setPrivados(response.data);
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

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
      a.download = privados.archivos_privados[0]?.nombre_archivo || 'archivo';
      a.click();
    } catch (error) {
      console.error('Error al intentar descargar el archivo:', error);
    }
  };
  
  const renderizarHTML = (htmlString) => {
    return { __html: htmlString }
  }


  // Detectar enlaces dentro de contenido HTML
  const detectarEnlaces = (contenido) => {
    const doc = new DOMParser().parseFromString(contenido, 'text/html');
    const textoLimpio = doc.body.textContent || ''; 
    const regex = /https?:\/\/[^\s"']+/g;
    return textoLimpio.match(regex);
  };

  // Limpiar contenido HTML y extraer solo texto limpio
  const extraerContenidoSinEnlaces = (contenido) => {
    const doc = new DOMParser().parseFromString(contenido, 'text/html');
    let textoLimpio = doc.body.textContent || ''; 
    const enlaces = detectarEnlaces(contenido);
    if (enlaces) {
      enlaces.forEach((url) => {
        textoLimpio = textoLimpio.replace(url, '');
      });
    }
    return textoLimpio;
  };

  // Generar botones de enlaces
  const generarBotonesEnlaces = (contenido) => {
    const enlaces = detectarEnlaces(contenido);
    if (enlaces) {
      return enlaces.map((url, index) => (
        <button key={index} className="reunion-button" onClick={() => window.open(url, '_blank')}>
          Entrar en la reunión
        </button>
      ));
    }
    return null; 
  };

  return (
    <div className="clienteContainer">
      <h1 className="titulo-consulta">Consulta</h1>

      <h2 className="subtitulo">Datos de la consulta</h2>
      {privados?.archivos_privados?.length > 0 && (
        <div className="archivos-lista">
          <ul>
            {privados.archivos_privados.map((archivo) => (
              <li key={archivo.ID} className="archivo-item">
                <strong className="archivo-titulo">{archivo.titulo}</strong>
                <br />
                <div className="contenido-texto">{extraerContenidoSinEnlaces(archivo.contenido)}</div>
                <div className="botones-enlaces">{generarBotonesEnlaces(archivo.contenido)}</div>
                <br />
                <button className="descargar-button" onClick={() => descargarArchivo(`${process.env.REACT_APP_BACK}${archivo.enlace_descarga}`)}>
                  Descargar archivo
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {privados?.posts_sin_archivos?.length > 0 && (
        <div className="posts-sin-archivos">
          <ul>
            {privados.posts_sin_archivos.map((post) => (
              <li key={post.ID} className="post-item">
                <strong className="post-titulo">{post.titulo}</strong>
                <br />
                <div className="contenido-texto">{extraerContenidoSinEnlaces(post.contenido)}</div>
                <div className="botones-enlaces">{generarBotonesEnlaces(post.contenido)}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Consulta;
