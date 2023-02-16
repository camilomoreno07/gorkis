import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'
import SignUp from './components/SignUp';
import Services from './components/Services'
import ServiceForm from './components/ServiceForm'
import './index.css';

/* Rutas de la aplicación */
const App = () => (
  <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/services' element={<Services/>} /> 
      <Route path='/serviceform' element={<ServiceForm/>} /> 
    </Routes>
  </>
);

export default App
