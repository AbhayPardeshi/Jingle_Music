import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCore",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",

    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        // "e6d0f68ce2mshab3d247b24ee397p117587jsn8e531528287b"
        process.env.REACT_APP_VITE_SHAZAM_CORE_RAPID_API_KEY
      );
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
