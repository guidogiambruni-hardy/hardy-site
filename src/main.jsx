import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Consumidor from './pages/Consumidor.jsx'
import Mayoristas from './pages/Mayoristas.jsx'
import AGranel from './pages/AGranel.jsx'
import Recetas from './pages/Recetas.jsx'
import RecetaDetalle from './pages/RecetaDetalle.jsx'
import Gastronomico from './pages/Gastronomico.jsx'
import Distribuidor from './pages/Distribuidor.jsx'
import Productor from './pages/Productor.jsx'
import './mobile.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tienda" element={<Consumidor />} />
        <Route path="/mayoristas" element={<Mayoristas />} />
        <Route path="/a-granel" element={<AGranel />} />
        <Route path="/recetas" element={<Recetas />} />
        <Route path="/recetas/:slug" element={<RecetaDetalle />} />
        <Route path="/mayoristas/gastronomico" element={<Gastronomico />} />
        <Route path="/mayoristas/distribuidor" element={<Distribuidor />} />
        <Route path="/mayoristas/productor" element={<Productor />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
