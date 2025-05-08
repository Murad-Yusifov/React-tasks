import { configureStore } from "@reduxjs/toolkit";
import mealSlice from './reducers/mealSlice'
import meatSlice from './reducers/meatSlice'
import baksetSlice from './reducers/basketSlice'

export const store = configureStore({
    reducer:{
        basket:baksetSlice,
        meals:mealSlice,
        meat:meatSlice
    }
})