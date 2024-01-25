import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

const A_PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, [setLoading, auth]);

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <>
      {!auth?.accessToken && !loading ? (
        <Navigate to="/admin/login"></Navigate>
      ) : (
        children
      )}
    </>
  );
};

export default A_PrivateRoute;
