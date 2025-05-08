import { configureStore } from "@reduxjs/toolkit";
import productSlice from './reducers/flowerSlice'

export const store = configureStore({
    reducer: {
        product:productSlice
    }
})