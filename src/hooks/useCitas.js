import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { myContext } from '../components/Context';

const useCitas = () => {
  const { state } = useContext(myContext);
  const [disponibles, setDisponibles] = useState([]);
  const [restantes, setRestantes] = useState(0);
  const [citasAsignadas, setCitasAsignadas] = useState([]);
  const [selectedCita, setSelectedCita] = useState(null);

  const userId = state?.userData?.usuario?.id;

  const sesionesRestantes = async () => {
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
    }
  };

  const getCitasAsignadas = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_PLUGIN_CITAS}/asignadas/${userId}`, {
        auth: {
          username: process.env.REACT_APP_USER,
          password: process.env.REACT_APP_PASSWORD,
        },
      });
      setCitasAsignadas(data);
    } catch (error) {
      console.error('Error al obtener citas asignadas:', error);
    }
  };

  const citasDisponibles = async () => {
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
  };

  const reducirSesion = async () => {
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
  };

  const asignarCita = async () => {
    try {
      const cita = {
        mes: selectedCita.mes,
        dia: selectedCita.dia,
        desde: selectedCita.desde,
        hasta: selectedCita.hasta,
        usuario_id: userId,
      };
      await axios.post(`${process.env.REACT_APP_PLUGIN_CITAS}/asignar/`, cita);
      await reducirSesion();
      await sesionesRestantes();
      await getCitasAsignadas();
    } catch (error) {
      console.error('Error al asignar la cita:', error);
    }
  };

  const ordenarCitasPorMes = () => {
    return disponibles.reduce((acc, cita) => {
      const mes = cita.mes;
      if (!acc[mes]) acc[mes] = [];
      acc[mes].push(cita);
      return acc;
    }, {});
  };

  useEffect(() => {
    if (userId) {
      sesionesRestantes();
      getCitasAsignadas();
    }
  }, [userId]);

  useEffect(() => {
    if (restantes > 0 && citasAsignadas.length === 0) {
      citasDisponibles();
    }
  }, [restantes, citasAsignadas]);

  return {
    disponibles,
    restantes,
    citasAsignadas,
    selectedCita,
    setSelectedCita,
    ordenarCitasPorMes,
    asignarCita,
  };
};

export default useCitas;