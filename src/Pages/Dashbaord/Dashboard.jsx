import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import A_Nav from "../../components/A_Nav";
import { useGetAssignmentsQuery } from "../../features/assignments/assignmentsAPI";
import { useGetAllQuizzersQuery } from "../../features/quizzers/quizzersAPI";
import { useGetVideosQuery } from "../../features/videos/videosAPI";
import { useGetStudentsQuery } from "../../features/students/studentsSlice";

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
  const { data: assignments } = useGetAssignmentsQuery();
  const { data: students } = useGetStudentsQuery();
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
                <Typography
                  sx={{ mb: 1.5 }}
                  className="text-4xl"
                  color="text.secondary"
                >
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
                <Typography
                  className="text-4xl"
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                >
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
                  Total Assignments
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  className="text-4xl"
                  color="text.secondary"
                >
                  {assignments?.length > 0 ? assignments.length : 0}
                </Typography>
              </CardContent>
            </Card>
          </Link>
          {/* <!-- ... --> */}
          <Link to={""}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h5" component="div">
                  Total Students
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  className="text-4xl"
                  color="text.secondary"
                >
                  {students?.length > 0 ? students.length : 0}
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
