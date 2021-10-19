import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./ServiceDetails.css";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/Services.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const ExactService = data.filter((td) => td._id === serviceId);

  return (
    <div className="container pt-5">
      <div className="card mb-3 ">
        <div className="details-container row g-0">
          <div className="col-md-4">
            <img
              src={ExactService[0]?.img}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title">{ExactService[0]?.name}</h1>
              <p className="card-text">{ExactService[0]?.description}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
