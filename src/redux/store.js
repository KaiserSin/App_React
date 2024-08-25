import { configureStore } from "@reduxjs/toolkit";
import { catalogSlice } from "./reducers/catalogSlice";

export const store = configureStore({
  reducer: {
    [catalogSlice.reducerPath]: catalogSlice.reducer,
  },
});
