import { Button, TextField } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import banner from "../../assets/img/login-banner.jpg";
import logo from "../../assets/img/logo.png";
import { userloggedin } from "../../features/auth/authSlice";
import { auth } from "../../firebase/firebase.init";
import Error from "../../components/Error";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user.providerData[0];
        const accessToken = userCredential.user.accessToken;
        dispatch(userloggedin({ accessToken, user }));

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError("Email or password is incorrect");
        // ..
      });
  };
  return (
    <div className="md:flex">
      <div className="md:w-6/12 flex min-h-screen align-middle justify-center  flex-col ">
        <div className="form-box w-full flex justify-center align-middle flex-col">
          <img src={logo} className="w-2/6 m-auto" alt="" />
          <form onSubmit={handlesubmit} className="w-2/4 m-auto  p-3 shadow-lg">
            <h1 className="font-bold text-4xl text-center">Login</h1>
            <div className="form-group mb-4 w-full">
              <TextField
                id="standard-basic"
                className="w-full"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                color="secondary"
                required
                label="Email"
                variant="standard"
              />
            </div>
            <div className="form-group mb-5">
              <TextField
                id="standard-basic"
                className="w-full"
                color="secondary"
                required
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                type="password"
                label="Passowrd"
                variant="standard"
              />
            </div>
            <div className="form-group mb-5">
              <Link to="/register" className="mt-2 text-sm underline">
                Don't have an account?
              </Link>
            </div>
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
            {error !== "" && <Error text={error}></Error>}
          </form>
        </div>
      </div>
      <div className="md:w-6/12 hidden md:block">
        <img src={banner} className="w-full max-h-screen object-cover" alt="" />
      </div>
    </div>
  );
};

export default Login;
