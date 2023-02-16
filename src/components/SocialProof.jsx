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
                            <p className='text-center p-5'>Estoy teniendo bastantes trabajos en la universidad por lo cual he faltado a una materia,
                            gracias a la plataforma me pude contactar con un muy buen tutor que me ha explicado las clases a las cuales he faltado y ya me siento
                            mas preparado para los parciales que se aproximan, ademas el precio fue lo justo 

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
                            <p className='text-center p-5'>Yo soy estudiante de filosofia y ultimamente me he estado interesando por el 
                            calculo ya que me queda un poco de tiempo libre y unos amigos me han dicho que es muy interesante he decidido
                            mediante la plataforma Gorkis buscar alguien que me pueda enseñar, ya lo estoy entendiendo
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
            <div></div>
            <div className=' sm:ml-auto sm:mr-5 justify-center' >
                        <div className='bg-white rounded-md text-center p-5' >
                            <p className='text-center p-5' >Queria que alguien hiciera un retrato de mi hijo
                             pero no sabia donde buscarlo, 
                            entre a esta plataforma puse la palabra clave retratos y me salieron muchos estudiantes
                             que tienen unos dotes de arte esplendidos
                            </p>
                        </div>
                        <div className='flex justify-center items-center mt-5'>
                            <img src={User1} alt="User1" className='h-10 mr-5' />
                            <div className='flex flex-col text-white'>
                                <p className='font-semibold'>Juana Martinez</p>
                                <p className='font-thin text-sm'>Profesora</p>
                            </div>
                        </div>
                    </div>
        </div>
        
    )
}

export default SocialProof