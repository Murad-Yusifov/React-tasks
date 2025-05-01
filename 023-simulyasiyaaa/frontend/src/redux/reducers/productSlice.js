import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductsThunk = createAsyncThunk('/products/get', async () => {
  const res = await axios.get('http://localhost:5000/products');
  return res.data;
});

export const postProductTrunk = createAsyncThunk('/products/post', async (data) => {
  const res = await axios.post('http://localhost:5000/products', data);
  return res.data;
});

export const deleteProductTrunk = createAsyncThunk('/products/delete', async (id) => {
  await axios.delete(`http://localhost:5000/products/${id}`);
  return id;
});

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
      .addCase(getProductsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(getProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(postProductTrunk.fulfilled, (state, action) => {
        state.product.push(action.payload);
      })
      .addCase(deleteProductTrunk.fulfilled, (state, action) => {
        state.product = state.product.filter(item => item._id !== action.payload);
      });
  },
});

export default productSlice.reducer;
