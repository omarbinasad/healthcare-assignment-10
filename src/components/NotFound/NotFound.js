import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="">
        <img
          width="95%"
          src="https://i.ibb.co/4phC53Y/6231-404-error.gif"
          alt=""
        />
      </div>
      <Link to="/">
        <button className=" btn btn-primary">Go Home</button>{" "}
      </Link>
    </div>
  );
};

export default NotFound;
