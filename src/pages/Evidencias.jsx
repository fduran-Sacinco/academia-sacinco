
import { useState, useEffect } from "react";
import { supabase } from "../supabase.js";

function Evidencias() {
  const [trabajador] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("trabajador"));
    } catch {
      return null;
    }
  });

  const [registros, setRegistros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  const capsulas = [
    {
      id: "CAP001",
      titulo: "Ley de Inclusión Laboral",
    },
    {
      id: "CAP002",
      titulo: "Barreras de Contexto",
    },
    {
      id: "CAP003",
      titulo: "Comunicación Inclusiva",
    },
  ];

  useEffect(() => {
    let activa = true;

    async function cargarProgreso() {
      if (!trabajador?.rut) {
        setCargando(false);
        return;
      }

      setCargando(true);
      setError("");

      try {
        console.log("RUT guardado en navegador:", trabajador.rut);
        const { data: persona, error: errorPersona } =
          await supabase
            .from("trabajadores")
            .select("id, rut, nombre, cargo, recinto")
           .eq("rut", trabajador.rut.trim().toUpperCase().replace(/\./g, ""))
            .maybeSingle();

      console.log("Respuesta de búsqueda en Supabase:", {
  persona,
  errorPersona,
});
            if (errorPersona) {
  console.error("Error buscando trabajador en Supabase:", errorPersona);
  throw errorPersona;
}

if (!persona) {
  console.error(
    "Supabase no encontró el RUT:",
    trabajador.rut
  );

  if (activa) {
    setRegistros([]);
    setError("Supabase no encontró al trabajador. Revisa la consola.");
  }
          return;
        }

        const { data, error: errorProgreso } = await supabase
          .from("progreso_capacitaciones")
          .select("codigo, completada_en")
          .eq("trabajador_id", persona.id);

        if (errorProgreso) throw errorProgreso;

        if (activa) {
          setRegistros(data || []);
        }
      } catch (err) {
        console.error("Error al consultar progreso:", err);

        if (activa) {
          setError(
            "No se pudo consultar el progreso en Supabase. Revisa los permisos de lectura."
          );
        }
      } finally {
        if (activa) setCargando(false);
      }
    }

    cargarProgreso();

    const actualizar = () => cargarProgreso();

    window.addEventListener("capacitacionActualizada", actualizar);
    window.addEventListener("focus", actualizar);

    return () => {
      activa = false;
      window.removeEventListener("capacitacionActualizada", actualizar);
      window.removeEventListener("focus", actualizar);
    };
  }, [trabajador]);

  const completadas = capsulas.filter((cap) =>
    registros.some(
      (registro) =>
        registro.codigo === cap.id && registro.completada_en
    )
  ).length;

  const progreso = Math.round(
    (completadas / capsulas.length) * 100
  );

  return (
    <div className="evidencias-container">
      <h1>📋 Evidencias de Capacitación</h1>

      {!trabajador ? (
        <p>No hay un trabajador identificado.</p>
      ) : (
        <>
          <div className="evidencia-trabajador">
            <h2>👤 Datos del trabajador</h2>
            <p><strong>Nombre:</strong> {trabajador.nombre}</p>
            <p><strong>RUT:</strong> {trabajador.rut}</p>
            <p><strong>Cargo:</strong> {trabajador.cargo}</p>
            <p><strong>Recinto:</strong> {trabajador.recinto}</p>
          </div>

          <div className="evidencia-progreso">
            <h2>📊 Progreso</h2>

            {cargando ? (
              <p>Consultando progreso...</p>
            ) : (
              <>
                <p>
                  <strong>
                    {completadas} de {capsulas.length} cápsulas
                  </strong>
                </p>
                <p>Progreso total: {progreso}%</p>
              </>
            )}
          </div>

          {error && <p role="alert">{error}</p>}

          <div className="evidencia-capsulas">
            <h2>🎥 Cápsulas realizadas</h2>

            {capsulas.map((cap) => {
              const completada = registros.some(
                (registro) =>
                  registro.codigo === cap.id &&
                  registro.completada_en
              );

              return (
                <div
                  key={cap.id}
                  className="evidencia-capsula"
                >
                  <strong>{cap.id}</strong>
                  <span>{cap.titulo}</span>
                  <span>
                    {cargando
                      ? "Consultando..."
                      : completada
                        ? "✅ Completada"
                        : "⏳ Pendiente"}
                  </span>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Evidencias;
