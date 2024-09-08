import React from 'react'

function InPagebox_layout({children}) {
  return (
    <div className='h-full w-full z-50 fixed left-0 bg-[#104c9a4f] text-white flex justify-center '>
        <div className='bg-black rounded-3xl  h-[80%] w-1/2 top-20 relative duration-200'>
            <span className=' fa-solid fa-close absolute top-4 left-4'>

            </span>
            {children}
        </div>
    </div>
  )
}

export default InPagebox_layout