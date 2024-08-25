import { createSlice } from "@reduxjs/toolkit";

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: {
    isCatalogVisible: false,
  },
  reducers: {
    setCatalogVisible(state, action) {
      state.isCatalogVisible = action.payload;
    },
  },
});


export const { setCatalogVisible } = catalogSlice.actions;
