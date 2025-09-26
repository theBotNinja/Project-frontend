import React, { useEffect } from "react";
import "../styles/about.css";
import about from "../images/3d-report.png";
import about2 from "../images/3d-speaker.png";
import about3 from "../images/link.png";
import "../styles/features.css";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <section id="about" className="about_wrapper">
        <div className="container">
          <div className="features_wrapper" style={{ marginTop: "-90px" }}>
            <div className="row">
              <div className="col-12 text-center">
                <p className="features_subtitle">Our Team for your safety</p>
                <h2 className="features_title">About Us</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-sm-12 col-lg-5 text-center text-lg-start">
              <p className="about_number">1</p>
              <h2 className="about_title">
                Shield Her is here for your safety
              </h2>
              <p className="about_text " style={{ textAlign: "justify" }}>
                We ensure that each and every human being reaches home to safety
                , with advance features like mail notification , mobile
                messaging and live location sharing we are the trusted bodyguard
                for you.
              </p>
            </div>
            <div className="col-sm-12 col-lg-7 text-center text-md-start">
              <img decoding="async" src={about} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <div className="innovate mt-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-sm-12 col-lg-6 px-5 text-center text-md-start">
                <img
                  decoding="async"
                  src={about2}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-sm-12 col-lg-6 text-center text-lg-start">
                <p className="about_number">2</p>
                <h2 className="about_title">Developer Note</h2>
                <p className="about_text" style={{ textAlign: "justify" }}>
                  App is under development and will be ready to use soon ...
                </p>
                <div className="mt-5">
                  <a className="learn-more-btn btn-header" href="#brands">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          <div className="row align-items-center">
            <div className="col-sm-12 col-lg-5 text-center text-lg-start">
              <p className="about_number">3</p>
              <h2 className="about_title">
                Shield Her is Project made by
              </h2>
              <p className="about_text " style={{ textAlign: "justify" }}>
                Devansh Kumar Joshi ,
                Sandeep Kumar and
                Harsh singh 
              </p>
            </div>
            <div className="col-sm-12 col-lg-7 text-center text-md-start">
              <img decoding="async" src={about3} className="img-fluid" alt="" />
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
