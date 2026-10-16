function Beneficios() {
  return (
    <main className="pagina-beneficios">

      <section className="beneficios-header">
        <h1>🎁 Beneficios para ti y tu familia</h1>

        <p>
          Conoce los beneficios, convenios y programas disponibles
          para ti como trabajador de SACINCO.
        </p>
      </section>

    {/* AFICHE */}
<section className="afiche-seccion">
  <h2>📄 Beneficios SACINCO</h2>

  <img
    src="/academia-sacinco/documentos/beneficios/afiche-beneficios-sacinco.png"
    alt="Beneficios para trabajadores SACINCO"
    className="afiche-imagen"
  />
</section>

      {/* ACCESO A BENEFICIOS */}
      <section className="beneficios-acceso">

        <h2>🔗 Accede a tus beneficios</h2>

        <div className="beneficios-grid">

          <article className="beneficio-card">
            <h3>BUK</h3>

            <p>
              Revisa los beneficios y convenios disponibles
              para los trabajadores de SACINCO.
            </p>

            <a href="#" className="beneficio-boton">
              Haz efectivo tu beneficio
            </a>
          </article>

          <article className="beneficio-card">
            <h3>Mutual de Seguridad</h3>

            <p>
              Accede a información, beneficios, servicios y
              programas disponibles para ti y tu familia.
            </p>

            <a href="#" className="beneficio-boton">
              Haz efectivo tu beneficio
            </a>
          </article>

          <article className="beneficio-card">
            <h3>Fundación CChC</h3>

            <p>
              Conoce los programas y beneficios disponibles
              para trabajadores de la construcción y sus familias.
            </p>

            <a href="#" className="beneficio-boton">
              Haz efectivo tu beneficio
            </a>
          </article>

        </div>

      </section>

    </main>
  );
}

export default Beneficios;