import React from "react";
import Navbar from './components/Navbar/Navbar';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Galeria from './pages/galeria';
import Onas from './pages/onas';
import Kontakt from './pages/kontakt';
import NotFound from './pages/notfound';
import MaxCalculator from "./pages/MaxCalculator";

function App() {
  return (
    <div className="App">
        <Navbar />
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path="/onas" element={<Onas />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/kalkulator-maksow" element={<MaxCalculator />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
