import { createSlice } from "@reduxjs/toolkit";

// reducer logic
export const userSlice = createSlice({
  user: "user",
  initialState: {
    initialState: null
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    }
  },
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;