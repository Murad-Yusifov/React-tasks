import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = process.env.NODE_ENV === 'development' 
 ?`https://fakestoreapi.com/products`
    : `http://localhost:5000/eiser` ;

// API çağırışları
export const getProduct = createAsyncThunk(
    '/product/get',
    async () => {
        const res = await axios.get(baseURL);
        return res.data;
    }
);

export const postProduct = createAsyncThunk(
    '/product/post',
    async (data) => {
        const res = await axios.post(baseURL, data);
        return res.data;
    }
);

export const deleteProduct = createAsyncThunk(
    'product/delete',
    async (id) => {
        const res = await axios.delete(`${baseURL}/${id}`);
        return id;
    }
);

// Slice
const productSlice = createSlice({
    name: 'product',
    initialState: {
        product: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            // getProduct
            .addCase(getProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(getProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // postProduct
            .addCase(postProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(postProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product.push(action.payload);
            })
            .addCase(postProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            // deleteProduct
            .addCase(deleteProduct.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.product = state.product.filter(
                    (item) => item._id !== action.payload
                );
            })
            .addCase(deleteProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default productSlice.reducer;
