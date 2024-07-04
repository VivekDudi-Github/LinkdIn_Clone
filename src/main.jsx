import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {Route, Router , RouterProvider , createBrowserRouter , createRoutesFromElements} from "react-router-dom"
import { Signup_home , Home , Profile} from "./Index_pages.js"


const rooter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Signup_home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/Profile' element={<Profile/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rooter} />
  </React.StrictMode>,
)
