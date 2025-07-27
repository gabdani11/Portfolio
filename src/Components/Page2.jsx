import React from 'react'
import vector2 from '../assets/Vector 1.svg'
import vector1 from '../assets/Frame 5.svg'
import star from '../assets/game-icons_star-cycle.svg'

const Page2 = () => {
  return (
    <div id='about' className='min-h-screen'>
      {/*Resource Section*/}
      <div>
<div className='responsive h-[90%] w-[100%] md:hidden relative '>
        <div className='pt-16 gap-14 flex flex-col w-[85%] z-10 relative'>
          <h1 className='font-inria text-[#f9f9f9] text-[62px] mb-7'>Ab<span className='relative ml-[57px]'><img className='absolute h-[55px] translate-y-[-75px] translate-x-[75px]' src={star} alt="star"/>ut</span> me</h1>
          <p className='font-inria text-[18px] leading-[1.4] text-[#f9f9f9] pr-32'>Hi, I'm Daniel — a self-taught UI/UX designer and web developer passionate about crafting beautiful, user-friendly, and intuitive digital experiences. I specialize in designing and developing websites that not only look great but also deliver the best user interface and seamless user experience. My goal is to build clean, modern, and responsive websites that feel comfortable and enjoyable to use.</p>
          


        </div>
        <div className='bg-[rgba(65,78,130,0.5)] h-[38rem] w-[70%] absolute right-2 top-10 z-1]'>
  
          
          
            
          </div>
          <img className='absolute top-0 translate-x-[100px] translate-y-[200px]' src="./myphoto.svg" alt="" />
          
          
          <div className='flex gap-44 pl-[19px]'>
          <img className='-rotate-90'src={vector1} alt="" />
          <img className='-rotate-90'src={vector2} alt="" />
        </div>
          

      </div>
      </div>
    <div className='h-[55rem] w-full items-center justify-between overflow-hidden hidden md:flex'>
      <div className=' w-[50%] h-[70%]'>
        <h1 className='font-inria text-[#f9f9f9] text-[128px] mb-7'>Ab<span className='relative ml-[57px]'><img className='absolute translate-y-[-112px] translate-x-[150px]' src={star} alt="star"/>ut</span> me</h1>
        <p className='font-inria text-[24px] leading-[1.4] text-[#f9f9f9]'>Hi, I'm Daniel — a self-taught UI/UX designer and web developer passionate about crafting beautiful, user-friendly, and intuitive digital experiences. I specialize in designing and developing websites that not only look great but also deliver the best user interface and seamless user experience. My goal is to build clean, modern, and responsive websites that feel comfortable and enjoyable to use.</p>
        <div className='flex gap-44 pl-[19px]'>
          <img className='-rotate-90'src={vector1} alt="" />
          <img className='-rotate-90'src={vector2} alt="" />
        </div>
        </div>
        
      <div className='bg-[rgba(65,78,130,0.5)] overflow-hidden h-[90%] mb-[50px] w-[40%] flex justify-end flex-col items-center'>
        <div className='overflow-hidden '>
        <img src="./myphoto.svg" alt="" />
        </div>
      </div>
      
        
    </div>
    </div>
  )
}

export default Page2