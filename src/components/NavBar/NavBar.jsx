import React , {useState} from 'react'
import "./NavBar.css"
import { NavLink } from 'react-router-dom';
// import Image from "../../assets/2a.jpg"
import { useSelector } from 'react-redux';

const listItems = [
  {
    icon: 'fa-solid fa-house',
    text: 'Home' ,
    link : '/'
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
  },
  {
    icon: 'fa-solid fa-gear',
    text: 'Settings'
  } 
];

function NavBar() {
const [showNavBar , setShowNavBar] =  useState(false)
const profileImage = useSelector(state => state?.UserSlice?.userData?.mainImage)

  return (
    <>  
        <nav className={` fixed text-white h-full lg:w-[250px] sm:w-[80px] xl:left-[6.5svw] sm:left-[1svw] p-3 sm:flex flex-col justify-between duration-200
                          border-r-2 border-gray-600 overflow-y-auto overflow-x-hidden z-50 side_navbar ${showNavBar ? "animated" : ""}  `}>
          
        {/*Side icons */}  
          <div>
            <ul className='flex-col flex '>
              <li className='list'> <i className='fa-brands fa-x-twitter text-3xl hover:bg-gray-700 rounded-xl py-1 px-2 mb-1 ml-1'></i></li>


                      { listItems.map((item , index) => (
              <li className='list duration-200' key={index}>
                  <NavLink to={ item.link || `/${item.text.toLowerCase()}`}>
                    <span  className='sideBar_icon'><i className={`${item.icon} icon`}/>
                      <span className=' lg:inline-block sm:hidden nav_text' >
                        {item.text}
                      </span>
                    </span>
                  </NavLink>    
              </li>
                    ))}

              {/* button */}
              <li className="list"><button className='bg-[#3887ee] text-center font-bold w-[50px] lg:w-[80%] p-2 rounded-full mt-4'>
                <span className=' lg:inline-block hidden'>
                  Post
                </span>
                <i className="fa-solid fa-feather-pointed inline-block lg:hidden "></i>
                </button>
              </li>   
            </ul>
          </div>    

        {/* Profile box */}
          <div className=' w-full py-2 flex rounded-full hover:bg-[#181717]'>
            <img className='m-1 rounded-full w-10 h-10 object-cover' src={profileImage} alt='profile_image' />
            {/* <img  ></img> */}
            
            <span className={`lg:flex sm:hidden ${ showNavBar ? 'flex' : 'hidden' }  `}>
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
        
        {/* Upper Bar */}
        <div className='sm:hidden block text-white bg-black  top-1'>
            <div className=' flex justify-center w-full relative p-3'>
              <span className=' w-9 h-9 rounded-full border-2 absolute left-3 cursor-pointer'
                onClick={() => {setShowNavBar(!showNavBar)}}></span>
              <span>
                  <i className='fa-brands fa-x-twitter text-3xl'></i>
              </span>
            </div>
        </div>

        {/* bg */}
        <div className={`h-full w-full fixed bg-[#0000 00a1] duration-200 z-40 text-white ${showNavBar ? "block" : "hidden"} `}
          onClick={()=> {setShowNavBar(false)} } ></div>
        
    </>
  )
}

export default NavBar