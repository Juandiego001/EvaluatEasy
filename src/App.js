import './App.css';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Trabajadores from './pages/Trabajadores/Trabajadores';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Homes
import HomeGerentes from './pages/HomeGerentes/HomeGerentes';
import HomeAuxiliar from './pages/HomeAuxiliar/HomeAuxiliar';
import HomeOperarios from './pages/HomeOperarios/HomeOperarios';

// Diferentes secciones (Gerentes)
import ConfiguracionGerentes from './pages/ConfiguracionGerentes/ConfiguracionGerentes';


const App=() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home-gerentes" element={<Dashboard />} />
        <Route path="/trabajadores" element={<Trabajadores></Trabajadores>} />
        <Route path="/configuracion-gerentes" element={<ConfiguracionGerentes />} />

        {/* Homes */}
        <Route path="/home-auxiliar" element={<HomeAuxiliar />} />
        <Route path="/home-operarios" element={<HomeOperarios />} />
    
      </Routes>
    </BrowserRouter>
  );
}

export default App;
