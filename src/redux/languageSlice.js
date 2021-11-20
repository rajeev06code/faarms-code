import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getLanguage = createAsyncThunk("getSelect", async () => {
  const res = await axios.get(" https://my-product-api-fast.herokuapp.com/selector");
 return res.data;
});

const languageSlice = createSlice({
  name: "language",
  initialState: {
      lang:"en",
      selector:[],
      loading:false,
      errors:{}
    
  },
  reducers:{
     addlang:(state,action)=>{
       state.lang=action.payload
     }
  },
  extraReducers: {
    [getLanguage.pending]: (state, action) => {
      state.loading = true;
    },
    [getLanguage.fulfilled]: (state, action) => {
      state.loading = false;
      state.selector = action.payload;
    },
    [getLanguage.rejected]: (state, action) => {
      state.loading = false;
      state.errors = action.payload;
    },
  }
})

export const {addlang} =languageSlice.actions 
export default languageSlice.reducer;
