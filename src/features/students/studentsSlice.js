import { apiSlice } from "../api/apiSlice";

const studentsSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getStudents: build.query({
      query: () => "users?role=student",
    }),
  }),
});

export const { useGetStudentsQuery } = studentsSlice;
