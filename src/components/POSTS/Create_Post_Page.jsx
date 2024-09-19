import React, { useEffect, useState } from 'react'
import InPagebox_layout from '../Containers/InPagebox_layout'
import { useDispatch , useSelector } from 'react-redux'
import { ChangeisCreateBox } from '../../Redux/componentSlice'

import image from '../../assets/2a.jpg' 

const images = [
  {
    src : image
  } , 
  {
    src : image
  } , 
]


function Create_Post_Page() {
  const dispatch  = useDispatch() 
  const isBoxOpen_state = useSelector(state => state.comp?.isCreateBox)
  
  const [isBoxOpen , setIsBoxOpen] = useState(true) ;
  
  useEffect(() => {
    const changeState = () => {
      setIsBoxOpen(isBoxOpen_state)
    } ;
    return changeState() ;
  } , [isBoxOpen_state])


  return (
    <>
     {isBoxOpen && 
      <InPagebox_layout>
{/* head */}
      <div className=' p-2 flex justify-between'>
          <button className='w-8 h-8 hover:bg-gray-800 rounded-full'
                  onClick={(e) => dispatch(ChangeisCreateBox(false))}>

              <i className='fa-solid fa-close p-1 '></i>
          </button>

          <span className=' font-bold text-blue-500 px-3'>
            Drafts
          </span>
      </div>

      <div className='p-4 border-[1px]'>
          <span className='flex '> 
            <img className=' h-10 w-10 mr-2  rounded-full   border-[1px]  object-cover' />
            <textarea className=' w-[90%] h-10  right-0  p-2 bg-black border-2' placeholder='What is happening?!'/>
         
         </span>
      </div>

      <div className='mx-auto border-2 h-auto w-[90%] flex overflow-hidden '>
          {images.length >0 && 
            images.map((image , index) => (
              <img className=""   src={image.src}  alt="uploaded photo" key={index} />
            ))}
      </div>


      </InPagebox_layout>
    }
    </>
  ) 
}

export default Create_Post_Page