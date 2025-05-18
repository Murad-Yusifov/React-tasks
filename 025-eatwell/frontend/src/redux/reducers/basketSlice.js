import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getBasketThunk = createAsyncThunk(
  'basket/get',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:5000/basket');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

  

export const addToBasketAsync = createAsyncThunk(
    'basket/addToBasket',
    async (product, { rejectWithValue }) => {
      try {
        const response = await axios.post('http://localhost:5000/basket', product);
        return response.data;
      } catch (error) {
        return rejectWithValue("Xəta baş verdi");
      }
    }
  );
  

export const removeFromBasketAsync = createAsyncThunk(
  'basket/removeFromBasket',
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:5000/basket/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue('Xəta baş verdi');
    }
  }
);

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearBasket: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder

    // get

    .addCase(getBasketThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBasketThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload; 
      })
      .addCase(getBasketThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      })


    // post
      .addCase(addToBasketAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToBasketAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addToBasketAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(removeFromBasketAsync.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromBasketAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter((item) => item._id !== action.payload);
      })
      .addCase(removeFromBasketAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearBasket } = basketSlice.actions;
export default basketSlice.reducer;
