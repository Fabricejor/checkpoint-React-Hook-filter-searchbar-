import './App.css';
import React, { useState } from 'react';
import Home from './Home';
import {Routes, Route } from 'react-router-dom'
import Trailer from './components/Trailer';


const App = () => {
  

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Trailer/https://www.youtube.com/embed/*' element={<Trailer/>}/>
    </Routes>
  </>

  );
}

export default App;
