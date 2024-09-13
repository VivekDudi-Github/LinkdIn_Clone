import React, { useEffect, useState } from 'react'
import InPagebox_layout from '../Containers/InPagebox_layout'
import { useDispatch , useSelector } from 'react-redux'
import { ChangeisCreateBox } from '../../Redux/componentSlice'

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

        <button className='w-8 h-8 hover:bg-gray-800 rounded-full left-2 mr-4 absolute top-2 '
                onClick={(e) => dispatch(ChangeisCreateBox(false))}>
            <i className='fa-solid fa-close p-1 '></i>
        </button>

      </InPagebox_layout>
    }
    </>
  ) 
}

export default Create_Post_Page