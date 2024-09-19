import React from 'react'
import {useSelector ,} from 'react-redux'

function InPagebox_layout({children}) {
  const isInPageBox = useSelector(state => state.comp.isInPageBox)
  

  return (
    <>
      
        <div className='h-full w-full z-50 fixed left-0 top-0 bg-[#104c9a4f] text-white flex justify-center '>
            <div className='bg-black rounded-3xl  h-[80%] w-2/3 top-20 relative duration-200 flex flex-col'>
                {children}
            </div>
        </div>
      
    </>
  )
}

export default InPagebox_layout