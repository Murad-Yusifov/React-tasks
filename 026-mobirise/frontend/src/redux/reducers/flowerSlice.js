import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk = createAsyncThunk("/product/get" , async()=>{
    const res =await axios.get("http://localhost:5000/flowers")
    return res.data
})

export const postProductThunk = createAsyncThunk("/product/post" , async(data)=>{
    const res =await axios.post("http://localhost:5000/flowers", data)
    return res.data
})

export const deleteProductThunk = createAsyncThunk("/product/delete" , async(id)=>{
    await axios.delete(`http://localhost:5000/flowers/${id}`)
    return id
})

const productSlice = createSlice({
    name:"product",
    initialState:{},
    reducers:{},
    extraReducers:(building)=>{
        building
        .addCase(getProductThunk.pending, (state)=>{
            state.loading= false
        })
        .addCase(getProductThunk.fulfilled, (state, action)=>{
            state.loading= false
            state.product = action.payload
        })
        .addCase(getProductThunk.rejected, (state, action)=>{

            state.loading= false
            state.error= action.error.message
            
        })
        // post

        .addCase(postProductThunk.fulfilled, (state, action)=>{

            state.loading= false
            state.product.push(action.payload)
            
        })
        // delete
        .addCase(deleteProductThunk.fulfilled, (state, action)=>{

            state.loading= false
            state.product=state.meal.filter(item=>item._id !==action.payload)
            
        })
    }
})

export default productSlice.reducer