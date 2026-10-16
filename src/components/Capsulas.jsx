import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Capsulas() {
  const navigate = useNavigate();

  const trabajador = JSON.parse(
    localStorage.getItem("trabajador")
  );

  const rut = trabajador?.rut;

  const capsulas = [
    {
      id: "CAP001",
      titulo: "Ley de Inclusión Laboral",
      duracion: "3 minutos",
      ruta: "/capsula001",
    },
    {
      id: "CAP002",
      titulo: "Barreras de Contexto",
      duracion: "4 minutos",
      ruta: "/capsula002",
    },
    {
      id: "CAP003",
      titulo: "Comunicación Inclusiva",
      duracion: "5 minutos",
      ruta: "/capsula003",
    },
  ];

  const [actualizacion, setActualizacion] = useState(0);

  useEffect(() => {
    const actualizar = () => {
      setActualizacion((valor) => valor + 1);
    };

    window.addEventListener(
      "capacitacionActualizada",
      actualizar
    );

    return () => {
      window.removeEventListener(
        "capacitacionActualizada",
        actualizar
      );
    };
  }, []);

  const completadas = capsulas.filter((cap) => {
    if (!rut) return false;

    return (
      localStorage.getItem(
        `${rut}_${cap.id}_completada`
      ) === "true"
    );
  }).length;

  const progreso = Math.round(
    (completadas / capsulas.length) * 100
  );

  return (
    <div className="capsulas-container">

      <h2>🎥 Cápsulas de Formación</h2>

      <div className="progreso-container">
        <p>
          <strong>
            Progreso: {completadas} de {capsulas.length} cápsulas
          </strong>
        </p>

        <div className="barra-progreso">
          <div
            className="barra-progreso-fill"
            style={{ width: `${progreso}%` }}
          ></div>
        </div>

        <p>{progreso}% completado</p>
      </div>

      <div className="capsula-grid">

        {capsulas.map((cap) => {

          const completada =
            rut &&
            localStorage.getItem(
              `${rut}_${cap.id}_completada`
            ) === "true";

          return (
            <div
              key={cap.id}
              className="capsula-card"
            >

              <h3>{cap.id}</h3>

              <p>{cap.titulo}</p>

              <small>
                ⏱ Duración: {cap.duracion}
              </small>

              <br />
              <br />

              {completada && (
                <p>✅ Completada</p>
              )}

              <button
                onClick={() => navigate(cap.ruta)}
              >
                {completada ? "Revisar" : "Comenzar"}
              </button>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default Capsulas;