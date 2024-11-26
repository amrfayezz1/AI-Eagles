import React from "react";
import "../../styles/dashboard/Navbar.css";

const Navbar = ({user}) => {
  return (
    <div className="dashboard-navbar">
      <div className="navbar-left">Dashboard</div>
      <div className="navbar-right">
        <div className="profile">
          <img
            src="https://via.placeholder.com/40" // Replace with user avatar
            alt="User Profile"
            className="profile-img"
          />
          <span className="profile-name">{user.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
