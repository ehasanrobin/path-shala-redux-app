import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  accessToken: undefined,
  user: undefined,
  loading: false,
  error: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userloggedin: (state, action) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userloggedOut: (state, action) => {
      state.accessToken = undefined;
      state.user = undefined;
    },
  },
});

export const { userloggedOut, userloggedin } = authSlice.actions;
export default authSlice.reducer;
