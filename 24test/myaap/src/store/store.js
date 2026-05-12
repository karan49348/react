import { configureStore } from "@reduxjs/toolkit";
import user from "../slice/signupslice";


export const store = configureStore({
  reducer: {
    //es me ayegi sari sice
    // counter: counterReducer,
    karan: user,
  },
});
