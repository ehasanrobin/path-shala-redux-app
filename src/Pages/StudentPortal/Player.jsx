import NotStartedIcon from "@mui/icons-material/NotStarted";
import { Box, Button, Divider, FormGroup, Modal, Paper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material/styles";
import * as React from "react";
import Nav from "../../components/Nav";

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

  return (
    <div className="container">
      <Nav></Nav>
      <div className="md:flex  items-start justify-center ">
        <div className="w-4/5 mt-4 shadow-sm flex flex-col items-center">
          <iframe
            className="w-4/5 min-h-96 object-cover"
            src="https://www.youtube.com/embed/Xoz31I1FuiY?list=PLcAkee8bm4CbPe-5Em2QS5IM9NwZnOJHE"
            title="Learn Material UI in One Hour - React Material UI Project Tutorial [2022]"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div className="video-content p-6">
            <Divider variant="middle " />
            <Button
              variant="contained"
              color="secondary"
              className="mt-3 block video-project-button shadow-lg"
            >
              assignment
            </Button>
            <Button
              onClick={handleOpen}
              variant="contained"
              color="secondary"
              className="mt-3 block video-project-button shadow-lg"
            >
              quizz
            </Button>

            <Divider variant="middle" />
            <h1 className="text-4xl font-bold video-title">video title</h1>
            <p className="video-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              doloremque magni ex non minus incidunt officiis modi voluptates
              aliquid. Voluptates est expedita sint eius repellat commodi, unde
              ipsum numquam natus, fugiat, reprehenderit dolore perferendis enim
              magnam necessitatibus iste nulla quam.
            </p>
          </div>
        </div>
        <div className="w-2/5">
          <Grid container spacing={2} className="bg-transparent">
            <Grid item xs={12} md={12}>
              <Demo>
                <List dense={dense} className="video-list">
                  {generate(
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <NotStartedIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary="Single-line item"
                        secondary={secondary ? "Secondary text" : null}
                      />
                    </ListItem>
                  )}
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
            <h3 className="video-title font-bold">video title</h3>
            <FormGroup>
              <h3 className="text-2xl text-blue-600 capitalize">
                quiestion one
              </h3>
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="w-full   ">
                  <input
                    type="checkbox"
                    className="hidden clickInput"
                    name=""
                    id="ques1-q1"
                  />
                  <label htmlFor="ques1-q1" className="option-label">
                    sdfsdfs
                  </label>
                </div>
                <div className="w-full   ">
                  <input
                    type="checkbox"
                    className="hidden clickInput"
                    name=""
                    id="ques1-q2"
                  />
                  <label htmlFor="ques1-q2" className="option-label">
                    sdfsdfs
                  </label>
                </div>
                <div className="w-full   ">
                  <input
                    type="checkbox"
                    className="hidden clickInput"
                    name=""
                    id="ques1-q3"
                  />
                  <label htmlFor="ques1-q3" className="option-label">
                    sdfsdfs
                  </label>
                </div>
                <div className="w-full   ">
                  <input
                    type="checkbox"
                    className="hidden clickInput"
                    name=""
                    id="ques1-q4"
                  />
                  <label htmlFor="ques1-q4" className="option-label">
                    sdfsdfs
                  </label>
                </div>
              </div>
            </FormGroup>
          </form>
        </Box>
      </Modal>
      {/* modal box  */}
    </div>
  );
};

export default Player;
