import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

// create store and manage reducer actions
export default configureStore({
  reducer: {
    user: userReducer
  },
});