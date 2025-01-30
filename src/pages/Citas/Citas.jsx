import React, { useContext, useState, useEffect } from 'react';
import { myContext } from '../../components/Context';
import axios from 'axios';
import './Citas.css';

const ComponenteCitas = () => {
  const [disponibles, setDisponibles] = useState([]);
  const [restantes, setRestantes] = useState(0);
  const [citasAsignadas, setCitasAsignadas] = useState([]); // Para almacenar las citas asignadas
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedCita, setSelectedCita] = useState(null);
  const { state } = useContext(myContext);

  console.log(restantes);

  useEffect(() => {
    if (state.userData && state.userData.usuario && state.userData.usuario.id) {
      sesionesRestantes();
      getCitasAsignadas(state.userData.usuario.id); // Llamamos a la función para obtener las citas asignadas
    }
  }, [state]);

  useEffect(() => {
    if (restantes > 0 && citasAsignadas.length === 0) {
      citasDisponibles(); // Llamamos solo si quedan sesiones y no hay citas asignadas
    }
  }, [restantes, citasAsignadas]);

  const citasDisponibles = () => {
    axios({
      method: 'get',
      url: `${process.env.REACT_APP_PLUGIN_CITAS}/disponibles`,
      auth: {
        username: process.env.REACT_APP_USER,
        password: process.env.REACT_APP_PASSWORD,
      },
    })
      .then(response => {
        setDisponibles(response.data);
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
  };

  const sesionesRestantes = () => {
    axios({
      method: 'get',
      url: `http://localhost/wordpress/wp-json/control_sesiones/v1/obtener-sesiones?user_id=${state.userData.usuario.id}`,
      auth: {
        username: process.env.REACT_APP_USER,
        password: process.env.REACT_APP_PASSWORD,
      },
    })
      .then(response => {
        const sesiones = parseInt(response.data.sesiones_restantes, 10);
        if (!isNaN(sesiones)) {
          setRestantes(sesiones);
        } else {
          console.error('Valor de sesiones no válido');
          setRestantes(0);
        }
      })
      .catch(error => {
        console.error('Error al realizar la solicitud:', error);
      });
  };

  // Función para obtener las citas asignadas
  const getCitasAsignadas = (userId) => {
    axios({
      method: 'get',
      url: `http://localhost/wordpress/wp-json/citas/v1/asignadas/${userId}`,
      auth: {
        username: process.env.REACT_APP_USER,
        password: process.env.REACT_APP_PASSWORD,
      },
    })
      .then(response => {
        setCitasAsignadas(response.data); // Guardamos las citas asignadas en el estado
      })
      .catch(error => {
        console.error('Error al obtener las citas asignadas:', error);
      });
  };

  const reducirSesion = () => {
    axios({
      method: 'post',
      url: 'http://localhost/wordpress/wp-json/control_sesiones/v1/reducir-sesion',
      auth: {
        username: process.env.REACT_APP_USER,
        password: process.env.REACT_APP_PASSWORD,
      },
      data: {
        user_id: state.userData.usuario.id,
      },
    })
      .then(response => {
        console.log('Sesión reducida correctamente');
        window.location.reload(); 
      })
      .catch(error => {
        console.error('Error al reducir la sesión:', error);
      });
  };

  const asignarCita = () => {
    const cita = {
      mes: selectedCita.mes,
      dia: selectedCita.dia,
      desde: selectedCita.desde,
      hasta: selectedCita.hasta,
      usuario_id: state.userData.usuario.id,
    };
    console.log('Cita seleccionada:', cita);
    axios({
      method: 'post',
      url: 'http://localhost/wordpress/wp-json/citas/v1/asignar/',
      data: cita,
    })
      .then(response => {
        console.log('Cita asignada correctamente:', response.data);
        reducirSesion();
        setShowConfirmModal(false); // Cerrar modal después de confirmar
      })
      .catch(error => {
        console.error('Error al asignar la cita:', error);
      });
  };

  const OrdenarCitasMeses = () => {
    const groupedByMonth = disponibles.reduce((acc, cita) => {
      const mes = cita.mes;
      if (!acc[mes]) {
        acc[mes] = [];
      }
      acc[mes].push(cita);
      return acc;
    }, {});

    return groupedByMonth;
  };

  return (
    <div className="componente-citas">
      <h1>Gestión de citas</h1>
      <div className='numeroSesionesDiv'>
        <p className='numeroSesiones'>Te quedan {restantes} sesiones disponibles</p>
      </div>

     {/* Mostrar citas asignadas solo si no se están mostrando las citas disponibles */}
{citasAsignadas.length > 0 && citasDisponibles.length === 0 && (
  <div className="citas-asignadas">
    <h2 className="tituloCitasAsignadas">Tu siguiente cita</h2>
    
    {citasAsignadas.map(cita => (
      <div key={`${cita.mes}-${cita.dia}`} className="citaAsignada">
        <p className="textoCitaAsignada">{`Día ${cita.dia} de ${cita.mes}, de ${cita.cita.desde} a ${cita.cita.hasta}`}</p>
        {/* Agregar texto explicativo aquí */}
        <p className="textoExplicativo">
        El día de la sesión, podrás acceder al enlace de la reunión en el apartado <strong>Consulta</strong>.
        </p>
      </div>
    ))}
  </div>
)}


      
      {/* Mostrar mensaje si no hay sesiones restantes */}
      {restantes === 0 ? (
        <p className="mensaje-no-sesiones">No tienes sesiones disponibles. Por favor, compra un bono para obtener más citas.</p>
      ) : (
        // Solo mostrar las citas disponibles si no tiene citas asignadas
        citasAsignadas.length === 0 && (
          <div className="citas-disponibles">
            <h2>Citas disponibles</h2>
            {Object.keys(OrdenarCitasMeses()).map(mes => (
              <div key={mes} className="citas-mes">
                <h3>{mes}</h3>
                <div className="calendario">
                  {OrdenarCitasMeses()[mes].map((cita, index) => (
                    <button
                      key={`${mes}-${cita.dia}-${cita.desde}-${cita.hasta}-${index}`} // Añadimos el índice para hacerlo único
                      onClick={() => {
                        setSelectedCita(cita);
                        setShowConfirmModal(true);
                      }}
                      className="cita-disponible"
                    >
                      Día {cita.dia} <br />
                      desde {cita.desde} <br />
                      hasta {cita.hasta}
                    </button>
                  ))}

                </div>
              </div>
            ))}
          </div>
        )
      )}

      {/* Modal de confirmación */}
      {showConfirmModal && selectedCita && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirmar cita</h3>
            <p>¿Estás seguro de que quieres asignar la cita para el día {selectedCita.dia}?</p>
            <button className="btn-confirmar" onClick={asignarCita}>Confirmar</button>
            <button className="btn-cancelar" onClick={() => setShowConfirmModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponenteCitas;
