import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Product } from "../../types/Product"

const initialState:{list:Product[]}={
list:[]
}

const producktSlice= createSlice({
name:"product",
initialState,
reducers:{

},
extraReducers:(builder)=> {
    builder.addCase(loadProduct.fulfilled,(state,{payload})=>{
    console.log(payload);
    state.list=payload;
    })

}})

export const loadProduct=createAsyncThunk(
    "loadProduckt",
    async()=>{
    const resp= await fetch("https://fakestoreapi.com/products");
    const data= await resp.json();
    return data;
    }

)

export default producktSlice.reducer;