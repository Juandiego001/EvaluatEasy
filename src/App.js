import './App.css';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Trabajadores from './pages/Trabajadores/Trabajadores';
import Evaluaciones from './pages/Evaluaciones/Evaluaciones.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeGerentes from './pages/HomeGerentes/HomeGerentes';
import HomeAuxiliar from './pages/HomeAuxiliar/HomeAuxiliar';
import HomeOperarios from './pages/HomeOperarios/HomeOperarios';


const App=() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/trabajadores" element={<Trabajadores></Trabajadores>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/evaluaciones" element={<Evaluaciones></Evaluaciones>} />

        {/* Homes */}
        <Route path="/home-gerentes" element={<HomeGerentes />} />
        <Route path="/home-auxiliar" element={<HomeAuxiliar />} />
        <Route path="/home-operarios" element={<HomeOperarios />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
