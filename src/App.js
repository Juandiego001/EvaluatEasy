import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Trabajadores from './pages/Trabajadores/Trabajadores';
import Evaluaciones from './pages/Evaluaciones/Evaluaciones.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Homes
import HomeAuxiliar from './pages/HomeAuxiliar/HomeAuxiliar';
import HomeTrabajadores from './pages/HomeTrabajadores/HomeTrabajadores';

// Diferentes secciones (Gerentes)
import ConfiguracionGerentes from './pages/ConfiguracionGerentes/ConfiguracionGerentes';
import EstadoTrabajadoresGerentes from './pages/EstadoTrabajadoresGerentes/EstadoTrabajadoresGerentes';

// Diferentes secciones (Trabajadores)
import ConfiguracionTrabajadores from './pages/ConfiguracionTrabajadores/ConfiguracionTrabajadores';
import EvaluacionesTrabajadores from './pages/EvaluacionesTrabajadores/EvaluacionesTrabajadores';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Homes */}
        <Route path="/home-auxiliar" element={<HomeAuxiliar />} />
        <Route path="/home-trabajadores" element={<HomeTrabajadores />} />

        {/* Secciones de Gerentes */}
        {/* Para ir a ver el dashboard sencillamente accede al home gerentes ya que es lo primero que el gerente va a ver cuando inicie sesión */}
        <Route path="/" element={<Login />} />
        <Route path="/home-gerentes" element={<Dashboard />} />
        <Route path="/trabajadores" element={<Trabajadores />} />
        <Route path="/configuracion-gerentes" element={<ConfiguracionGerentes />} />
        <Route path="/evaluaciones" element={<Evaluaciones></Evaluaciones>} />
        <Route path="/estado-trabajadores-gerentes" element={<EstadoTrabajadoresGerentes />} />

        {/* Secciones de Trabajadores */}
        <Route path="/configuracion-trabajadores" element={<ConfiguracionTrabajadores />} />
        <Route path="/evaluaciones-trabajadores" element={<EvaluacionesTrabajadores />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
