import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPro = createAsyncThunk('/product/get', async()=>{
    const res = await axios.get('link/kink')
    return res.data
})

export const postPro = createAsyncThunk('/product/post', async(data)=>{
    const res = await axios.post('link/kink', data)
    return res.data
})

export const deletePro = createAsyncThunk('/product/delete', async(id)=>{
   await axios.delete('link/kink')
    return id
})


const productSlice = createSlice({
    name:'pro',
    initialState:{},
    reducers:{},
    extraReducers:(building)=>{
        building
        .addCase(getPro.pending, (state)=>{
            state.loading=true
        })
          .addCase(getPro.rejected, (state, action)=>{
            state.loading=false
            state.error=action.error.message
        })
          .addCase(getPro.fulfilled, (state, action)=>{
            state.loading=false;
            state.pro =action.payload
        })
        // post
        .addCase(postPro.fulfilled, (state, action)=>{
            state.loading=false;
            state.pro.push(action.payload)
        })
        // delete
        .addCase(deletePro.fulfilled, (state, action)=>{
            state.loading=false;
            state.pro =state.pro.filter(item=>item._id===action.payload)
        })
    }
})

export default productSlice.reducer
