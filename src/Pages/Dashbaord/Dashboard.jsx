import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import { useGetVideosQuery } from "../../features/videos/videosAPI";
import A_Nav from "../../components/A_Nav";
import { useGetAllQuizzersQuery } from "../../features/quizzers/quizzersAPI";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const Dashboard = () => {
  const { data: videos, isLoading, isError } = useGetVideosQuery();
  const { data: quizzes } = useGetAllQuizzersQuery();
  return (
    <>
      <A_Nav></A_Nav>
      <section className="dashboard-section">
        <div class="grid md:grid-cols-2 gap-4 m-auto place-items-center  md:w-1/2">
          <Link to={""}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Total Videos
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {videos?.length > 0 ? videos.length : 0}
                </Typography>
              </CardContent>
            </Card>
          </Link>
          {/* <!-- ... --> */}
          <Link to={""}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Total Quizzes
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {quizzes?.length > 0 ? videos.length : 0}
                </Typography>
              </CardContent>
            </Card>
          </Link>
          {/* <!-- ... --> */}
          <Link to={""}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Total Videos
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  10
                </Typography>
              </CardContent>
            </Card>
          </Link>
          {/* <!-- ... --> */}
          <Link to={""}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Total Videos
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  10
                </Typography>
              </CardContent>
            </Card>
          </Link>
          {/* <!-- ... --> */}
          <Link to={""}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Total Videos
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  10
                </Typography>
              </CardContent>
            </Card>
          </Link>
          {/* <!-- ... --> */}
          <Link to={""}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Total Videos
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  10
                </Typography>
              </CardContent>
            </Card>
          </Link>
          {/* <!-- ... --> */}
        </div>
      </section>
    </>
  );
};

export default Dashboard;
