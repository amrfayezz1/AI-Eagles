import React from "react";
import "../styles/WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <section className="why py-5" id="why">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title text-center mb-4">Why Choose Us</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card text-center hover-effect" data-aos="fade-bottom">
              <div className="icon-circle mb-3">
                <i className="fa fa-rocket fa-3x"></i>
              </div>
              <h5 className="card-title">Innovative Solutions</h5>
              <p className="card-text">
                Leverage cutting-edge AI and cloud technologies to gain a competitive edge. Our solutions drive innovation and efficiency.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center hover-effect" data-aos="fade-up">
              <div className="icon-circle mb-3">
                <i className="fa fa-chart-line fa-3x"></i>
              </div>
              <h5 className="card-title">Scalable Analytics</h5>
              <p className="card-text">
                Huawei Cloud’s robust infrastructure ensures seamless scalability for analytics, handling growing data needs effortlessly.
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center hover-effect" data-aos="fade-bottom">
              <div className="icon-circle mb-3">
                <i className="fa fa-shield-alt fa-3x"></i>
              </div>
              <h5 className="card-title">Reliable & Secure</h5>
              <p className="card-text">
                Benefit from enterprise-grade security and reliability, ensuring your data is always safe and accessible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
