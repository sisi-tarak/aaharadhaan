import React from "react";
// import Logo from "../Aassets/img185.jpg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-setup">
      <nav className="navbar bg-dark font-weight-bold pb-2 navbar1">
        <div className="container  d-flex flex-horizontal pt-2">
          <form
            className="col-12 col-md-auto mb-2 mb-lg-0 me-lg-auto 
                       text-white"
            role="search"
          >
            <input
              type="search"
              className="form-control"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          <div
            className="col-12 col-md-auto text-center text-end 
           justify-content-center d-flex flex-horizontal font-weight-bold"
          >
            <a
              href="/signup"
              className="text-decoration-none text-light  d-block mx-1"
            >
              <button
                type="button"
                className="btn btn-outline-warning text-light 
                    font-weight-bold"
                style={{ width: "auto" }}
              >
                Signup
              </button>
            </a>
            <a
              href="/welcome"
              className="text-decoration-none text-light d-block mx-2"
            >
              <button
                type="button"
                className="btn btn-outline-info text-light 
                           font-weight-bold"
                style={{ width: "auto" }}
              >
                Login
              </button>
            </a>
            <a
              href="/"
              className="text-decoration-none text-light  d-block mx-2"
            >
              <button
                type="button"
                className="btn btn-outline-danger text-light 
                          font-weight-bold"
                style={{ width: "auto" }}
              >
                Logout
              </button>
            </a>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg main-navbar">
        <div className="container">
          <a href="/" className="navbar-brand text-dark font-weight-light">
            <img src="" alt="Logo" width="80" height="80" />
          </a>
          <a href="/" className="navbar-brand text-dark  ">
            <h3 className="font-weight-bold" style={{ letterSpacing: "1.5px" }}>
              <span className="" style={{ color: "var(--color-primary)" }}>
                Aaha
              </span>
              Ra
              <span className="" style={{ color: "var(--color-primary)" }}>
                dha
              </span>
              an
            </h3>
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#collapseNav"
          >
            <span className="fa-solid fa-bars text-dark"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0"
            id="collapseNav"
          >
            <div
              className="navbar-nav font-weight-bold text-center 
             d-flex justify-content-between"
            >
              <a
                href="/"
                className="nav-item nav-a mb-1 mx-3 text-decoration-none"
              >
                <i
                  className="fa-solid fa-house d-block "
                  width="24"
                  height="24"
                ></i>
                Home
              </a>
              <a
                href="/getinvolved"
                className="nav-item nav-a mb-1 mx-3 text-decoration-none"
              >
                <i
                  className="fa-solid fa-handshake-angle d-block "
                  width="24"
                  height="24"
                ></i>
                Get Involved
              </a>
              <a
                href="/donations"
                className="nav-item nav-a mb-1 mx-3 text-decoration-none"
              >
                <i
                  className="fa-solid fa-hands-holding-child d-block "
                  width="24"
                  height="24"
                ></i>
                Donations
              </a>
              <a
                href="/organics"
                className="nav-item nav-a mb-1 mx-3 text-decoration-none"
              >
                <i
                  className="fa-solid fa-recycle d-block "
                  width="24"
                  height="24"
                ></i>
                Organic
              </a>
              <a
                href="/aboutus"
                className="nav-item nav-a mb-1 mx-3 text-decoration-none"
              >
                <i
                  className="fa-solid fa-address-card d-block "
                  width="24"
                  height="24"
                ></i>
                About
              </a>
              <a
                href="/contactme"
                className="nav-item nav-a mb-1 mx-3 text-decoration-none"
              >
                <i
                  className="fa-solid fa-address-book d-block "
                  width="24"
                  height="24"
                ></i>
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
