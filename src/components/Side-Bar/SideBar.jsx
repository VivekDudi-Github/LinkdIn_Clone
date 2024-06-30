import React from 'react'
import "./side_bar.css"

function Header() {
  return (
    <>
    <span className=' fixed text-white w-[20%] h-full  p-3 left-[8svw]  flex flex-col justify-between '>
      <div>
          <ul className='flex-col flex'>
              <li class='list'> <i className='fa-brands fa-x-twitter text-3xl hover:bg-gray-700 rounded-xl py-1 px-2 mb-1 ml-1'></i></li>

              <li class='list'> <span  className='hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200'><i className='fa-solid fa-house icon '                  />Home         </span>  </li>
              <li class='list'> <span  className='hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200'><i className='fa-solid fa-magnifying-glass icon'        />Explore      </span>  </li>
              <li class='list'> <span  className='hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200'><i className='fa-regular fa-bell icon '                 />Notifications </span>  </li>
              <li class='list'> <span  className='hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200'><i className='fa-regular fa-envelope  icon'             />Messages      </span>  </li>
              <li class='list'> <span  className='hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200'><i className='fa-solid fa-cloud icon'                   />Grok         </span>  </li>
              <li class='list'> <span  className='hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200'><i className='fa-solid fa-user-group icon'              />Communities  </span>  </li>
              <li class='list'> <span  className='hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200'><i className='fa-brands fa-x-twitter icon'            />Premium      </span>  </li>

              <li class='list'> <span className ="hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200"><i className='fa-solid fa-user icon '                  />Profile       </span></li>

              <li class='list mt-[10px]'> <span className='hover:bg-[#181717] rounded-full py-2 pl-2 pb-3  pr-6 duration-200'><span className=' '> 
                  <i className='fa-solid fa-ellipsis text-xs hover:bg-gray-700 rounded-full m-1 mr-4 py-[1.5px] px-[4px]  border-[3px]  '/></span> More </span></li>

              <li class="list">
                <button className='bg-[#3887ee] text-center font-bold w-[80%] p-2 rounded-full mt-4'>Post</button>
              </li> 
              {/*  more*/}
              {/* <i class="fa-solid fa-bars"></i>
              <i class="fa-regular fa-bookmark"></i> */}  
              {/* <i class="fa-solid fa-bolt-lightning"></i> */}

            </ul>
      </div>    

      <div className=' w-full py-2 flex rounded-full hover:bg-[#181717]'>
            <div className='m-1 border  rounded-full w-10 h-10'>
               </div>
            <div className='flex flex-col w-32 '>
                <p><b>ABC Xyz </b></p>
                <p className=' font-sans text-gray-400'>@NPM_run_Dev</p>
               </div>
            <div className='m-auto'>
              <i className='fa-solid fa-ellipsis '/>
            </div>
      </div> 

    </span>
    </>
  )
}

export default Header