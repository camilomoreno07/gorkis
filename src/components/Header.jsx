import { Link } from 'react-router-dom'
import User1 from '../assets/User1.svg';
import User2 from '../assets/User2.svg';
import User3 from '../assets/User3.svg';
import User4 from '../assets/User4.svg';
import Dots from '../assets/Dots.svg';
import HalfCircle from '../assets/HalfCircle1.svg'
import HalfCircle2 from '../assets/Half Circle2.svg'
import HalfCircle3 from '../assets/HalfCircle3.svg'
import Pattern from '../assets/Pattern.svg'
import React from 'react'

const Header = () => {
    return (
        
        <div className='flex flex-row mb-0 pt-5 sm:pt-0 sm:h-full md:h-[90vh] w-full m-0'>
            <div className='flex flex-col sm:basis-3/5 sm:pl-28 sm:pr-16  md:pl-44 md:pr-20 sm:justify-center'>
                <div className='text-center'>
                    <p className=' text-center sm:text-left text-5xl xl:text-8xl lg:leading-tight font-bold'>
                    Trabaja y estudia al mismo tiempo
                    </p>
                    <p className='text-xl pt-6 sm:text-left sm:w-5/6'>
                        ¿Buscas trabajos freelance para complementar
                        tus estudios universitarios y obtener experiencia
                        laboral mientras te formas como profesional?
                    </p>
                    <div className=' sm:w-fit px-5 sm:px-0 mt-6 '>

                        <Link to="/signup">
                            <div className='flex justify-center items-center rounded sm:w-28 bg-teal-700  text-white h-14 '>
                                <p className='h-fit'>Únete
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            <div className='hidden grow w-fit sm:flex sm:flex-col'>
                <div className='grid grid-rows-2 bg-teal-700 w-full h-full relative'>
                    <div className='relative z-10'>
                        <img src={User1} alt="User1" className='absolute sm:-inset-x-20 sm:inset-y-48 xl:h-36 lg:-inset-x-16 lg:inset-y-52' />
                        <img src={HalfCircle} alt="HalfCircle" className='absolute  -left-8 top-16 ' />
                        <img src={User2} alt="User2" className='absolute sm:right-10 sm:top-44 lg:right-28 lg:top-28 xl:h-64' />
                        <img src={Dots} alt="Dots" className='absolute sm:inset-x-32  sm:inset-y-32 lg:inset-x-96 lg:inset-y-32' />
                        <img src={HalfCircle2} alt="HalfCircle2" className='absolute -bottom-32 right-0' />
                    </div>
                    <div className='relative z-0'>
                        <img src={Pattern} alt="Pattern" className='absolute  sm:-inset-x-20 sm:inset-y-48 lg:inset-x-24 lg:inset-y-32 xl:h-36' />
                        <img src={User3} alt="User3" className='absolute  sm:-inset-x-20 sm:inset-y-48 lg:inset-x-16 lg:inset-y-28 xl:h-36' />
                        <img src={User4} alt="User4" className='absolute  lg:right-28 lg:top-28 xl:h-52 z-40' />
                        <img src={HalfCircle3} alt="HalfCircle3" className='absolute bottom-0 inset-x-1/2 z-0' />
                    </div>
                    <div className='relative z-0'>
                        <img src={Pattern} alt="Pattern" className='absolute  sm:-inset-x-20 sm:inset-y-48 lg:inset-x-24 lg:inset-y-32 xl:h-36' />
                        <img src={User3} alt="User3" className='absolute  sm:-inset-x-20 sm:inset-y-48 lg:inset-x-16 lg:inset-y-28 xl:h-36' />
                        <img src={User4} alt="User4" className='absolute  lg:right-28 lg:top-28 xl:h-52 z-40' />
                        <img src={HalfCircle3} alt="HalfCircle3" className='absolute bottom-0 inset-x-1/2 z-0' />
                    </div>
                </div>
            </div>

        </div>
        

    )
}

export default Header