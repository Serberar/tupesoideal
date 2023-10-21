import React from 'react'
import '../css/Portada.css'

const Portada = () => {
  return (
    <div className="service-description">
      <h1 className="service-title">Blanca Montero Nutricionista</h1>
      <h2 className="session-title">Servicio Nutricional Personalizado Online</h2>

      <p className="intro-text">
        Bienvenido a una experiencia nutricional personalizada de excelencia. Nuestra
        "Sesión de Servicio Nutricional Personalizado Online" te brinda acceso a un viaje de
        bienestar único y guiado por profesionales, diseñado para satisfacer tus necesidades
        de salud y estilo de vida individual.
      </p>

      <div className="description-section">
        <h3>Descripción:</h3>
        <p>
          En la actualidad, mantener una alimentación equilibrada y adecuada es esencial para
          el bienestar integral. Nuestro servicio nutricional personalizado en línea te ofrece
          la oportunidad de obtener una guía experta y respaldo en tus objetivos nutricionales
          desde la comodidad de tu hogar.
        </p>
      </div>

      <div className="include-section">
        <h3>¿Qué Incluye?</h3>
        <ul>
          <li>Evaluación Detallada: Comenzamos por comprender tu historial de salud, preferencias alimentarias y objetivos individuales. Esta evaluación integral sienta las bases para adaptar nuestras recomendaciones a tus necesidades específicas.</li>
          <li>Plan Nutricional a Medida: Con base en tu evaluación, nuestro equipo de expertos crea un plan nutricional a medida que se ajusta a tus metas y preferencias. Este plan es flexible y se adapta a tu estilo de vida, garantizando que sea realista y sostenible a largo plazo.</li>
          <li>Asesoramiento Personalizado: Durante nuestra sesión en línea, recibirás asesoramiento y orientación directa de nuestros profesionales de la nutrición. Abordaremos tus preguntas y preocupaciones, y te proporcionaremos estrategias prácticas para incorporar hábitos alimenticios saludables en tu rutina diaria.</li>
          <li>Seguimiento y Ajustes: El camino hacia una salud óptima es un proceso continuo. Te brindamos seguimiento constante para evaluar tus progresos y realizar ajustes necesarios en tu plan nutricional. Nuestro objetivo es asegurarnos de que estés en el camino correcto hacia tus metas.</li>
        </ul>
      </div>

      <div className="benefits-section">
        <h3>Beneficios:</h3>
        <ul>
          <li>Aprendizaje Profundo: Obtendrás un mayor conocimiento sobre la relación entre la nutrición y la salud, lo que te capacitará para tomar decisiones informadas y positivas en tu vida cotidiana.</li>
          <li>Adaptable: Nuestro enfoque se adapta a tus necesidades y horarios, brindándote la flexibilidad de participar desde cualquier ubicación.</li>
          <li>Resultados Duraderos: Al recibir orientación personalizada, estarás mejor equipado para lograr y mantener tus objetivos nutricionales a largo plazo.</li>
        </ul>
      </div>

      <p className="closing-text">
        Embárcate en un viaje de transformación hacia una vida más saludable y vibrante. Nuestra
        "Sesión de Servicio Nutricional Personalizado Online" te guiará a través de un proceso educativo y empoderador
        que te llevará a tomar el control de tu salud y bienestar.
      </p>
    </div>
  );
};

export default Portada