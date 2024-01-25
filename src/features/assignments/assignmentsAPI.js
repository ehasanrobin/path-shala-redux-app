import { apiSlice } from "../api/apiSlice";

const assignmentsSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAssignments: build.query({
      query: () => "/assignments",
    }),
  }),
});

export const { useGetAssignmentsQuery } = assignmentsSlice;
