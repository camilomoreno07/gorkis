import { React, useState, useEffect } from 'react'
import { Amplify, Auth } from 'aws-amplify';
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import ServiceCard from './ServiceCard';
import awsmobile from '../aws-exports';
import { useNavigate } from 'react-router';
Amplify.configure(awsmobile);

const API_URL = 'https://yul9f2ne29.execute-api.us-east-1.amazonaws.com/dev/services';

const Services = () => {
  const [user, setUser] = useState(null);
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  const searchServices = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setServices(data.services); // adjust this to match the response format
      console.log(data.services)
    } catch (error) {
      console.error(error);
    }
  }

  const signOut = () => {
    Auth.signOut()
      .then(() => console.log('Sesión cerrada'))
      .catch(err => console.log('Error al cerrar sesión: ', err));

      navigate('/');
  }

  useEffect(() => {


    searchServices();

    async function fetchUser() {

      try {
        const user = await Auth.currentUserInfo();
        setUser(user);
        console.log(user)
      }
      catch (error) {
      }


    }

    fetchUser();
  }, []);

  return (
    <>
      <div className='container mx-auto pt-4 sm:px-10 flex flex-row justify-center sm:justify-between'>
        <div className='basis-1/4 hidden sm:inline'> <p className='text-3xl font-bold'>Gorkis</p> </div>
        <div className='basis-auto sm:basis-1/2'>
          <form action="" className=''>
            <div className='relative flex items-center text-gray-400 focus-within:text-gray-600 '>
              <MagnifyingGlassIcon className="absolute w-5 h-5 ml-3 pointer-events-none" />
              <input className='pr-5 pl-10 py-2 rounded-2xl placeholder-gray-500 test-black border-none ring-2 ring-gray-200 w-full focus:ring-gray-500 focus:ring-2'
                type="text" placeholder='Buscar servicios' />
            </div>
          </form>
        </div>
        <div className='sm:basis-1/4 flex flex-row-reverse'>
        <button class="hidden sm:inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" onClick={signOut}>
          Cerrar Sesión
        </button>
        </div>
      </div>
      <div className='mx-10 pt-5 '>
        {
          services?.length > 0 ? (
            <div className=" grid grid-cols-1 sm:grid-cols-4 gap-4">
              {services.map((service) => (<ServiceCard service={service} />))}
            </div>
          )
            : (
              <div className="empty">
                <h2>No se encontraron servicios</h2>
              </div>
            )
        }
      </div>
    </>
  );
}


export default Services