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
import BmiCalculator from "./pages/BmiCalculator";
import Cwiczenia from "./pages/Cwiczenia";
import WaterCalculator from "./pages/WaterCalculator";
import Tytul from "./components/Tytul/Tytul";

function App() {
  return (
    <div className="App">
      <Tytul />
        <Navbar />
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path="/onas" element={<Onas />} />
                <Route path="/kontakt" element={<Kontakt />} />
                <Route path="/kalkulator-maksow" element={<MaxCalculator />} />
                <Route path="/kalkulator-bmi" element={<BmiCalculator />} />
                <Route path="/kalkulator-wody" element={<WaterCalculator />} />
                <Route path="/cwiczenia" element={<Cwiczenia />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    </div>
  );
}

export default App;
