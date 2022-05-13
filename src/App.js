import React from 'react';
import './App.css';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Trabajadores from './pages/Trabajadores/Trabajadores';
import Evaluaciones from './pages/Evaluaciones/Evaluaciones.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeAuxiliar from './pages/HomeAuxiliar/HomeAuxiliar';
import HomeOperarios from './pages/HomeOperarios/HomeOperarios';
import EstadoEmpleadosGerentes from './pages/EstadoEmpleadosGerentes/EstadoEmpleadosGerentes';

const App=() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/trabajadores" element={<Trabajadores></Trabajadores>} />
        <Route path="/evaluaciones" element={<Evaluaciones></Evaluaciones>} />

        {/* Secciones de Gerentes */}
        <Route path="/estado-empleados-gerentes" element={<EstadoEmpleadosGerentes />} />

        {/* Homes */}
        {/* Para ir a ver el dashboard sencillamente accede al home gerentes ya que es lo primero que el gerente va a ver cuando inicie sesión */}
        <Route path="/home-gerentes" element={<Dashboard />} />
        <Route path="/home-auxiliar" element={<HomeAuxiliar />} />
        <Route path="/home-operarios" element={<HomeOperarios />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
