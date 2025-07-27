import React from 'react'
import Menu from './Menu.jsx'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
return (

   

    <div className='maindiv'>
        {/* Mobile */}
        <div className='responsive-mobile relative'>

    <div className='mobile lg:hidden flex items-center justify-between'>
        <img className='h-[70px] mt-2' src="/LOGO1.png" alt="logo"/>
        
        <div className='cursor-pointer'>    
            <Menu onClick={() => setIsOpen(!isOpen)}/>
        </div>
         
    </div>
    <div className={`menu transition-all duration-500 ease-in-out ${isOpen? 'flex' : 'hidden'} bg-white/90 px-5 py-6 border-[3px] border-[#353A5F]/40 absolute w-full items-center justify-center font-inria text-[#353A5F] flex-col gap-2 z-10`}>
        <a href="#experience-mobile">Experience</a>
        <a href="#project">Projects</a>
        <a href="#about">About</a>
        <a href="#contact" className='bg-[#353A5F] px-10 py-2 m-1 text-white/80 rounded-md'>Contact</a>
    </div>
    </div>
    {/* Desktop*/}
    <div className="navbar hidden lg:block text-[#f9f9f9] text-[24px] font-inria w-full">
        <div className="flex items-center justify-between w-full ">
            
            {/* Left side */}
            <ul className='flex gap-32'>
                <li className='cursor-pointer hover:-translate-y-1 transition-all duration-300'>
                    <a href="#experience">Experience</a>
                </li>
                <li className='cursor-pointer hover:-translate-y-1 transition-all duration-300'>
                    <a href="#project">Projects</a>
                </li>

                </ul>
            

            {/* Center image */}
            <div>
                <img
                className='h-[70px] mt-2'
                    src="/LOGO1.png"
                    alt="logo"
            
                />
            </div>

            {/* Right side */}

            <ul className='flex gap-32'>
            
            
                <li className='cursor-pointer hover:-translate-y-1 transition-all duration-300'>
                    <a href="#about">About</a>
                </li>
                <li className='cursor-pointer hover:-translate-y-1 transition-all duration-300'>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    </div>
    </div>
)
}

export default Navbar