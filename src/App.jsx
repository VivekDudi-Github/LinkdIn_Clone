import { useState  , useEffect} from 'react'
import { FetchUserData } from './index_func'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { Auth } from './firebase_SDK'
import { onAuthStateChanged } from 'firebase/auth' 

function App() {
  const dispatch = useDispatch() ;
  const [userId, setUserId] = useState(null) ;

  
useEffect(() => {
  if(userId){
    FetchUserData(userId , dispatch )
  }else{
    console.log("id didn't found");
  }
} , [userId])

useEffect(() => {
  const unsubscribe = onAuthStateChanged(Auth , (user) => {
    if(user){
      setUserId(Auth.currentUser.uid) 
    }
  })
  return () => unsubscribe()
} , []) 


  return (
    <>
    <div className='bg-black min-h-[100vh]'>

      <Outlet/>

    </div>
    </>
  )
}

export default App
