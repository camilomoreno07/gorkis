import React from 'react'
import User1 from '../assets/User1.svg';
import Quotes from '../assets/Quotes.svg';

const SocialProof = () => {
    return (
        <div className='mt-10 sm:mt-0  w-full bg-gray-900 rounded-t-3xl sm:rounded-none' >
            <div className='md:mx-52 py-10 flex flex-col justify-center'>
                <div className='flex my-10 justify-center sm:justify-start'> 
                    <p className='text-white  text-2xl sm:text-6xl 
                    lg:text-5xl sm:leading-normal sm:text-left font-bold'>
                    Nuestros clientes hablan
                    </p>
                </div>
                
                <div className='flex flex-col relative space-y-4 sm:space-y-0 mx-5 sm:flex-row justify-between sm:justify-center '>
                    <div className=' sm:ml-auto sm:mr-5'>
                        <div className='bg-white rounded-md md:w-[30rem]'>
                            <p className='text-center p-5'>Tuvimos una experiencia 
                            increíble trabajando con Landify y nos impresionó que hicieran una 
                            gran diferencia en solo tres semanas. Nuestro equipo está muy agradecido por 
                            las maravillosas mejoras que 
                            hicieron y su capacidad para 
                            familiarizarse con el concepto tan rápidamente. 
                            Actuó como un catalizador para llevar nuestro diseño 
                            al siguiente nivel y obtener más atención sobre nuestro producto.

                            </p>
                        </div>
                        <div className='flex justify-center items-center mt-5'>
                            <img src={User1} alt="User1" className='h-10 mr-5' />
                            <div className='flex flex-col text-white'>
                                <p className='font-semibold'>Camilo Moreno</p>
                                <p className='font-thin text-sm'>Estudiante</p>
                            </div>
                        </div>

                    </div>
                    <div className=' sm:mr-auto sm:ml-5'> 
                        <div className='bg-white rounded-md md:w-[30rem]'>
                            <p className='text-center p-5'>Tuvimos una experiencia 
                            increíble trabajando con Landify y nos impresionó que hicieran una 
                            gran diferencia en solo tres semanas. Nuestro equipo está muy agradecido por 
                            las maravillosas mejoras que 
                            hicieron y su capacidad para 
                            familiarizarse con el concepto tan rápidamente. 
                            Actuó como un catalizador para llevar nuestro diseño 
                            al siguiente nivel y obtener más atención sobre nuestro producto.
                            </p>
                        </div>
                        <div className='flex justify-center items-center mt-5'>
                            <img src={User1} alt="User1" className='h-10 mr-5' />
                            <div className='flex flex-col text-white'>
                                <p className='font-semibold'>Jhon Uribe</p>
                                <p className='font-thin text-sm'>Estudiante</p>
                            </div>
                        </div>
                    </div>
                    <img src={Quotes} alt="User1" className='hidden md:inline absolute right-10 -top-28' />
                </div>
            </div>
        </div>
    )
}

export default SocialProof