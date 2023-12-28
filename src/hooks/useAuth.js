import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userloggedin } from "../features/auth/authSlice";
import { auth } from "../firebase/firebase.init";

export const useAuth = () => {
  const dispatch = useDispatch();
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
  });
};
