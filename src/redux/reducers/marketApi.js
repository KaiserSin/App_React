import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const marketApi = createApi({
  reducerPath: "market",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: (builder) => ({
    getProduct: builder.query({
      query: () => "/fakeData/productData.json",
    }),
  }),
});

export const { useGetProductQuery } = marketApi;
