import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AdminLogin from "./Pages/Dashbaord/AdminLogin";
import Assignments from "./Pages/Dashbaord/Assignments";
import Quizzers from "./Pages/Dashbaord/Quizzers";
import LeaderBoard from "./Pages/StudentPortal/LeaderBoard";
import Login from "./Pages/StudentPortal/Login";
import Player from "./Pages/StudentPortal/Player";
import Register from "./Pages/StudentPortal/Register";
import A_PublicRoute from "./components/A_PublicRoute";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { useAuth } from "./hooks/useAuth";
import Dashboard from "./Pages/Dashbaord/Dashboard";
import A_PrivateRoute from "./components/A_PrivateRoute";

function App() {
  const auth = useAuth();
  return (
    <>
      {!auth ? (
        <div>authenticating</div>
      ) : (
        <Routes>
          <Route
            path="/"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          ></Route>
          <Route
            path="/player/:videoId"
            element={
              <PrivateRoute>
                <Player />
              </PrivateRoute>
            }
          ></Route>
          <Route path="/leaderboard" element={<LeaderBoard />}></Route>
          <Route
            path="/admin/login"
            element={
              <A_PublicRoute>
                <AdminLogin />
              </A_PublicRoute>
            }
          ></Route>
          <Route
            path="/admin/dashboard"
            element={
              <A_PrivateRoute>
                <Dashboard />
              </A_PrivateRoute>
            }
          ></Route>
          <Route path="/admin/assignments" element={<Assignments />}></Route>
          <Route path="/admin/quizzers" element={<Quizzers />}></Route>
        </Routes>
      )}
    </>
  );
}

export default App;
