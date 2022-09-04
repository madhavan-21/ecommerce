import React from 'react';
import "./Home";
import Home from './Home';
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home /> } />
        </Routes>

      </BrowserRouter>
    </div>


  )
}

export default App
