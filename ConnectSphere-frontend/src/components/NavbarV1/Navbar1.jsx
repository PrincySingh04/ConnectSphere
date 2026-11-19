import React from 'react'
import logo from '../../assets/Logo.png'

const Navbar1 = () => {
  return (
    <nav className='bg-gray-100 md:px-[100px] px-[20px] flex justify-between py-4 box-border'>
      <div className='flex justify-between'>
        <div className='flex gap-0 items-center cursor-pointer transition-transform duration-300 ease-out hover:scale-110  logo-orbit flex items-center gap-1 cursor-pointer w-fit'>
          <h3 className="text-4xl font-bold bg-gradient-to-r from-[#083d6b] to-[#00acc1] bg-clip-text text-transparent ">Connect</h3>
          <img src={logo} alt="logo"className="h-20 w-auto mix-blend-multiply translate-y-0.5 " />
        </div>
 
      </div>
      <div className='flex box-border md:gap-4 gap-2 justify-center items-center'>
        <div className='md:px-4 py-2 box-border  text-blue-800 rounded-3xl text-xl hover:bg-gradient-to-r from-[#083d6b] to-[#00acc1] cursor-pointer'>Join now

        </div>
        <div className='md:px-4 py-2 box-border border-1 text-blue-800 hover:bg-gradient-to-r from-[#083d6b] to-[#00acc1] border-blue-800 rounded-3xl text-xl  cursor-pointer'>Sign in 

        </div>


      </div>

    </nav>
  )
}

export default Navbar1

