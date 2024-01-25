import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userloggedin } from "../features/auth/authSlice";
import { auth } from "../firebase/firebase.init";
import { useState } from "react";

export const useAuth = () => {
  const dispatch = useDispatch();
  const [authCheck, setAuthCheck] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const accessToken = user.accessToken;
      dispatch(
        userloggedin({
          accessToken,
          user: {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
        })
      );
    }
    setAuthCheck(true);
  });
  return authCheck;
};
