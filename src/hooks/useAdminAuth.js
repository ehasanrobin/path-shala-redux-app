import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userloggedin } from "../features/auth/authSlice";

export const useAdminAuth = () => {
  const dispatch = useDispatch();
  const [skip, setSkip] = useState(true);
  useEffect(() => {
    const result = JSON.parse(localStorage.getItem("Authorization"));
    if (result?.accessToken) {
      dispatch(
        userloggedin({
          accessToken: result.accessToken,
          user: result.user,
        })
      );
    }
    setSkip(false);
  }, [dispatch]);
  return skip;
};
