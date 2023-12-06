import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set(
        'X-RapidAPI-Key',
        'e82dca1c2amshd95ab015a1ec42bp1f1eb2jsn825e7a6b7d54',
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // getTopCharts: builder.query({ query: () => "/charts/track" }),
    // getSongRelated: builder.query({ query: ({songid}) => "/charts/track" }),
    getTopCharts: builder.query({
      query: () => ({
        url: '/charts/track',
        method: 'GET',
      }),
    }),
    getSongDetails: builder.query({
      query: ({ id }) => ({
        url: '/songs/v2/get-details',
        method: 'GET',
        params: {
          id,
        },
      }),
    }),
    // getSongDetails: builder.query({
    //   query: ({ songid, l }) => `/songs/v2/get-details?id=${songid}&l=${l}`,
    // }),
  }),
});
export const { useGetTopChartsQuery, useGetSongDetailsQuery } = shazamCoreApi;
