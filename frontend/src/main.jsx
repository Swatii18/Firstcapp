import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './components/signup/Signup.jsx'

const router= createBrowserRouter([
  {
  path:"/signup", 
  element: <Signup/>
},
{
  path:"/", 
  element: <Home/>
}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
  </StrictMode>,
)
