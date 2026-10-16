import { useState } from "react";
import Evaluacion from "./Evaluacion.jsx";
import { supabase } from "../supabase.js";
function CapsulaPlantilla({
  codigo,
  titulo,
  duracion,
  objetivo,
  contenidos,
  video,
  ejemplos,
  reflexiones,
  paraRecordar,
  ideaClave,
}) {
  console.log("ESTOY EJECUTANDO CAPSULA PLANTILLA NUEVA");

  const trabajador = JSON.parse(
    localStorage.getItem("trabajador")
  );

  const rut = trabajador?.rut;

  const claveCompletada = rut
    ? `${rut}_${codigo}_completada`
    : null;

  const [completada, setCompletada] = useState(
    claveCompletada
      ? localStorage.getItem(claveCompletada) === "true"
      : false
  );

  const [evaluacionAprobada, setEvaluacionAprobada] = useState(false);

  
  const marcarCompletada = async () => {
    if (!rut) {
      alert("Primero debes identificar al trabajador.");
      return;
    }

    try {
      const { data, error } = await supabase.rpc(
        "registrar_capacitacion",
        {
          p_rut: rut,
          p_codigo: codigo,
        }
      );

      if (error) {
        console.error("Error al registrar capacitación:", error);
        alert(`No se pudo guardar: ${error.message}`);
        return;
      }

      if (data !== true) {
        alert("Supabase no confirmó el registro.");
        return;
      }

      localStorage.setItem(
        `${rut}_${codigo}_completada`,
        "true"
      );

      setCompletada(true);

      window.dispatchEvent(
        new Event("capacitacionActualizada")
      );

      alert(`${codigo} completada y guardada ✅`);
    } catch (error) {
      console.error("Error inesperado:", error);
      alert("Ocurrió un error al guardar la capacitación.");
    }
  };
return (
    <div className="capsula-detalle">

      <h1>🎥 {codigo}</h1>

      <h2>{titulo}</h2>

      <p>⏱ Duración: {duracion}</p>

      {video && (
        <div className="video-capsula">
          <video
            controls
            width="100%"
            preload="metadata"
          >
            <source src={video} type="video/mp4" />
            Tu navegador no puede reproducir este video.
          </video>
        </div>
      )}

      <h3>🎯 Objetivo</h3>

      <p>{objetivo}</p>

      <h3>📚 Contenidos</h3>

      <ul>
        {contenidos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      {ejemplos && (
        <div className="ejemplos-capsula">

          <h3>💡 Veamos algunos ejemplos</h3>

          {ejemplos.map((ejemplo, index) => (
            <div key={index}>

              <h4>{ejemplo.titulo}</h4>

              <p>{ejemplo.descripcion}</p>

              <p>
                <strong>{ejemplo.idea}</strong>
              </p>

            </div>
          ))}

        </div>
      )}

      {reflexiones && (
        <div className="reflexion-capsula">

          <h3>💭 Para reflexionar</h3>

          <ol>
            {reflexiones.map((pregunta, index) => (
              <li key={index}>{pregunta}</li>
            ))}
          </ol>

        </div>
      )}

      {paraRecordar && (
        <div className="recordar-capsula">

          <h3>🎯 Para recordar</h3>

          <p>
            <strong>{paraRecordar}</strong>
          </p>

        </div>
      )}

      {ideaClave && (
        <div className="idea-clave">

          <h3>💡 Idea clave</h3>

          <p>
            <strong>{ideaClave}</strong>
          </p>

        </div>
      )}

      <Evaluacion
        codigo={codigo}
        onAprobada={() => setEvaluacionAprobada(true)}
      />

      {evaluacionAprobada && (
        <button onClick={marcarCompletada}>
          ✓ Marcar como completada
        </button>
      )}

      {!evaluacionAprobada && (
        <p>
          🔒 Aprueba la evaluación para completar esta cápsula.
        </p>
      )}

      {completada && (
        <p>
          ✅ Esta cápsula fue completada
        </p>
      )}

    </div>
  );
}

export default CapsulaPlantilla;