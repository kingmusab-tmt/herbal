import React from "react";
// import { Link } from "react-router-dom";
import Logo from "./img/logo.png";
import "./Nav.css";
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-success">
        <HashLink className="navbar-brand" to="/">
          <img src={Logo} alt="Brand Logo" className="logo" />
          <span>IJM</span>
        </HashLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto correct">
            <li className="nav-item">
              <HashLink className="nav-link fs-5 text-white" to="/#Home">
                Home
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link fs-5 text-white" to="/#About">
                About
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link fs-5 text-white" to="/#Product">
                Product
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link fs-5 text-white" to="/#Faq">
                FAQ
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link fs-5 text-white" to="/#ContactUs">
                Contact
              </HashLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
