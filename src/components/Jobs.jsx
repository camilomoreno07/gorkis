import { React, useState, useEffect } from 'react'
import { Amplify, Auth } from 'aws-amplify';
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import awsmobile from '../aws-exports';
Amplify.configure(awsmobile);

const Jobs = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {

      try{
        const user = await Auth.currentUserInfo();
        setUser(user);
        console.log(user)
      }
      catch(error){
      }
      

    }

    fetchUser();
  }, []);

  return (
    <>
      <div className='container mx-auto pt-4 sm:px-10 flex flex-row justify-center sm:justify-between'>
        <div className='basis-1/4 hidden sm:inline'> <p className='text-3xl font-bold'>Gorkis</p> </div>
        <div className='sm:basis-1/2'>
          <form action="" className=''>
            <div className='relative flex items-center text-gray-400 focus-within:text-gray-600 '>
              <MagnifyingGlassIcon className="absolute w-5 h-5 ml-3 pointer-events-none" />
              <input className='pr-5 pl-10 py-2 rounded-2xl placeholder-gray-500 test-black border-none ring-2 ring-gray-200 w-full focus:ring-gray-500 focus:ring-2'
                type="text" placeholder='Buscar servicios' />
            </div>
          </form>
        </div>
        <div className='basis-1/4 hidden sm:flex justify-end items-center'>
           <p>{user != null ? user.username : "Holi"}</p></div>
      </div>
    </>
  );
}


export default Jobs