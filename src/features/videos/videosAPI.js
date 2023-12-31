import { apiSlice } from "../api/apiSlice";

const videosAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getVideos: builder.query({
      query: () => "/videos", // Replace with your actual query endpoint
    }),
    // Other endpoints...
  }),
});

export const { useGetVideosQuery } = videosAPI;