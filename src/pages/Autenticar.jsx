import React from 'react';
import axios from 'axios';

const Autenticar = () => {
  const descargarArchivo = async () => {
    try {
      const response = await axios.get(
        'http://tupesoideal.es/back/customer-area/archivos/mis-archivos/2023/11/06/compartido/download/3c8ae4d9f39e2975c9b655cda2d698d5',
        {
          headers: {
            Authorization: `Basic ${btoa(`${process.env.REACT_APP_USER}:${process.env.REACT_APP_PASSWORD}`)}`,
          },
        }
      );

      // La respuesta es exitosa, puedes proceder a abrir el archivo
      window.open(response.request.responseURL, '_blank', 'noopener noreferrer');
    } catch (error) {
      console.error('Error al intentar descargar el archivo:', error);
    }
  };

  return (
    <div>
      <button onClick={descargarArchivo}>Descargar Archivo</button>
    </div>
  );
};

export default Autenticar;
