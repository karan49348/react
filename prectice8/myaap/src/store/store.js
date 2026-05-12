import { configureStore } from "@reduxjs/toolkit";
 import allreducar from '../slice/producat'
 import producat from '../slice/fakestore'
 import { userpost } from "../slice/Post";
  const store = configureStore({
    reducer: {
      allusr: allreducar,
      fakestore: producat,
      allpost: userpost
    },
  });
  export  default store;