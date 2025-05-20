import { configureStore } from "@reduxjs/toolkit";
import productSlice from './reducers/productSlice'
import basketSlice from './reducers/basketSlice'
// import wishSlice from './reducers/wishSlice'

export const store = configureStore({
    
    reducer: {
    product:productSlice,
    basket:basketSlice,
    // wish:wishSlice
}
})