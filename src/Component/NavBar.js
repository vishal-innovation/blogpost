import React from "react";
import { Link } from "react-router-dom";
import "./blog-style.css";

const NavBar = ({ text, path }) => {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link className="nav-button" to={path}>
            {text}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
