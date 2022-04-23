import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Trabajadores from './pages/Trabajadores/Trabajadores';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App=() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/trabajadores" element={<Trabajadores></Trabajadores>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
