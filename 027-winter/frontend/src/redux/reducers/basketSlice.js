import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBasket = createAsyncThunk("/basket/get", async () => {
    const res = await axios.get('http://localhost:5000/basket')
    return res.data
})

export const postBasket = createAsyncThunk("/basket/post", async (data) => {
    const res = await axios.post("http://localhost:5000/basket", data)
    return res.data
})

const basketSlice = createSlice({
    name: "basket",
    initialState: {
        basket: [], 
        loading: false, 
        error: null,
    },
    reducers: {},
    extraReducers: building => {
        building
            .addCase(getBasket.pending, (state) => {
                state.loading = true
            })
            .addCase(getBasket.fulfilled, (state, action) => {
                state.loading = false
                state.basket = action.payload
            })
            .addCase(getBasket.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            // post
            .addCase(postBasket.fulfilled, (state, action) => {
                state.loading = false
                state.basket.push(action.payload)

            })

    }
})

export default basketSlice.reducer