import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/header.json";
import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header" id="home">
      <div className="container d-flex align-items-center">
        {/* Left Section: Text Content */}
        <div className="header-text" data-aos="fade-right">
          <h1 className="display-4">
            AI-Powered Data Insights
          </h1>
          <p className="lead">
            Unlock real-time, predictive analytics for smarter decisions.
          </p>
          <a
            href="#services"
            className="btn btn-success btn-lg"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Learn More
          </a>
        </div>

        {/* Right Section: Lottie Animation */}
        <div className="header-animation" data-aos="fade-up">
          <Lottie animationData={animationData} loop={false} />
        </div>
      </div>
    </header>
  );
};

export default Header;
