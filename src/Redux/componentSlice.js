import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isEditProfile : false , 
    isLogOutBox : false ,
    isInPageBox : true ,
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
        ChangeisInPageBox : ( state , action) => {
            state.isInPageBox = action.payload
        }
    }
})

export const {ChangeEditProfile , ChangeLogOutBox , ChangeisInPageBox } = componentSlice.actions
export default componentSlice.reducer