import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./productSlice";
import languageReducer from "./languageSlice";
import productDetailsReducer from "./productDetailsSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
  reducer: {
    prod: productReducer,
    bhasa: languageReducer,
    detailsPro: productDetailsReducer,
    cart:cartReducer,
  },
});
export default store;
