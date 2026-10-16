
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabase";

function Ingreso() {
  const navigate = useNavigate();

  const datosGuardados = JSON.parse(
    localStorage.getItem("trabajador") || "null"
  );

  const [nombre, setNombre] = useState(
    datosGuardados?.nombre || ""
  );
  const [rut, setRut] = useState(
    datosGuardados?.rut || ""
  );
  const [cargo, setCargo] = useState(
    datosGuardados?.cargo || ""
  );
  const [recinto, setRecinto] = useState(
    datosGuardados?.recinto || ""
  );
  const [guardando, setGuardando] = useState(false);

  const guardarTrabajador = async (e) => {
    e.preventDefault();

    if (
      !nombre.trim() ||
      !rut.trim() ||
      !cargo.trim() ||
      !recinto.trim()
    ) {
      alert("Por favor completa todos los campos.");
      return;
    }

    setGuardando(true);

    try {
      const { error } = await supabase.rpc(
        "registrar_trabajador",
        {
          p_rut: rut.trim(),
          p_nombre: nombre.trim(),
          p_cargo: cargo.trim(),
          p_recinto: recinto.trim(),
        }
      );

      if (error) {
        console.error("Error de Supabase:", error);
        alert(
          "No se pudieron guardar tus datos. Inténtalo nuevamente."
        );
        return;
      }

      const trabajador = {
        nombre: nombre.trim(),
        rut: rut.trim(),
        cargo: cargo.trim(),
        recinto: recinto.trim(),
      };

      localStorage.setItem(
        "trabajador",
        JSON.stringify(trabajador)
      );

      navigate("/modulos");
    } catch (error) {
      console.error("Error inesperado:", error);
      alert("Ocurrió un problema al guardar tus datos.");
    } finally {
      setGuardando(false);
    }
  };

  return (
    <div className="ingreso-container">
      <div className="ingreso-card">
        <h1>👋 Bienvenido a Academia SACINCO</h1>

        <p>
          Para comenzar tu capacitación,
          completa tus datos.
        </p>

        <form onSubmit={guardarTrabajador}>
          <label>Nombre completo</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre"
            required
          />

          <label>RUT</label>
          <input
            type="text"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            placeholder="Ej: 12.345.678-9"
            required
          />

          <label>Cargo</label>
          <input
            type="text"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
            placeholder="Ingresa tu cargo"
            required
          />

          <label>Recinto</label>
          <input
            type="text"
            value={recinto}
            onChange={(e) => setRecinto(e.target.value)}
            placeholder="Ingresa el recinto"
            required
          />

          <button type="submit" disabled={guardando}>
            {guardando
              ? "Guardando..."
              : "Continuar a la Academia"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Ingreso;
