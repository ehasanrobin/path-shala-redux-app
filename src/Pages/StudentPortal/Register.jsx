import { Button, TextField } from "@mui/material";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import banner from "../../assets/img/login-banner.jpg";
import logo from "../../assets/img/logo.png";
import { auth } from "../../firebase/firebase.init";
import { userloggedin } from "../../features/auth/authSlice";
const Register = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [displayName, setdisplayName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed up
        await updateProfile(auth.currentUser, { displayName }).catch((err) =>
          console.log(err)
        );
        const accessToken = userCredential.user.accessToken;
        dispatch(
          userloggedin({
            accessToken,
            user: {
              uid: userCredential.user.uid,
              email: userCredential.user.email,
              displayName: userCredential.user.displayName,
              photoURL: userCredential.user.photoURL,
            },
          })
        );
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage, errorCode, email, password);
        // ..
      });
  };
  return (
    <div className="md:flex">
      <div className="md:w-6/12 flex min-h-screen align-middle justify-center  flex-col ">
        <div className="form-box w-full flex justify-center align-middle flex-col">
          <img src={logo} className="w-2/6 m-auto" alt="" />
          <form onSubmit={handleSubmit} className="w-2/4 m-auto  p-3 shadow-lg">
            <h1 className="font-bold text-4xl text-center">Register</h1>
            <div className="form-group mb-4 w-full">
              <TextField
                id="standard-basic"
                className="w-full"
                value={displayName}
                onChange={(e) => setdisplayName(e.target.value)}
                color="secondary"
                label="Name"
                variant="standard"
              />
            </div>
            <div className="form-group mb-4 w-full">
              <TextField
                id="standard-basic"
                className="w-full"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                color="secondary"
                label="Email"
                variant="standard"
              />
            </div>
            <div className="form-group mb-5">
              <TextField
                id="standard-basic"
                className="w-full"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                color="secondary"
                type="password"
                label="Passowrd"
                variant="standard"
              />
            </div>
            <div className="form-group mb-5">
              <Link to="/" className="mt-2 text-sm underline">
                have an account?
              </Link>
            </div>
            <div className="form-group mb-5">
              <Button
                type="submit"
                variant="contained"
                className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                size="large"
              >
                Register
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

export default Register;
