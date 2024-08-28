import { configureStore } from "@reduxjs/toolkit";
import { catalogSlice } from "./reducers/catalogSlice";
import { marketApi } from "./reducers/marketApi";

export const store = configureStore({
  reducer: {
    [catalogSlice.reducerPath]: catalogSlice.reducer,
    [marketApi.reducerPath]: marketApi.reducer,
  },
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat([marketApi.middleware]),
});
