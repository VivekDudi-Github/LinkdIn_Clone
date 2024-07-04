import React , {useEffect , useState} from 'react'
import {auth} from "../../firebase_SDK"
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp_Page(props) {

    const [email , setEmail] = useState("")
    const [name  ,setName] = useState("")
    const [Password1 ,setPassword1] = useState("")
    const [Password2 , setPassword2] = useState("")

    const [IsPassMatch , setPassMatch] = useState("hg")
    const [open_close , setOpen_close] = useState(false) ;
    const [open_close_password  , setOpen_close_password] = useState(false)


//authentication
    const sign_Up = async () => {
        try {
            await createUserWithEmailAndPassword(auth , email , Password1)
            .then((response)=> {console.log(response);})
        } catch (error) {
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
    
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const allDays = Array(30).fill(0).map((_, i) => i + 1);


    return (
    <>
<div className={` w-full fixed top-0 h-[100vh] bg-[#1f177443] justify-center items-center py-10 ${ open_close ? 'flex' : 'hidden'} `}>
    <div className='bg-black rounded-2xl w-[37rem] h-[99%] flex flex-col items-center text-center py-2 pt-6 relative '>
         
          <button onClick={()=> {setOpen_close(false)
                                setOpen_close_password(false)
            }}      
               className="absolute top-2 left-2 p-3 py-1 text-lg rounded-full hover:bg-gray-600 duration-200 du"><i className='fa-solid fa-xmark text-white '></i>
          </button>

          <div><i className='fa-brands fa-x-twitter text-4xl mb-8'></i></div>

        
            <div className='w-[60%] pl-6'>
                <div className='text-3xl text-left font-bold mb-8 '>Create You Account</div>
            </div>
        <div className={`${open_close_password ? "hidden" : "flex flex-col"}`}>
                <form onSubmit={openPassPage}>
                    <div className='border-[1px] border-gray-600 p-2 py-4 mb-8'>
                            <input 
                                className=' w-96 bg-black focus:outline-none'
                                onChange={(e) => setName(e.target.value) }
                                placeholder='Name'
                                type='text'
                                />
                    </div>
                    <div className='border-[1px] border-gray-600 p-2 py-4 mb-8'>
                            <input 
                                className=' w-96 bg-black focus:outline-none '
                                onChange={(e)=> setEmail(e.target.value)}
                                placeholder='Email'
                                type='email'
                                />
                    </div>
                
                    <div className='w-96 '>
                        <div className=' text-base font-bold text-left '>Date of birth</div>
                        <div className=' text-xs text-left text-gray-600'>This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.</div>
                    </div>
                    <div className='flex w-96 justify-around my-8'>
                        <div className='m-1 border-[1px] border-gray-600 text-xl '>
                            <select className=' p-2 bg-black focus:outline-blue-500' placeholder="Month" >
                                { months.map((month) => 
                                    <option key={month} className='text-base'>{month}</option>)}
                            </select>
                        </div>
                        <div className='m-1 border-[1px] border-gray-600 text-xl'>
                            <select className=' p-2 bg-black focus:outline-blue-500 outline-1' placeholder="Month" >
                                { allDays.map((day) => 
                                    <option key={day} className='text-sm'>{day}</option>)}
                            </select>
                        </div>
                        <div className='  m-1 border-[1px] border-gray-600 text-xl '>
                            <input className='bg-black focus:outline-blue-500 w-24 p-2' placeholder='Year'/>  
                        </div>
                    </div>
                    <div>
                        <button className=' bg-white rounded-full text-black font-sans font-bold p-4 my-2 w-[400px] hover:bg-gray-300 duration-200'
                                type='submit'
                        >Next</button>
                    </div>
                </form>                    
            </div>

        <div className={`${open_close_password ? "flex flex-col" : "hidden"}`}>
                <form onSubmit={openPassPage}>
                        <div className='border-[1px] border-gray-600 p-2 py-4 mb-8'>
                                <input 
                                    className=' w-96 bg-black focus:outline-none'
                                    onChange={(e) => setPassword1(e.target.value) }
                                    placeholder='Password'
                                    type='password'
                                    required/>
                        </div>
                        <div className={`text-sm text-center text-gray-500 ${IsPassMatch ? "hidden" : "block" }`}>Password didn't match</div>
                        <div className='border-[1px] border-gray-600 p-2 py-4 mb-8'>
                                <input 
                                    className=' w-96 bg-black focus:outline-none'
                                    onChange={(e) => {setPassword2(e.target.value) ;
                                                    }}
                                    placeholder='Confirm Password'
                                    type='password'
                                    required/>
                        </div>
                        <div>
                            <button className={` bg-white rounded-full text-black font-sans font-bold p-4 my-2 w-[400px] hover:bg-gray-300 duration-200 `}
                                    type='submit'
                                    onClick={()=> {passMatch() ;
                                                if(IsPassMatch) 
                                                    sign_Up()}}
                            >Sign Up</button>
                        </div>
                </form>

        </div>
    </div>
        
</div>
    
    </>
  )
}
