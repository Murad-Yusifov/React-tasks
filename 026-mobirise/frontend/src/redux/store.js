import { configureStore } from "@reduxjs/toolkit";
import productSlice from './reducers/flowerSlice'
import basketSlice from './reducers/basketSlice'

export const store = configureStore({
    reducer: {
        product:productSlice,
        basket:basketSlice
    }
})