import { useState } from "react";

const evaluaciones = {
  CAP001: {
    preguntas: [
      {
        pregunta: "¿Cuál es uno de los principales objetivos de la inclusión laboral?",
        opciones: [
          {
            texto: "Generar condiciones que permitan la participación y desarrollo de todas las personas",
            correcta: true,
          },
          {
            texto: "Evitar cambios en la organización",
            correcta: false,
          },
          {
            texto: "Excluir personas para facilitar los procesos",
            correcta: false,
          },
        ],
      },
      {
        pregunta: "¿Qué significa considerar las barreras de contexto?",
        opciones: [
          {
            texto: "Reconocer y modificar condiciones del entorno que pueden dificultar la participación",
            correcta: true,
          },
          {
            texto: "Esperar que cada persona resuelva sola las dificultades",
            correcta: false,
          },
          {
            texto: "Evitar realizar adaptaciones en el lugar de trabajo",
            correcta: false,
          },
        ],
      },
    ],
  },

  CAP002: {
    preguntas: [
      {
        pregunta: "¿Dónde puede encontrarse una barrera de contexto?",
        opciones: [
          {
            texto: "En el entorno, la comunicación, la tecnología o la organización",
            correcta: true,
          },
          {
            texto: "Solamente en las características de la persona",
            correcta: false,
          },
          {
            texto: "Únicamente fuera del lugar de trabajo",
            correcta: false,
          },
        ],
      },
      {
        pregunta: "Una sala de reuniones solo tiene acceso mediante escaleras y una persona utiliza silla de ruedas. ¿Dónde está principalmente la barrera?",
        opciones: [
          {
            texto: "En el entorno físico",
            correcta: true,
          },
          {
            texto: "En la capacidad de la persona",
            correcta: false,
          },
          {
            texto: "En la motivación de la persona",
            correcta: false,
          },
        ],
      },
    ],
  },

  CAP003: {
    preguntas: [
      {
        pregunta:
          "¿Qué caracteriza a una comunicación inclusiva?",
        opciones: [
          {
            texto:
              "Comunicarnos con respeto y claridad, considerando las diferentes necesidades de las personas",
            correcta: true,
          },
          {
            texto:
              "Utilizar siempre exactamente la misma forma de comunicación con todas las personas",
            correcta: false,
          },
          {
            texto:
              "Evitar que las personas expresen opiniones diferentes",
            correcta: false,
          },
        ],
      },

      {
        pregunta:
          "Durante una reunión de trabajo, ¿qué acción favorece una comunicación inclusiva?",
        opciones: [
          {
            texto:
              "Explicar los temas con claridad y permitir que todas las personas puedan participar",
            correcta: true,
          },
          {
            texto:
              "Entregar la información solamente a algunas personas",
            correcta: false,
          },
          {
            texto:
              "Evitar preguntas para terminar la reunión más rápido",
            correcta: false,
          },
        ],
      },

      {
        pregunta:
          "Si no sabemos qué apoyo necesita una persona para recibir información, ¿qué deberíamos hacer?",
        opciones: [
          {
            texto:
              "Preguntar y conocer sus necesidades en lugar de asumir",
            correcta: true,
          },
          {
            texto:
              "Decidir por la persona qué necesita",
            correcta: false,
          },
          {
            texto:
              "No entregar la información hasta que otra persona decida",
            correcta: false,
          },
        ],
      },
    ],
  },
};

function Evaluacion({ codigo, onAprobada }) {
  const evaluacion = evaluaciones[codigo];

  const [respuestas, setRespuestas] = useState({});
  const [resultado, setResultado] = useState("");

  if (!evaluacion) {
    return (
      <div className="evaluacion">
        <h3>📝 Evaluación</h3>
        <p>No hay una evaluación disponible para esta cápsula.</p>
      </div>
    );
  }

  const responder = (indicePregunta, indiceOpcion) => {
    setRespuestas({
      ...respuestas,
      [indicePregunta]: indiceOpcion,
    });

    setResultado("");
  };

  const verificar = () => {
    const todasRespondidas = evaluacion.preguntas.every(
      (_, indice) => respuestas[indice] !== undefined
    );

    if (!todasRespondidas) {
      setResultado("⚠️ Debes responder todas las preguntas.");
      return;
    }

    const todasCorrectas = evaluacion.preguntas.every(
      (pregunta, indicePregunta) => {
        const indiceRespuesta = respuestas[indicePregunta];

        return pregunta.opciones[indiceRespuesta].correcta;
      }
    );

    if (todasCorrectas) {
      setResultado(
        "✅ ¡Excelente! Todas las respuestas son correctas. Evaluación aprobada."
      );

      if (onAprobada) {
        onAprobada();
      }
    } else {
      setResultado(
        "❌ Hay una o más respuestas incorrectas. Revisa nuevamente el contenido e inténtalo otra vez."
      );
    }
  };

  return (
    <div className="evaluacion">

      <h3>📝 Evaluación</h3>

      {evaluacion.preguntas.map((pregunta, indicePregunta) => (
        <div
          key={indicePregunta}
          className="pregunta-evaluacion"
        >

          <p>
            <strong>
              {indicePregunta + 1}. {pregunta.pregunta}
            </strong>
          </p>

          <select
            value={respuestas[indicePregunta] ?? ""}
            onChange={(e) =>
              responder(
                indicePregunta,
                Number(e.target.value)
              )
            }
          >
            <option value="">
              Selecciona una respuesta
            </option>

            {pregunta.opciones.map(
              (opcion, indiceOpcion) => (
                <option
                  key={indiceOpcion}
                  value={indiceOpcion}
                >
                  {opcion.texto}
                </option>
              )
            )}
          </select>

          <br />
          <br />

        </div>
      ))}

      <button onClick={verificar}>
        Revisar evaluación
      </button>

      {resultado && (
        <p>{resultado}</p>
      )}

    </div>
  );
}

export default Evaluacion;