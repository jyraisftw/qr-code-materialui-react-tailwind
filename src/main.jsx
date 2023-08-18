import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidenav from './components/Sidenav';
import Home from './pages/Home';
import Createqr from './pages/Createqr';
import './index.css'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Sidenav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/createqr" element={<Createqr />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);