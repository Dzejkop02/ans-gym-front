import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/Home';
import Galeria from './pages/galeria';
import Onas from './pages/onas';
import Kontakt from './pages/kontakt';
import NotFound from './pages/notfound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/galeria' element={<Galeria/>}/>
        <Route path='/onas' element={<Onas/>}/>
        <Route path='/kontakt' element={<Kontakt/>}/>
        <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
