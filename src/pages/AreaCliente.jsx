import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../components/Context';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AreaCliente = () => {
  const { state } = useContext(myContext);
  const { userData } = state;
  const usuario = Array.isArray(userData) && userData.length > 0 ? userData[0] : null;
  const [privados, setPrivados] = useState(null);

  const datosPrivados = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_WP_PRIVATE_LIST}${usuario.id}`, {
        auth: {
          username: process.env.REACT_APP_USER,
          password: process.env.REACT_APP_PASSWORD,
        }
      });
      setPrivados(response.data);
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  useEffect(() => {
    datosPrivados();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usuario]);
  

  console.log(privados);

  return (
    <div>
      <h1>Archivos Privados</h1>
      {privados && privados.archivos_privados && privados.archivos_privados.length > 0 && (
        <div>
          <h2>Archivos Privados</h2>
          <ul>
            {privados.archivos_privados.map((archivo) => (
              <li key={archivo.ID}>
                <strong>{archivo.titulo}</strong>
                <br />
                {archivo.contenido}

                <br />
                Nombre del Archivo: {archivo.nombre_archivo}
                <br />
                <a href={archivo.enlace_descarga} target="_blank" rel="noreferrer">
                  Descargar Archivo
                </a>
                <br /><br />
                Fecha de Creación: {archivo.fecha_creacion}
              </li>
            ))}
          </ul>
        </div>
      )}

      {privados && privados.posts_sin_archivos && privados.posts_sin_archivos.length > 0 && (
        <div>
          <h2>Posts sin Archivos</h2>
          <ul>
            {privados.posts_sin_archivos.map((post) => (
              <li key={post.ID}>
                <strong>{post.titulo}</strong>
                <br />
                {post.contenido}
                <br /><br />
                Fecha de Creación: {post.fecha_creacion}
              </li>
            ))}
          </ul>
        </div>
      )}
     <Link to="/autenticar">Ir a la página de autenticación</Link>
    </div>
  );
};

export default AreaCliente;
