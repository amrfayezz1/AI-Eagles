import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoginModal from "../components/LoginModal";
import RegisterModal from "../components/RegisterModal";
import Header from "../components/Header";
import AboutUs from "../components/AboutUs";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

const Home = ({ appuser }) => {
  const navigate = useNavigate();

  const handleLogin = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    window.location.href = "/dashboard"; // Redirect to dashboard after login
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://127.0.0.1:5000/api/auth/logout", // Correct backend URL
        {},
        { withCredentials: true }
      );
      localStorage.removeItem("user");
      window.location.href = "/";
    } catch (error) {
      console.error("Logout failed");
    }
  };

  return (
    <div>
      <Navbar isAuthenticated={!!appuser} onLogout={handleLogout} />
      <LoginModal onLogin={handleLogin} />
      <RegisterModal onRegister={handleLogin} />

      <Header />
      <Services />
      <WhyChooseUs />
      <AboutUs />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
