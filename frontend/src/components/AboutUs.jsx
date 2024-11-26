import React from "react";
import "../styles/AboutUs.css";
import AboutImage from "../assets/about-image.jpg"; // Replace with your image path

const AboutUs = () => {
  return (
    <section className="about py-5" id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <h2>About Us</h2>
            <p className="lead">
              Our platform empowers businesses with actionable insights by leveraging cutting-edge AI and cloud technologies.
            </p>
            <p>
              From real-time analytics to predictive models, we help you make smarter decisions, optimize operations, and drive growth effortlessly.
            </p>
          </div>
          <div className="col-md-6" data-aos="fade-up">
            <img src={AboutImage} alt="About Us" className="img-fluid rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
