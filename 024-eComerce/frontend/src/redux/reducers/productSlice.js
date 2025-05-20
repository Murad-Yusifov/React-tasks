import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk = createAsyncThunk("/products/get", async () => {
  const res = await axios.get("http://localhost:5000/products");
  return res.data;
});

export const postProductThunk = createAsyncThunk("/products/post", async (data) => {
  const res = await axios.post("http://localhost:5000/products", data);
  return res.data;
});

export const deleteProductThunk = createAsyncThunk("/products/delete", async (id) => {
  await axios.delete(`http://localhost:5000/products/${id}`);
  return id;
});

const productSlice = createSlice({
<<<<<<< HEAD:024-eComerce/frontend/src/redux/reducers/productSlice.jsx
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // GET
      .addCase(getProductThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // POST
      .addCase(postProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(postProductThunk.rejected, (state, action) => {
        state.error = action.error.message;
      })
      // DELETE
      .addCase(deleteProductThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = state.products.filter((item) => item._id !== action.payload);
      })
      .addCase(deleteProductThunk.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});
=======
    name:'products',
    initialState:{},
    reducers:{},
    extraReducers:(building)=>{
        building
        .addCase(getProductThunk.pending, (state)=>{
            state.loading =true
        })
        .addCase(getProductThunk.fulfilled, (state, action)=>{
            state.loading=false
            state.products=action.payload
        })
        .addCase(getProductThunk.rejected, (state, action)=>{
            state.loading=false
            state.error=action.error.message
        })
        // Post
     .addCase(postProductThunk.fulfilled, (state, action) => {
    state.loading = false;
    state.products.push(action.payload);
})
// delete
.addCase(deleteProductThunk.fulfilled, (state, action) => {
    state.loading = false;
    state.products = state.products.filter(item => item._id !== action.payload);
})

    }

export default productSlice.reducer;
