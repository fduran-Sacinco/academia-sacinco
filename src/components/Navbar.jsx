import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="navbar">

      <div className="brand">
        CENTRO DE RECURSOS PARA EL TRABAJADOR SACINCO
      </div>

      <div className="menu">

        <Link to="/">Inicio</Link>

        <div className="dropdown">

          <button
            className="dropdown-btn"
            onClick={() => setMenuAbierto(!menuAbierto)}
          >
            Capacitación {menuAbierto ? "▲" : "▼"}
          </button>

          {menuAbierto && (
            <div className="dropdown-content">

              <Link to="/modulos">🎥 Cápsulas</Link>

              <a href="#">📝 Evaluaciones</a>

              <a href="#">🏆 Certificados</a>

            </div>
          )}

        </div>

        <Link to="/evidencias">Evidencias</Link>

        <Link to="/informacion-util">Información útil</Link>

        <Link to="/beneficios">Beneficios</Link>

        <Link to="/seguridad">Seguridad</Link>

        <Link to="/nosotros">Nosotros</Link>

      </div>

    </nav>
  );
}

export default Navbar;