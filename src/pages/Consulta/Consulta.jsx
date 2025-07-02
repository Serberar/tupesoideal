import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useConsulta from './useConsulta';
import { myContext } from '../../components/Context';
import './Consulta.css';

const Consulta = () => {
  const navigate = useNavigate();
  const { state } = React.useContext(myContext);
  const { userData } = state;
  const {
    privados,
    descargarArchivo,
    extraerContenidoSinEnlaces,
    generarBotonesEnlaces,
  } = useConsulta();

  useEffect(() => {
    if (!userData) navigate('/');
  }, [userData, navigate]);

  if (!userData) return null;

  const sinDatos = 
    !privados || 
    (!privados.archivos_privados?.length && !privados.posts_sin_archivos?.length);

  if (sinDatos) {
    return (
      <div className="clienteContainer">
        <p className="mensaje-sin-datos">No hay datos de tu consulta<br />Vuelve más tarde.</p>
      </div>
    );
  }

  return (
    <div className="clienteContainer">
      <h1 className="titulo-consulta">Consulta</h1>
      <h2 className="subtitulo">Datos de la consulta</h2>

      {privados.archivos_privados.length > 0 && (
        <div className="archivos-lista">
          <ul>
            {privados.archivos_privados.map((archivo) => (
              <li key={archivo.ID} className="archivo-item">
                <strong className="archivo-titulo">{archivo.titulo}</strong>
                <br />
                <div className="contenido-texto">{extraerContenidoSinEnlaces(archivo.contenido)}</div>
                <div className="botones-enlaces">{generarBotonesEnlaces(archivo.contenido)}</div>
                <br />
                <button
                  className="descargar-button"
                  onClick={() => descargarArchivo(`${process.env.REACT_APP_BACK}${archivo.enlace_descarga}`)}
                >
                  Descargar archivo
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {privados.posts_sin_archivos.length > 0 && (
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
