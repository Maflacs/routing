import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navWrapper">
      <ul className="navigasyonWrapper">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/personnel">Personnel</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/paths">Paths</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
