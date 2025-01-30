import React, { useContext, useState, useEffect } from 'react';
import { myContext } from '../../components/Context';
import axios from 'axios';

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
        sesionesRestantes();
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
    <div>
      <h1>Gestión de citas</h1>
      <div className='numeroSesionesDiv'>
        <p className='numeroSesiones'>Te quedan {restantes} sesiones disponibles</p>
      </div>

      {/* Mostrar mensaje si no hay sesiones restantes */}
      {restantes === 0 ? (
        <p>No tienes sesiones disponibles. Por favor, compra un bono para obtener más citas.</p>
      ) : (
        // Solo mostrar las citas disponibles si no tiene citas asignadas
        citasAsignadas.length === 0 && (
          <div>
            <h2>Citas disponibles</h2>
            {Object.keys(OrdenarCitasMeses()).map(mes => (
              <div key={mes}>
                <h3>{mes}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
                  {OrdenarCitasMeses()[mes].map((cita, index) => (
                    <button
                      key={`${mes}-${cita.dia}-${cita.desde}-${cita.hasta}-${index}`} // Añadimos el índice para hacerlo único
                      onClick={() => {
                        setSelectedCita(cita);
                        setShowConfirmModal(true); // Mostrar el modal de confirmación
                      }}
                      style={{
                        padding: '10px',
                        backgroundColor: '#f0f0f0',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        textAlign: 'center',
                        cursor: 'pointer',
                      }}
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

      {/* Mostrar citas asignadas */}
      <h2>Citas asignadas</h2>
      {citasAsignadas.length > 0 ? (
        citasAsignadas.map(cita => (
          <div key={`${cita.mes}-${cita.dia}`}>
            <p>{`Día ${cita.dia} de ${cita.mes}, de ${cita.cita.desde} a ${cita.cita.hasta}, Usuarios: ${cita.cita.usuarios}`}</p>
          </div>
        ))
      ) : (
        <p>No tienes citas asignadas.</p>
      )}

      {/* Modal de confirmación */}
      {showConfirmModal && selectedCita && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirmar cita</h3>
            <p>¿Estás seguro de que quieres asignar la cita para el día {selectedCita.dia}?</p>
            <button onClick={asignarCita}>Confirmar</button>
            <button onClick={() => setShowConfirmModal(false)}>Cancelar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponenteCitas;
