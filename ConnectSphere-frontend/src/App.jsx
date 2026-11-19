import React from 'react'
import Navbar1 from './components/NavbarV1/Navbar1'
import './App.css'
import LandingPage from './pages/LandingPage'
import Footer from './components/footer/Footer'
import {Routes,Route} from 'react-router-dom'
import SignUp from './pages/signup/SignUp'

const App = () => {
  return (
    <div className='bg-gray-100 h-[100%] w-[100%] box-border'>
      <Navbar1/>
      <Routes>
        <Route path='/' element={<LandingPage/>}>  </Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      
      <Footer/>
    </div>
  )
}

export default App
