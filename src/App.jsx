import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Centeral_Bar , SideBar , Container_app, Right_bar } from "./index"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-black h-[100vh]'>
    <SideBar/>
    <Container_app>
         
          <Centeral_Bar/>
          <Right_bar/>
    </Container_app>
    </div>
    </>
  )
}

export default App
