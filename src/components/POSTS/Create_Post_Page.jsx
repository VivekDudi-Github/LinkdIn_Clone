import React, { useEffect, useState } from 'react'
import InPagebox_layout from '../Containers/InPagebox_layout'
import { useDispatch , useSelector } from 'react-redux'
import { ChangeisCreateBox } from '../../Redux/componentSlice'
import TextareaAutosize from 'react-textarea-autosize';

import image1 from '../../assets/2a.jpg'
import image2 from '../../assets/2a.jpg' 

const images = [
  {
    src : image1
  } , 
  {
    src : image2
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


  const profileImage = useSelector(state => state?.UserSlice?.userData?.mainImage)
  const input_box =( <div className='pt-4 px-3 '>
    <span className='flex '> 
      <img className='  h-9 w-9 mr-2  rounded-full  object-cover ' 
        src={profileImage} alt='profile image'/>
      <TextareaAutosize className=' w-[90%]  h-10  right-0  p-2  bg-[#181818a5] outline  outline-gray-500 outline-1 focus:outline-gray-50  focus:outline-2 rounded-lg duration-150 ' placeholder='What is happening?!'
      maxRows={6}/>

    </span>
  </div>)




  return (
    <>
     {isBoxOpen && 
      <InPagebox_layout>
          
      <div className=' relative h-full overflow-auto duration-200'>

  {/* head */}
        <div className=' p-2 flex justify-between duration-200'>
            <button className='w-8 h-8 hover:bg-gray-800 rounded-full'
                    onClick={(e) => dispatch(ChangeisCreateBox(false))}>

                <i className='fa-solid fa-close p-1 '></i>
            </button>

            <span className=' font-bold text-blue-500 px-3'>
              Drafts
            </span>
        </div>


  {/* input boxes */}

      {input_box}

      <div className='flex px-2 '>
        <div className=' w-10 p-[1px]'>
          <div className=' bg-gray-800   w-1 h-full mx-auto   rounded-full  '></div>
        </div>

        <div className='  mx-auto  pt-3 h-auto w-[90%] flex overflow-hidden duration-200 '>
            {images.length >0 && 
              images.map((image , index) => (
                <img className= {`p-1 min-h-[200px] max-h-[300px] rounded-3xl object-cover   
                                ${images.length >1 ?  "w-1/2" : "w-full"  } `}   
                      src={image.src}  
                      alt="uploaded photo" 
                      key={index} 
              />
              ))}
        </div>
      </div>


  {/* bottom */}
       
        <div className=' absolute w-full  bottom-1'> 
            <div className='p-2 text-blue-500 '>
                <i class="fa-solid fa-globe " /> 
                &nbsp; Everone can see
            </div>
            <div className='border-t border-gray-500 flex justify-between py-2 text-blue-500 '>
                  <div>
                      <button className="fa-regular fa-image post_box_icons"></button>
                      <button className="fa-solid fa-bars-progress post_box_icons"></button>
                      <button className="fa-regular fa-face-smile post_box_icons"></button>
                      <button className="fa-solid fa-calendar-week post_box_icons"></button>
                      <button className="fa-solid fa-location-dot post_box_icons"></button>
                  </div>
                  <button className='bg-[#3887ee] text-center text-white font-bold rounded-full px-3 mx-2'
                  >Post
                  </button>
            </div>
        </div> 

      </div>

      </InPagebox_layout>
    }
    </>
  ) 
}



export default Create_Post_Page