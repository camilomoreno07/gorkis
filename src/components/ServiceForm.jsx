import React from 'react';
import { Amplify, Auth } from 'aws-amplify';
import awsmobile from '../aws-exports';
import { useNavigate } from 'react-router';
Amplify.configure(awsmobile);

const ServiceForm = () => {

  const navigate = useNavigate();
  
  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await Auth.confirmSignUp();
      console.log('User confirmed');
    } catch (error) {
    }
  }

  const signOut = () => {
    Auth.signOut()
      .then(() => console.log('Sesión cerrada'))
      .catch(err => console.log('Error al cerrar sesión: ', err));

    navigate('/');
  }

  return (
    <>
      <div>
        <div class="md:col-span-1">
          
            <div className='flex flex-row justify-between p-2'>
              <p className='text-3xl font-bold'>Gorkis</p>
              <button class="hidden sm:inline-block bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded" onClick={signOut}>
                Cerrar Sesión
              </button>
            </div>

            <div className='flex flex-row'>
              <div className='mx-10 basis-1/4'><p className=' text-gray-600'>Hola Bienvido a Gorkis, una plataforma para que personas
              freelancers y universitarias tengan la oportunidad de trabajar y estudiar</p></div>
              <div className='basis-1/2'>
              <h3 className="text-lg font-medium leading-6 text-gray-900">Creacion de Servicios</h3>
            <p class="mt-1 text-sm text-gray-600">
              Ten en cuenta que toda la informacion publicada aqui es de caracter publico
            </p>
            <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST" onSubmit={handleSubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label for="company_website" className="block text-sm font-medium text-gray-700">
                        Titulo
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Título" aria-label="Full name"
                           />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label for="about" className="block text-sm font-medium text-gray-700">
                      Descripcion
                    </label>
                    <div className="mt-1">
                      <textarea id="description" name="about" rows="3" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md"
                         />

                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Una breve descripcion de tu servicio
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Imagen del servicio
                    </label>

                    <div className="flex items-center justify-center w-full">
                      <label for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-white-50 ">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">haz clic </span> o arrastra y suelta</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" accept="image/png, .jpeg, .jpg, image/gif" />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Guardar
                  </button>
                </div>
              </div>
            </form>
          </div>

              </div>
            </div>

            

         
          
        </div>
      </div>
      
    </>
  )
}


export default ServiceForm;