import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData : null 
}

const userSlice = createSlice({
    name : "UserSlice",
    initialState , 
    reducers : {
        adduserData : (state , action)=> {
            state.userData = action.payload
        }
    }
})

export const {adduserData} = userSlice.actions
export default userSlice.reducer