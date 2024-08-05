import { configureStore } from "@reduxjs/toolkit";
import componentSlice from "./componentSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
    reducer : {
        comp : componentSlice ,
        UserSlice : UserSlice  , 
    }
})

export default store ;