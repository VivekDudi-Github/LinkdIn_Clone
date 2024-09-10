import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { ChangeisInPageBox } from '../../Redux/componentSlice'

function InPagebox_layout({children}) {
  const dispatch = useDispatch() ;
  const isInPageBox = useSelector(state => state.comp.isInPageBox)
  

  return (
    <>
      {
      isInPageBox &&
        <div className='h-full w-full z-50 fixed left-0 top-0 bg-[#104c9a4f] text-white flex justify-center '>
            <div className='bg-black rounded-3xl  h-[80%] w-2/3 top-20 relative duration-200'>
                <span className=' fa-solid fa-close absolute top-4 left-4'
                onClick = {() => {dispatch(ChangeisInPageBox(false))}}>
                </span>
                {children}
            </div>
        </div>
      }
    </>
  )
}

export default InPagebox_layout