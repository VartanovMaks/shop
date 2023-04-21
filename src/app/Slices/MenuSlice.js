import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];
const initialState = {
  menuItems: [],
};

export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    loadMenu: (state, action) => {
      state.menuItems = action.payload;
    },
  },
});

export const { loadMenu } = menuSlice.actions;

export const selectMenu = (state) => state.menu;

export default menuSlice.reducer;
