import { signOut } from "firebase/auth"

function NavBarLogOutBox() {
  return (
    <>
    {/* <div className=' fixed h-full w-full text-white z-0'>
        NavBarLogOutBox
    </div> */}
    <div className=" w-[324px] shadow-[0,4px,8px,0,rgba(0,0,0,0.2)] z-50 fixed bottom-20 left-20 rounded-2xl py-3 bg-black ">
        <div className="hover:bg-[#181717] duration-200 p-1 rounded-xl "
             onClick={signOut}>
            LogOut @NPM_run_Dev 
        </div>
    </div>
    </>
  )
}

export default NavBarLogOutBox