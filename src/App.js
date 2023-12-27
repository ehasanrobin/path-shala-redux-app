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
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import { useAuth } from "./hooks/useAuth";

function App() {
  const auth = useAuth();
  return (
    <>
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
          path="/player"
          element={
            <PrivateRoute>
              <Player />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/leaderboard" element={<LeaderBoard />}></Route>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route path="/admin/assignments" element={<Assignments />}></Route>
        <Route path="/admin/quizzers" element={<Quizzers />}></Route>
      </Routes>
    </>
  );
}

export default App;
