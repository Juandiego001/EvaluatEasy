import React from 'react';
import {BrowserRouter,Route, useRoutes} from 'react-router-dom';
import Dashboard from './dasboahrd/Dasboard';
import Trabajadores from './Trabajadores/trabajadores';
export default function Routes(){
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="Trabajadores" element={<Trabajadores />} />
      </Routes>
}