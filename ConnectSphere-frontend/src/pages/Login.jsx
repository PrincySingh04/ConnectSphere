import { GoogleLogin } from '@react-oauth/google'
import React from 'react'
import { Link } from 'react-router-dom'
import Googlelogin from '../components/google login/Googlelogin'
const Login = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='w-[85%} md:w-[28%] shadow-xl rounded-xl box p-10  transition-transform duration-300 ease-out hover:scale-110'>
        <div className='text-3xl'>Sign in</div>
            <div className='my-5 ' ><GoogleLogin/></div>
        

        <div className='flex items-center gap-2'>
                    <div className='border-b-1 border-gray-400 w-[45%]'/>
                    <div>or</div><div className='border-b-1 border-gray-400 w-[45%]'></div>
            </div>
        <div className='flex flex-col gap-4'>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Email'/>
                    
                    
                </div>
                <div>
                    <label htmlFor="Password">Password</label>
                    <input type="password" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Password'/>
                </div>
                
                <div className='w-full bg-blue-600 text-white py-3 px-4 text-center text-xl cursor-pointer my-2 rounded-xl '>
                    Sign in

                </div>
                 <div className='mt-4 mb-14'>New to ConnectSphere ?<Link to='/signup' className='text-blue-600 cursor-pointer'>Join now</Link></div>
               

                </div>

    </div> 
      
    </div>
  )
}

export default Login

