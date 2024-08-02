import React from 'react'
import {NavBar, NavBar_down, NavBar_up} from "../../index"
import "./App_layout.css"

function App_layout({children}) {

  return (
    <>
    <div className=' justify-start xl:ml-[26svw] lg:ml-[260px] sm:ml-[89px] duration-200 sm:flex flex-col '>
      {/* <div><NavBar_up/></div> */}
      <div><NavBar/></div>
      <NavBar_down/>
      
    {children}
    </div>

  </>
  )

}

export default App_layout