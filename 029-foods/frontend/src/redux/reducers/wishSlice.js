import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getWishThunk = createAsyncThunk("/wish/get", async () => {
  const res = await axios.get("http://localhost:5000/wish");
  return res.data;
});

export const postWishThunk = createAsyncThunk(
  "/wish/post",
  async (data) => {
    const res = await axios.post("http://localhost:5000/wish", data);
    return res.data;
  }
);

export const deleteWishThunk = createAsyncThunk(
  "/wish/delete",
  async (id) => {
    await axios.delete(`http://localhost:5000/wish/${id}`);
    return id;
  }
);

const wishSlice = createSlice({
  name: "wish",
  initialState: {
    wish: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWishThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(getWishThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.wish = action.payload;
      })
      .addCase(getWishThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // Post
      .addCase(postWishThunk.fulfilled, (state, action) => {
        state.wish.push(action.payload);
      })
      // Delete
      .addCase(deleteWishThunk.fulfilled, (state, action) => {
        state.wish = state.wish.filter(
          (item) => item._id !== action.payload
        );
      })
  },
});

export default wishSlice.reducer;
