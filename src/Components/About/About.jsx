import React from "react";
// import abtImg1 from "../Aassets/img39.png";
// import abtImg2 from "../Aassets/img57.png";
import Fade from "react-reveal/Fade";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <Fade right cascade>
          <div className="section-header">
            <h2 className="font-weight-bold">About Us</h2>
            <p className="font-weight-light">
              The main objective of this organisation works to improve the lives
              of anyone else who is suffering in any way.
              <br />
              Furthermore, the primary goal of this is to create a prosperous
              society free of suffering and uncertainties.
            </p>
          </div>
        </Fade>

        <div className="row gy-4">
          <div className="col-lg-6">
            <Fade left>
              <h2 className="display-4 font-weight-normal text-center">
                <span className="text-info">Aaha</span>ra
                <span className="text-info">dha</span>an
                <br />
              </h2>
              <h4 className="text-center">
                <span className="font-weight-light">
                  - A Food & Collection of Bestow
                </span>
              </h4>

              <img src="" className="img-fluid rounded-4 mb-4" alt="abtImg1" />
            </Fade>
            <Fade bottom cascade>
              <p className="font-weight-light">
                " AAHARADHAAN " is a mainly Food Donation Project System is a
                mission to end hunger and no wasting of food to make a
                hungry-free world. According to the latest survey, 1.3 billion
                tons of food is thrown as waste every year. Additionally,
                one-third of the food consumed is stated as leftovers.
              </p>
              <p className="font-weight-light">
                Since 2022, The focus of this organisation is to reduce The
                amount of food wasted and being used to the needy people and
                also being used for organic like organic farming and animal
                feeding etc..,.
              </p>
              <p className="font-weight-light">
                The application for food donation acts as an interface between
                the users who are looking for a channel to give the excess food
                without wasting it. It enables us to donate the excess food by
                notifying nearby users with the details of the food that is
                available. If the user is claiming for the food, then he needs
                to enter the contact details of the organization that he belongs
                to with the address. If there is more than one user to claim the
                food, then the application does the job scheduling and the
                request is accepted to the user on a priority basis.
              </p>
            </Fade>
          </div>

          <div className="col-lg-6 pt-3 justify-content-center">
            <div className="content ps-0 ps-lg-5">
              <Fade bottom cascade>
                <p className="fst-italic font-weight-light">
                  Aaharadhaan is not only a food donation organisation, it is
                  also collecting other donations to create a prosperous society
                  free of suffering and uncertainties like:
                </p>
              </Fade>
              <Fade right cascade>
                <ul className="px-3 font-weight-light">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Food Compilation - To reduce the hunger.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Books Mixture - To improve poverty of children.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Funds Collection - To help anyone from uncertainties.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Organ Donation - To obtain details of donors.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Blood Bank – To collects the blood to help the patients.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Clothes Cluster - To distribute the clothes for necessary
                    ones.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>
                    Gadgets Assembling – To improve learning outcomes of a
                    children.
                  </li>
                </ul>
              </Fade>
              <Fade bottom cascade>
                <p className="font-weight-light">
                  Thus, the food quantity that is saved and the number of people
                  who have fed are portrayed in graphs and reports. The success
                  rate is calculated based on the impact of reducing the hunger
                  rate.
                </p>
              </Fade>
              <Fade right cascade>
                <div className="position-relative mt-4">
                  <img src="" className="img-fluid rounded-4" alt="abtImg2" />
                  <a
                    href="https://www.youtube.com/watch?v=IQLd5x6eeuM"
                    className="glightbox play-btn"
                    target="blank"
                    rel="noreferrer"
                  ></a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
