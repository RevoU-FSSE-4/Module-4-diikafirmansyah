import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import HomeComponent from './Pages/home';
import MultiStepForm from './Pages/signup'

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<HomeComponent />} />
      <Route path='/signup' element={<MultiStepForm />} />
    </Routes>
    </BrowserRouter>
    // <div>
    //   < HomeComponent/>
      
    //     {/* <MultiStepRegistration /> */}
      
    // </div>

    
  );
}

export default App;
