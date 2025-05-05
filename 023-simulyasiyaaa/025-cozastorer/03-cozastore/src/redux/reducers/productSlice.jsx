import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk =createAsyncThunk(
    "/products/get", async ()=>{
        const res = await axios.get('http://localhost:5000/products')
        return res.data
    }
)

export const postProductThunk =createAsyncThunk("/products/post", async(data)=>{
    const res = await axios.post('http://localhost:5000/products', data)
    return res.data
})

export const deleteProductThunk =createAsyncThunk("/products/delete", async(id)=>{
   await axios.post(`http://localhost:5000/products/${id}`)
    return id
})

const productSlice =createSlice({
    name:"product",
    initialState:{},
    reducers:{},
    extraReducers:(building)=>{
        building
        .addCase(getProductThunk.pending, (state)=>{
            state.loading = true
        })
        .addCase(getProductThunk.rejected, (state, action)=>{
            state.loading =false
            state.error=action.error.message
        })
        .addCase(getProductThunk.fulfilled, (state, action)=>{
            state.loading=false
            state.product =action.payload
        })
        building
        .addCase(postProductThunk.fulfilled, (state, action)=>{
            state.loading=false
            state.product.push(action.payload)

        })

        building
        .addCase(deleteProductThunk.fulfilled, (state, action)=>{
            state.loading=false
            state.prpoduct= state.product.filter( item=>item._id !==action.payload)
        } )
    }
})

export default productSlice.reducer