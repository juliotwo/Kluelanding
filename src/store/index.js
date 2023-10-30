import { configureStore } from "@reduxjs/toolkit";
import layoutSlice from "./slices/layoutSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    layout: layoutSlice,
    cart: cartSlice,
  },
});

export default store;

