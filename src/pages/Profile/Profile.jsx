import React from 'react'
import {App_layout , NavBar , Centeral_Bar , Right_bar, NavBar_down} from "../../index"

function Profile() {
  return (
    <>
        <App_layout>
            <span className='sm:inline-block hidden'>
            <NavBar/>
            </span>
            <NavBar_down/>
            <Centeral_Bar/>
            {/* <Right_bar/> */}
        </App_layout>
    </>
  )
}

export default Profile 