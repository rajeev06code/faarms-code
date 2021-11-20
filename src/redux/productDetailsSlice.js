import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getDetails = createAsyncThunk("getDetails", async (id) => {
  // const res = await axios.get(`https://my-product-api-fast.herokuapp.com/productDetails/${id}`);
  const res1 = await axios.get(
    `https://76ba-49-207-211-11.ngrok.io/v1/product/${id}/variant`,{ params: { is_active: true } }
  );
  // const res = await axios.get(
  //   `https://76ba-49-207-211-11.ngrok.io/v1/product/${id}/variant`,{ params: { is_active: true } }
  // );

      // return res.data;
    
  return res1.data;
  
  //  console.log(res.data)
});

const productDetailsSlice = createSlice({
  name: "details",
  initialState: {
    details: [],
    loading: false,
    errros: {},
  },
  extraReducers: {
    [getDetails.pending]: (state, action) => {
      state.loading = true;
    },
    [getDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.details = action.payload;
    },
    [getDetails.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  },
});

// export const {addlang} =languageSlice.actions
export default productDetailsSlice.reducer;
