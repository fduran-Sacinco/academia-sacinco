import './App.css'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Inicio from './pages/Inicio'
import Modulos from './pages/Modulos'
import Evidencias from './pages/Evidencias'
import Nosotros from './pages/Nosotros'
import Ingreso from './components/Ingreso'

import Capsula001 from './pages/Capsula001'
import Capsula002 from './pages/Capsula002'
import Capsula003 from './pages/Capsula003'
import Beneficios from './pages/Beneficios'

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Inicio />} />

        <Route path="/ingreso" element={<Ingreso />} />

        <Route path="/modulos" element={<Modulos />} />

        <Route path="/capsula001" element={<Capsula001 />} />

        <Route path="/capsula002" element={<Capsula002 />} />

        <Route path="/capsula003" element={<Capsula003 />} />

        <Route path="/evidencias" element={<Evidencias />} />

        <Route path="/nosotros" element={<Nosotros />} />

        {/* Nuevas secciones del Centro de Recursos */}

        <Route
          path="/informacion-util"
          element={
            <div className="pagina-provisional">
              <h1>ℹ️ Información útil</h1>
              <p>
                Recursos e información de interés para los trabajadores SACINCO.
              </p>
            </div>
          }
        />

   <Route path="/beneficios" element={<Beneficios />} />

        <Route
          path="/seguridad"
          element={
            <div className="pagina-provisional">
              <h1>🦺 Seguridad</h1>
              <p>
                Información y recursos de seguridad para los trabajadores.
              </p>
            </div>
          }
        />

      </Routes>
    </>
  )
}

export default App