import React from 'react'
import {NavBar, NavBar_down} from "../../index"
import "./App_layout.css"

function App_layout({children}) {

  return (
    <>
    <div className=' justify-start xl:ml-[26vw] lg:ml-[260px] sm:ml-[89px] duration-200 sm:flex flex-col '>
      
      
    {children}
    </div>

  </>
  )

}

export default App_layout