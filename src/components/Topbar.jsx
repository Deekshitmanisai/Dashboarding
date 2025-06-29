// src/components/Topbar.jsx
import React from "react";
import { useTheme } from "../contexts/ThemeContext";
import { FiBell, FiUser, FiSearch } from "react-icons/fi";

const Topbar = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="topbar">
      <div className="topbar-left">
        <div className="search-container">
          <FiSearch className="search-icon" />
          <input 
            type="text" 
            placeholder="Search..." 
            className="search-input"
          />
        </div>
      </div>
      
      <div className="topbar-right">
        <div className="notifications">
          <FiBell className="icon" />
          <span className="notification-badge">3</span>
        </div>
        
        <div className="user-info">
          <FiUser className="icon" />
          <span className="user-name">Admin User</span>
        </div>
        
        <button 
          onClick={toggleTheme}
          className="theme-toggle-btn"
        >
          {isDark ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
};

export default Topbar;
