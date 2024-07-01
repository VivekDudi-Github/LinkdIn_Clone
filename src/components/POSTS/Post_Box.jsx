import React from 'react'
import "./Post_Box.css"

function Post_Box() {
  return (
    <>
      <div className= ' w-full border-[1px] border-gray-600 flex text-white  '>
          <div className=' w-14 p-2 pt-1 pb-3  '>
              <img className='border rounded-full w-[40px] h-[40px] '></img>
          </div>

          <div className='flex flex-col'>
            <div className='relative '>
              <span className='font-bold mr-1'>ACD Code</span>
              <span className=' text-sm text-gray-500'> @ACD_code · 22h</span>
              <i className='fa-solid fa-ellipsis absolute right-1 p-2 hover:bg-gray-800 hover:text-cyan-500 text-gray-600 duration-200 rounded-full '></i>
            </div>
            <div>
              The more you code the more you understand how little you know.
            </div>

            <div className=' w-[100%]  rounded-xl'>
            </div>

            <div className='flex justify-between pt-2 pb-1 text-sm text-gray-600'>
              <span className='hover:text-cyan-500'>  <button class="fa-regular fa-comment post_box_icons "/>14</span>
              <span className='hover:text-[#1ac71a]'> <button class="fa-solid fa-retweet post_box_icons "/>4</span>
              <span className='hover:text-[#ff00bf]'> <button class="fa-solid fa-heart post_box_icons" />132</span>
              <span className='hover:text-cyan-500'>  <button class="fa-solid fa-chart-simple post_box_icons "/>4k</span>
              <span> <button class="fa-solid fa-bookmark hover:text-cyan-500 post_box_icons"/>
                     <button class="fa-solid fa-arrow-up-from-bracket hover:text-cyan-500 post_box_icons" /></span>
            </div>

          </div>
         
          

      </div>
    </>
  )
}

export default Post_Box