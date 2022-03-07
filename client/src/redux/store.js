import { userSlice } from "./userSlice";
import { postSlice } from "./postSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    userSliceReducer: userSlice.reducer,
    postSliceReducer: postSlice.reducer
  },
});

export default store;