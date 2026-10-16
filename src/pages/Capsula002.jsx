import CapsulaPlantilla from "../components/CapsulaPlantilla.jsx";
import videoCAP002 from "../assets/videos/CAP002.mp4";

function Capsula002() {
  return (
    <CapsulaPlantilla
      codigo="CAP002"
      titulo="Barreras de Contexto"
      duracion="4 minutos"
      objetivo="Comprender qué son las barreras de contexto, reconocer cómo pueden dificultar la participación de las personas e identificar acciones para eliminarlas o reducirlas."
      contenidos={[
        "Qué son las barreras de contexto",
        "Barreras físicas",
        "Barreras comunicacionales",
        "Barreras tecnológicas",
        "Barreras sociales",
        "Barreras organizacionales",
      ]}
      video={videoCAP002}

      ejemplos={[
        {
          titulo: "Ejemplo 1: Una barrera física",
          descripcion:
            "Una persona que utiliza silla de ruedas debe asistir a una reunión, pero la sala se encuentra en un lugar al que solo se puede acceder mediante escaleras.",
          idea:
            "¿Dónde está la barrera? En el entorno, porque el espacio no permite que todas las personas puedan participar en igualdad de condiciones.",
        },
        {
          titulo: "Ejemplo 2: Una barrera comunicacional",
          descripcion:
            "Una empresa entrega información importante únicamente mediante documentos que no pueden ser utilizados adecuadamente por una persona que necesita un formato accesible.",
          idea:
            "¿Dónde está la barrera? En la forma en que se entrega la información, no en la capacidad de la persona.",
        },
      ]}

      reflexiones={[
        "¿Qué barreras de contexto podemos identificar actualmente en nuestro lugar de trabajo?",
        "¿Alguna de estas barreras podría estar limitando la participación de una persona?",
        "¿Qué podríamos cambiar para eliminar o reducir estas barreras?",
      ]}

      paraRecordar="La inclusión no consiste solamente en incorporar personas al trabajo. También implica revisar y transformar el entorno para eliminar las barreras que dificultan su participación."
    />
  );
}

export default Capsula002;