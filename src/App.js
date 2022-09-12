import React from 'react';
import Home from "./Home";
import Searchpage from "./Searchpage";
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='searchpage' element={<Searchpage />} />
        </Routes>
      </BrowserRouter>
    </div>


  )
}

export default App
