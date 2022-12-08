import React from "react";
import "./navbar.css";
import logo from "../assets/logo.svg";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav-container">
      <div className="nav-wrap">
        <Link to="/" className="nav-logo">
          <img src={logo} id="nav-logo" color="white" />
        </Link>
        <div className="nav-link">
          <NavLink to="/"> <p className="nav-link-p">Home</p></NavLink>
          <NavLink to="/about"> <p className="nav-link-p">About Us</p></NavLink>
          <NavLink to="/login"> <p className="nav-link-p">Login</p></NavLink>
          <NavLink to="/signup"> <p className="nav-link-p">Sign Up</p></NavLink>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
