import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCatagoryThunk =createAsyncThunk("/catagories/get", async()=>{
    const res =await axios.get('https://northwind.vercel.app/api/categories/')
    return res.data
})

export const postCatagoryThunk =createAsyncThunk("/catagories/post", 
    async (data) => {
        await axios.post("https://northwind.vercel.app/api/categories/", data);
        return data;
    }
)

export const putCatagoryThunk = createAsyncThunk(
    "/catagories/put",
    async ({ id, updatedData }) => {
      const res = await axios.put(
        `https://northwind.vercel.app/api/categories/${id}`,
        updatedData
      );
      return res.data;
    }
  );

  export const deleteCatagoryThunk = createAsyncThunk(
    "/catagories/delete",
    async (id) => {
      await axios.delete(`https://northwind.vercel.app/api/categories/${id}`);
      return id;
    }
  );
  
const catagorySlice =createSlice({
    name: "catagory",
    initialState:{
        catagory:[],
        loading:false,
        error:null,
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getCatagoryThunk.pending, (state)=>{
            state.loading=true
        })
        .addCase(getCatagoryThunk.fulfilled, (state, action)=>{
            state.loading=false;
            state.catagory=action.payload
        } )
        .addCase(getCatagoryThunk.rejected, (state, action)=>{
            state.loading=false;
            state.error=action.error.message
        })

        // Post

        .addCase(postCatagorytThunk.fulfilled, (state, action)=>{
            state.catagory.push(action.payload)
        })
        // put 
  .addCase(putCatagoryThunk.fulfilled, (state, action) => {
    state.catagory = state.catagory.map((cat) =>
      cat.id === action.payload.id ? action.payload : cat
    );
  })
//   delete
  .addCase(deleteCatagoryThunk.fulfilled, (state, action) => {
    state.catagory = state.catagory.filter((cat) => cat.id !== action.payload);
  });


    }
})


export default catagorySlice.reducer;

