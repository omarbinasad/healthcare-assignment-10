import React from "react";
import "./Service.css";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, description, img } = service;
  return (
    <div className="py-3 container service">
      <img src={img} alt="" />
      <div className="p-4 body">
        <h3 className="text-white">{name}</h3>
        <p className="text-light">{description.slice(0, 100)}</p>
        <button className="details-btn  ">
          <Link to={`/service/${_id}`}>See Details</Link>{" "}
        </button>
      </div>
    </div>
  );
};

export default Service;
