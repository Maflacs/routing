import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="errorWrapper">
      <div>Not Found</div>
      <div className="btnWrapper">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
};

export default NotFound;
