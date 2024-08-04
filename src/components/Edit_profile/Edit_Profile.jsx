import React ,{useEffect , useState} from 'react'
import "./Edit_profile.css"
import image from "../../assets/2a.jpg"

import { useSelector , useDispatch } from 'react-redux'
import { ChangeEditProfile } from '../../Redux/componentSlice'
import { NavLink } from 'react-router-dom'

function Edit_Profile() {
const dispatch = useDispatch() ;
const EditProfile_state = useSelector(state => state?.comp?.isEditProfile)


    
//Functionality for DoB Feild
const [DoB , setDoB] = useState({
    Year : 2000 , 
    Day : "" , 
    Month : "" , 
}) 

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const monthsWith31Days = ["January", "March", "May", "July", "August", "October", "December"];
const monthsWith30Days = ["April", "June", "September", "November"];

let [allDays , setAllDays] = useState(Array(31).fill(0).map((_, i) => i + 1)) ;

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
    <div className=' fixed rounded-lg text-white h-full w-full left-0 bg-[#104c9a4f] flex justify-center items-center z-50'> 
        <div className=' sm:w-[600px] sm:h-[600px] h-full w-full rounded-none sm:rounded-s-3xl bg-[#000000ed] edit_profile_container
                            overflow-y-scroll '>
            <form onSubmit={()=> {}}>
            {/* Save-Bar */}
                <div className='p-4 sticky top-0 flex justify-start bg-[#00000089] z-50 form_header '>
                    <button className='w-6 h-6 hover:bg-gray-800 rounded-full left-4 mr-4'
                            onClick={(e) => {e.preventDefault() ; dispatch(ChangeEditProfile(!EditProfile_state)) }}>
                        <i className='fa-solid fa-close p-1 '></i>
                    </button>
                    <span className='text-xl w-[450px]' >
                        <b>Edit Profile</b> 
                    </span>
                    <button className='  px-4 pb-[4px] text-sm rounded-full bg-white text-black hover:bg-gray-300 duration-150 '
                            type='submit'>
                        <b>Save</b>
                    </button>
                </div>

            {/* Profiile-Photos */}
                <div className='w-full border-gray-500 h-40 relative mb-32 '>
                    <img className=' object-contain w-[101%] h-[101%] absolute z-30' src={image} alt="photo" />
                <img className=' object-cover blur-sm w-full h-full  ' src={image} alt="photo" />
                    
                    
                    <div className='w-36 h-36 absolute rounded-full top-[70%] left-4 bg-black flex justify-center items-center z-40 '>
                        <img className='object-cover rounded-full w-full h-full ' src={image} />
                            <i class="fa-solid absolute top-[32%] fa-camera-rotate text-2xl text-white bg-[#43414191] p-3 rounded-full  "></i>
                    </div>
                </div>

            {/* Name-Input */}
                <div className=' h-16 p-2 mx-4 mb-8 text-gray-500 rounded-md border-[1px] border-gray-500 focus-within:text-blue-400  focus-within:border-blue-500 '>
                    <div className=' text-sm flex justify-between '>
                        <p>Name</p>
                        <span className='focus-within:block'>0/50</span> 
                    </div>
                    <input className='w-full bg-black outline-none text-white' />
                </div>
                
            {/* Bio-Input */}
                <div className=' p-2  mx-4 mb-8 text-gray-500 border-[1px] border-gray-500 rounded-md focus-within:text-blue-400 focus-within:border-blue-500 '>
                    <div className=' text-sm flex justify-between '>
                        <p>Bio</p>
                        <span className='focus-within:block'>0/160</span> 
                    </div>
                    <textarea className=' text-white w-full bg-black outline-none overflow-y-scroll resize-none' />
                </div>

            {/* Location-Input */}
                <div className=' h-16 p-2 mx-4 mb-8 text-gray-500 rounded-md border-[1px] border-gray-500 focus-within:text-blue-400  focus-within:border-blue-500 '>
                    <div className=' text-sm flex justify-between '>
                        <p>Location</p>
                        <span className='focus-within:block'>0/50</span> 
                    </div>
                    <input className='w-full bg-black outline-none text-white' />
                </div>

            {/* Website-Input */}
                <div className=' h-16 p-2 mx-4 mb-8 text-gray-500 rounded-md border-[1px] border-gray-500 focus-within:text-blue-400 focus-within:border-blue-400 '>
                    <div className=' text-sm flex justify-between '>
                        <p>Website</p>
                        <span className='focus-within:block'>0/50</span> 
                    </div>
                    <input className='w-full bg-black outline-none text-white' />
                </div>

                
            {/* Date of Birth field */}
            <div className='text-md text-gray-500 pl-4'>
                Birth Date
            </div>
                <div className='flex w-96 justify-around mb-8'>
                     
                    {/* month */}
                        <div className='m-1 border-[1px] border-gray-600 focus-within:border-blue-500 text-xl '>
                            <select className=' p-2 bg-black outline-none scroll-none' placeholder="Month" 
                                onChange={(e) => {
                                    setDoB({ ...DoB , Month : e.target.value}) }}
                                >
                                { months.map((month) => 
                                    <option key={month} className='text-base'>{month}</option>)}
                            </select>
                        </div>
                    
                    {/* Days */}
                        <div className='m-1 border-gray-600 border focus-within:border-blue-500 text-xl'>
                            <select className=' p-2 bg-black outline-none ' placeholder="Month" 
                                onChange={(e) => {
                                    setDoB({...DoB , Day : e.target.value}) }}
                                >

                                {allDays.map((day) => 
                                    <option key={day} className='text-sm'>{day}</option>)} 

                            </select>
                        </div>
                    
                    {/* Year */}
                        <div className='  m-1 border-[1px] border-gray-600 text-xl focus-within:border-blue-500 '>
                            <input className='bg-black outline-none w-24 p-2' placeholder='Year'
                                defaultValue={'2000'}
                                min={'1950'}
                                max={new Date().getFullYear()}
                                type='number' maxLength={4} 
                                onChange={(e) => setDoB({...DoB , Year : e.target.value})}
                            />  
                        </div>
                </div> 
            {/* Extras */}
                <div className='px-4 py-1 mb-4 text-lg hover:bg-[#080715] flex justify-between items-center duration-200'>
                    <p className='font-normal'>Switch to professional</p>
                    <i className='fa-solid fa-angle-right'></i>
                </div>
                <div className='px-4 py-1 text-lg hover:bg-[#080715] flex justify-between items-center duration-200'>
                    <p className='font-normal'>Display confirmed phone number mark</p>
                    <label class="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer"/>
                        <div class="relative w-11 h-4 peer-focus:outline-none rounded-full peer bg-gray-700 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[3px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                </div>
                <div className='pl-4 mb-8 text-xs text-gray-600'>
                    This mark only be shown to others in your region.
                    <NavLink to={'https://help.x.com/rules-and-policies/twitter-india'}
                        className='text-blue-500 hover:underline'>
                    Learn More</NavLink>
                </div>
            </form>
        </div>
        
    </div>
    </>
  )
}

export default Edit_Profile