import { apiSlice } from "../api/apiSlice";

const quizzersSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllQuizzers: build.query({
      query: () => `/quizzes`,
    }),
    getQuizzers: build.query({
      query: (videoId) => `/quizzes?video_id=${videoId}`,
    }),
  }),
});

export const { useGetQuizzersQuery, useGetAllQuizzersQuery } = quizzersSlice;
