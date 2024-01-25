import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useGetVideosQuery } from "../features/videos/videosAPI";
import Loading from "./Loading";

const PublicRoute = ({ children }) => {
  const auth = useSelector((state) => state.auth);
  const [loading, setLoading] = useState(true);
  const { data: videos, isLoading, isError } = useGetVideosQuery();
  const [isAuthCheck, setisAuthCheck] = useState(false);

  useEffect(() => {
    const authorization = async () => {
      await auth;
      isAuthCheck(true);
    };
    setLoading(false);
  }, [setLoading, auth]);

  if (loading && isAuthCheck) {
    return <Loading></Loading>;
  }
  return (
    <>
      {auth?.accessToken ? (
        <Navigate to={`/player/${videos[0]?.id}`}></Navigate>
      ) : (
        children
      )}
    </>
  );
};

export default PublicRoute;
