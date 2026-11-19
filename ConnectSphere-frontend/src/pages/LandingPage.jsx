import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='my-4 py-[50px] md:pl-[120px] px-5 md:flex justify-between'>
        <div className='md:w-[40%]'>
            <div className='text-4xl mx-auto text-gray-600'>Welcome To Your Professional Community</div>
            <div className='my-3 flex mx-auto mt-[20px] bg-white gap-2 rounded-3xl w-[70%] text-black cursor-pointer '>
            Google Button
        </div>
        <div className='my-3 flex mx-auto mt-[20px] py-2 px-2 bg-white gap-2 rounded-3xl w-[70%] text-black border-2 cursor-pointer items-center justify-center'>
           Sign in with email
        </div>
        <div className='mx-auto mb-4 text-sm w-[70%] mt-6'>By clicking Continue to join or sign in , you agree to <span className='text-blue-600 cursor-pointer hover:underline'>ConnectShpere's User Agreement</span>,<span className='text-blue-600 cursor-pointer hover:underline'>Privacy Policy</span>
                 and <span className='text-blue-600 cursor-pointer hover:underline'>Cookie Poilicy</span>
        </div>
        <Link to = {'/signup'} className='mx-auto text-center mb-4 text-lg w-[70%] mt-4'>
          New to ConnectSphere ?<span className='text-blue-600 cursor-pointer hover:underline'>Join now</span>
          
        </Link>

        </div>
        <div className='md:w-[50%] h-120'>
          <img src={"https://images.unsplash.com/photo-1758691737543-09a1b2b715fa?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"} alt="image" className='w-full h-full'/>
        </div>
      
    </div>
  )
}

export default LandingPage
