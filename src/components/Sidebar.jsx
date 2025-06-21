// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Admin Dashboard</h2>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/kanban">Kanban Board</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/table">User Table</Link></li>
      <li><Link to="/charts">Charts</Link></li>

      </ul>
    </div>
  );
}

export default Sidebar;
