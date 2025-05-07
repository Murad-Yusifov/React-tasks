import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getMeatThunk = createAsyncThunk('/products/it', async()=>{
    const res = await axios.get('http://localhost:5000/meat')
    return res.data
})
const meatSlice = createSlice({
    name:"meat",
    initialState:{
        meat:[]
    },
    reducers:{},
    extraReducers: (building)=>{
        building
        .addCase(getMeatThunk.pending, (state)=>{
            state.loading=true
        })
        .addCase(getMeatThunk.fulfilled, (state, action)=>{
            state.loading=false
            state.meat= action.payload
        })
        .addCase(getMeatThunk.rejected, (state, action)=>{
            state.loading=false
            state.error=action.error.message
        })
    }
})

export default meatSlice.reducer