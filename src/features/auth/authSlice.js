import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.init";

const initialState = {
  accessToken: undefined,
  user: undefined,
  isLoading: false,
  isError: "",
};
// login async function
export const loggedinasync = createAsyncThunk(
  "auth/loginasync",
  async ({ email, password }) => {
    try {
      const userData = await signInWithEmailAndPassword(auth, email, password);
      const user = userData.user;
      return user;
    } catch (err) {
      throw err;
    }
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(loggedinasync.pending, (state, action) => {
        state.isLoading = true;
        state.isError = "";
        state.accessToken = undefined;
        state.user = undefined;
      })
      .addCase(loggedinasync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = "";
        state.accessToken = action.payload?.accessToken;
        state.user = {
          uid: action.payload?.uid,
          email: action.payload?.email,
          displayName: action.payload?.displayName,
          photoURL: action.payload?.photoURL,
        };
      })
      .addCase(loggedinasync.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
        state.accessToken = undefined;
        state.user = undefined;
      });
  },
});

export const { userloggedOut, userloggedin } = authSlice.actions;
export default authSlice.reducer;
