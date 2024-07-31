import React , {useEffect , useState} from 'react'
import {Auth , DB} from "../../firebase_SDK"
import { useNavigate } from 'react-router';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection  , Timestamp } from "firebase/firestore"; 

import {newTime} from "../../index_func"


export default function SignUp_Page(props) {
    const navigate = useNavigate() ;

    const [email , setEmail] = useState("")
    const [name  ,setName] = useState("")
    
    const [DoB , setDoB] = useState({
        Year : 2000 , 
        Day : "" , 
        Month : "" , 
    }) 


    const [Password1 ,setPassword1] = useState("")
    const [Password2 , setPassword2] = useState("")

    const [IsPassMatch , setPassMatch] = useState("hg")
    const [open_close , setOpen_close] = useState(false) ;
    const [open_close_password  , setOpen_close_password] = useState(false)

    

    const [showPass , setShowPass] = useState(false)



//password hide-show
const handleShowPass = () => {
    setShowPass(true)
}
const handleHidePass = () => {
    setShowPass(false)
}

//signup & //Login 
    const sign_Up = async () => {
        try {
            const response =  await createUserWithEmailAndPassword(Auth , email , Password1)
                alert("Signed Up successfully")
                console.log(response); 
                if(response){
                    const user = {
                        name : name , 
                        email : response.user.email , 
                        userId : response.user.uid , 
                        date : newTime(Timestamp) , 
                        DOB : DoB ,
                    }
                    const CollectionRef = collection(DB , "user")
                    try {
                        await addDoc(CollectionRef , user)
                        alert("Logging IN")
                        await signInWithEmailAndPassword(Auth , response.user.email , Password1 )
                        alert("LoggedIn successfully")
                        navigate("/home")
                        
                    } catch (error) {
                       alert("error while adding the userCredentials") 
                    }
                }
        
        } catch (error) {
            alert("Something went wrong , Please your credentials and try again")
            console.log("error =" , error );
        }
    }   


const passMatch = () => {
    setPassMatch(Password1 === Password2)
}

useEffect(()=> {
    if(props.isCreateAcc)
        setOpen_close(true);
} , [props.isCreateAcc])

const openPassPage = (e)=> {
    e.preventDefault() ;
    setOpen_close_password(true)
}

//Functionality for DoB Feild
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
<div className={` w-full fixed top-0 h-[100vh] bg-[#1f177443] justify-center items-center py-10 ${ open_close ? 'flex' : 'hidden'} `}>
    <div className='bg-black rounded-2xl w-[37rem] h-[99%] flex flex-col items-center text-center py-2 pt-6 relative '>
         
    {/* Upper portion  */}
          <button onClick={()=> {setOpen_close(false)
                                setOpen_close_password(false)
            }}      
               className="absolute top-2 left-2 p-3 py-1 text-lg rounded-full hover:bg-gray-600 duration-200 du"><i className='fa-solid fa-xmark text-white '></i>
          </button>

          <div><i className='fa-brands fa-x-twitter text-4xl mb-8'></i></div>

            <div className='w-[60%] pl-6'>
                <div className='text-3xl text-left font-bold mb-8 '>Create You Account</div>
            </div>


    {/* Form */}
        <div className={`${open_close_password ? "hidden" : "flex flex-col"}`}>
                <form onSubmit={openPassPage}>

                    {/* Name */}
                    <div className='border-[1px] border-gray-600 p-2 py-4 mb-8'>
                            <input 
                                className=' w-96 bg-black focus:outline-none'
                                onChange={(e) => setName(e.target.value) }
                                placeholder='Name'
                                type='text'
                                required
                                />
                    </div>

                    {/* Email */}
                    <div className='border-[1px] border-gray-600 p-2 py-4 mb-8'>
                            <input 
                                className=' w-96 bg-black focus:outline-none '
                                onChange={(e)=> setEmail(e.target.value)}
                                placeholder='Email'
                                type='email'
                                required
                                />
                    </div>

                    <div className='w-96 '>
                        <div className=' text-base font-bold text-left '>Date of birth</div>
                        <div className=' text-xs text-left text-gray-600'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</div>
                    </div>

                {/* Date of Birth field */}
                    <div className='flex w-96 justify-around my-8'>
                     
                    {/* month */}
                        <div className='m-1 border-[1px] border-gray-600 text-xl '>
                            <select className=' p-2 bg-black focus:outline-blue-500 scroll-none' placeholder="Month" 
                                onChange={(e) => {
                                    setDoB({ ...DoB , Month : e.target.value})
                                }} required>
                                { months.map((month) => 
                                    <option key={month} className='text-base'>{month}</option>)}
                            </select>
                        </div>
                    
                    {/* Days */}
                        <div className='m-1 border-[1px] border-gray-600 text-xl'>
                            <select className=' p-2 bg-black focus:outline-blue-500 outline-1' placeholder="Month" 
                                onChange={(e) => {
                                    setDoB({...DoB , Day : e.target.value})
                                }} required>

                                {allDays.map((day) => 
                                    <option key={day} className='text-sm'>{day}</option>)} 

                            </select>
                        </div>
                    
                    {/* Year */}
                        <div className='  m-1 border-[1px] border-gray-600 text-xl '>
                            <input className='bg-black focus:outline-blue-500 w-24 p-2' placeholder='Year'
                                defaultValue={'2000'}
                                min={'1950'}
                                max={new Date().getFullYear()}
                                type='number' maxLength={4} 
                                onChange={(e) => setDoB({...DoB , Year : e.target.value})}
                                required
                            />  
                        </div>
                    </div>
                   
                    {/* Submit */}
                        <div>
                            <button className=' bg-white rounded-full text-black font-sans font-bold p-4 my-2 w-[400px] hover:bg-gray-300 duration-200'
                                    type='submit'
                            >Next</button>
                        </div>
                </form>                    
            </div>

{/* Password Page */}
        <div className={`${open_close_password ? "flex flex-col" : "hidden"}`}>
                <form onSubmit={openPassPage}>

                    {/* Passwords1 */}
                        <div className='border-[1px] border-gray-600 p-2 py-4 mb-1 relative'>
                                   
                                    <span className='hover:cursor-pointer'
                                        onMouseDown={handleShowPass}
                                        onMouseUp={handleHidePass}>
                                    <i className={` ${showPass ? "fa-eye-slash" : "fa-eye"} fa-regular  absolute text-xl right-4 top-1/3 `}></i>
                                    </span>
                                <input 
                                    className=' w-96 bg-black focus:outline-none'
                                    onChange={(e) => setPassword1(e.target.value) }
                                    placeholder='Password'
                                    type={ showPass ? "text" : "password"}
                                    required/>
                        </div>
                        <p className='w-96 text-xs text-left text-gray-600 mb-4'>Please keep your password strong.</p>
                        <div className={`text-sm text-center text-red-500 ${IsPassMatch ? "hidden" : "block" }`}>Password didn't match</div>
                        
                    {/* Passwords2 */}

                        <div className='border-[1px] border-gray-600 p-2 py-4 mb-1 relative'>
                                  
                                <input 
                                    className=' w-96 bg-black focus:outline-none'
                                    onChange={(e) => {setPassword2(e.target.value) ;}}
                                    placeholder='Confirm Password'
                                    type={showPass ? "text" : 'password'}
                                    required/>
                        </div>
                        <p className='w-96 text-xs text-left text-gray-600 mb-4'>Confirm Your Password.</p>
                   
                    {/* Submit */}

                        <div>
                            <button className={` bg-white rounded-full text-black font-sans font-bold p-4 my-2 w-[400px] hover:bg-gray-300 duration-200 `}
                                    type='submit'
                                    onClick={()=> {passMatch() ;
                                                if( Password1 === Password2){ 
                                                    sign_Up()}}}
                            >Sign Up</button>
                        </div>
                </form>

        </div>
    </div>
        
</div>
    
    </>
  )
}
