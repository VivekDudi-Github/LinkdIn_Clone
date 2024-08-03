import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {Route , RouterProvider , createBrowserRouter , createRoutesFromElements} from "react-router-dom"
import { Signup_home , Home , Profile , Not_found} from "./Index_pages.js"
import store from "./Redux/store.js"
import { Provider } from 'react-redux'

const rooter = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/*' element={<Not_found/>} />
      <Route path='' element={<Signup_home/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/profile' element={<Profile/>}/>
      {/* <Route path='/edit_profile' element={<Edit_Profile/>}/> */}
    
    </Route>
  )
) 


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={rooter} />
    </Provider>
  </React.StrictMode>,
)
