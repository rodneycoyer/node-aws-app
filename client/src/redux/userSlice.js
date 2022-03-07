import { createSlice } from "@reduxjs/toolkit";

// user login
const userSlice = createSlice({
  name: "Auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
    },
  },
});

// login actions
export const authActions = authSlice.actions;

