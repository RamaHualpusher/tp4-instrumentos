import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import DondeEstamos from "./components/DondeEstamos";
import Productos from "./components/Productos";
import DetalleInstrumento from './components/DetalleInstrumento';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/donde-estamos" className="nav-link">Donde Estamos</Link>
            </li>
            <li className="nav-item">
              <Link to="/productos" className="nav-link">Productos</Link>
            </li>
          </ul>
        </nav>
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/donde-estamos" element={<DondeEstamos />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/productos/:id" element={<DetalleInstrumento />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
