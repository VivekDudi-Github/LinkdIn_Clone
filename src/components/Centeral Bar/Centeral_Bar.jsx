import React from 'react'
import Bio_bar from './Bio_bar' 
import { NavLink } from 'react-router-dom'

function Centeral_Bar() {
  return (
    <>
      <div className='w-[50%] flex flex-col  pt-0 border-x-[1.5px] border-gray-700 '> 

          <div className='text-white flex  content-center mt-1 ml-2 '>
              <span class=" w-10 text-white ">
               <NavLink to={'/home'}>
                <i className='fa-solid fa-arrow-left hover:bg-gray-900 duration-200 p-2 rounded-full ' ></i>
               </NavLink>
              </span>
              <span className=' ml-8 flex flex-col'>
                  <span className=' font-bold text-lg'>ABC Xyz</span> 
                  <span className=' text-[0.7em] text-gray-500 font-normal'>0 posts</span>
              </span>
          </div>

          <div className='relative'><img className='h-56 w-full border '></img>
            <img className='h-32 w-32 absolute inset-x-5 inset-y-36 rounded-full bg-gray-900 '></img>
          </div>
          
          <div className='h-16 text-white text-right p-4'>
              <button className='border-gray-700 border-[1px] rounded-full p-2 px-4 hover:bg-gray-900 duration-200 font-bold'
              >Edit profile</button>
          </div>

            <Bio_bar/>

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