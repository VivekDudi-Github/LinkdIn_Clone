import React , {useEffect , useState} from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Auth } from '../../firebase_SDK';
import {useNavigate} from "react-router-dom"

function Login_page(props) {
    const navigate = useNavigate()

    const [email , setEmail] = useState("");
    const [Password1 ,setPassword1] = useState("")

    let [open_close , setOpen_close] = useState(false)
    let [openPassPage , setopenPassPage] = useState(false)

    const [showPass , setShowPass] = useState(false)

const handle_Login = async() => {
    if(email !== "" || Password1 !== "")
        try {
            console.log("trying");
            await signInWithEmailAndPassword(Auth , email , Password1)
            alert("Signed In Successfully")
            navigate("/home")
        } catch (error) {
            alert("invalid credentials")
            console.log( "error while logging in " , error)
        }
}



//password hide-show
const handleShowPass = () => {
    setShowPass(true)
}
const handleHidePass = () => {
    setShowPass(false)
}


    useEffect(()=> {
        if(props.isLogin_Page)
            setOpen_close(true);
    } , [props.isLogin_Page])

const handle_pass_page =() => {
    setopenPassPage(!openPassPage)
}

  return (
    <>
        <div className={` w-full fixed top-0 h-[100vh] bg-[#1f177443]  sm:py-10 ${ open_close ? "block" : "hidden"} `}> 
            <div className='bg-black rounded-2xl w-full sm:w-[37rem] sm:h-[99%] py-2 flex flex-col items-center  m-auto relative overflow-auto'>
                
                <button className="absolute top-[4%] left-[2%] p-3 py-1 text-lg rounded-full hover:bg-gray-600 duration-200 "
                        onClick={()=> {setOpen_close(false)
                            setopenPassPage(false)
                        }}
                ><i className='fa-solid fa-xmark text-white'></i></button>
                
                <div className=''><i className='fa-brands fa-x-twitter text-4xl mb-8'></i></div>


                <div className='w-[55%]'>
                    <div className='text-4xl text-center font-bold mb-8'>Sign in to X</div>
                </div>
                 
            {/* Email-login Section  */}

                <section className={`items-center flex-col ${openPassPage ? "hidden" : "flex"}`} >
                    {/* Google/Apple sign_Up */}
                    <div><button className=' bg-white rounded-full text-black font-sans font-bold  my-2 w-72 hover:bg-gray-300 duration-200'><i className='fa-brands fa-google text-base m-2 '></i>Sign in With Google</button></div>
                    <div><button className=' bg-white rounded-full text-black font-sans font-bold  my-2 w-72 hover:bg-gray-300 duration-200'><i className='fa-brands fa-apple text-lg m-1'></i>Sign in With Apple</button></div>

                    
                    <div className='flex items-center '>
                        <div className=' h-[1px] w-[120px] bg-gray-600 '></div>
                            <div className='relative bottom-0.5 p-2'>or</div>
                        <div className=' h-[1px] w-[120px] bg-gray-600 '></div>
                    </div>
                
                    <div className='border-[1px] border-gray-600 p-2 py-4 mb-8'>
                        <input type='email'
                            onChange={(e)=> setEmail(e.target.value)}
                            className='w-64 bg-black focus:outline-none'
                            placeholder='Phone, email, or username'/>
                    </div>
                    
                    <div>
                        <button className=' bg-white rounded-full text-black font-sans font-bold p-2 my-2 w-72  hover:bg-gray-300 duration-200'
                                onClick={() => {
                                        if(email !== "" ){
                                        setopenPassPage(true)}
                                }}
                                >Next
                        </button>
                    </div>

                    <div>
                        <button className=' border-gray-600 border-[2px] rounded-full font-sans font-bold p-2 my-2 w-72 hover:bg-gray-900 duration-300'
                        >Forgot Password?
                        </button>
                    </div>
                    <div className='my-8'>Don't have a account? SignUp Now!</div>

                </section>

            {/* Password Section */}

                <section  className={`${openPassPage ? "flex flex-col" : "hidden"}`}>
                    
                            <div className='text-left text-gray-600 '>Email:</div>
                            <div className='border-[1px] border-gray-600 text-gray-600 p-2 py-4 mb-4'>
                                    <input 
                                    className=' w-96 bg-black focus:outline-none'
                                    value={email}
                                    placeholder='Password'
                                    type='text'
                                    readOnly
                                    />
                            </div>

                            <div className='text-left text-gray-600 '>Password</div>    
                            <div className='border-[1px] border-gray-600 p-2 py-4 mb-10 relative'>
                                    
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
                                        />
                            </div>

                            <div>
                                <button className={` bg-white rounded-full text-black font-sans font-bold p-4 my-2 w-[400px] hover:bg-gray-300 duration-200`}
                                        type='submit'
                                        onClick={()=> handle_Login()}
                                >Sign In</button>
                            </div>
                </section>
                
                
            </div>
        </div>
    </>
  )
}

export default Login_page