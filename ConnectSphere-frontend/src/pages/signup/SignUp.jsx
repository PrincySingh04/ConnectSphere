import React from 'react'

const SignUp = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
        <div className='text-4xl mb-5'>Make the most of your Professionl life</div>
        <div className='w-[85%} md:w-[28%] shadow-xl rounded-xl box p-10  transition-transform duration-300 ease-out hover:scale-110'>
            <div className='flex flex-col gap-4'>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Email'/>
                    
                    
                </div>
                <div>
                    <label htmlFor="Password">Password</label>
                    <input type="password" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Password'/>
                </div>
                <div>
                    <label htmlFor="Full Name">Full Name</label>
                    <input type="text" className='w-full text-xl border-2 rounded-lg px-5 py-1' placeholder='Full Name'/>
                </div>
                <div className='w-full bg-blue-600 text-white py-3 px-4 text-center text-xl cursor-pointer my-2 rounded-xl '>
                    Register

                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SignUp
