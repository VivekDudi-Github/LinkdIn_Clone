import React from 'react'

export default function SignUp_Page() {

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const allDays = Array(30).fill(0).map((_, i) => i + 1);

    return (
    <>
     <div className=' w-full fixed top-0 h-[100vh] bg-[#1f177443] flex justify-center items-center py-10'>
       <div className='bg-black rounded-2xl w-[37rem] h-[99%] flex flex-col items-center text-center py-2 pt-6 relative '>
         
       <button className="absolute top-2 left-2 p-3 py-1 text-lg rounded-full hover:bg-gray-600 duration-200 du"><i className='fa-solid fa-xmark text-white '></i></button>
       <div><i className='fa-brands fa-x-twitter text-4xl mb-8'></i></div>

       <div className='w-[60%] pl-6'>
             <div className='text-3xl text-left font-bold mb-8 '>Create You Account</div>
        </div>
            <div className='border-[1px] border-gray-600 p-2 py-4 mb-8'>
                    <input 
                        className=' w-96 bg-black focus:outline-none'
                        placeholder='Name'/>
            </div>
            <div className='border-[1px] border-gray-600 p-2 py-4 mb-8'>
                    <input 
                        className=' w-96 bg-black focus:outline-none'
                        placeholder='Email'/>
            </div>
            <div className='w-96  '>
                <div className=' text-base font-bold text-left '>Date of birth</div>
                <div className=' text-xs text-left text-gray-600'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</div>
            </div>
            <div className='flex w-96 justify-around my-8'>
                <div className='m-1 border-[1px] border-gray-600 text-xl'>
                    <select className=' p-2 bg-black focus:outline-blue-500' placeholder="Month" >
                        { months.map((month) => 
                            <option className='text-base'>{month}</option>)}
                    </select>
                </div>
                <div className='m-1 border-[1px] border-gray-600 text-xl'>
                    <select className=' p-2 bg-black focus:outline-blue-500' placeholder="Month" >
                        { allDays.map((day) => 
                            <option className='text-sm'>{day}</option>)}
                    </select>
                </div>
                <div className=' p-2 m-1 border-[1px] border-gray-600 text-xl'>
                    <input className='bg-black focus:outline-blue-500 w-24' placeholder='Year'/>
                    
                </div>
            </div>
            
            <div><button className=' bg-white rounded-full text-black font-sans font-bold p-4 my-2 w-[400px]  hover:bg-gray-300 duration-200'>Next</button></div>
       </div>
    </div>
    
    </>
  )
}
