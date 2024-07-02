import React , {useState} from 'react'
import Login_page from './Login_page'
import SignUp_Page from './SignUp_Page'

function Login_home() {
    const [isCreateAcc , setCreateAcc] = useState(false)
    const [isLogin_Page , setLogin_Page] = useState(false)
    
    const changeTheProp1 = ()=> {
        setCreateAcc(!isCreateAcc) 
    }
    const changeTheProp2 = ()=> {
        setLogin_Page(!isLogin_Page) 
    }

  return (
    <div className='text-white bg-black'>
        <div className='flex flex-row w-[100%]'>
        <div className='w-[50%] text-center m-auto flex justify-center items-center'>
            <i className='fa-brands fa-x-twitter text-[300px] '></i>
        </div>
        <div className='w-[50%] mb-8  text-lefts pt-16 pl-20 '>
            <div className='text-[64px] font-bold font-'>Happening Now</div>
            <div className='text-[36px] mb-[40px] font-bold font-'>Join Now.</div>

            <div className=' text-left'>
                <div><button className=' bg-white hover:bg-gray-200 rounded-full text-black font-sans font-bold p-2 my-2 w-72'><i className='fa-brands fa-google text-base m-2 '></i>Signup With Google</button></div>
                <div><button className=' bg-white hover:bg-gray-200 rounded-full text-black font-sans font-bold p-2 my-2 w-72'><i className='fa-brands fa-apple text-lg m-2'></i>Signup WIth Apple</button></div>

                <div className='flex items-center '>
                    <div className=' h-[1px] w-[134px] bg-gray-500'></div><div className='relative bottom-0.5'>or</div>
                    <div className=' h-[1px] w-[134px] bg-gray-500'></div>
                </div>
                <div><button className=' bg-blue-600 hover:bg-blue-700 rounded-full font-sans font-bold p-2 my-2 w-72'
                             onClick={()=> changeTheProp1()}
                        >Create Account</button></div>
                <p className='w-72 text-[12px] mb-10'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
               
                <h1>Already have a account ?</h1>
                <div><button className='bg-black hover:bg-[#01326a59] border-[1px] mt-4 rounded-full font-sans font-bold p-2 my-2 w-72'
                            onClick={()=> changeTheProp2()}
                        >Sign In</button></div>
            </div>    
        </div>

        </div>


        {/*footer*/}
        <div className='text-[.75em] text-gray-500 text-center bg-black'>
        About
Download the X app
Help Center
Terms of Service
Privacy Policy
Cookie Policy
Accessibility
Ads info
Blog
Careers
Brand Resources
Advertising
Marketing
X for Business
Developers
Directory
Settings
© 2024 X Corp.
        </div>
        <Login_page isLogin_Page={isLogin_Page} />
        <SignUp_Page isCreateAcc={isCreateAcc} />
    </div>
  )
}

export default Login_home