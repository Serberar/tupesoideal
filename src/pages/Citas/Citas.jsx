import React, { useState } from 'react';
import useCitas from './useCitas';
import './Citas.css';

const ComponenteCitas = () => {
  const {
    restantes,
    citasAsignadas,
    citaSeleccionada,
    setCitaSeleccionada,
    ordenarCitasPorMes,
    asignarCita,
  } = useCitas();

  const [mostrarModalConfirmacion, setMostrarModalConfirmacion] = useState(false);

  const confirmarCita = async () => {
    await asignarCita();
    setMostrarModalConfirmacion(false);
    setCitaSeleccionada(null);
  };

  return (
    <div className="componente-citas">
      <h1>Gestión de citas</h1>

      <div className="numeroSesionesDiv">
        <p className="numeroSesiones">Te quedan {restantes} sesiones disponibles</p>
      </div>

      {citasAsignadas.length > 0 && (
        <div className="citas-asignadas">
          <h2 className="tituloCitasAsignadas">Tu siguiente cita</h2>
          {citasAsignadas.map((cita) => (
            <div key={`${cita.mes}-${cita.dia}`} className="citaAsignada">
              <p className="textoCitaAsignada">
                Día {cita.dia} de {cita.mes}, de {cita.cita.desde} a {cita.cita.hasta}
              </p>
              <p className="textoExplicativo">
                El día de la sesión, podrás acceder al enlace de la reunión en el apartado <strong>Consulta</strong>.
              </p>
            </div>
          ))}
        </div>
      )}

      {restantes === 0 ? (
        <p className="mensaje-no-sesiones">
          No tienes sesiones disponibles. Por favor, compra un bono para obtener más citas.
        </p>
      ) : citasAsignadas.length === 0 && (
        <div className="citas-disponibles">
          <h2>Citas disponibles</h2>
          {Object.entries(ordenarCitasPorMes()).map(([mes, citas]) => (
            <div key={mes} className="citas-mes">
              <h3>{mes}</h3>
              <div className="calendario">
                {citas.map((cita, i) => (
                  <button
                    key={`${mes}-${cita.dia}-${cita.desde}-${cita.hasta}-${i}`}
                    className="cita-disponible"
                    onClick={() => {
                      setCitaSeleccionada(cita);
                      setMostrarModalConfirmacion(true);
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
      )}

      {mostrarModalConfirmacion && citaSeleccionada && (
        <div className="modal">
          <div className="modal-content">
            <h3>Confirmar cita</h3>
            <p>¿Estás seguro de que quieres asignar la cita para el día {citaSeleccionada.dia}?</p>
            <button className="btn-confirmar" onClick={confirmarCita}>
              Confirmar
            </button>
            <button className="btn-cancelar" onClick={() => setMostrarModalConfirmacion(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComponenteCitas;
