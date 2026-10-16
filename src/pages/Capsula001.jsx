import CapsulaPlantilla from "../components/CapsulaPlantilla.jsx";
import videoCAP001 from "../assets/videos/CAP001.mp4";

function Capsula001() {
  return (
    <CapsulaPlantilla
      codigo="CAP001"
      titulo="Ley de Inclusión Laboral"
      duracion="3 minutos"
      objetivo="Comprender los principales conceptos de la inclusión laboral y reconocer cómo las organizaciones pueden generar condiciones que permitan la participación y el desarrollo de todas las personas."
      contenidos={[
        "Qué es la inclusión laboral",
        "Principales conceptos de la Ley de Inclusión Laboral",
        "Barreras de contexto y su impacto en las personas",
        "Responsabilidad de las organizaciones en la inclusión",
      ]}
      video={videoCAP001}

      ejemplos={[
        {
          titulo: "Ejemplo 1: Una persona con discapacidad",
          descripcion:
            "Una empresa incorpora a una persona con discapacidad visual. Para facilitar su trabajo, adapta algunas herramientas y sistemas para que pueda utilizarlos de manera autónoma.",
          idea:
            "Esto es inclusión: no se espera que la persona se adapte sola al entorno; la organización también adapta el entorno cuando es necesario.",
        },
        {
          titulo: "Ejemplo 2: Diferentes formas de trabajar",
          descripcion:
            "Un integrante del equipo necesita una determinada adaptación para poder realizar sus funciones adecuadamente. La organización evalúa la situación y busca una solución que le permita trabajar en igualdad de condiciones.",
          idea:
            "Esto es inclusión: reconocer que no todas las personas necesitan exactamente lo mismo para tener las mismas oportunidades.",
        },
      ]}

      reflexiones={[
        "¿En tu lugar de trabajo todas las personas tienen las mismas oportunidades para participar y desarrollarse?",
        "¿Qué barreras podrían existir en nuestro entorno laboral que dificulten la participación de algunas personas?",
        "¿Qué pequeña acción podríamos realizar para hacer nuestro espacio de trabajo más inclusivo?",
      ]}

      paraRecordar="Incluir no significa tratar a todas las personas exactamente de la misma manera. Significa generar las condiciones para que todas puedan participar, aportar y desarrollarse."
    />
  );
}

export default Capsula001;