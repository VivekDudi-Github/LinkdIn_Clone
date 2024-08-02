import React from 'react'
import { NavLink } from 'react-router-dom';

const iconList = [
    { icon: 'fa-solid fa-house', nav: '/home' },
    { icon: 'fa-solid fa-magnifying-glass', nav: '/explore' },
    { icon: 'fa-solid fa-cloud', nav: '/grok' },
    { icon: 'fa-solid fa-bell', nav: '/notifications' },
    { icon: 'fa-solid fa-user-group', nav: '/communities' },
    { icon: 'fa-solid fa-envelope', nav: 'messages' },
  ];
  
function NavBar_down() {
  return (
    <nav className='text-white fixed bottom-0 sm:hidden block border-gray-600  border-t-2 w-full h-14'>
        
        <span>
            <button className='bg-blue-600 absolute w-[60px] h-[60px] -top-[5rem] right-7 rounded-full '>
                <i className='fa-solid fa-feather-pointed text-xl m-2 '></i>
            </button>
        </span>
        
        <ul className=' w-full flex justify-around my-1 text-xl'>
            {iconList.map((item) => (
                <li>
                    <NavLink to={item.nav}>
                        <span className='hover:bg-gray-900 rounded-full flex justify-center items-center w-12 h-12 '>
                            <i className={`${item.icon}`} ></i>
                        </span>
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default NavBar_down