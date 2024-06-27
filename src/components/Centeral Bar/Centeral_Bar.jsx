import React from 'react'

function Centeral_Bar() {
  return (
    <>

    <i class="fa-solid fa-arrow-left text-white"></i>

    <div className='w-[30%] flex flex-col p-4 '>
 
         <div className='text-white  rounded-xl'>Centeral_Bar</div>
         
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