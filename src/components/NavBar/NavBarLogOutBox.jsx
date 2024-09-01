import { signOut } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import { ChangeLogOutBox } from "../../Redux/componentSlice"

function NavBarLogOutBox() {
  const dispatch = useDispatch()
  const isLogOutBox = useSelector(state => state.comp.isLogOutBox)

  const username = useSelector(state => state.UserSlice?.userData?.username)

  return (
    <>
    <div className={` fixed h-full w-full z-0 ${isLogOutBox ? '' : 'hidden'} `}
        onClick={()=> dispatch(ChangeLogOutBox(!isLogOutBox))}>
    </div>
    
    <div className= {` logoutBox w-[324px]  z-50 fixed bottom-20 rounded-2xl py-3 hover:bg-[#111111] bg-black ${isLogOutBox ? 'animate_logoutbox' : ''}` }>
        <div className= ' duration-200 p-1 rounded-sm bg-black' 
             onClick={()=> console.log('logout function')}>
            {username ? `Logout @${username}` : 'User not available ' } 
        </div>
    </div>
    </>
  )
}

export default NavBarLogOutBox