import { useNavigate } from "react-router-dom";
import logoSacinco from "../assets/SACINCO.JPG";
import sasinquito from "../assets/SASINQUITO.png";

function Hero() {
  const navigate = useNavigate();

const obras = [
  `${import.meta.env.BASE_URL}obras/obra1.jpg`,
  `${import.meta.env.BASE_URL}obras/obra2.jpg`,
  `${import.meta.env.BASE_URL}obras/obra3.jpg`,
  `${import.meta.env.BASE_URL}obras/obra4.jpg`,
  `${import.meta.env.BASE_URL}obras/obra5.jpg`,
  `${import.meta.env.BASE_URL}obras/obra6.jpg`,
  `${import.meta.env.BASE_URL}obras/obra7.jpg`,
];

  return (
    <header className="hero">

      {/* LOGO */}
      <div className="hero-logo-container">
        <img
          src={logoSacinco}
          alt="Logo SACINCO"
          className="logo"
        />
      </div>

      {/* CINTA DE OBRAS */}
      <div className="obras-loop">

        <div className="obras-track">

          {[...obras, ...obras].map((obra, index) => (
            <img
              key={index}
              src={obra}
              alt={`Obra SACINCO ${index + 1}`}
              className="obra-imagen"
            />
          ))}

        </div>

      </div>

      {/* SASINQUITO */}
      <img
        src={sasinquito}
        alt="Sasinquito"
        className="mascota"
      />

      {/* TITULO */}
      <h1>
        CENTRO DE RECURSOS PARA EL
        <br />
        TRABAJADOR SACINCO
      </h1>

      <h2>
        Información, capacitación y recursos para las personas
      </h2>

      <p>
        Un espacio para acceder a capacitación, información,
        beneficios y recursos para los trabajadores.
      </p>

      <button onClick={() => navigate("/ingreso")}>
        Ingresar al Centro de Recursos
      </button>

    </header>
  );
}

export default Hero;