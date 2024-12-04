import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    toggleSidebar: true,
  },
  reducers: {
    changeToggleSidebar: (state) => {
      state.toggleSidebar = !state.toggleSidebar;
    },
    closeSidebar: (state) => {
      state.toggleSidebar = false;
    },
  },
});

export const { changeToggleSidebar, closeSidebar } = appSlice.actions;
export default appSlice.reducer;
