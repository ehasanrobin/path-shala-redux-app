import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();
  console.log(auth);
  if (auth?.accessToken) {
    return <Navigate to="/player"></Navigate>;
  } else {
    return children;
  }
};

export default PublicRoute;
