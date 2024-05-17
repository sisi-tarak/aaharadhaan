import React from "react";

const Footer = () => {
  return (
    <div
      className="container-fluid pt-4 pb-2"
      style={{ backgroundColor: "black" }}
    >
      <div className=" text-center align-items">
        <h4 className="text-light font-weight-bold pb-2">

          To Collaborate with us......
        </h4>
        <a href="/contactme" className="font-weight-bold btn-md">
          <button className="btn btn-outline-light">Contact me</button>
        </a>
      </div>
      <div className="row">
        <div className="col-12 col-md-3 text-center d-flex 
                        flex-column pt-5 h-100">
          <h5 className="text-info font-weight-bold"> Quick as </h5>
          <a
            href="/"
            className="text-light font-weight-bold text-decoration-none"
          >
            Home
          </a>
          <a
            href="/donations"
            className="text-light font-weight-bold text-decoration-none"
          >
            Donations
          </a>
          <a
            href="/organics"
            className="text-light font-weight-bold text-decoration-none"
          >
            Organic
          </a>
          <a
            href="/aboutus"
            className="text-light font-weight-bold text-decoration-none"
          >
            About
          </a>
          <a
            href="/contactme"
            className="text-light font-weight-bold text-decoration-none"
          >
            Contact
          </a>
          <a
            href="/help"
            className="text-light font-weight-bold text-decoration-none"
          >

            Help
          </a>
        </div>
        <div className="col-12 col-md-3 text-center d-flex 
                        flex-column pt-5 h-100">
          <h5 className="text-info font-weight-bold"> Donation as </h5>
          <a
            href="/donations"
            className="text-light font-weight-bold text-decoration-none"
          >
            Food
          </a>
          <a
            href="/donations"
            className="text-light font-weight-bold text-decoration-none"
          >
            Funds
          </a>
          <a
            href="/donations"
            className="text-light font-weight-bold text-decoration-none"
          >
            Clothes
          </a>
          <a
            href="/donations"
            className="text-light font-weight-bold text-decoration-none"
          >
            Blood
          </a>


          <a
            href="/donations"
            className="text-light font-weight-bold text-decoration-none"
          >
            Books
          </a>
          <a
            href="/donations"
            className="text-light font-weight-bold text-decoration-none"
          >
            Gadgets
          </a>
        </div>


        <div className="col-12 col-md-6 h-100 text-center pt-5">
          <h2 className="text-light">
            Welcome to <span className="text-info">Aaha</span>ra
            <span className="text-info">dha</span>an
          </h2>
          <p className="text-light">
            "Giving is not just about
            <span className="text-info"> making a donation.....</span>
            <br />
            <span className="text-warning">
              It is about making a Difference.....!!
            </span>
            "
          </p>
          <div className="text-center justify-content-lg-start pt-2">
            <a
              href="/donations"
              className="btn btn-outline-light text-success 
                         text-decoration-none"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      <div className="container my-5 text-light border-top">
        <div className="row my-3">
          <div className="col-8 text-center">

            <h6 className="mx-3 text-center font-weight-bold">
              &#169; 2022 Aaharadhaan &#8482;
            </h6>
          </div>
          <div className=" col-4 text-center">
            <ul className="nav text-center list-unstyled d-flex">
              <li className="justify-content-end text-end">
                <a className="text-light text-decoration-none " href="/">
                  <i className="fa-brands fa-instagram mx-1 my-1 
                                text-white">
                  </i>
                </a>
              </li>
              <li className="justify-content-end text-end">
                <a className="text-light text-decoration-none " href="/">

                  <i className="fa-brands fa-facebook mx-1 my-1
                                text-white">
                  </i>
                </a>
              </li>
              <li className="justify-content-end text-end">
                <a className="text-light text-decoration-none " href="/">
                  <i className="fa-brands fa-twitter mx-1 my-1 
                                text-white">
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
