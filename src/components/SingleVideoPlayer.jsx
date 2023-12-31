import React from "react";
import { useGetVideoQuery } from "../features/videos/videosAPI";
import Loading from "./Loading";
import Error from "./Error";
import { Button, Divider } from "@mui/material";

const SingleVideoPlayer = ({ videoId, handleOpen }) => {
  const { data: video, isLoading, isError, error } = useGetVideoQuery(videoId);

  let content1;
  if (isLoading && !isError) {
    content1 = <Loading></Loading>;
  } else if (!isLoading && isError) {
    content1 = <Error></Error>;
  } else if (!isLoading && !isError && video.id) {
    content1 = (
      <div className="w-4/5 mt-4 shadow-sm flex flex-col items-center">
        <iframe
          className="w-4/5 min-h-96 object-cover"
          src={video.id}
          title="Learn Material UI in One Hour - React Material UI Project Tutorial [2022]"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
  return <>{content1}</>;
};

export default SingleVideoPlayer;
