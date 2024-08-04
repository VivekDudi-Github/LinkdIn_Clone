import React, { useEffect, useState } from 'react'
import Bio_bar from './Bio_bar' 
import { NavLink } from 'react-router-dom'
import {Edit_Profile} from "../../index"
import image from "../../assets/2a.jpg"

import {ChangeEditProfile} from "../../Redux/componentSlice"
import {useDispatch , useSelector} from "react-redux"

function Centeral_Bar() {
  const dispatch = useDispatch() ;


//profile_edit page function
  const EditProfile_state = useSelector(state => state?.comp?.isEditProfile) 
  const [openEditProfile , setOpenEditProfile] = useState(EditProfile_state)
  
  const EditFunc = () => {
    dispatch(ChangeEditProfile(!EditProfile_state))
  }
  
  useEffect(()=> {
    setOpenEditProfile(EditProfile_state)
  } , [EditProfile_state])


  return (
    <>
      <div className=' flex flex-col '> 

          <div className='text-white flex  content-center mt-1 ml-2 '>
              <span class=" w-10 text-white ">
               <NavLink to={'/'}>
                <i className='fa-solid fa-arrow-left hover:bg-gray-900 duration-200 p-2 rounded-full ' ></i>
               </NavLink>
              </span>
              <span className=' ml-8 flex flex-col'>
                  <span className=' font-bold text-lg'>ABC Xyz</span> 
                  <span className=' text-[0.7em] text-gray-500 font-normal'>0 posts</span>
              </span>
          </div>

          <div className='relative'>
            {/* <img className='h-[226px] w-full object-contain absolute z-30' src={image}/> */}
            <img className='h-56 w-full object-cover ' src={image}/>
            
            <img className='h-32 w-32 absolute inset-x-5 inset-y-36 rounded-full bg-gray-900 object-cover' src={image}></img>
          </div>
          
          <div className='h-16 text-white text-right p-4'>
                <button className='border-gray-700 border-[1px] rounded-full p-2 px-4 hover:bg-gray-900 duration-200 font-bold'
                        onClick={() => EditFunc() }
                    >
                  Edit profile
                </button>
          </div>

            <span>
              <Bio_bar/>
            </span>
              { openEditProfile ? <Edit_Profile/> : null }
            
            

          <div className='mx-auto'>
                    <input 
                      type="text" 
                      className='rounded-xl bg-gray-800 px-2 text-white w-[90%]'
                      placeholder='Add Your Post' />
          </div>
        </div>
    </>
  )
}

export default Centeral_Bar