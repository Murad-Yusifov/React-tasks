import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk("/product/get", async () => {
    const res = await axios.get('http://localhost:5000/product')
    return res.data
})

export const postProduct = createAsyncThunk("/product/post", async (data) => {
    const res = await axios.post("http://localhost:5000/product", data)
    return res.data
})

const productSlice = createSlice({
    name: "product",
    initialState: {
        product: [], 
        loading: false, 
        error: null,
    },
    reducers: {},
    extraReducers: building => {
        building
            .addCase(getProduct.pending, (state) => {
                state.loading = true
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading = false
                state.product = action.payload
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
            // post
            .addCase(postProduct.fulfilled, (state, action) => {
                state.loading = false
                state.product.push(action.payload)

            })

    }
})

export default productSlice.reducer