import React from 'react'
import logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <div className='w=[100%] bg-gray-200 flex justify-center '>
        <div className='md:p-3 w-[100%] flex flex-col items-center py-4'>
            <div className='flex gap-0 items-center cursor-pointer'>
                <h3 className='text-blue-800 font-bold text-l'>Connect</h3>
                <img src={logo} alt="logo"className="h-10 w-auto mix-blend-multiply translate-y-0.5 " />
            </div>
            <div className='text-xs'>@Copyright 2026</div>
        </div>
      
    </div>
  )
}

export default Footer
