import { createSlice } from "@reduxjs/toolkit";

const progressSlice = createSlice({
  name: "progress",
  initialState: {
    progress: [],
  },
  reducers: {
    setProgress: (state, action) => {
      console.log(action.payload);
      state.progress.push(action.payload);
    },
    setDeleteProgress: (state,action) => {
      const newState = state.progress
      newState.splice(action.payload,1)
      state.progress = newState
      console.log(action.payload)
    },
    setIdProgress: (state,action) => {
      console.log(action.payload);
      state._id(action.payload);
    },
  },
});

export const { setProgress, setDeleteProgress, setIdProgress } = progressSlice.actions;
export default progressSlice.reducer;
