import React, { Component } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { Consumer } from "../Context/Context";
import "./ContactMe.css";
import Fade from "react-reveal/Fade";

class ContactMe extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    submitMessage: "",
    submitMessageTextColor: "",
  };
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = async (handler, event) => {
    event.preventDefault();

    const newContactme = {
      id: uuid(),
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };

    const response = await axios.post(
      "http://127.0.0.1:9000/api/contactme",
      newContactme
    );
    const isSuccessful = response.data.isSuccessful;

    if (isSuccessful) {
      this.setState({


        submitMessage:
          "Submitted Successfully!! We will contact you as soon as possible :)", 
        submitMessageTextColor: "text-info",
      });
      
    } else {
      this.setState({
        submitMessage: "Submitted failed :(",
        submitMessageTextColor: "text-danger",
      });
    }

    handler("ADD_CONTACT", newContactme);
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { submitMessage, submitMessageTextColor } = this.state;
          const { handler } = value;
          return (
            <section id="contact" className="contact">
              <div className="container" data-aos="fade-up">
                <Fade right cascade>
                  <div className="section-header">
                    <h2 className="font-weight-bold">Contact</h2>
                    <p className="font-weight-light">

                      Contact us for Donations like Food, Funds, Blood, 
                      Clothes etc.., and any other information’s.
                    </p>
                  </div>
                </Fade>
                <div className="row gx-lg-0 gy-4">
                  <div className="col-lg-4">
                    <div className="info-container d-flex flex-column 
                                    align-items-center 
                                    justify-content-center">
                      <Fade left cascade>
                        <div className="info-item d-flex">
                          <i className="fa-solid fa-location-dot 
                                        flex-shrink-0">
                          </i>

                          <div>
                            <h4>Location:</h4>
                            <p className="font-weight-light">
                              Tirupati, 517501
                            </p>
                          </div>
                        </div>

                        <div className="info-item d-flex">
                          <i className="fa-solid fa-envelope 
                                        flex-shrink-0">
                          </i>
                          <div>
                            <h4>Email:</h4>
                            <p className="font-weight-light">
                              aaharadhaan@example.com
                            </p>
                          </div>
                        </div>

                        <div className="info-item d-flex">
                          <i className="fa-solid fa-phone 
                                        flex-shrink-0">
                          </i>
                          <div>
                            <h4>Call:</h4>
                            <p className="font-weight-light">
                               +91 9502414128
                            </p>

                          </div>
                        </div>

                        <div className="info-item d-flex">
                          <i className="fa-solid fa-clock 
                                        flex-shrink-0">
                          </i>
                          <div>
                            <h4>Open Hours:</h4>
                            <p className="font-weight-light">24/7</p>
                          </div>
                        </div>
                      </Fade>
                    </div>

                  </div>
                  <div className="col-lg-8 font-weight-light">
                    <Fade bottom>
                      <form
                        className="php-email-form"
                        onSubmit={this.onSubmit.bind(this, handler)}
                      >
                        <div className="row">
                          <div className="col-md-6 form-group 
                                          font-weight-light">
                            <input
                              type="text"
                              name="name"
                              className="form-control 
                                         font-weight-light"
                              id="name"
                              placeholder="Your Name"
                              onChange={this.onChange}
                              required
                            />
                          </div>
                          <div className="col-md-6 form-group 
                                          font-weight-light mt-3 mt-md-0">
                            <input
                              type="email"
                              className="form-control 
                                         font-weight-light"
                              name="email"
                              id="email"

                              placeholder="Your Email"
                              onChange={this.onChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="form-group 
                                        font-weight-light mt-3">
                          <input
                            type="text"
                            className="form-control  
                                       font-weight-light"
                            name="subject"
                            id="subject"
                            placeholder="Subject"
                            onChange={this.onChange}
                            required
                          />
                        </div>
                        <div className="form-group  
                                        font-weight-light mt-3">
                          <textarea
                            className="form-control  
                                       font-weight-light"
                            name="message"
                            rows="7"
                            placeholder="Message"
                            onChange={this.onChange}
                            required
                          ></textarea>
                        </div>

                        <div className="text-center">
                          <a
                            type="submit"
                            className="con-btn font-weight-light"
                          >
                            Send Message
                          </a>
                        </div>
                        <div className="text-center my-5">
                          <h5 className={submitMessageTextColor}>
                            {submitMessage}
                          </h5>
                        </div>
                      </form>
                    </Fade>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default ContactMe;
