import { apiSlice } from "../api/apiSlice";
import { userloggedin } from "./authSlice";

const authAPI = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      query: ({ email, role }) => `/users?email=${email}&role=${role}`,
    }),
    addUsers: build.mutation({
      query: (data) => ({
        url: "/users",
        method: "POST",
        body: data,
      }),
    }),
    adminLogin: build.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(
        arg,
        { dispatch, getState, queryFulfilled, requestId, extra, getCacheEntry }
      ) {
        const result = await queryFulfilled;
        const token = result?.data?.accessToken;
        if (token) {
          localStorage.setItem("Authorization", JSON.stringify(result.data));
          dispatch(
            userloggedin({
              accessToken: result.data.accessToken,
              user: result.data.user,
            })
          );
        }
      },
    }),
  }),
});

export const { useAdminLoginMutation, useGetUsersQuery, useAddUsersMutation } =
  authAPI;
