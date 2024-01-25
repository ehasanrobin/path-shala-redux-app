import { apiSlice } from "../api/apiSlice";

const assignmentsAPISlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAssignments: build.query({
      query: () => `/assignments`,
    }),
  }),
});

export const { useget } = assignmentsAPISlice;
