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
        <div className='w-[10%] flex items-center relative'>
            <div className='ml-[-20px] mb-[18rem]'>
                <Social/>
            </div>

        </div>



        <div className='w-[80%] flex flex-col justify-center items-center'>
            {/* Mobile*/}

            <div className='text-[#f9f9f9] mb-[7rem] lg:hidden'>
            <h1 className='font-inria font-light italic text-[36px] leading-[1] mb-[-8px]'>Hey!I'm Daniel</h1>
            <h2 className='font-inria text-[62px] leading-[0.9]'>Web Designer <br/>
                & Devel<span className='relative ml-[57px]'><img className='absolute' src={star} alt="star"/>per</span></h2>
                </div>
            {/* Desktop*/}
            <div className='text-[#f9f9f9] mb-[7rem] lg:block hidden'>
            <h1 className='font-inria font-light italic text-[48px] leading-[1] mb-[-8px]'>Hey!I'm Daniel</h1>
            <h2 className='font-inria text-[128px] leading-[0.9]'>Web Designer <br/>
                & Devel<span className='relative ml-[57px]'><img className='absolute translate-y-[-70px] translate-x-[430px]' src={star} alt="star"/>per</span></h2>
                </div>
                
                <div>

                    
                    <div className='border-2 cursor-pointer h-[60px] w-[27px] rounded-[60px] flex justify-center'>
                        <img className='h-3 float-dot'src={dot} alt="" />
                    </div>
                </div>
        </div>



        <div className='w-[10%] flex items-end justify-end'>
            <div className='flex flex-col gap-[10px] mr-[5px] mb-[40px]'>
            <img className='h-[43px]'src={vector1} alt="" />
            <img src={vector2} alt="" />
            </div>
        </div>
    </div>
    
  )
}

export default Page1