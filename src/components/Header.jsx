import { Link } from 'react-router-dom'
import React from 'react'

const Header = () => {
    return (
            <div className='container grid grid-cols-1 justify-center content-center sm:grid-cols-2 px-2 mx-auto pt-5 sm:pt-0'>
                <div className='w-full h-full grid grid-flow-row content-center'>
                    <div className='text-center'>
                        <h1 className='text-ellipsis text-4xl ss:text-5xl sm:text-7xl sm:leading-normal sm:text-left font-bold'>Trabaja y estudia al mismo tiempo</h1>
                        <p className='text-xl pt-6 sm:text-left sm:w-5/6'>¿Buscas trabajos freelance para complementar tus estudios universitarios y obtener experiencia laboral mientras te formas como profesional?   </p>
                        <div className='w-full pt-6'>
                            
                                <Link to="/signup"><div className='rounded bg-teal-700 sm:w-1/6 sm:mx-0 mt-6 mx-auto text-white h-14 grid content-center justify-center'>Únete</div></Link>
                            
                        </div>
                    </div>
                </div>

                <div className='hidden h-[calc(100vh-110px)] sm:block sm:ml-6 sm:bg-cyan-800'>
                    <img className='w-full h-full object-cover' src="https://img.freepik.com/premium-vector/meadows-landscape-with-mountains-hill_104785-943.jpg?w=2000" alt="landscape" />
                </div>
            </div>
       
    )
}

export default Header