import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/StudentPortal/Login";
import Register from "./Pages/StudentPortal/Register";
import Player from "./Pages/StudentPortal/Player";
import LeaderBoard from "./Pages/StudentPortal/LeaderBoard";
import AdminLogin from "./Pages/Dashbaord/AdminLogin";
import Dashboard from "./Pages/Dashbaord/Dashboard";
import Assignments from "./Pages/Dashbaord/Assignments";
import Quizzers from "./Pages/Dashbaord/Quizzers";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/player" element={<Player />}></Route>
        <Route path="/leaderboard" element={<LeaderBoard />}></Route>
        <Route path="/admin/login" element={<AdminLogin />}></Route>
        <Route path="/admin/assignments" element={<Assignments />}></Route>
        <Route path="/admin/quizzers" element={<Quizzers />}></Route>
      </Routes>
    </>
  );
}

export default App;
