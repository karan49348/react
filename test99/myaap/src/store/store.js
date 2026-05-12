import { configureStore } from "@reduxjs/toolkit";
import producat from "../slice/slice";

const store = configureStore({
  reducer: {
    fakestore:producat,
  },
});

export default store;
