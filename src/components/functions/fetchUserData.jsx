import { collection , query , where , onSnapshot} from "firebase/firestore";
import { adduserData } from "../../Redux/UserSlice";
import { DB } from "../../firebase_SDK";

export const FetchUserData = (userId , dispatch) => {
  

    const collectionRef = collection(DB , "user")
  const q = query(collectionRef  , where("userId" , "==" , userId ))
    try {
       onSnapshot(q , (QuerySnapshot) => {
        QuerySnapshot.docs.forEach((item)=> 
           dispatch(adduserData({...item.data() , docId : item.id})) 
        ) ;
      } )
    } catch (error) {
      console.log(error);
    }
  }