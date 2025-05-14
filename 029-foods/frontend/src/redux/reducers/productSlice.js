import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk = createAsyncThunk("/products/get", async()=>{
    const res = await axios.get("http://localhost:5000/product")
    return res.data
})

export const postProductThunk = createAsyncThunk("/products/post", async(data)=>{
    const res = await axios.post("http://localhost:5000/product", data)
    return res.data
})

export const deleteProductThunk = createAsyncThunk("/products/delete", async(id)=>{
    await axios.delete(`http://localhost:5000/product/${id}`)
    return id
})

const productSlice = createSlice({
    name:"products",
    initialState:{
        products:[],
        error:null
    },
    reducers:{},
    extraReducers: (building)=>{
        building
        .addCase(getProductThunk.pending, (state)=>{
            state.loading= true
        })
        .addCase(getProductThunk.fulfilled, (state, action)=>{
            state.loading= false
            state.products= action.payload
        })
        .addCase(getProductThunk.rejected, (state, action)=>{
            state.loading=false
            state.error= action.error.message
        })
    }
})

export default productSlice.reducer