import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEditProfile : false , 
}

const componentSlice = createSlice({
    name : "comp" , 
    initialState , 
    reducers : {
        ChangeEditProfile : (state , action) => {
            state.isEditProfile = action.payload
        } ,
    }
})

export const {ChangeEditProfile} = componentSlice.actions
export default componentSlice.reducer