import { configureStore } from "@reduxjs/toolkit";
import karan from "../slice/signupslice";
import Signup from "../Signup";

export const store = configureStore({
  reducer: {
    //es me ayegi sari sice
    // counter: counterReducer,
    Signup: karan,
  },
});
