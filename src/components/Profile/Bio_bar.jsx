import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Auth } from '../../firebase_SDK'


function Bio_bar() {
const profileData = useSelector(state => state.UserSlice?.userData)

const date = new Date(Auth?.currentUser?.metadata?.creationTime)



const joinDate = (date.toLocaleDateString('en-Us' , {month : 'long' , year : 'numeric'}));


  return (
    <>
    <div className='text-white pl-4'>
      <p className='font-bold text-xl'>{profileData?.name || "Name" }</p>
      <p className='text-base text-gray-500 font-sans'>{profileData?.userName || "@user_name"}</p>
      <p className='text-base py-2'>{profileData?.bio}</p>
    </div>

    <div className='flex flex-wrap text-gray-500 text-base pl-2 '>
      {profileData?.location && <div className='mr-2'><i className='fa-solid fa-location-dot mx-2'       /><span >{profileData.location}</span></div>}
      {profileData?.website &&  <div className='mr-2'><i className="fa-solid fa-link mx-2 "       /><Link to={`${profileData.website}`} target='_blank' className='text-blue-500 hover:underline'>{profileData.website.slice(0 ,16)}..</Link></div>}
      <div className='mr-2'><i className="fa-solid fa-calendar-days mx-2"     /><span >Joined {joinDate}</span></div>
      {/* <div className='mr-2'><i className='fa-solid fa-check-to-slot mx-2'   /><span >Verified Phone Number</span></div> */}
    </div>
    <div className='my-2 text-white  '>
      <span className='pl-4'><b>{profileData?.following || 0}</b><span className=' text-gray-500'> Following </span></span>
      <span className='pl-4'><b>{profileData?.followers || 0}</b><span className=' text-gray-500'> Followers </span></span>
    </div>
    </>
  )
}

export default Bio_bar