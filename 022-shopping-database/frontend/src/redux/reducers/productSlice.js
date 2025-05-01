import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductThunk =createAsyncThunk('/products/get', async ()=>{
    const res =await axios.get()

})