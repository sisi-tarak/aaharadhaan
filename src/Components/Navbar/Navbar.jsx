import React from "react";
// import Logo from "../Aassets/img185.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg main-navbar">
      <div className="container my-2">
        <a href="/" className="navbar-brand text-dark font-weight-light">
          <img src="" alt="Logo" width="80" height="80" />
        </a>
        <a href="/" className="navbar-brand" id="aLink">
          <h3 id="textLogo">
            Aaha
            <span className="" id="logoSpam">
              Ra
            </span>
            dha
            <span className="" id="logoSpam">
              an
            </span>
          </h3>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseNav"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
          <div
            className="navbar-nav font-weight-bold text-center 
             d-flex justify-content-between"
          >
            <a href="/" className="nav-item mb-1 mx-3" id="aLink">
              Home
            </a>
            <a href="/getinvolved" className="nav-item mb-1 mx-3" id="aLink">
              Get Involved
            </a>
            <a href="/donations" className="nav-item mb-1 mx-3" id="aLink">
              Donations
            </a>
            <a href="/organics" className="nav-item mb-1 mx-3" id="aLink">
              Organic
            </a>
            <a href="/aboutus" className="nav-item mb-1 mx-3" id="aLink">
              About
            </a>
            <a href="/contactme" className="nav-item mb-1 mx-3" id="aLink">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
