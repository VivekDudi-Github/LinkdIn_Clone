import React from 'react'
import "./side_bar.css"

function Header() {
  return (
    <>
    <div className=' text-white w-[30%] h-full p-3 '>
      <ul className='flex-col flex'>
          <li class='list'> <i className='fa-brands fa-x-twitter text-3xl hover:bg-gray-700 rounded-xl py-1 px-2 mb-1 ml-1'></i></li>

          <li class='list'> <span  className='hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200'><i className='fa-solid fa-house icon '                  />Home         </span>  </li>
          <li class='list'> <span  className='hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200'><i className='fa-solid fa-magnifying-glass icon'        />Explore      </span>  </li>
          <li class='list'> <span  className='hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200'><i className='fa-regular fa-bell icon '                 />Notification </span>  </li>
          <li class='list'> <span  className='hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200'><i className='fa-regular fa-envelope  icon'             />Message      </span>  </li>
          <li class='list'> <span  className='hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200'><i className='fa-solid fa-cloud icon'                   />Grok         </span>  </li>
          <li class='list'> <span  className='hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200'><i className='fa-solid fa-user-group icon'              />Communities  </span>  </li>
          <li class='list'> <span  className='hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200 '> <i className='fa-brands fa-x-twitter icon'            />Premium      </span>  </li>


          <li class='list'> <span className ="hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200 "> <i className='fa-solid fa-user icon '/>Profile </span></li>

          <li class='list'> <span className='hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200'><span className=' '> 
              <i className='fa-solid fa-ellipsis text-xs hover:bg-gray-700 rounded-full m-1 px-[3px]  border-[3px] mr-3 '/></span> More </span></li>

          <li class="list">
            <button className='bg-[#3887ee] text-center font-bold w-full p-2 rounded-full mt-2'>Post</button>
          </li> 




          {/*  more*/}
          {/* <i class="fa-solid fa-bars"></i>
          <i class="fa-regular fa-bookmark"></i> */}  
          {/* <i class="fa-solid fa-bolt-lightning"></i> */}
        

      </ul>
    </div>
    </>
  )
}

export default Header