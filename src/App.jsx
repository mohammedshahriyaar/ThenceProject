import React from 'react';
import { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './components/Register';
import AfterSubmit from './components/AfterSubmit';
import Home from './components/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
      <>
        {/* Define your routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/final" element={<AfterSubmit/>} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    
  );
}

export default App
