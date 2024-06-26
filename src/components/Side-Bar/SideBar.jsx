import React from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Header() {
  return (
    <>
    <div className=' text-white w-[30%]   p-3 '>
      <ul className='flex-col flex'>
          <li> <i className='fa-brands fa-x-twitter text-xl hover:bg-gray-700 rounded-xl py-1 px-2 '></i></li>
          <div> <i className='fa-solid fa-house text-xl hover:bg-gray-700 rounded-xl py-1 px-2 '></i></div>
          <div> <i className='fa-solid fa-house text-xl hover:bg-gray-700 rounded-xl py-1 px-2 '></i>Aplhabet</div>
        
          <FontAwesomeIcon icon="fa-sharp fa-solid fa-house" />
          <i class="fa-sharp fa-regular fa-house"></i>
          <li class="fa-regular fa-user"></li>
          <i class="fa-solid fa-magnifying-glass"></i>
          <i class="fa-regular fa-bell"></i>
          <i class="fa-regular fa-envelope"></i>
          <i class="fa-light fa-user-group"></i>
          <i class="fa-solid fa-ellipsis"></i>

          {/*  more*/}
          <i class="fa-solid fa-bars"></i>
          <i class="fa-regular fa-bookmark"></i>
       
          
          <i class="fa-solid fa-bolt-lightning"></i>
        

      </ul>
    </div>
    </>
  )
}

export default Header