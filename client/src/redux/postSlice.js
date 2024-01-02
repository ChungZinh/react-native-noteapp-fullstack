import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
    isLoading: false,
    error: false,
  },
  reducers: {
    createStart: (state) => {
      state.isLoading = true;
    },
    createError: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    createSuccess: (state, action) => {
      state.posts.push({
        id: action.payload._id,
        title: action.payload.title,
        desc: action.payload.desc,
      });
      state.error = false;
      state.isLoading = false;
    },

    getStart: (state) => {
      state.isLoading = true;
    },
    getError: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    getSuccess: (state, action) => {
      state.posts = action.payload.map((post) => {
        return {
          id: post._id,
          title: post.title,
          desc: post.desc,
        };
      });
    },

    updateStart: (state) => {
      state.isLoading = true;
    },
    updateError: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    updateSuccess: (state, action) => {
      state.posts.map((post) => {
        if (post.id === action.payload.id) {
          return { ...post, ...action.payload };
        }
      });

      // const index = state.posts.findIndex(
      //   (post) => post.id === action.payload.id
      // );
      // state.posts[index] = {
      //   id: action.payload.id,
      //   title: action.payload.title,
      //   desc: action.payload.desc,
      // };
    },

    deleteStart: (state) => {
      state.isLoading = true;
    },
    deleteError: (state) => {
      state.isLoading = false;
      state.error = true;
    },
    deleteSuccess: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
  },
});

export const {
  getError,
  getStart,
  getSuccess,
  updateError,
  updateStart,
  updateSuccess,
  createError,
  createStart,
  createSuccess,
  deleteError,
  deleteSuccess,
  deleteStart,
} = postSlice.actions;
export default postSlice.reducer;
