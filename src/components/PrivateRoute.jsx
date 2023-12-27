import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  if (!auth?.accessToken) {
    return <Navigate to="/"></Navigate>;
  } else {
    return children;
  }
};

export default PrivateRoute;
