import React, { useState } from 'react';
import axios from 'axios';

const ComponenteCitas = () => {
  const [disponibles, setDisponibles] = useState([]);

  // Descargar la lista de productos
  const productosCitasDisponibles = () => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_PLUGIN_CITAS}/disponibles`,
      auth: {
        username: process.env.REACT_APP_USER,
        password: process.env.REACT_APP_PASSWORD,
      },
    })
      .then(response => {
        setDisponibles(response.data); // Actualizar el estado con las citas disponibles
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
  };

  // Llamar a la función para obtener las citas disponibles cuando el componente se monta
  React.useEffect(() => {
    productosCitasDisponibles();
  }, []);


  // ver sesiones restantes  get http://localhost/wordpress/wp-json/control_sesiones/v1/obtener-sesiones?user_id=<<id>>

  //restar sesión post http://localhost/wordpress/wp-json/control_sesiones/v1/reducir-sesion
  // {
  //   "user_id": 2
  // }

// por probar asignar cita 

// post http://localhost/wordpress/wp-json/citas/v1/asignar/
// {
//   "mes": "Enero",
//   "dia": 20,
//   "desde": "10:30",
//   "hasta": "11:00",
//   "usuario_id": 2
// }


//actualizar github plugin password y sesiones


  return (
    <div>
      <h1>Citas Disponibles</h1>
      <ul>
        {disponibles.map((cita, index) => (
          <li key={index}>
            {cita.mes} {cita.dia}: {cita.desde} - {cita.hasta}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponenteCitas;
