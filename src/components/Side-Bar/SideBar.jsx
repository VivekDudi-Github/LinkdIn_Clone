import React from 'react'
import "./side_bar.css"
import { NavLink } from 'react-router-dom';


const listItems = [
  {
    icon: 'fa-solid fa-house',
    text: 'Home'
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    text: 'Explore'
  },
  {
    icon: 'fa-regular fa-bell',
    text: 'Notifications'
  },
  {
    icon: 'fa-regular fa-envelope',
    text: 'Messages'
  },
  {
    icon: 'fa-solid fa-cloud',
    text: 'Grok'
  },
  {
    icon: 'fa-solid fa-user-group',
    text: 'Communities'
  },
  {
    icon: 'fa-brands fa-x-twitter',
    text: 'Premium'
  },
  {
    icon: 'fa-solid fa-user',
    text: 'Profile'
  }
];

function Header() {



  return (
    <>
    <nav className=' fixed text-white h-full lg:w-[250px] w-[80px]  xl:left-[8svw] left-[1svw] p-3  flex flex-col justify-between duration-200
                      border-r-2 border-gray-600 '>
      
      <div>
        {/* side icons */}
          <ul className='flex-col flex '>
              <li className='list'> <i className='fa-brands fa-x-twitter text-3xl hover:bg-gray-700 rounded-xl py-1 px-2 mb-1 ml-1'></i>
              </li>

                    { listItems.map((item , index) => (
              <li className='list duration-200' key={index}>
                  <NavLink to={`/${item.text.toLowerCase()}`}>
                    <span  className='sideBar_icon'><i className={`${item.icon} icon`}/>
                      <span className=' lg:inline-block hidden' >
                        {item.text}
                      </span>
                    </span>
                  </NavLink>    
              </li>
                     ))}

              <li className='list mt-[10px]'>
                <span className='sideBar_icon '>
                  <span><i className='fa-solid fa-ellipsis text-xs hover:bg-gray-700 rounded-full m-1 mr-4 py-[1.5px] px-[4px]  border-[3px]  '/></span> 
                    <span className=' lg:inline-block hidden'>
                    More  
                    </span>
                </span>
              </li>

              {/* button */}
              <li className="list"><button className='bg-[#3887ee] text-center font-bold w-[50px] lg:w-[80%] p-2 rounded-full mt-4'>
                <span className=' lg:inline-block hidden'>
                  Post
                </span>
                <i class="fa-solid fa-feather-pointed inline-block lg:hidden "></i>
                </button>
              </li>   
          </ul>
      </div>    

{/* Profile box */}
      <div className=' w-full py-2 flex rounded-full hover:bg-[#181717]'>
            <div className='m-1 border  rounded-full w-10 h-10'>
            {/* <img  ></img> */}
            </div>
            
            <span className=' lg:flex hidden'>
                 <div className='flex flex-col w-32 '>
                    <p><b>ABC Xyz </b></p>
                    <p className=' font-sans text-gray-400'>@NPM_run_Dev</p>
                </div>

                <div className='m-auto'>
                  <i className='fa-solid fa-ellipsis '/>
                </div>
            </span>
      </div> 

    </nav>
    </>
  )
}

export default Header