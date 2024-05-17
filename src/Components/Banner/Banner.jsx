import React from "react";
import "./Banner.css";
import giImage1 from "../Aassets/img160.png";
import giImage2 from "../Aassets/heartemoji.png";
import Fade from "react-reveal/Fade";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { motion } from "framer-motion";

const Banner = () => {
  const transition = { duration: 2, type: "spring" };
  return (

    <div className="fluid-container ban-wrapper">
      <div className="container">
        <div className="row ">
          <div className="ban-left col-12 col-lg-6 text-align my-5 
                          order-2 order-lg-1">
            <div className="row">
              <div className="col-9 pt-5 order-1 order-md-2 order-lg-1">
                <Fade bottom cascade>
                  <p
                    className="align-middle pt-5 my-5 ban-typing"
                    id="ban-typing">
                    ALONE WE CAN DO SO LITTLE;
                    <br />
                    <span className="font-weight-bold span1">
                      T
                      <span
                        style={{
                          color: "var(--color-primary)",
                        }}>
                        OG
                      </span>
                      ET
                      <span
                        style={{
                          color: "var(--color-primary)",
                        }}>
                        HE
                      </span>
                      R
                    </span>
                    <br />
                    <span className="font-weight-bold span2">
                      WE CAN DO SO MUCH
                    </span>
                  </p>
                </Fade>
              </div>

              <div className="col-3 order-2 order-md-1 order-lg-2">
                <div className="ban-middle">
                  <div className="ban-text my-4">
                   <Fade top cascade>
                      <span>A</span>
                      <span>A</span>
                      <span>H</span>
                      <span>A</span>
                      <span>R</span>
                      <span>A</span>
                      <span>D</span>
                      <span>H</span>
                      <span>A</span>
                      <span>A</span>
                      <span>N</span>
                    </Fade>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ban-right my-4 col-12 col-lg-6 order-1 
                          order-lg-2">
            <img src={giImage1} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

