import React , {useEffect , useState} from 'react'

function Login_page(props) {
    let [open_close , setOpen_close] = useState(false)
    
    useEffect(()=> {
        if(props.isLogin_Page)
            setOpen_close(true);
    } , [props.isLogin_Page])

  return (
    <>
        <div className={` w-full fixed top-0 h-[100vh] bg-[#1f177443] justify-center items-center py-10 ${ open_close ? "flex" : "hidden"} `}
        > 
            <div className='bg-black rounded-2xl w-[37rem] h-[99%] flex flex-col items-center text-center py-2 pt-6 relative '>
            <button className="absolute top-2 left-2 p-3 py-1 text-lg rounded-full hover:bg-gray-600 duration-200 du"
                    onClick={()=> setOpen_close(false)}
            ><i className='fa-solid fa-xmark text-white '></i></button>
                
                <div><i className='fa-brands fa-x-twitter text-4xl mb-8'></i></div>

                <div className='w-[55%] pl-6'>
                    <div className='text-4xl text-left font-bold mb-8'>Sign in to X</div>
                </div>
                 <div><button className=' bg-white rounded-full text-black font-sans font-bold  my-2 w-72 hover:bg-gray-300 duration-200'><i className='fa-brands fa-google text-base m-2 '></i>Signup With Google</button></div>
                 <div><button className=' bg-white rounded-full text-black font-sans font-bold  my-2 w-72 hover:bg-gray-300 duration-200'><i className='fa-brands fa-apple text-lg m-1'></i>Signup WIth Apple</button></div>
                <div className='flex items-center '>
                    <div className=' h-[1px] w-[120px] bg-gray-600'></div><div className='relative bottom-0.5 p-2'>or</div>
                    <div className=' h-[1px] w-[120px] bg-gray-600'></div>
                </div>
                <div className='border-[1px] border-gray-600 p-2 py-4 mb-8'>
                    <input 
                        className='w-64 bg-black focus:outline-none'
                        placeholder='Phone, email, or username'/>
                </div>
                 <div><button className=' bg-white rounded-full text-black font-sans font-bold p-2 my-2 w-72  hover:bg-gray-300 duration-200'>Next</button></div>
                 <div><button className=' border-gray-600 border-[2px] rounded-full font-sans font-bold p-2 my-2 w-72 hover:bg-gray-900 duration-300'>Forgot Password?</button></div>
                <div className='my-8'>Don't have a account? Sign up</div>
                
            </div>
        </div>
    </>
  )
}

export default Login_page