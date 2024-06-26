import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getWords: builder.query({
      query: () => "/words",
    }),
  }),
});

export const { useGetWordsQuery } = apiSlice;
