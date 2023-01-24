import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'
import SignUp from './components/SignUp';
import Jobs from './components/Jobs'
import './index.css';

/* Rutas de la aplicación */
const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/jobs' element={<Jobs/>} /> 
    </Routes>
  </>
);

export default App
