import React from 'react'
import "./Post_Box.css"
import Image from "../../assets/2a.jpg"
import { useSelector } from 'react-redux'

function Create_Post() {
    const userImage = useSelector(state => state.UserSlice?.userData?.mainImage)

    return (
    <>
    <div className='flex  border-y-[0.5px] border-gray-600 pt-2 text-white  max-w-[800px]'>
        <div className=' w-16 p-2 pt-1 pb-3 '>
            <img className=' object-cover rounded-full w-[40px] h-[40px] 'src={userImage} alt='Profile-Photo'/>
        </div>

        <div className='w-full'>
            <div className='text-white pt-3 '>
                <input className='bg-black w-full mb-2 focus:outline-none'
                placeholder='What is happening?!'/>
            </div>
            <div className='border-y border-gray-500 flex justify-between py-2 text-blue-500 '>
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
    </>
  )
}

export default Create_Post