import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEditProfile : false , 
    isLogOutBox : false ,
}

const componentSlice = createSlice({
    name : "comp" , 
    initialState , 
    reducers : {
        ChangeEditProfile : (state , action) => {
            state.isEditProfile = action.payload
        } ,
        ChangeLogOutBox : (state , action) => {
            state.isLogOutBox = action.payload
        }
    }
})

export const {ChangeEditProfile , ChangeLogOutBox} = componentSlice.actions
export default componentSlice.reducer