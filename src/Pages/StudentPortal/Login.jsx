import GoogleIcon from "@mui/icons-material/Google";
import { Button, TextField } from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import banner from "../../assets/img/login-banner.jpg";
import logo from "../../assets/img/logo.png";
import Error from "../../components/Error";
import { loggedinasync, userloggedin } from "../../features/auth/authSlice";
import { auth } from "../../firebase/firebase.init";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const googleProvider = new GoogleAuthProvider();

  const handlesubmit = (e) => {
    e.preventDefault();
    // signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const accessToken = userCredential.user.accessToken;
    //     dispatch(
    //       userloggedin({
    //         accessToken,
    //         user: {
    //           uid: userCredential.user.uid,
    //           email: userCredential.user.email,
    //           displayName: userCredential.user.displayName,
    //           photoURL: userCredential.user.photoURL,
    //         },
    //       })
    //     );

    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     setError("Email or password is incorrect");
    //     // ..
    //   });
    dispatch(loggedinasync({ email, password }));
  };
  const handleGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log(result);
        dispatch(
          userloggedin({
            accessToken,
            user: {
              uid: result.user.uid,
              email: result.user.email,
              displayName: result.user.displayName,
              photoURL: result.user.photoURL,
            },
          })
        );
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
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
            <div>
              <h3 className="text-xl font-bold">Login with</h3>
              <button
                onClick={handleGoogleLogin}
                type="button"
                className="border p-3 rounded-full mt-3 text-amber-400"
              >
                <GoogleIcon></GoogleIcon>
              </button>
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
