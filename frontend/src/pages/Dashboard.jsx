import React, { useState } from "react";
import axios from "axios";
import Sidebar from '../components/dashboard/Sidebar.jsx';
import Navbar from "../components/dashboard/Navbar.jsx";
import "../styles/dashboard/Dashboard.css";

import Customer from "../components/dashboard/Customer.jsx"
import Product from '../components/dashboard/Product.jsx';
import Sales from '../components/dashboard/Sales.jsx';
import Home from '../components/dashboard/Home.jsx';

const Dashboard = ({user}) => {
  if(!user) window.location.href = "/";

  const [activeTab, setActiveTab] = useState("Main");
  const [isSidebarExpanded, setSidebarExpanded] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "Main":
        return <Home />;
      case "Customer":
        return <Customer />;
      case "Product":
        return <Product />;
        case "Sales":
          return <Sales />;
      default:
        return <div>Select a Tab</div>;
    }
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
    <div className="dashboard">
      <Navbar user={user} />
      <div className="dashboard-body">
        <Sidebar
          onTabSelect={setActiveTab}
          isExpanded={isSidebarExpanded}
          setIsExpanded={setSidebarExpanded}
          onLogout={handleLogout}
        />
        <div
          className={`dashboard-main ${
            isSidebarExpanded ? "expanded" : "collapsed"
          }`}
        >
          <div className="dashboard-content">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;