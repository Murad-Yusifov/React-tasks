import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
    '/product/get',
    async () => {
        const res= await axios.get('http://localhost:5000/eiser')
        return res.data

    }
)
export const postProduct = createAsyncThunk(
    '/product/post',
    async (data) => {
        const res= await axios.post('http://localhost:5000/eiser', data)
        return res.data

    }
)
export const deleteProduct = createAsyncThunk(
    '/product/delete',
    async (id) => {
        const res= await axios.delete(`http://localhost:5000/eiser/${id}`)
        return id
    }
)

const productSlice =createSlice({
    name:'product',
    initialState:{},
    reducers:{},
    extraReducers:(building)=>{
        building
        .addCase(getProduct.pending, (state)=>{
            state.loading=true
        })
          .addCase(getProduct.fulfilled, (state,action)=>{
            state.loading=false
            state.product=action.payload
        })
          .addCase(getProduct.rejected, (state,action)=>{
            state.loading=false
            state.error=action.error.message
        })
        // post
          .addCase(postProduct.fulfilled, (state,action)=>{
            state.loading=false
            state.product.push(action.payload)
        })
        // delete
          .addCase(deleteProduct.fulfilled, (state,action)=>{
            state.loading=false
            state.product =state.product.filter(
                (item)=>item._id !== action.payload
            )
        })
    }
})

export default productSlice.reducer