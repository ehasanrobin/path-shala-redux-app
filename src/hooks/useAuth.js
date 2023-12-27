import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userloggedin } from "../features/auth/authSlice";
import { auth } from "../firebase/firebase.init";

export const useAuth = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          userloggedin({
            accessToken: user.accessToken,
            user: user.providerData[0],
          })
        );
      }
    });
  }, [dispatch]);
};
