import { useState, useEffect, useContext, useCallback } from 'react';
import axios from 'axios';
import { myContext } from '../../components/Context';

const useCitas = () => {
  const { state } = useContext(myContext);
  const [disponibles, setDisponibles] = useState([]);
  const [restantes, setRestantes] = useState(0);
  const [citasAsignadas, setCitasAsignadas] = useState([]);
  const [citaSeleccionada, setCitaSeleccionada] = useState(null);

  const userId = state?.userData?.usuario?.id;

  const sesionesRestantes = useCallback(async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_PLUGIN_SESIONES}/obtener-sesiones?user_id=${userId}`, {
        auth: {
          username: process.env.REACT_APP_USER,
          password: process.env.REACT_APP_PASSWORD,
        },
      });
      const sesiones = parseInt(data.sesiones_restantes, 10);
      setRestantes(isNaN(sesiones) ? 0 : sesiones);
    } catch (error) {
      console.error('Error al obtener sesiones restantes:', error);
      setRestantes(0);
    }
  }, [userId]);

  const getCitasAsignadas = useCallback(async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_PLUGIN_CITAS}/asignadas/${userId}`, {
        auth: {
          username: process.env.REACT_APP_USER,
          password: process.env.REACT_APP_PASSWORD,
        },
      });
      setCitasAsignadas(data);
    } catch (error) {
      setCitasAsignadas([]);
    }
  }, [userId]);

  const citasDisponibles = useCallback(async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_PLUGIN_CITAS}/disponibles`, {
        auth: {
          username: process.env.REACT_APP_USER,
          password: process.env.REACT_APP_PASSWORD,
        },
      });
      setDisponibles(data);
    } catch (error) {
      console.error('Error al obtener citas disponibles:', error);
    }
  }, []);

  const reducirSesion = useCallback(async () => {
    try {
      await axios.post(`${process.env.REACT_APP_PLUGIN_SESIONES}/reducir-sesion`, {
        user_id: userId,
      }, {
        auth: {
          username: process.env.REACT_APP_USER,
          password: process.env.REACT_APP_PASSWORD,
        },
      });
      return true;
    } catch (error) {
      console.error('Error al reducir la sesión:', error);
      return false;
    }
  }, [userId]);

  const asignarCita = useCallback(async () => {
    try {
      if (!citaSeleccionada) return;
      const cita = {
        mes: citaSeleccionada.mes,
        dia: citaSeleccionada.dia,
        desde: citaSeleccionada.desde,
        hasta: citaSeleccionada.hasta,
        usuario_id: userId,
      };
      await axios.post(`${process.env.REACT_APP_PLUGIN_CITAS}/asignar/`, cita);
      await reducirSesion();
      await sesionesRestantes();
      await getCitasAsignadas();
    } catch (error) {
      console.error('Error al asignar la cita:', error);
    }
  }, [citaSeleccionada, userId, reducirSesion, sesionesRestantes, getCitasAsignadas]);

  const ordenarCitasPorMes = useCallback(() => {
    return disponibles.reduce((acc, cita) => {
      const mes = cita.mes;
      if (!acc[mes]) acc[mes] = [];
      acc[mes].push(cita);
      return acc;
    }, {});
  }, [disponibles]);

  useEffect(() => {
    if (userId) {
      sesionesRestantes();
      getCitasAsignadas();
    }
  }, [userId, sesionesRestantes, getCitasAsignadas]);

  useEffect(() => {
    if (restantes > 0 && citasAsignadas.length === 0) {
      citasDisponibles();
    }
  }, [restantes, citasAsignadas, citasDisponibles]);

  return {
    disponibles,
    restantes,
    citasAsignadas,
    citaSeleccionada,
    setCitaSeleccionada,
    ordenarCitasPorMes,
    asignarCita,
  };
};

export default useCitas;
