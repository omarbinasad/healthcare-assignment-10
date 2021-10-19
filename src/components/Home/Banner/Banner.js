import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className=" d-flex banner-container">
      <div className="container ms-5 d-flex align-items-center  banner-left col-md-6 ">
        <h1 className="text-center">Welcome to Health Care Community</h1>{" "}
      </div>
      <div
        className="container me-5 d-flex align-items-center justify-content-center banner-right img-container
       col-md-6"
      >
        <img src="https://i.ibb.co/KLPs1z1/71709-pediatric.gif" alt="" />
      </div>
    </div>
  );
};

export default Banner;
