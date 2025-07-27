import React from 'react';
import figma from '../assets/Figma-logo.svg'
import react from '../assets/react-svgrepo-com.svg'
import git from '../assets/git-icon.svg'

const Page3 = () => {
  return (
    <div>
      {/* Mobile*/}
      <div id='experience-mobile' className='md:hidden'>
        <div className='flex flex-col relative py-10'>
      <h1 className='z-10 font-inria text-[#f9f9f9] text-[62px]'>Experience</h1>
      <h3 className="z-10 text-xl font-inria mb-4 text-white/90">
                    Freelance Designer & Developer (2020-Present)
                  </h3>
      <p className="z-10 text-white/80 text-base leading-relaxed font-thin font-inria">
                    Started with graphic design in 2020, then moved into web 
                    design and UI/UX. I focus on creating clean, user-friendly 
                    digital experiences and also build the front-end to bring 
                    them to life.
                  </p>
                  <div className='bg-[#677EC2]/30 h-[306px] w-[251px] absolute right-0'></div>
                  </div>
                  <div className='flex flex-col gap-12'>
                    <div>
                  <h2 className='font-inria text-[#f9f9f9] text-[30px]'>Coding skills</h2>
                  <div className='front-inrai text-white/80 text-lg grid grid-cols-2 gap-x-10 gap-y-5'>
                    <div>-HTML</div>
                    <div>-CSS</div>
                    <div>-JAVASCRIPT</div>
                    <div>-SQL</div>
                    <div>-PHP</div>
                
                  </div>
                  </div>
                  <div className='mb-12'>
                  <h2 className='font-inria text-[#f9f9f9] text-[30px]'>Education</h2>
                  <p className='font-inria text-white/80 text-[18px]'>Bachelor of Computer Applications 2022-2025   </p>
                  <div className='flex justify-center text-[#353A5F] pt-10'>
                  <div className='flex gap-10 rounded-full'>
                    <div className='bg-white shadow-xl shadow-white/50 backdrop-blur-xl py-5 px-10 rounded-full'>UI/UX</div>
                    <div className='bg-white shadow-xl shadow-white/50 backdrop-blur-xl py-5 px-4 rounded-full'>Web Developer</div>

                  </div>
                  </div>
                  </div>
                  </div>

 
    </div>
    <div className='md:hidden flex flex-col gap-10'>
      <h1 className='font-inria text-[#f9f9f9] text-[36px] text-center'>
        Tools & Technology
      </h1>
      <div className='border border-white/20 bg-white/10 shadow-lg 
      backdrop-filter backdrop-blur-md rou p-5 grid grid-cols-4 gap-8'>
        {/* Figma Icon */}
         <div className='figma-icon hover:scale-105 transition-transform duration-400 ease-in-out'>
              <div className="flex flex-col items-center">
                  <img className='h-[70px]' src={figma} alt="" />
                </div>
            </div>
        {/* React Icon */}
        <div className='react-icon hover:scale-105 transition-transform duration-400 ease-in-out'>
                <div className="flex flex-col items-center ">
                  <img className='h-[70px]'src={react} alt="" />
                </div>
            </div>
            {/*Tailwind Icon */}
            <div className='tailwind-icon hover:scale-105 transition-transform duration-400 ease-in-out'>

                   <div className="w-[70px] h-[70px] flex items-center justify-center">
                    <svg className="w-[70px] h-[70px] text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
                    </svg>
                  </div>

            </div>
            {/*P5-icon */}
            <div className='P5-icon hover:scale-105 transition-transform duration-400 ease-in-out'>
              <div className="flex items-center justify-center">
                    <span className="text-pink-400 font-mono text-3xl font-bold">p5.js</span>
                  </div>
            </div>
            {/*Git-icon */}
            <div className='Git-icon hover:scale-105 transition-transform duration-400 ease-in-out'>
              <div className="w-16 h-16 flex items-center justify-center">
                    <img className='h-[70px]' src={git} alt="" />
                  </div>
            </div>
            {/*Threejs-icon */}
            <div className='Three-js-icon hover:scale-105 transition-transform duration-400 ease-in-out'>
              <div className="w-[70px] h-[70px] flex items-center justify-center">
                    <svg fill="none" stroke-linecap="square" stroke-miterlimit="10" version="1.1" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg">
 <g transform="translate(8.964 4.2527)" fill-rule="evenodd" stroke="#000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="4">
  <path d="m63.02 200.61-43.213-174.94 173.23 49.874z"/>
  <path d="m106.39 50.612 21.591 87.496-86.567-24.945z"/>
  <path d="m84.91 125.03-10.724-43.465 43.008 12.346z"/>
  <path d="m63.458 38.153 10.724 43.465-43.008-12.346z"/>
  <path d="m149.47 62.93 10.724 43.465-43.008-12.346z"/>
  <path d="m84.915 125.06 10.724 43.465-43.008-12.346z"/>
 </g>
</svg>
                  </div>
            </div>
            {/*GSAP-icon */}
            <div className='GSAP-icon hover:scale-105 transition-transform duration-400 ease-in-out'>
              <div className="text-white text-3xl font-bold tracking-wider">
                  GSAP
                </div>
            </div>

          

      </div>

    </div>
      {/* Desktop  */}
    <div className=" hidden md:block min-h-scree backdrop-blur-md bg-white/10 rounded-xl border border-white/20 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-24 h-screen">
          
          {/* Left Column - Tools & Technology */}
          <div className='flex flex-col h-[50rem] w-[25rem] items-start justify-center gap-24'>
            <h1 className='font-inria italic text-[#f9f9f9] text-[36px]'>Tools&Technology</h1>
          
          <div className='grid grid-cols-2 gap-16'>
            {/*Figma */}
            <div className='figma-icon hover:scale-105 transition-transform duration-400 ease-in-out'>
              <div className="flex flex-col items-center">
                  <img className='h-[70px]' src={figma} alt="" />
                </div>
            </div>
            {/*React */}
            <div className='react-icon hover:scale-105 transition-transform duration-400 ease-in-out'>
                <div className="flex flex-col items-center ">
                  <img className='h-[70px]'src={react} alt="" />
                </div>
            </div>
            {/*Tailwind Icon */}
            <div className='tailwind-icon hover:scale-105 transition-transform duration-400 ease-in-out'>

                   <div className="w-[70px] h-[70px] flex items-center justify-center">
                    <svg className="w-[70px] h-[70px] text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
                    </svg>
                  </div>

            </div>
            {/*P5-icon */}
            <div className='P5-icon hover:scale-105 transition-transform duration-400 ease-in-out'>
              <div className="flex items-center justify-center">
                    <span className="text-pink-400 font-mono text-3xl font-bold">p5.js</span>
                  </div>
            </div>
            {/*Git-icon */}
            <div className='Git-icon hover:scale-105 transition-transform duration-400 ease-in-out'>
              <div className="w-16 h-16 flex items-center justify-center">
                    <img className='h-[70px]' src={git} alt="" />
                  </div>
            </div>
            {/*Threejs-icon */}
            <div className='Three-js-icon hover:scale-105 transition-transform duration-400 ease-in-out'>
              <div className="w-[70px] h-[70px] flex items-center justify-center">
                    <svg fill="none" stroke-linecap="square" stroke-miterlimit="10" version="1.1" viewBox="0 0 226.77 226.77" xmlns="http://www.w3.org/2000/svg">
 <g transform="translate(8.964 4.2527)" fill-rule="evenodd" stroke="#000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="4">
  <path d="m63.02 200.61-43.213-174.94 173.23 49.874z"/>
  <path d="m106.39 50.612 21.591 87.496-86.567-24.945z"/>
  <path d="m84.91 125.03-10.724-43.465 43.008 12.346z"/>
  <path d="m63.458 38.153 10.724 43.465-43.008-12.346z"/>
  <path d="m149.47 62.93 10.724 43.465-43.008-12.346z"/>
  <path d="m84.915 125.06 10.724 43.465-43.008-12.346z"/>
 </g>
</svg>
                  </div>
            </div>
            {/*GSAP-icon */}
            <div className='GSAP-icon hover:scale-105 transition-transform duration-400 ease-in-out'>
              <div className="text-white text-3xl font-bold tracking-wider">
                  GSAP
                </div>
            </div>
        
          </div>
          </div>
          

          {/* Middle Column - Coding Skills & Education */}
          <div className="flex flex-col justify-center border-l border-r border-white/20 px-8">
            <div className="mb-16">
              <h2 className="text-3xl font-inria mb-12 text-[#f9f9f9]">Coding skills</h2>
              
              <div className="grid grid-cols-2 gap-6 text-lg text-white/80">
                <div>HTML</div>
                <div>SQL</div>
                <div>CSS</div>
                <div>PHP</div>


                <div>JavaScript</div>
                <div></div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-inria mb-12 text-[#f9f9f9]">Education</h2>
              
              <div className="space-y-3 text-white/80 mb-16">
                <div className="text-lg">Bachelor of Computer Applications</div>
                <div className="text-base">2022-2025</div>
              </div>

              <div className="flex space-x-4">





                <div className="shadow-[inset_6px_6px_7px_#bebebe,_inset_-6px_-6px_7px_#ffffff] hover:outline-none hover:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] transition-shadow duration-300 bg-[#e0e5ec] px-6 py-3 rounded-xl text-sm text-gray-700">
                  UI/UX Design
                </div>
                <div className="shadow-[inset_6px_6px_7px_#bebebe,_inset_-6px_-6px_7px_#ffffff] hover:outline-none hover:shadow-[inset_2px_2px_4px_#bebebe,_inset_-2px_-2px_4px_#ffffff] transition-shadow duration-300 bg-[#e0e5ec] px-6 py-3 rounded-xl text-sm text-gray-700">
                  Web Developer
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Experience */}
          <div id="experience"className="flex flex-col justify-center">
            <h1 className="text-6xl font-inria mb-16 text-[#f9f9f9]">Exper<span className='italic'>i</span>ence</h1>
            
            <div className="">
              <div className="flex items-start space-x-4">
                
                <div>
                  <h3 className="text-xl font-inria mb-4 text-white/90">
                    Freelance Designer & Developer (2020-Present)
                  </h3>
                  <p className="text-white/80 text-base leading-relaxed font-thin font-inria">
                    Started with graphic design in 2020, then moved into web 
                    design and UI/UX. I focus on creating clean, user-friendly 
                    digital experiences and also build the front-end to bring 
                    them to life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Page3;