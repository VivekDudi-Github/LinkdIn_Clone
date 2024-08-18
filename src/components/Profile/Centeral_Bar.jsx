import React, { useEffect, useState } from 'react'
import Bio_bar from './Bio_bar' 
import { NavLink } from 'react-router-dom'
import {Edit_Profile} from "../../index"
import image from "../../assets/2a.jpg"

import {ChangeEditProfile} from "../../Redux/componentSlice" 
import { adduserData } from '../../Redux/UserSlice'
import {useDispatch , useSelector} from "react-redux"

import { Auth , DB } from '../../firebase_SDK'
import { onAuthStateChanged  } from 'firebase/auth'
import { query , onSnapshot , collection , where  } from 'firebase/firestore'



function Centeral_Bar() {
  const dispatch = useDispatch() ;
  const [userId, setUserId] = useState(null)

  const profileData = useSelector(state => state.UserSlice?.userData)
  




//func- fetch ProfileData
const FetchUserData = () => {
  const collectionRef = collection(DB , "user")
const q = query(collectionRef  , where("userId" , "==" , userId ))
  try {
     onSnapshot(q , (QuerySnapshot) => {
      QuerySnapshot.docs.forEach((item)=>  dispatch(adduserData({...item.data() , docId : item.id})) )  ;
    } )
  } catch (error) {
    console.log(error);
  }
}
  useEffect(() => {
    if(userId){
      FetchUserData()
    }else{
      console.log("id didn't found");
    }
  } , [userId])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth , (user) => {
      if(user){
        setUserId(Auth.currentUser.uid) 
      }else {
        console.log("userIs not available")
      }
    })
    return () => unsubscribe()
  } , []) 




//profile_edit page 
  const EditProfile_state = useSelector(state => state.comp?.isEditProfile) 

  return (
    <>
      <div className=' flex flex-col '> 

          <div className='text-white flex  content-center mt-1 ml-2 '>
              <span className=" w-10 text-white ">
               <NavLink to={'/'}>
                <i className='fa-solid fa-arrow-left hover:bg-gray-900 duration-200 p-2 rounded-full ' ></i>
               </NavLink>
              </span>
              <span className=' ml-8 flex flex-col'>
                  <span className=' font-bold text-lg'>{profileData?.name || "..."}</span> 
                  <span className=' text-[0.7em] text-gray-500 font-normal'>{profileData?.posts || 0} posts</span>
              </span>
          </div>

          <div className='relative'>
            {/* <img className='h-[226px] w-full object-contain absolute z-30' src={image}/> */}
            <img className='h-56 w-full object-cover ' src={profileData.banner}/>
            
            <img className='h-32 w-32 absolute inset-x-5 inset-y-36 rounded-full bg-gray-900 object-cover' src={image}></img>
          </div>
          
          <div className='h-16 text-white text-right p-4'>
                <button className='border-gray-700 border-[1px] rounded-full p-2 px-4 hover:bg-gray-900 duration-200 font-bold'
                        onClick={() => dispatch(ChangeEditProfile(true)) }
                    >
                  Edit profile
                </button>
          </div>

            <span>
              <Bio_bar/>
            </span>
              { EditProfile_state ? <Edit_Profile/> : null }
            
            

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