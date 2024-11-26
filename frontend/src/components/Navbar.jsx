import Logo from "../assets/logo.jpg";
import { useEffect, useState } from "react";
import "../styles/Navbar.css";

const Navbar = ({ isAuthenticated, onLogout }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false); // Hide on scroll down
      } else {
        setIsVisible(true); // Show on scroll up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark sticky-top ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          <img src={Logo} alt="Logo" width="60" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#why">
                Why Choose Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              {isAuthenticated ? (
                <>
                  <button className="btn btn-outline-light" onClick={onLogout}>
                    Logout
                  </button>
                  <a href="/dashboard" className="btn btn-light mx-2">
                    Dashboard
                  </a>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-outline-light mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-light"
                    data-bs-toggle="modal"
                    data-bs-target="#registerModal"
                  >
                    Register
                  </button>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
