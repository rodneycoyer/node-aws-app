import { createSlice } from "@reduxjs/toolkit";

// posts
const postListSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.posts.push(action.payload.posts)
    },
    deleteItem: (state, action) => {
      state.postList.filter((item))
    }
  }
});

// export post actions
export const postActions = postListSlice.actions;