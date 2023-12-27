import { Alert } from "@mui/material";
import React from "react";

const Error = ({ text }) => {
  return (
    <div>
      <Alert variant="filled" severity="error">
        {text}
      </Alert>
    </div>
  );
};

export default Error;
