import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCore",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",

    prepareHeaders: (headers, { getState }) => {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_SHAZAM_CORE_API_KEY);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({
      query: () => ({ url: "/charts/world" }),
    }),
  }),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
