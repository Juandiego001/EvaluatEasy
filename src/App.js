import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Trabajadores from './pages/Trabajadores/Trabajadores';
import Evaluaciones from './pages/Evaluaciones/Evaluaciones.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Homes
import HomeGerentes from './pages/HomeGerentes/HomeGerentes';
import HomeAuxiliar from './pages/HomeAuxiliar/HomeAuxiliar';
import HomeOperarios from './pages/HomeOperarios/HomeOperarios';

// Diferentes secciones (Gerentes)
import ConfiguracionGerentes from './pages/ConfiguracionGerentes/ConfiguracionGerentes';
import EstadoEmpleadosGerentes from './pages/EstadoEmpleadosGerentes/EstadoEmpleadosGerentes';

const App=() => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Secciones de Gerentes */}
        {/* Para ir a ver el dashboard sencillamente accede al home gerentes ya que es lo primero que el gerente va a ver cuando inicie sesión */}
        <Route path="/" element={<Login />} />
        <Route path="/home-gerentes" element={<Dashboard />} />
        <Route path="/trabajadores" element={<Trabajadores />} />
        <Route path="/configuracion-gerentes" element={<ConfiguracionGerentes />} />
        <Route path="/evaluaciones" element={<Evaluaciones></Evaluaciones>} />
        <Route path="/estado-empleados-gerentes" element={<EstadoEmpleadosGerentes />} />

        {/* Homes */}
        <Route path="/home-auxiliar" element={<HomeAuxiliar />} />
        <Route path="/home-operarios" element={<HomeOperarios />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
