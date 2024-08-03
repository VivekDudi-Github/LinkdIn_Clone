import React ,{useEffect , useState} from 'react'
import "./Edit_profile.css"
import image from "../../assets/17160955011.jpg"

import { useSelector , useDispatch } from 'react-redux'

function Edit_Profile() {
    const dispatch = useDispatch() ;
    


    
//Functionality for DoB Feild
const [DoB , setDoB] = useState({
    Year : 2000 , 
    Day : "" , 
    Month : "" , 
}) 

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const monthsWith31Days = ["January", "March", "May", "July", "August", "October", "December"];
const monthsWith30Days = ["April", "June", "September", "November"];

let [allDays , setAllDays] = useState([]) ;

useEffect(()=> {
    if(monthsWith31Days.includes(DoB.Month)){
        setAllDays(Array(31).fill(0).map((_, i) => i + 1));
}else if (monthsWith30Days.includes(DoB.Month)){
    setAllDays(Array(30).fill(0).map((_, i) => i + 1) )
}else if(DoB.Month === "February" && DoB.Year % 4 == 0 ) {
    setAllDays(Array(29).fill(0).map((_, i) => i + 1)) 
}else if (DoB.Month === "February" && DoB.Year % 4 != 0  ){
    setAllDays(Array(28).fill(0).map((_, i) => i + 1)) 
}
} , [DoB.Month , DoB.Year])



  return (
    <>
    <div className=' fixed rounded-lg text-white h-full w-full left-0 bg-[#05234a4f] flex justify-center items-center z-50'> 
        <div className=' sm:w-[600px] sm:h-[600px] h-full w-full rounded-none sm:rounded-3xl bg-[#000000ed] edit_profile_container
                            overflow-y-scroll '>
            <form className=' border-b'>
                <header className='p-4 sticky top-0 flex justify-start bg-[#00000089] z-50 form_header '>
                    <button className='w-6 h-6 hover:bg-gray-800 rounded-full left-4 mr-4'>
                        <i className='fa-solid fa-close p-1 '></i>
                    </button>
                    <span className='text-xl w-96' >
                        Edit Profile 
                    </span>
                    <button className=' pt-[0px] px-2 text-sm rounded-full bg-white text-black ml-20 '>
                        <b>Save</b>
                    </button>
                </header>

                {/* Profiile-Photos */}
                <div className='w-full border-gray-500 border h-40 relative mb-32 '>
                <div className='w-36 border h-36 absolute rounded-full top-[70%] left-4 bg-black flex justify-center items-center '>
                    {/* <img src={image} /> */}
                    {/* <i class="fa-solid fa-camera-rotate text-2xl bg-[#43414191] opacity-50 p-3 rounded-full "></i> */}
                </div>
                </div>

            {/* Name-Input */}
                <div className=' h-16 p-2 mx-4 mb-8 text-gray-500 rounded-md border-[1px] border-gray-500 focus-within:text-blue-400  focus-within:border-blue-500 '>
                    <div className=' text-sm flex justify-between '>
                        <heading>Name</heading>
                        <span className='focus-within:block'>0/50</span> 
                    </div>
                    <input className='w-full bg-black outline-none text-white' />
                </div>
                
            {/* Bio-Input */}
                <div className=' p-2  mx-4 mb-8 text-gray-500 border-[1px] border-gray-500 rounded-md focus-within:text-blue-400 focus-within:border-blue-500 '>
                    <div className=' text-sm flex justify-between '>
                        <heading>Bio</heading>
                        <span className='focus-within:block'>0/160</span> 
                    </div>
                    <textarea className=' text-white w-full bg-black outline-none overflow-y-scroll resize-none' />
                </div>

            {/* Location-Input */}
                <div className=' h-16 p-2 mx-4 mb-8 text-gray-500 rounded-md border-[1px] border-gray-500 focus-within:text-blue-400  focus-within:border-blue-500 '>
                    <div className=' text-sm flex justify-between '>
                        <heading>Location</heading>
                        <span className='focus-within:block'>0/50</span> 
                    </div>
                    <input className='w-full bg-black outline-none text-white' />
                </div>

            {/* Website-Input */}
                <div className=' h-16 p-2 mx-4 mb-8 text-gray-500 rounded-md border-[1px] border-gray-500 focus-within:text-blue-400 focus-within:border-blue-400 '>
                    <div className=' text-sm flex justify-between '>
                        <heading>Website</heading>
                        <span className='focus-within:block'>0/50</span> 
                    </div>
                    <input className='w-full bg-black outline-none text-white' />
                </div>

                
            {/* Date of Birth field */}
                <div className='flex w-96 justify-around my-8'>
                     
                     {/* month */}
                         <div className='m-1 border-[1px] border-gray-600 focus-within:border-blue-500 text-xl '>
                             <select className=' p-2 bg-black outline-none scroll-none' placeholder="Month" 
                                //  onChange={(e) => {
                                //      setDoB({ ...DoB , Month : e.target.value}) }}
                                  required>
                                 { months.map((month) => 
                                     <option key={month} className='text-base'>{month}</option>)}
                             </select>
                         </div>
                     
                     {/* Days */}
                         <div className='m-1 border-gray-600 border focus-within:border-blue-500 text-xl'>
                             <select className=' p-2 bg-black outline-none ' placeholder="Month" 
                                //  onChange={(e) => {
                                //      setDoB({...DoB , Day : e.target.value}) }}
                                  required>
 
                                 {allDays.map((day) => 
                                     <option key={day} className='text-sm'>{day}</option>)} 
 
                             </select>
                         </div>
                     
                     {/* Year */}
                         <div className='  m-1 border-[1px] border-gray-600 text-xl focus-within:border-blue-500 '>
                             <input className='bg-black outline-none w-24 p-2' placeholder='Year'
                                 defaultValue={'2000'}
                                 min={'1950'}
                                //  max={new Date().getFullYear()}
                                 type='number' maxLength={4} 
                                //  onChange={(e) => setDoB({...DoB , Year : e.target.value})}
                                 required
                             />  
                         </div>
                    </div> 

            </form>
        </div>
        
    </div>
    </>
  )
}

export default Edit_Profile