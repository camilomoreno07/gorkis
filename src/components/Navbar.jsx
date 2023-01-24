import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
       
        <div className="mx-auto py-2 px-6 bg-white  sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-row content-center justify-between items-center ">
                <span className='text-3xl'>
                    <Link to="/" className='font-bold'>Gorkis</Link>
                </span>
                <span className='cursor-pointer mx-2 sm:hidden ' onClick={()=>setOpen(!open)}>
                    {open ? (<XMarkIcon className=" w-6 h-6  pointer-events-none" ></XMarkIcon>):( <Bars3Icon className=" w-6 h-6  pointer-events-none" ></Bars3Icon>)}
                   
                </span>
            </div>
            <ul className={`sm:flex sm:items-center z-[-1] sm:z-auto sm:static ${open ? "": "absolute opacity-0 w-full top-[-400px] left-0"} bg-white  sm:w-auto sm:py-0 py-4 sm:pl-0  sm:opacity-100  transition-all ease-in duration-500`}>
                <li className="mx-4 my-6 sm:my-0">
                    <Link to="/login">
                        <span className='hover:text-teal-900'>Iniciar Sesión</span>
                    </Link>
                </li>

                <Link to="/signup">
                    <li className="mx-4 my-6 sm:my-0 shadow-lg text-white text-lg bg-gray-900 w-32 h-16 rounded grid content-center justify-center">
                        Únete
                    </li>
                </Link>
            </ul>
        </div>

    )
}

export default Navbar