import React from 'react'
import Navbar1 from './components/NavbarV1/Navbar1'
import './App.css'
import LandingPage from './pages/LandingPage'

const App = () => {
  return (
    <div className='bg-gray-100 h-[100%] w-[100%] box-border'>
      <Navbar1/>
      <LandingPage/>
    </div>
  )
}

export default App
