import React from 'react';

const Autenticar = () => {
  const url = 'http://tupesoideal.es/back/customer-area/archivos/mis-archivos/2023/11/06/compartido/download/3c8ae4d9f39e2975c9b655cda2d698d5'; // Reemplaza con la URL correcta de tu archivo
  const username = process.env.REACT_APP_USER;
  const password = process.env.REACT_APP_PASSWORD;
  
  const headers = new Headers({
    'Authorization': 'Basic ' + btoa(`${username}:${password}`),
    'Content-Type': 'application/json', // Puedes ajustar el tipo de contenido según tu caso
    // Otros encabezados que puedas necesitar replicar desde Postman
  });
  
  const descargarArchivo = () => {
    fetch(url, {
      method: 'GET',
      headers: headers,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error en la respuesta: ${response.status} ${response.statusText}`);
        }
  
        // Extraer el tipo de contenido de la respuesta
        const contentType = response.headers.get('content-type');
        
        // Crear un blob con los datos del archivo
        return response.blob().then(blob => ({ contentType, blob }));
      })
      .then(({ contentType, blob }) => {
        // Crear una URL de objeto para el blob
        const url = URL.createObjectURL(blob);
  
        // Crear un enlace <a> para iniciar la descarga
        const a = document.createElement('a');
        a.href = url;
        a.download = `archivo.${contentType.split('/')[1] || 'pdf'}`; // Establecer el nombre del archivo
  
        // Agregar el enlace al documento y hacer clic en él para iniciar la descarga
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
  
        // Liberar la URL del objeto después de la descarga
        URL.revokeObjectURL(url);
      })
      .catch(error => {
        console.error('Error en la solicitud:', error);
      });
  };
  

  return (
    <div>
      <button onClick={descargarArchivo}>Descargar</button>
    </div>
  );
};

export default Autenticar;
