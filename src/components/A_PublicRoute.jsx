import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useAdminAuth } from "../hooks/useAdminAuth";
import Loading from "./Loading";

const A_PublicRoute = ({ children }) => {
  const authCheck = useAdminAuth();
  const auth = useSelector((state) => state.auth);

  if (authCheck) {
    return <Loading></Loading>;
  }

  return auth?.accessToken ? (
    <Navigate to={"/admin/dashboard"}></Navigate>
  ) : (
    children
  );
};

export default A_PublicRoute;
