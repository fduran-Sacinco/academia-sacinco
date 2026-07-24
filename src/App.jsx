import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Academia SACINCO</h1>
        <p>
          Formación, inclusión laboral y desarrollo de personas
        </p>
      </header>

      <main>
        <section className="welcome">
          <h2>Bienvenidos</h2>
          <p>
            Plataforma de aprendizaje para fortalecer una cultura
            de inclusión, respeto y crecimiento dentro de SACINCO.
          </p>

          <button>
            Ver cápsulas de formación
          </button>
        </section>

        <section className="modules">
          <div className="card">
            <h3>Inclusión Laboral</h3>
            <p>
              Conceptos, herramientas y buenas prácticas.
            </p>
          </div>

          <div className="card">
            <h3>Cápsulas Educativas</h3>
            <p>
              Microcontenidos para aprender de forma simple.
            </p>
          </div>

          <div className="card">
            <h3>Certificación</h3>
            <p>
              Evidencias y avances del proceso SACINCO.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App