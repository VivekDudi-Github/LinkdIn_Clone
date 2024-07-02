import React from 'react'

function Bio_bar() {
  return (
    <>
    <div className='text-white pl-4'>
      <p className='font-bold text-xl'>Abc Dev</p>
      <p className='text-base text-gray-500 font-sans'>@Learning_</p>
      <p className='text-base py-2'>Tech Enthusiast <br/> A student <br/><br/>Learning along with You Friends  </p>
    </div>

    <div className='flex flex-wrap text-gray-500 text-base pl-2 '>
      <div className='mr-2'><i className='fa-solid fa-location-dot mx-2'       /><span >India </span></div>
      <div className='mr-2'><i class="fa-solid fa-link mx-2 "       /><a>github-abc-npm-run-dev.com</a></div>
      <div className='mr-2'><i class="fa-solid fa-calendar-days mx-2"     /><span >Joined March 2020</span></div>
      <div className='mr-2'><i className='fa-solid fa-check-to-slot mx-2'   /><span >Verified Phone Number</span></div>
    </div>
    <div className='my-2 text-white  '>
      <span className='pl-4'><b>825</b><span className=' text-gray-500'> Following </span></span>
      <span className='pl-4'><b>927</b><span className=' text-gray-500'> Followers </span></span>
    </div>
    </>
  )
}

export default Bio_bar