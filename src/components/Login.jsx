import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import loginImg from '../assets/students.jpg'
import { Amplify, Auth } from 'aws-amplify';
import awsmobile from '../aws-exports';
Amplify.configure(awsmobile);

const Login = () => {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  async function signIn(event) {
    event.preventDefault();
    try {
      await Auth.signIn(username, password);
      navigate('/jobs');
    } catch (error) {
      console.log('error signing in', error);
      setError(error);
    }
  }

  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-3 h-screen w-full'>
        <div className='hidden sm:col-span-2 sm:block'>
          <img className='w-full h-screen object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-white grid grid-flow-row px-5 col-span-1'>
          <div className='hidden sm:flex  justify-end p-5 pr-10'>
            <h3 className='text-3xl font-bold'>
              <Link to="/">Gorkis</Link>
            </h3>
          </div>
          <div className='flex flex-col w-full justify-center sm:justify-start'>
            <form className='max-w-[500px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg' onSubmit={signIn}>
              {error && <p>{error.message}</p>}
              <h2 className='text-4xl dark:text-white font-bold text-center'>Inicia Sesión</h2>
              <div className='flex flex-col text-gray-400 py-2'>
                <label>Usuario</label>
                <input className='rounded-lg bg-gray-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className='flex flex-col text-gray-400 py-2'>
                <label>Contraseña</label>
                <input className='rounded-lg bg-gray-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className='flex justify-between text-gray-400 py-2'>
                <p className='flex items-center'><input className='mr-2' type="checkbox" />Recuerdame</p>
                <p>
                  Olvidé mi contraseña
                </p>
              </div>
              <button className='w-full my-5 py-2 bg-teal-500' type='submit'>Entrar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default (Login);