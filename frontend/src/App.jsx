import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

const App = () => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    AOS.init({ duration: 500 });

    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:5000/api/auth/dashboard", // Correct backend port
          { withCredentials: true }
        );
        setUser(response.data);
      } catch (error) {
        setUser(null);
      }
    };

    if (document.cookie.includes("token")) {
      fetchUser();
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                appuser={user}
                onRegister={(newUser) => setUser(newUser)} // Pass callback
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              // <PrivateRoute>
                <Dashboard user={user} />
              // </PrivateRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
