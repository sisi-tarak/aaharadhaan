import React from "react";
// import DonationImg1 from "../Aassets/img155.png";
// import DonationServicesHeart from "../Aassets/img135.svg";
import Donation from "./Donation";
import { v4 as uuid } from "uuid";
import { Consumer } from "../Context/Context";
import "./Donations.css";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Pulse from "react-reveal/Pulse";

const Donations = () => {
  return (
    <Consumer>
      {(value) => {
        const { donationCards } = value;
        return (
          <section id="hero" className="hero bg-white text-dark">
            <div className="container position-relative">
              <div className="row gy-5" data-aos="fade-in">
                <Fade left cascade>
                  <div
                    className="text-dark col-lg-6 pt-5 order-2 
                                  order-lg-1 d-flex flex-column 
                                  justify-content-center text-center 
                                  text-lg-start"
                  >
                    <h2
                      className="text-dark display-4 
                                   font-weight-normal text-center"
                    >
                      Welcome to <span className="text-info">Aaha</span>ra
                      <span className="text-info">dha</span>an
                    </h2>

                    <p className="text-dark font-weight-light text-center">
                      "Giving is not just about making a donation.....
                      <br />
                      It is about making a Difference.....!!"
                    </p>

                    <div className="my-3 text-center">
                      <a href="#donate" className="button  ">
                        Get Started
                      </a>
                    </div>
                  </div>
                </Fade>
                <Pulse bottom cascade>
                  <div className="col-lg-6 order-1 order-lg-2">
                    <img src="" className="img-fluid" alt="DonationImg1" />
                  </div>
                </Pulse>
              </div>
            </div>

            <div id="donate" className="icon-boxes position-relative pt-5">
              <div
                className="container justify-content-around 
                              position-relative"
              >
                <Slide bottom>
                  <div className="row gy-4 mt-5 my-2">
                    {donationCards.map((donationCard) => (
                      <div key={uuid()} className="col-xl-3 col-md-6 mb-3">
                        <Donation donationCard={donationCard} />
                      </div>
                    ))}
                  </div>
                </Slide>
              </div>
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default Donations;
