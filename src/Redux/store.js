import { configureStore } from "@reduxjs/toolkit";
import componentSlice from "./componentSlice";

const store = configureStore({
    reducer : {
        comp : componentSlice ,
    }
})

export default store ;