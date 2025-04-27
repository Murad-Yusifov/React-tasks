import { configureStore } from "@reduxjs/toolkit";
import catagorySlice from './reducers/catagorySlice'

export const store = configureStore({
    reducer:{
        catagory:catagorySlice
    }
})