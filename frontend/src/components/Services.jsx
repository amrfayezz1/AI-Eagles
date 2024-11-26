import React, { useState } from "react";
import "../styles/Services.css";

const servicesData = [
  {
    id: 1,
    title: "Sales Analytics",
    description:
      "Our Sales Analytics service enables businesses to track revenue trends over time, identify top-performing regions, and forecast future sales with precision. By leveraging Huawei Cloud’s geospatial capabilities, we help you analyze sales performance based on location, empowering you to make data-driven decisions for targeted campaigns. With detailed ROI analysis and real-time dashboards, you can evaluate the effectiveness of sales initiatives and fine-tune strategies for maximum impact.",
    icon: "fa-money-bill-transfer",
  },
  {
    id: 2,
    title: "Customer Analytics",
    description:
      "Our Customer Analytics service uses AI-powered segmentation to group customers based on demographics, purchase behavior, and engagement levels. With predictive models, we help you identify at-risk customers and develop retention strategies to boost loyalty. Customer Lifetime Value (CLV) analysis provides insights into long-term value, enabling you to focus on high-impact customer groups. Tailored solutions ensure you stay ahead of trends and anticipate customer needs.",
    icon: "fa-users",
  },
  {
    id: 3,
    title: "Product Analytics",
    description:
      "Our Product Analytics service provides detailed insights into your product portfolio, helping you identify best-selling products and understand sales trends. We assist in managing product lifecycles, from introduction to decline, to optimize inventory and marketing strategies. Profitability analysis ensures you can compare product performance and adjust pricing or promotions for maximum returns. With real-time analytics and actionable insights, you can drive innovation and operational efficiency.",
    icon: "fa-chart-pie",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleTabChange = (id) => {
    if (id === activeTab) return; // Prevent re-animating the same tab

    setIsAnimating(true); // Trigger animation
    setTimeout(() => {
      setActiveTab(id);
      setIsAnimating(false); // Reset animation state after the animation duration
    }, 300); // Match this duration to the CSS animation duration
  };

  return (
    <section className="services py-5 bg-light" id="services">
      <div className="container">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          {/* Left Section: Tabs */}
          <div className="col-md-4" data-aos="fade-right">
            <ul className="nav flex-column nav-pills">
              {servicesData.map((service) => (
                <li key={service.id} className="nav-item">
                  <button
                    className={`nav-link d-flex align-items-center ${
                      activeTab === service.id ? "active" : ""
                    }`}
                    onClick={() => handleTabChange(service.id)}
                  >
                    <i className={`fa ${service.icon} me-2`}></i>
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Content */}
          <div className="col-md-8" data-aos="fade-up">
            <div
              className={`tab-content ${isAnimating ? "fade-out" : "fade-in"}`}
            >
              <h3>{servicesData[activeTab - 1].title}</h3>
              <p>{servicesData[activeTab - 1].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
