import CapsulaPlantilla from "../components/CapsulaPlantilla.jsx";
import videoCAP003 from "../assets/videos/CAP003.mp4";

function Capsula003() {
  return (
    <CapsulaPlantilla
      codigo="CAP003"
      titulo="Comunicación inclusiva"
      duracion="5 minutos"

      objetivo="Comprender qué significa comunicarnos de manera inclusiva y reconocer formas de comunicación que favorezcan la participación, el respeto y la consideración de las diferentes necesidades de las personas."

      contenidos={[
        "Qué significa comunicarnos de manera inclusiva",
        "Usar un lenguaje respetuoso",
        "Hablar con claridad",
        "Escuchar y dar espacio para participar",
        "Considerar diferentes necesidades",
        "Evitar asumir las necesidades de otras personas",
      ]}

      video={videoCAP003}

      ejemplos={[
        {
          titulo: "Ejemplo 1: Una reunión de trabajo",
          descripcion:
            "Durante una reunión, quien dirige explica los temas con claridad, entrega la información con anticipación y permite que todas las personas tengan la oportunidad de participar.",
          idea:
            "Esto es comunicación inclusiva: facilitar que todas las personas puedan comprender, opinar y ser escuchadas.",
        },

        {
          titulo: "Ejemplo 2: La forma de entregar información",
          descripcion:
            "Una empresa necesita comunicar una instrucción importante. Además del mensaje escrito, utiliza un formato accesible cuando algún integrante del equipo lo requiere.",
          idea:
            "Esto es comunicación inclusiva: adaptar la forma de comunicar para que la información realmente llegue a todas las personas.",
        },
      ]}

      reflexiones={[
        "¿Nuestra forma de comunicarnos permite que todas las personas comprendan y participen?",
        "¿Qué palabras o formas de comunicación deberíamos evitar porque pueden generar exclusión?",
        "¿Qué pequeño cambio podemos hacer desde hoy para comunicarnos de manera más inclusiva?",
      ]}

      paraRecordar="Una comunicación inclusiva no significa decir las cosas de una manera especial. Significa comunicarnos con respeto, claridad y apertura, considerando que no todas las personas reciben o expresan información de la misma manera."
    />
  );
}

export default Capsula003;