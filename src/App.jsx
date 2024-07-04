import { useState } from 'react'

import {Centeral_Bar , SideBar , Container_app, Right_bar } from "./index"


import Post_Box from './components/POSTS/Post_Box'
import Create_Post from './components/POSTS/Create_Post'
import Post_Container from './components/POSTS/Post_Container'

import Signup_home from './pages/SignUp_home/signup_home'
import Home from './pages/Home/Home'

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements , BrowserRouter, Outlet } from 'react-router-dom'
import Profile_page from './pages/Profile/Profile'


function App() {

  return (
    <>
    <div className='bg-black min-h-[100vh]'>

      <Outlet/>

    </div>
    </>
  )
}

export default App
