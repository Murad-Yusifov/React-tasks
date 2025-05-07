import { configureStore } from "@reduxjs/toolkit";
import mealSlice from './reducers/mealSlice'
import meatSlice from './reducers/meatSlice'

export const store = configureStore({
    reducer:{
        meals:mealSlice,
        meat:meatSlice
    }
})