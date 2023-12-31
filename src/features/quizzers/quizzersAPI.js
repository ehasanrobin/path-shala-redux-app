import { apiSlice } from "../api/apiSlice";

const quizzersSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getQuizzers: build.query({
      query: (videoId) => `/quizzes?video_id=${videoId}`,
    }),
  }),
});

export const { useGetQuizzersQuery } = quizzersSlice;
