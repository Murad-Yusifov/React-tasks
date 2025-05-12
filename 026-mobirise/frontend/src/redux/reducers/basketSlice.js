import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBasketThunk = createAsyncThunk('/basket/get', async()=>{
    const res = await axios.get('http://localhost:5000/baskets')
    return res.data
})
export const postBasketThunk = createAsyncThunk('/basket/post', async(item)=>{
    const res = await axios.post('http://localhost:5000/baskets', item)
    return res.data
})




export const deleteBasketThunk = createAsyncThunk('/basket/delete', async(id)=>{
    const res = await axios.delete(`http://localhost:5000/baskets/${id}`)
    return id
})


const basketSlice =createSlice({
    name:"basket",
    initialState:{
        basket:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:building =>{
        building
        // get methodu
        .addCase(getBasketThunk.pending, (state)=>{
            state.loading=true
        })
        .addCase(getBasketThunk.fulfilled, (state, action)=>{
            state.loading=false
            state.basket=action.payload
        })
        .addCase(getBasketThunk.rejected, (state, action)=>{
            state.loading=false
            state.error= action.error.message
            
        })
        // post method
            .addCase(postBasketThunk.fulfilled  , (state, action)=>{
            state.loading=false
            state.basket.push(action.payload)
            
        })
        // delete
            .addCase(deleteBasketThunk.fulfilled, (state, action)=>{
            state.loading=false
            state.basket=state.basket.filter(item=>item._id !==action.payload)
            
        })
    }
})


export default basketSlice.reducer