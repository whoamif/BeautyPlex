import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import FormPage from './Forme.js';
import Home from './App.js';
import Product from './Product.js';

const RoutersApp = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forme" element={<FormPage />} />
        <Route path='/products' element={<Product />}></Route>
        
      </Routes>
    </BrowserRouter>
  );
};

export default RoutersApp;
