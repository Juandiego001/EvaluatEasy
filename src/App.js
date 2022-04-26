import './App.css';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Trabajadores from './pages/Trabajadores/Trabajadores';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App=() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/trabajadores" element={<Trabajadores></Trabajadores>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
