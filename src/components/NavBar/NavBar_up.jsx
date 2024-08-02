import React from 'react'

function NavBar_up() {
  return (
    <div className='sm:hidden block text-white bg-black'>
        <div className=' flex justify-center w-full relative p-3'>
            <span className=' w-9 h-9 rounded-full border-2 absolute left-3'></span>
            <span>
                <i className='fa-brands fa-x-twitter text-3xl  '></i>
            </span>
        </div>
    </div>
  )
}

export default NavBar_up