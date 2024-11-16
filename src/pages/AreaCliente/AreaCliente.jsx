import React, { useContext, useEffect, useState } from 'react'
import { myContext } from '../../components/Context'
import axios from 'axios'

const AreaCliente = () => {
  const { state } = useContext(myContext)
  const { userData } = state
  const usuario = Array.isArray(userData) && userData.length > 0 ? userData[0] : null
  const [privados, setPrivados] = useState(null)

  const datosPrivados = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_WP_PRIVATE_LIST}${usuario.id}`, {
        auth: {
          username: process.env.REACT_APP_USER,
          password: process.env.REACT_APP_PASSWORD
        }
      })
      setPrivados(response.data)
    } catch (error) {
      console.error('Error al realizar la solicitud:', error)
    }
  }

  const descargarArchivo = (url) => {
    const username = process.env.REACT_APP_USER
    const password = process.env.REACT_APP_PASSWORD

    const headers = new Headers({
      Authorization: 'Basic ' + btoa(`${username}:${password}`),
      'Content-Type': 'application/json'
    })

    fetch(url, {
      method: 'GET',
      headers
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error en la respuesta: ${response.status} ${response.statusText}`)
        }

        const contentType = response.headers.get('content-type')
        return response.blob().then(blob => ({ contentType, blob }))
      })
      .then(({ contentType, blob }) => {
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `archivo.${contentType.split('/')[1] || 'pdf'}`
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
        URL.revokeObjectURL(url)
      })
      .catch(error => {
        console.error('Error en la solicitud:', error)
      })
  }

  useEffect(() => {
    datosPrivados()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usuario])

  const renderizarHTML = (htmlString) => {
    return { __html: htmlString }
  }

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
                <div dangerouslySetInnerHTML={renderizarHTML(archivo.contenido)} />
                <br /><br />
                <button onClick={() => descargarArchivo(archivo.enlace_descarga)}>
                  Descargar Archivo
                </button>
                <br /><br />
                {/* Fecha de Creación: {archivo.fecha_creacion} */}
              </li>
            ))}
          </ul>
        </div>
      )}

      {privados && privados.posts_sin_archivos && privados.posts_sin_archivos.length > 0 && (
        <div>
          <h2>Enlaces a videochat</h2>
          <ul>
            {privados.posts_sin_archivos.map((post) => (
              <li key={post.ID}>
                <strong>{post.titulo}</strong>
                <br />
                <div dangerouslySetInnerHTML={renderizarHTML(post.contenido)} />
                <br /><br />
                {/* Fecha de Creación: {post.fecha_creacion} */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default AreaCliente
