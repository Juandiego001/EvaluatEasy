import './App.css';
import Dashboard from './dasboahrd/Dasboard';
import NavbarMenu from './NavBar/navbar';
import {BrowserRouter as Router, Route,} from 'react-router-dom';
import Trabajadores from './Trabajadores/trabajadores';
import Evaluacion from './Evaluacion/evaluacion';

const App=() => {
  return (
    <div>
          <Dashboard/>
      </div>
  );
}

export default App;
