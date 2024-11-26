import React, { useState } from "react";
import axios from "axios";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(""); // "success" or "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/send-email", formData);

      if (response.status === 200) {
        setFormStatus("success"); // Success message
        console.log("Email sent successfully!");
        setTimeout(() => setFormStatus(""), 3000);
        setFormData({ name: "", email: "", message: "" }); // Reset form
      }
    } catch (error) {
      setFormStatus("error"); // Error message
    }
  };

  return (
    <section className="contact py-5" id="contact">
      <div className="container" data-aos="fade-up">
        <h2 className="section-title text-center mb-4">Contact Us</h2>
        <p className="text-center mb-5">
          Have questions? We’d love to hear from you. Fill out the form below, and we’ll get back to you as soon as possible!
        </p>
        
        <form className="contact-form mx-auto" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Your Name"
              autoComplete="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-success w-100 submit-btn">
            Submit
          </button>
        </form>

        {formStatus === "success" && (
          <div className="alert alert-success mt-4" role="alert">
            Your message has been sent successfully!
          </div>
        )}

        {formStatus === "error" && (
          <div className="alert alert-danger mt-4" role="alert">
            Something went wrong. Please try again.
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
