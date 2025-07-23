import React from 'react'
import Menu from './menu.jsx'
import { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
return (

   

    <div>
        <div className='responsive relative'>

    <div className='mobile lg:hidden flex items-center justify-between'>
        <img className='h-[70px] mt-2'src="/LOGO1.png"alt="logo"/>
        
            
        <Menu onClick={() => setIsOpen(!isOpen)}/>
         
    </div>
    <div className={`menu transition-all duration-500 ease-in-out ${isOpen? 'opacity-1' : 'opacity-0'} bg-white/90 px-5 py-6 border-[3px] border-[#353A5F]/40 absolute w-full items-center justify-center font-inria text-[#353A5F]`}>
        <ul className='flex flex-col items-center gap-2'>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#project">Project</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

    </div>
    </div>
    <div className="navbar hidden lg:block text-[#f9f9f9] text-[24px] font-inria w-full">
        <ul className="flex items-center justify-between w-full ">
            
            {/* Left side */}
            <div className="flex gap-20">
                <a href="experience">
                <li className='cursor-pointer hover:-translate-y-1 transition-all duration-300'>
  Experience
</li></a>
<a href="#project">
                <li className='cursor-pointer hover:-translate-y-1 transition-all duration-300'>Project</li></a>
            </div>

            {/* Center image */}
            <div>
                <img
                className='h-[70px] mt-2'
                    src="/LOGO1.png"
                    alt="logo"
            
                />
            </div>

            {/* Right side */}
            <div className="flex gap-20">
                <a href="#about"><li className='cursor-pointer hover:-translate-y-1 transition-all duration-300'>About Me</li></a>
                <a href="#contact"><li className='cursor-pointer hover:-translate-y-1 transition-all duration-300'>Contact</li></a>
            </div>
            
        </ul>
    </div>
    </div>
)
}

export default Navbar