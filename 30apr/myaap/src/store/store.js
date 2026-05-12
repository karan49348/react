import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slice/userSlice";
// import cartReducer from "../slice/cartSlice";
import wishReducer from "../slice/wishSlice";
 import  fetchProducts from "../slice/producatslice";
export const store = configureStore({
  reducer: {
    userData: authReducer,
    // userCart: cartReducer,
    userWishlist: wishReducer,
    userCart: fetchProducts,

  },
});
