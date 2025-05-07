import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMealThunk = createAsyncThunk('/products/get', async()=>{
    const res = await axios.get('http://localhost:5000/meals')
    return res.data
})

export const postMealThunk = createAsyncThunk('/products/post', async(data)=>{
    const res = await axios.get('http://localhost:5000/meals', data)
    return res.data
})

export const deleteMealThunk = createAsyncThunk('/products/delete', async(id)=>{
    await axios.get(`http://localhost:5000/meals/${id}`)
    return id
})

const mealSlice = createSlice({
    name:"meal",
    initialState:{
        meal:[]
    },
    reducers:{},
    extraReducers: (building)=>{
        building
        .addCase(getMealThunk.pending, (state)=>{
            state.loading=true
        })
        .addCase(getMealThunk.fulfilled, (state, action)=>{
            state.loading=false
            state.meal= action.payload
        })
        .addCase(getMealThunk.rejected, (state, action)=>{
            state.loading=false
            state.error=action.error.message
        })
        // Post
        .addCase(postMealThunk.fulfilled, (state, action)=>{
            state.loading=false
            state.meal.push(action.payload)

        })
        // delete
        .addCase(deleteMealThunk.fulfilled, (state, action)=>{
            state.loading=false
            state.meal =state.meal.filter(item=>item._id !==action.payload)
        })
    }
})

export default mealSlice.reducer