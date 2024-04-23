import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomeComponent from './Pages/home';
import MultiStepForm from './Pages/signup'
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomeComponent />} />
      <Route path='/signup' element={<MultiStepForm />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;