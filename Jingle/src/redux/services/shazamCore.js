import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "e6d0f68ce2mshab3d247b24ee397p117587jsn8e531528287b",
//     "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
//   },
// };

// fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

export const shazamCoreApi = createApi({
  reducerPath: "shazamCore",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers, { getState }) => {
      headers.set(
        "X-RapidAPI-Key",
        "e6d0f68ce2mshab3d247b24ee397p117587jsn8e531528287b"
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
