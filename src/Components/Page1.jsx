import React from 'react'
import vector2 from '../assets/Vector 1.svg'
import vector1 from '../assets/Frame 5.svg'
import star from '../assets/game-icons_star-cycle.svg'
import dot from '../assets/dot.svg'
import '../App.css'
import Social from './Social'

const Page1 = () => {
  return (
    <div className='flex w-full h-[90vh]'>
        <div className='w-[10%] items-center  hidden md:flex relative'>
            <div className='ml-[-20px] mb-[18rem]'>
                <Social/>
            </div>

        </div>



        <div className='w-[100%] md:w-[80%] flex flex-col justify-center items-center'>
            {/* Mobile*/}

            <div className='text-[#f9f9f9] mb-[7rem] md:hidden'>
            <h1 className='font-inria font-light italic text-[36px] mb-[-8px]'>Hey!I'm Daniel</h1>
            <h2 className='font-inria text-[62px] leading-[0.9] relative '>Web Designer <br/>
                & Devel<span className='relative ml-[40px]'><img className='absolute translate-x-[211px] h-[35px] translate-y-[-35px]' src={star} alt="star"/>per</span></h2>
                </div>
            {/* Desktop*/}
            <div className='text-[#f9f9f9] mb-[7rem] md:block hidden'>
            <h1 className='font-inria font-light italic text-[48px] leading-[1] mb-[-8px]'>Hey!I'm Daniel</h1>
            <h2 className='font-inria lg:text-[128px] leading-[0.9] md:text-[100px]'>Web Designer <br/>
                & Devel<span className='relative ml-[57px]'><img className=' md:translate-x-[333px] md:h-[55px] absolute translate-y-[-70px] lg:translate-x-[430px] lg:h-[60px]' src={star} alt="star"/>per</span></h2>
                </div>
                
                {/* Smaller device */}
                <div className='social-arrow-container flex md:hidden justify-between w-full h-[20%] '>
                    {/* Social */}
                    <div className='social md:hidden'>
                        <Social/>
                    </div>

                    {/* Dot for mobile*/}
                    <div className='items-center h-full flex '>
                    <div className='border-2 cursor-pointer h-[60px] w-[27px] rounded-[60px] flex justify-center'>
                        <img className='h-3 float-dot'src={dot} alt="" />
                    </div>
                    </div>

                    {/* Arrow for mobile*/}
                    <div className='w-[10%] md:hidden items-end justify-end ml-[35px]'>
                    <div className='flex relative flex-col gap-[10px] mr-[5px] mb-[40px]'>
                    <img className='h-[40px]'src={vector1} alt="" />
                    <img className='h-[300px]'src={vector2} alt="" />
                    </div>
                    </div>

                </div>

                <div>
                {/* Dot for Desktop*/}

                <div className=' hidden md:flex border-2 cursor-pointer h-[60px] w-[27px] rounded-[60px] justify-center'>
                        <img className='h-3 float-dot'src={dot} alt="" />
                    </div>
                    </div>


        </div>


        {/* right Column - arrow vector for desktop*/}
        <div className='w-[10%] hidden md:flex items-end justify-end'>
            <div className='flex flex-col gap-[10px] mr-[5px] mb-[40px]'>
            <img className='h-[43px]'src={vector1} alt="" />
            <img src={vector2} alt="" />
            </div>
        </div>
    </div>
    
  )
}

export default Page1