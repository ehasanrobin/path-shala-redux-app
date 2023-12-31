import NotStartedIcon from "@mui/icons-material/NotStarted";
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import { useGetVideosQuery } from "../features/videos/videosAPI";
import Error from "./Error";
import Loading from "./Loading";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const VideosList = () => {
  const { data: videos, isLoading, isError } = useGetVideosQuery();
  const [secondary, setSecondary] = React.useState(false);

  let content;
  if (isLoading && !isError) {
    content = <Loading></Loading>;
  } else if (!isLoading && isError) {
    content = <Error></Error>;
  } else if (!isLoading && !isError && videos.length === 0) {
    content = <div>No videos Found</div>;
  } else if (!isLoading && !isError && videos.length > 0) {
    content = videos.map((video) => (
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <NotStartedIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={video.title}
          secondary={secondary ? "Secondary text" : null}
        />
      </ListItem>
    ));
  }
  return <>{content}</>;
};

export default VideosList;
