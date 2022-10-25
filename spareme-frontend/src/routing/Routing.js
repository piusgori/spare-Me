import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../routes/home/HomePage';

const Routing = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
    </Routes>
  )
}

export default Routing