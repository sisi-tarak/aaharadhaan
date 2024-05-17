import React from "react";
import DonationService from "./DonationService";
import { v4 as uuid } from "uuid";
import { Consumer } from "../Context/Context";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Slide from "react-reveal/Slide";
import "./DonationServices.css";

const DonationServices = () => {
  return (
    <Consumer>
      {(value) => {
        const { donationServices } = value;
        return (
          <section id="services" className="services sections-bg bg-light">

            <div className="container" data-aos="fade-up">

              <div className="section-header">
                <Slide left>
                  <h2 className="font-weight-bold">
                    Our Other <span className="text-info">Services</span>
                  </h2>
                </Slide>
                <Flip left>
                  <p className="font-weight-light">
                    The value of life is not in it's duration, but in it's
                    donation. <br /> You are not important because of 
                    how long you live, you are important because of 
                    how effective you live....!!
                  </p>
                </Flip>
              </div>

              <Fade bottom>
                <div className="row gy-4">
                  {donationServices.map((donationService) => (
                    <div key={uuid()} className="col-12 col-lg-4 
                                                 col-md-6 my-3">
                      <DonationService donationService={donationService} />
                    </div>

                  ))}
                </div>
              </Fade>
            </div>
          </section>
        );
      }}
    </Consumer>
  );
};

export default DonationServices;

