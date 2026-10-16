import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Capsulas from "../components/Capsulas.jsx";

function Modulos() {
  const navigate = useNavigate();

  const trabajador = JSON.parse(
    localStorage.getItem("trabajador")
  );

  useEffect(() => {
    if (!trabajador) {
      navigate("/ingreso");
    }
  }, [trabajador, navigate]);

  if (!trabajador) {
    return null;
  }

  return (
    <div className="modulos-page">

      <h1>Módulos</h1>

      <div className="bienvenida-trabajador">

        <h2>
          👋 Bienvenido, {trabajador.nombre}
        </h2>

        <p>
          <strong>Cargo:</strong> {trabajador.cargo}
        </p>

        <p>
          <strong>Recinto:</strong> {trabajador.recinto}
        </p>

      </div>

      <Capsulas />

    </div>
  );
}

export default Modulos;
