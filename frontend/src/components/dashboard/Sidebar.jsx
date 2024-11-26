import React, { useState } from "react";
import "../../styles/dashboard/Sidebar.css";

const Sidebar = ({ onTabSelect, onLogout }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("Main");

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const tabs = [
    { id: 1, name: "Main", icon: "fas fa-house" },
    { id: 2, name: "Customer", icon: "fas fa-user" },
    { id: 3, name: "Product", icon: "fas fa-boxes-packing" },
    { id: 4, name: "Sales", icon: "fas fa-money-bill-trend-up" },
    // { id: 5, name: "Forecasting", icon: "fas fa-signal" },
    {
      id: 5,
      name: "Logout",
      icon: "fas fa-sign-out-alt",
      classes: "text-danger",
      action: () => {
        onLogout();
      },
    },
  ];

  const handleTabClick = (tab) => {
    if (tab.action) {
      tab.action();
    } else {
      setActiveTab(tab.name);
      onTabSelect(tab.name);
    }
  };

  return (
    <div
      className={`dashboard-sidebar ${isExpanded ? "expanded" : "collapsed"}`}
    >
      <div className="sidebar-header">
        <span className="sidebar-logo">
          {isExpanded ? (
            <div>
              <img src="src\assets\logo.jpg" width={30} height={30} />{" "}
              <div>AI Eagles</div>
            </div>
          ) : (
            <img src="src\assets\logo.jpg" width={30} height={30} />
          )}
        </span>
        <button className="sidebar-toggle" onClick={handleToggle}>
          {isExpanded ? "←" : "→"}
        </button>
      </div>
      <ul className="sidebar-list">
        {tabs.map((tab) => (
          <li
            key={tab.id}
            className={`sidebar-item ${activeTab === tab.name ? " active " : ""}${tab.classes ?? ""}`}
            onClick={() => handleTabClick(tab)}
          >
            <i className={tab.icon}></i>
            {isExpanded && <span className="text">{tab.name}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
