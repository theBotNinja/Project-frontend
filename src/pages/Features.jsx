import React from "react";
import "../styles/features.css";
import "../styles/features.css";
import search from "../gifs/noti.gif";
import puzzle from "../gifs/rock.gif";
import statis from "../gifs/puzzle.gif";
import noti from "../gifs/maps.gif";
import rock from "../gifs/mobile.gif";
import proct from "../gifs/proct.gif";

const Features = () => {
  return (
    <div>
      <section id="features" className="features_wrapper">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <p className="features_subtitle">Feature-Packed Driving</p>
              <h2 className="features_title">Our automated features</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img
                  src={rock}
                  width={150}
                  style={{ borderRadius: "100%" }}
                  alt=""
                />
                <h3 className="mt-4">Emergency Mail Alert</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  The app can send instant email alerts to pre-registered
                  emergency contacts whenever the SOS button is triggered. We
                  take your security seriously, and that's why we've implemented
                  Mailing systems.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img
                  src={puzzle}
                  width={150}
                  style={{ borderRadius: "100%" }}
                  alt=""
                />
                <h3 className="mt-4">Emergency Service support</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  Get ready to explore every angle, every detail, and every
                  curve of Secuity. Get email and mobile notification when
                  person is in danger by just one tap and all SOS will be sent
                  with locations with precise locations{" "}
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img
                  src={statis}
                  width={150}
                  style={{ borderRadius: "100%" }}
                  alt=""
                />
                <h3 className="mt-4">Reporting & Crime Data</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  Users can report incidents like harassment, unsafe areas, or
                  suspicious activities directly through the app. The collected
                  data is used to create statistical insights, helping both
                  users and authorities to identify high-risk zones.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img
                  src={noti}
                  width={150}
                  style={{ borderRadius: "100%" }}
                  alt=""
                />
                <h3 className="mt-4">Live location </h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  Users can report incidents like harassment, unsafe areas, or
                  suspicious activities directly through the app. The collected
                  data is anonymized and used to create crime maps and
                  statistical insights, helping both users and authorities to
                  identify high-risk zones.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-1 text-center header-img-section">
                <img
                  src={search}
                  width={150}
                  style={{ borderRadius: "100%" }}
                  alt=""
                />
                <h3 className="mt-4">Safe Area Recommendation</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  Users can report incidents like harassment, unsafe areas, or
                  suspicious activities directly through the app. The collected
                  data is anonymized and used to create crime maps and
                  statistical insights, helping both users and authorities to
                  identify high-risk zones.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 mb-5">
              <div className="ft-2 text-center header-img-section">
                <img
                  src={proct}
                  width={150}
                  style={{ borderRadius: "100%" }}
                  alt=""
                />
                <h3 className="mt-4">AI-Powered Systems</h3>
                <p className="features_text" style={{ textAlign: "justify" }}>
                  Users can report incidents like harassment, unsafe areas, or
                  suspicious activities directly through the app. The collected
                  data is anonymized and used to create crime maps and
                  statistical insights, helping both users and authorities to
                  identify high-risk zones. danger.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
