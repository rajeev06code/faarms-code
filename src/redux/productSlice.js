import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// products column 1 & 2
export const getProducts = createAsyncThunk("getPro", async () => {
  // const res = await axios.get("https://rajeev06code.github.io/server/mydatabase.json");
  // const res = await axios.get(
  //   "https://8d06-2401-4900-4bd8-fda1-bd7a-cca7-1a84-9284.ngrok.io/v1/product?is_active=true"
  // );
  // const res = await axios.get(
  //   "https://rajeev06code.github.io/variant/variantsdata.json"
  // );
  const res = await axios.get(
    "https://76ba-49-207-211-11.ngrok.io/v1/product?is_active=true"
  );

  // const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return res.data;
  // console.log(res.data);
});

// prodcts column 3 & 4
export const getProducts2 = createAsyncThunk("getPro2", async () => {
  const response = await axios.get(
    "https://rajeev06code.github.io/server/mydatabase.json"
  );
  return response.data.products2;
});
export const getMachines = createAsyncThunk("getMachines", async () => {
  const response = await axios.get(
    "https://rajeev06code.github.io/server/mydatabase.json"
  );
  return response.data.products3;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    products2: [],
    products3: [],
    loading: false,
    errors: {},
  },
  extraReducers: {
    // for column 1 & 2
    [getProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
    // for column 3 & 4
    [getProducts2.fulfilled]: (state, action) => {
      state.loading = false;
      state.products2 = action.payload;
    },
    //for machines
    [getMachines.fulfilled]: (state, action) => {
      state.loading = false;
      state.products3 = action.payload;
    },
  },
});

export default productSlice.reducer;
