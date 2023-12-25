import { Divider } from "@mui/material";
import React from "react";
import A_Nav from "../../components/A_Nav";

const style = {
  width: "100%",
  height: "20",
  maxWidth: 360,
  bgcolor: "background.paper",
};

const Dashboard = () => {
  return (
    <div>
      <A_Nav></A_Nav>
      <section>
        <div className="grid md:grid-cols-3 gap-3 w-4/5 m-auto items-center mt-8">
          <div className="item-box bg-blue-950 p-4 text-center text-white">
            <h3 className="font-bold">List of videos</h3>
            <h1 className="text-9xl">43</h1>
            <p>Total Course videos</p>
          </div>
          <div className="item-box bg-blue-950 p-4 text-center text-white">
            <h3 className="font-bold">List of videos</h3>
            <h1 className="text-9xl">43</h1>
            <p>Total Course videos</p>
          </div>
          <div className="item-box bg-blue-950 p-4 text-center text-white">
            <h3 className="font-bold">List of videos</h3>
            <Divider /> <h1 className="text-9xl">43</h1>
            <p>Total Course videos</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
