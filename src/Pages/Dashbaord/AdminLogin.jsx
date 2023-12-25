import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import banner from "../../assets/img/login-banner.jpg";
import logo from "../../assets/img/logo.png";
const AdminLogin = () => {
  return (
    <div className="md:flex">
      <div className="md:w-6/12 flex min-h-screen align-middle justify-center  flex-col ">
        <div className="form-box w-full flex justify-center align-middle flex-col">
          <img src={logo} className="w-2/6 m-auto" alt="" />
          <form action="" className="w-2/4 m-auto  p-3 shadow-lg">
            <h1 className="font-bold text-4xl text-center">Admin Login</h1>
            <div className="form-group mb-4 w-full">
              <TextField
                id="standard-basic"
                className="w-full"
                color="secondary"
                label="Email"
                variant="standard"
              />
            </div>
            <div className="form-group mb-5">
              <TextField
                id="standard-basic"
                className="w-full"
                color="secondary"
                type="password"
                label="Passowrd"
                variant="standard"
              />
            </div>
            <div className="form-group mb-5"></div>
            <div className="form-group mb-5">
              <Button
                type="submit"
                variant="contained"
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                size="large"
              >
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
      <div className="md:w-6/12 hidden md:block">
        <img src={banner} className="w-full max-h-screen object-cover" alt="" />
      </div>
    </div>
  );
};

export default AdminLogin;
