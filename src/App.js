// src/App.js
import React from 'react';
import {Route, Routes,  } from 'react-router-dom';
import IndexPage from './components/IndexPage.js';
import LoginPage from './components/LoginPage';
import CandidateHome from './components/CandidateHome';

const App = () => {
  return (
   
    <Routes>
      
      
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/candidatehome" element={<CandidateHome />} />
      
    </Routes>
  
  );
};

export default App;
