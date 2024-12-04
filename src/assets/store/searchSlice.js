import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheUpdate: (state, action) => {
      state = Object.assign(state, action.payload);
      //   state = { ...state, ...action.payload };
    },
  },
});

export const { cacheUpdate } = searchSlice.actions;
export default searchSlice.reducer;
