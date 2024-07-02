import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Centeral_Bar , SideBar , Container_app, Right_bar } from "./index"


import Post_Box from './components/POSTS/Post_Box'
import Create_Post from './components/POSTS/Create_Post'
import Post_Container from './components/POSTS/Post_Container'

import Login_home from './components/Login_Logout/Login_home'



function App() {

  return (
    <>
    <div className='bg-black h-[100vh]'>
     {/* <SideBar/>
    <Container_app> */}
    {/*      <Post_Container>
          <Create_Post/>
          <Post_Box/>  
          </Post_Container>
       
           */}
          
          {/* <Centeral_Bar/>
          <Right_bar/>
    </Container_app> */}
    
    <Login_home/>


    </div>
    </>
  )
}

export default App
