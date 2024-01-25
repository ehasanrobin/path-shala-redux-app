import { Box, Button, Divider, Modal, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useParams } from "react-router-dom";
import Nav from "../../components/Nav";
import QuizzersForm from "../../components/QuizzersForm";
import VideosList from "../../components/VideosList";
import { useGetVideoQuery } from "../../features/videos/videosAPI";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}
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

const Player = () => {
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { videoId } = useParams();
  const { data: video } = useGetVideoQuery(videoId);

  return (
    <div className="w-full">
      <Nav></Nav>
      <div className="md:flex  items-start justify-center ">
        <div className="w-4/5 mt-4 shadow-sm flex flex-col items-center">
          <iframe
            className="w-4/5 min-h-96 object-cover"
            src={video?.url}
            title="Learn Material UI in One Hour - React Material UI Project Tutorial [2022]"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="video-content p-6">
            <Divider variant="middle " />
            <div className="flex">
              <Button
                variant="contained"
                color="secondary"
                className="mt-3 block  video-project-button shadow-lg bg-purple-800"
              >
                assignment
              </Button>
              <Button
                onClick={handleOpen}
                variant="contained"
                color="secondary"
                className="mt-3 block bg-purple-800 video-project-button shadow-lg"
              >
                quizz
              </Button>
            </div>

            <Divider variant="middle" />
            <h1 className="text-4xl font-bold video-title">{video?.title}</h1>
            <p className="video-description">{video?.description}</p>
          </div>
        </div>
        <div className="w-2/5">
          <Grid container spacing={2} className="bg-transparent">
            <Grid item xs={12} md={12}>
              <Demo>
                <List dense={dense} className="video-list">
                  {<VideosList videoId={videoId}></VideosList>}
                </List>
              </Demo>
            </Grid>
          </Grid>
        </div>
      </div>
      {/* modal box  */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form action="">
            <h3 className="video-title font-bold">{video?.title}</h3>
            <QuizzersForm videoId={videoId}></QuizzersForm>
          </form>
        </Box>
      </Modal>
      {/* modal box  */}
    </div>
  );
};

export default Player;
