import React ,{useEffect , useState , useRef} from 'react'
import "./Edit_profile.css"
import image from "../../assets/2a.jpg"

import { useSelector , useDispatch } from 'react-redux'
import { ChangeEditProfile } from '../../Redux/componentSlice'
import { NavLink } from 'react-router-dom'

import { DB , Auth } from '../../firebase_SDK'
import { setDoc , query ,where ,  collection, getDocs, Timestamp, updateDoc, doc   } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage"



function Edit_Profile() {
const MainPicRef = useRef() ;
const BannerRef = useRef() ;
const storage = getStorage() ;
const dispatch = useDispatch() ;
const EditProfile_state = useSelector(state => state?.comp?.isEditProfile) ;

const prevUserData = useSelector(state => state?.UserSlice?.userData) ;


const Doc_ID = useSelector(state => state.UserSlice?.userData?.docId)

const [banner_downloadURL , setbanner_downloadURL] =  useState(prevUserData?.banner)
const [profileImage , setProfileImage] = useState(prevUserData?.mainImage)

//updateFunction
const userId  = Auth.currentUser.uid

const updateFunc = async (e) => {
    e.preventDefault() ;
    
    const collectionRef = collection(DB , "user" )
    const q = query( collectionRef , where( "userId" , "==" , userId))

    try {
        const DocSnapshot = await getDocs(q) ;
        if(DocSnapshot){
            const docRef = DocSnapshot.docs[0].ref
            await setDoc(docRef , {...prevUserData , ...newUserData})
            alert("data updated")
            dispatch(ChangeEditProfile(false))
    }
    } catch (error) {
        console.log("error while updating data" , error)
    }
}

//Functionality for DOB Feild
const [DOB , setDOB] = useState({
    Year : prevUserData.DOB.Year , 
    Day : prevUserData.DOB.Day , 
    Month : prevUserData.DOB.Month , 
}) 


const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const monthsWith31Days = ["January", "March", "May", "July", "August", "October", "December"];
const monthsWith30Days = ["April", "June", "September", "November"];

let [allDays , setAllDays] = useState(Array(31).fill(0).map((_, i) => i + 1)) ;

useEffect(()=> {
    if(monthsWith31Days.includes(DOB.Month)){
        setAllDays(Array(31).fill(0).map((_, i) => i + 1));
}else if (monthsWith30Days.includes(DOB.Month)){
    setAllDays(Array(30).fill(0).map((_, i) => i + 1) )
}else if(DOB.Month === "February" && DOB.Year % 4 == 0 ) {
    setAllDays(Array(29).fill(0).map((_, i) => i + 1)) 
}else if (DOB.Month === "February" && DOB.Year % 4 != 0  ){
    setAllDays(Array(28).fill(0).map((_, i) => i + 1)) 
}
} , [DOB.Month , DOB.Year])


//newUserData
const [newUserData , setnewUserData] = useState({
 }) 

 
//check for userName
const [IsusernameAvailable , setIsUsername] = useState(true)

const check_username = async(user_name)=> {
    const collectionRef = collection(DB , "user")
    try {   
        const q = query(collectionRef , where( "username" , "==" , user_name) , where("userId" , "!=" , userId)) ;
        const querysnapshot = await getDocs(q) 
        if(querysnapshot.empty){
            
            return setIsUsername(true)
        }else{
            return setIsUsername(false)
        }
    } catch (error) {
        // console.log("error while checking for the userName" , error);
    } 
}
useEffect(() => {
    check_username(newUserData?.username)
} , [newUserData.username])



//banner update func
const uploadBanner = async (e) => {
    const value = e.target.files[0]
    if(value){
        
        const storageRef = ref(storage , `images/profileImages/${Timestamp.now() + value.name }.jpg`)
        try {
            uploadBytes(storageRef , value).then(() => {
                console.log('Uploaded the File!' );
                getDownloadURL(storageRef).then((url)=> {
                    setbanner_downloadURL(url) 
            })
            })
        } catch (error) {
            console.log( "error while uploading the background banner" ,  error);
            alert('failed to update the profile pic')
        }
    }
}

useEffect (()=> {
    if(Doc_ID)
        try {
            const docRef = doc(DB , 'user' , Doc_ID)
            updateDoc(docRef , { banner : banner_downloadURL || "" })
        } catch (error) {
            console.log( "error while setting up the banner for profile" , error);
            alert('failed to update the profile pic')
        }
} , [banner_downloadURL])


// profile photo upload func
const uploadProfilePhoto = async (e) => {
    const value = e.target.files[0]
    if(value){
        
        const storageRef = ref(storage , `images/profileImages/${Timestamp.now() + value.name }.jpg`)
        try {
            uploadBytes(storageRef , value).then(() => {
                console.log('main image uploaded');
                getDownloadURL(storageRef ).then((url)=> 
                setProfileImage(url))
            })
        } catch (error) {
            console.log( "error while uploading the profile picture" ,  error);
            alert('failed to upload the profile pic')
        }
    }else{
        console.log("value didn't found");
        
    }
}

useEffect(() => {
    if(Doc_ID)
        try {
            const docRef = doc(DB , 'user' , Doc_ID)
            updateDoc(docRef , { mainImage : profileImage || "" })
        } catch (error) {
            console.log('failed to update the main Image');
        }
} , [profileImage])


  return (
    <>
    <div className=' fixed rounded-lg text-white h-full w-full left-0 bg-[#104c9a4f] flex justify-center items-center z-50'> 
        <div className=' sm:w-[600px] sm:h-[600px] h-full w-full rounded-none sm:rounded-s-3xl bg-[#000000ed] edit_profile_container
                            overflow-y-scroll '>
            <form onSubmit={updateFunc}>
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
                            type='submit'
                            disabled={!IsusernameAvailable}>
                        <b>Save</b> 
                    </button>
                </div>

            {/* Profiile-Photos */}
                {/* Banner */}
                <div className='w-full border-gray-500 h-40 relative mb-32 '>
                        <img className=' object-contain w-[101%] h-[101%] absolute z-30' src={banner_downloadURL} alt="photo" />
                    <img className=' object-cover blur-sm w-full h-full  ' src={banner_downloadURL} alt="photo" />
                     <i className="fa-solid absolute top-[32%] left-[45%] fa-camera-rotate text-2xl text-white bg-[#43414191] p-3 rounded-full z-40 hover:cursor-pointer " onClick={() => BannerRef.current.click()} />    
                        <input className='hidden' ref={BannerRef} type="file" accept='image/png, image/jpg, image/jpeg, image/gi' 
                                onChange={uploadBanner}/> 
                {/* Main Pic */}
                    <div className='w-36 h-36 absolute rounded-full top-[70%] left-4 bg-black flex justify-center items-center z-40 '>
                        <img className='object-cover rounded-full w-full h-full ' src={profileImage} />
                            <i className="fa-solid absolute top-[32%] fa-camera-rotate text-2xl text-white bg-[#43414191] p-3 rounded-full hover:cursor-pointer" 
                                onClick={() => MainPicRef.current.click()}
                                />

                            <input className='hidden' ref={MainPicRef} type="file" accept='image/png, image/jpg, image/jpeg, image/gi' 
                                    onChange={uploadProfilePhoto}/> 
                                    
                    </div>
                </div>

            {/* Name-Input */}
                <div className=' h-16 p-2 mx-4 mb-8 text-gray-500 rounded-md border-[1px] border-gray-500 focus-within:text-blue-400  focus-within:border-blue-500 '>
                    <div className=' text-sm flex justify-between '>
                        <p>Name</p>
                        <span className='focus-within:block'>0/50</span> 
                    </div>
                    <input className='w-full bg-black outline-none text-white' 
                            onChange={(e) => setnewUserData({...newUserData , name : e.target.value})}
                            defaultValue={prevUserData?.name}
                            required
                            />
                </div>

            {/* Username-Input */}
                {!IsusernameAvailable && <p className='text-red-500 pl-4'>Username NOT available</p>}
                <div className={` h-16 p-2 mx-4 mb-8 text-gray-500 rounded-md border-[1px] border-gray-500 ${IsusernameAvailable ? "focus-within:text-blue-500 focus-within:border-blue-500 " : "focus-within:text-red-600 focus-within:border-red-500 "}  `}>
                    <div className=' text-sm flex justify-between '>
                        <p>Username</p>
                        <span className='focus-within:block'>0/50</span> 
                    </div>
                    <input className='w-full bg-black outline-none text-white' 
                            onChange={(e) => setnewUserData({...newUserData , username : e.target.value}) }
                            defaultValue={prevUserData?.username || ""}
                            required
                            />
                </div>
                
            {/* Bio-Input */}
                <div className=' p-2  mx-4 mb-8 text-gray-500 border-[1px] border-gray-500 rounded-md focus-within:text-blue-400 focus-within:border-blue-500 '>
                    <div className=' text-sm flex justify-between '>
                        <p>Bio</p>
                        <span className='focus-within:block'>0/160</span> 
                    </div>
                    <textarea className=' text-white w-full bg-black outline-none overflow-y-scroll resize-none' 
                            onChange={(e) => setnewUserData({...newUserData , bio : e.target.value})}
                            defaultValue={prevUserData?.bio || ""}
                            required
                            />
                </div>

            {/* Location-Input */}
                <div className=' h-16 p-2 mx-4 mb-8 text-gray-500 rounded-md border-[1px] border-gray-500 focus-within:text-blue-400  focus-within:border-blue-500 '>
                    <div className=' text-sm flex justify-between '>
                        <p>Location</p>
                        <span className='focus-within:block'>0/50</span> 
                    </div>
                    <input className='w-full bg-black outline-none text-white' 
                            onChange={(e) => setnewUserData({...newUserData , location : e.target.value})}
                            defaultValue={prevUserData?.location || ""}
                            required
                            />
                </div>

            {/* Website-Input */}
                <div className=' h-16 p-2 mx-4 mb-8 text-gray-500 rounded-md border-[1px] border-gray-500 focus-within:text-blue-400 focus-within:border-blue-400 '>
                    <div className=' text-sm flex justify-between '>
                        <p>Website</p>
                        <span className='focus-within:block'>0/50</span> 
                    </div>
                    <input className='w-full bg-black outline-none text-white' 
                            onChange={(e) => setnewUserData({...newUserData , website : e.target.value})}
                            defaultValue={prevUserData?.website || ""}
                            />
                </div>

                
            {/* Date of Birth field */}
            <div className='text-md text-gray-500 pl-4'>
                Birth Date
            </div>
                <div className='flex w-96 justify-around mb-8'>
                     
                    {/* month */}
                        <div className='m-1 border-[1px] border-gray-600 focus-within:border-blue-500 text-xl '>
                            <select className=' p-2 bg-black outline-none scroll-none' placeholder="Month" 
                                defaultValue={prevUserData?.DOB?.Month}
                                onChange={(e) => {
                                    const updatedDOB = { ...DOB, Month: e.target.value };
                                        setDOB(updatedDOB);
                                        setnewUserData({ ...newUserData, DOB: updatedDOB });
                                }} 
                                >
                                { months.map((month) => 
                                    <option key={month} className='text-base'>{month}</option>)}
                            </select>
                        </div>
                    
                    {/* Days */}
                        <div className='m-1 border-gray-600 border focus-within:border-blue-500 text-xl'>
                            <select className=' p-2 bg-black outline-none ' placeholder="Month" 
                                defaultValue={prevUserData?.DOB?.Day}
                                onChange={(e) => {
                                    const updatedDOB = { ...DOB, Day: e.target.value };
                                        setDOB(updatedDOB);
                                        setnewUserData({ ...newUserData, DOB: updatedDOB });
                                }}
                                >
                                {allDays.map((day) => 
                                    <option key={day} className='text-sm'>{day}</option>)} 
                            </select>
                        </div>
                    
                    {/* Year */}
                        <div className=' m-1 border-[1px] border-gray-600 text-xl focus-within:border-blue-500 '>
                            <input className='bg-black outline-none w-24 p-2' placeholder='Year'
                                defaultValue={prevUserData?.DOB?.Year}
                                min={'1950'}
                                max={new Date().getFullYear()}
                                type='number' maxLength={4} 
                                onChange={(e) =>{ 
                                    const updatedDOB = { ...DOB, Year: e.target.value };
                                    setDOB(updatedDOB);
                                    setnewUserData({ ...newUserData, DOB: updatedDOB });
                            }}
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
                    <label className="inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" className="sr-only peer"/>
                        <div className="relative w-11 h-4 peer-focus:outline-none rounded-full peer bg-gray-700 peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[3px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
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