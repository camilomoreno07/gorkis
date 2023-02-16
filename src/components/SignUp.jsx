import React, { useState } from 'react';
import loginImg from '../assets/students.webp'
import { Link, useNavigate } from 'react-router-dom';
import { Amplify, Auth } from 'aws-amplify';
import awsmobile from '../aws-exports';
Amplify.configure(awsmobile);


/* Pagina de registro de usuarios con verificación*/
const SignUp = () => {

  /*Variables para el registro*/
  const [isSignUpForm, setIsSignUpForm] = useState(true);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [confirmationCode, setConfirmationCode] = useState('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  /*Metodo para registrar usuario*/
  async function signUp(event) {
    event.preventDefault();
    try {
      const { user } = await Auth.signUp({
        username,
        password,
        attributes: {
          'custom:firstName': firstName,
          'custom:lastName': lastName,
          'custom:phoneNumber':phoneNumber,
          email
        },
        autoSignIn: {
          enabled: true,
        },
      });
      console.log(user);
      setIsSignUpForm(false);
    } catch (error) {
      console.log('error signing up:', error);
      setError(error);
    }
  }

  /*Metodo para verificar usuario*/
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(username, confirmationCode);
      console.log('User confirmed');
      navigate('/services');
    } catch (error) {
      setError(error);
    }
  }
  /*https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js/*/
  return (
    <React.Fragment>
      <div className='grid grid-cols-1 sm:grid-cols-4 h-screen w-full'>
        <div className='hidden sm:block sm:col-span-2' >
          <img className='w-full h-screen object-cover' src={loginImg} alt="" />
        </div>

        <div className='bg-white grid grid-flow-row px-5 sm:col-span-2'>
          <div className='hidden sm:flex justify-end p-5 pr-10'>
            <h3 className='text-3xl font-bold'><Link to="/">Gorkis</Link></h3>
          </div>

          <div className='flex flex-col w-full justify-center sm:justify-start'>
            {isSignUpForm ? (<form className='max-w-[700px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg' onSubmit={signUp}>
              {error && <p>{error.message}</p>}
              <h2 className='text-4xl dark:text-white font-bold text-center'>Registrate</h2>
              <div className='grid grid-cols-2 gap-x-9 gap-y-2'>
              <div className='flex flex-col text-gray-400'>
                <label>Nombre</label>
                <input className='rounded-lg bg-gray-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                />
              </div>
              <div className='flex flex-col text-gray-400'>
                <label>Apellido</label>
                <input className='rounded-lg bg-gray-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                />
              </div>
              <div className='flex flex-col text-gray-400'>
                <label>Telefono</label>
                <input className='rounded-lg bg-gray-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text"
                  value={phoneNumber}
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </div>
              <div className='flex flex-col text-gray-400'>
                <label>Usuario</label>
                <input className='rounded-lg bg-gray-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text"
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className='flex flex-col text-gray-400'>
                <label>Correo Electronico</label>
                <input className='rounded-lg bg-gray-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className='flex flex-col text-gray-400'>
                <label>Contraseña</label>
                <input className='rounded-lg bg-gray-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none ' type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              </div>
              <div class="flex items-center mt-5">
                <input id="default-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label for="default-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Soy Freelancer</label>      
              </div>
              <button className='w-full my-5 py-2 bg-teal-500' type='submit'>Registrar</button>
              <div className='flex justify-center'>
                <div className='mx-auto'>
                <Link to="/login" className='text-white'>Ingresar</Link>
                </div>
                
              </div>

            </form>) : (<form className='max-w-[500px] w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg' onSubmit={handleSubmit}>
              {error && <p>{error.message}</p>}
              <h2 className='text-4xl dark:text-white font-bold text-center'>Verificar</h2>

              <div className='flex flex-col text-gray-400 py-2'>
                <label>Codigo</label>
                <input className='rounded-lg bg-gray-100 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text"
                  value={confirmationCode}
                  onChange={(event) => setConfirmationCode(event.target.value)}
                />
              </div>
              
              <button className='w-full my-5 py-2 bg-teal-500' type='submit'>Registrar</button>

            </form>)}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}


export default (SignUp);