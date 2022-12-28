import React from 'react'
import { Amplify } from 'aws-amplify';
import {MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import awsmobile from '../aws-exports';
Amplify.configure(awsmobile);

const Jobs = () => {

  return (
    /*
    <div>
      <p>Username: {user.username}</p>
      <p>Email: {user.attributes.email}</p>
      <p>Phone number: {user.attributes.phone_number}</p>
    </div>*/
    <>
      <div className='container mx-auto pt-5 flex flex-row gap-4 justify-between content-center'>
        <div className='hidden basis-1/4 sm:flex flex-row items-center'>
          <h3 className='text-3xl font-bold'>Gorkis</h3>
          </div>
        <div className='w-full px-2 sm:basis-1/2'>
          <form action="" className=' '>
           <div className='relative flex items-center text-gray-400 focus-within:text-gray-600'>
           <MagnifyingGlassIcon className="absolute w-5 h-5 ml-3 pointer-events-none"/>
           <input className='pr-3 pl-10 py-2 rounded-2xl placeholder-gray-500 test-black border-none ring-2 ring-gray-200 w-full focus:ring-gray-500 focus:ring-2' 
           type="text" placeholder='Buscar servicios'/>
           </div>
          </form>
          
        </div>
        <div className='hidden basis-1/4 sm:flex flex-row justify-end items-center'>
          <p className=''>Usuario</p>
          </div>
      </div>


    </>
  );
}


export default Jobs