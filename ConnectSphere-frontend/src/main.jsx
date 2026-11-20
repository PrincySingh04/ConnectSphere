// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import {GoogleOauthProvider} from '@react-oauth/google'
// createRoot(document.getElementById('root')).render(
//   <GoogleOauthProvider ClientId={import.meta.env.REACT_APP_GOOGLE_AUTH_KEY}>
//     <StrictMode>
//     <BrowserRouter>
//        <App />
//     </BrowserRouter>
//   </StrictMode>

//   </GoogleOauthProvider>
//   ,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_KEY}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
  </StrictMode>
)
