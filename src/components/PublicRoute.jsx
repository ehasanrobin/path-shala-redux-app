import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

const PublicRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  const [isAuthCheck, setisAuthCheck] = useState(false);

  useEffect(() => {
    const authorization = async () => {
      await auth;
      isAuthCheck(true);
    };
    setLoading(false);
  }, [setLoading, auth]);

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>{auth?.accessToken ? <Navigate to="/player"></Navigate> : children}</>
  );
};

export default PublicRoute;
