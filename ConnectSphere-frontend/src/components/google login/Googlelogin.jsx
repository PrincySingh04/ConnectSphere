import React from 'react'
import { GoogleLogin } from '@react-oauth/google'
const Googlelogin = () => {
    const handleOnSucess = (credResponse)=>{
        console.log(credResponse)
    }
  return (
    <div >
      <GoogleLogin
      onSucess={(credentialResponse)=>handleOnSucess(credentialResponse)}
      onError={()=>{
        console.log('login failed');
      }}/>
    </div>
  )
}

export default Googlelogin
