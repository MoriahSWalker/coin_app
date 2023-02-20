import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Nav = () => {
  return (
    <nav id="navbar">
      <Link to="/">
        <div>Dashboard</div>
        {/* Show all the different coings */}
      </Link>

      <Link to="/currencies">
        <div>Currencies</div>
      </Link>
    </nav>
  );
};

export default Nav;
