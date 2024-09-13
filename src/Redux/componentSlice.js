import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEditProfile : false , 
    isLogOutBox : false ,
    isCreateBox : true ,
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
        } , 
        ChangeisCreateBox : ( state , action) => {
            state.isCreateBox = action.payload
        }
    }
})

export const {ChangeEditProfile , ChangeLogOutBox , ChangeisCreateBox } = componentSlice.actions
export default componentSlice.reducer