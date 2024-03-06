import React from "react";
import { Link, Outlet } from "react-router-dom";

const Paths = () => {
  return (
    <div className="pathWrapper">
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, eaque.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint nemo
        totam deleniti! Eius, laboriosam! Et optio nisi, harum ab iste numquam
        quisquam. Quam, rerum repellat libero ad quod esse maxime.
      </p>
      <div className="btnGroup">
        <Link to="">Frontend</Link>
        <Link to="backend">Backend</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Paths;
