import React, { useEffect, useState , useRef } from 'react'
import InPagebox_layout from '../Containers/InPagebox_layout'
import { useDispatch , useSelector } from 'react-redux'
import { ChangeisCreateBox } from '../../Redux/componentSlice'
import TextareaAutosize from 'react-textarea-autosize';

import image1 from '../../assets/2a.jpg'
import image2 from '../../assets/2a.jpg' 




function Create_Post_Page() {

  const dispatch  = useDispatch() 
  const UploadPhotoRef = useRef()

  const isBoxOpen_state = useSelector(state => state.comp?.isCreateBox)
  const [isBoxOpen , setIsBoxOpen] = useState(true) ;

  const [IsLocation , setIslocation] = useState(false)

   
  const [imagesForUpload , setimagesForUpload] = useState([])

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
      <TextareaAutosize className=' w-[90%]  h-10  right-0  p-2  bg-[#181818a5] outline  outline-gray-500 outline-1 focus:outline-gray-50  focus:outline-1 rounded-lg duration-200 ' placeholder='What is happening?!'
      maxRows={6}/>
    </span>
    
    <input className={` w-[40%]  h-10 ml-11 m-2  p-2  bg-[#181818a5] outline  outline-gray-500 outline-1 focus:outline-gray-50  focus:outline-1 rounded-lg duration-200 
                        ${IsLocation ? "" : "hidden"}
             `} placeholder='Location'/>
    
  </div>)



  const handleImagesForUpload = (files) => {
    let array = [...imagesForUpload  , files[0] ] ;
       setimagesForUpload(array)
      }   
  const removeImagesForUpload = (_index) => {
    let newArray = imagesForUpload.filter(( _ , index) => index !== _index )
    setimagesForUpload(newArray)
  }

  return (
    <>
     {isBoxOpen && 
      <InPagebox_layout>
        
    <div className=' relative h-96 duration-200 pb-28'>

  {/* head */}
      <div className=' p-2 flex justify-between duration-200'>
          <button className='w-8 h-8 hover:bg-gray-800 rounded-full'
                  onClick={(e) => dispatch(ChangeisCreateBox(false))}>

              <i className='fa-solid fa-close p-1 '/>
          </button>

          <span className=' font-bold text-blue-500 px-3'>
            Drafts
          </span>
      </div>


  {/* input boxes */}
      <div className='overflow-y-scroll max-h-[100%]'>

        {input_box}

        <div className=' flex px-2 '>
          <div className=' w-10 p-[1px]'>
            <div className=' bg-gray-800   w-[1px] h-full mx-auto   rounded-full  '></div>
          </div>

        <div className='  mx-auto  pt-3 h-auto w-[90%] flex overflow-x-auto duration-200  '>
            
              {imagesForUpload.length > 0  && 
                imagesForUpload.map((image , index) => {
                let imageurl = URL.createObjectURL(image) 
                  
                return <div className={`p-1 h-[300px] rounded-3xl relative flex-shrink-0 ${imagesForUpload.length >1 ? ` w-1/2` : "w-full"} `} key={index}>
                        <img className= " h-full w-full rounded-3xl object-cover relative "
                              src={imageurl}  
                              alt="uploaded photo"
                      />
                        <button className='w-8 h-8 bg-[#5e5c5c6c] hover:bg-[#363535a3] rounded-full absolute top-2 left-2 duration-200'
                          onClick={() => removeImagesForUpload(index)}>

                        <i className='fa-solid fa-close p-1 '/>
                        </button>
                        
                      </div>
                      })}
          </div>
        </div>
      </div>

  {/* bottom */}
       
        <div className=' absolute w-full  bottom-1'> 
            <div className='px-2 py-1 h-9 text-blue-500 w-[34%] min-w-[160px] bg-white block rounded-lg'>
                <i className="fa-solid fa-globe" />
                &nbsp; Everone can reply
            </div>
            <div className='border-t border-gray-500 flex justify-between py-2 text-blue-500'>
                  <div>
                      <button className="fa-regular fa-image post_box_icons" onClick={() => UploadPhotoRef.current.click()}></button>
                      <button className="fa-solid fa-bars-progress post_box_icons"></button>
                      <button className="fa-regular fa-face-smile post_box_icons"></button>
                      <button className="fa-solid fa-calendar-week post_box_icons"></button>
                      <button className="fa-solid fa-location-dot post_box_icons" onClick={()=> setIslocation(!IsLocation)}></button>
                  </div>
                  <input className='hidden' ref={UploadPhotoRef} type="file" accept='image/png, image/jpg, image/jpeg, image/gif '
                          onChange={(e) => handleImagesForUpload(e.target.files)} />

                  <div>
                  <button className='fa-solid fa-plus border border-gray-500 rounded-full py-[3px] px-[4px]' />
                  <button className='bg-[#3887ee] text-center  text-white font-bold rounded-full px-3 mx-2'
                  >Post
                  </button>
                  </div>
            </div>
        </div> 

      </div>

      </InPagebox_layout>
    }
    </>
  ) 
}



export default Create_Post_Page