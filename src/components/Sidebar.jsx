// src/components/Sidebar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiTrello, FiCalendar, FiUsers, FiBarChart2 } from 'react-icons/fi';

function Sidebar() {
  const location = useLocation();
  const menuItems = [
    { label: 'Dashboard', icon: <FiHome />, path: '/' },
    { label: 'Kanban Board', icon: <FiTrello />, path: '/kanban' },
    { label: 'Calendar', icon: <FiCalendar />, path: '/calendar' },
    { label: 'User Table', icon: <FiUsers />, path: '/table' },
    { label: 'Charts', icon: <FiBarChart2 />, path: '/charts' },
  ];

  return (
    <div className="sidebar">
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div style={{
          width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, boxShadow: '0 2px 8px rgba(59,130,246,0.15)'
        }}>
          <span style={{ color: 'white', fontSize: 28, fontWeight: 700 }}>A</span>
        </div>
        <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#fff', letterSpacing: 1 }}>Admin Dashboard</h2>
      </div>
      <ul>
        {menuItems.map(item => (
          <li key={item.label}>
            <Link
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
              style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontWeight: 600, fontSize: '1.05rem', letterSpacing: 0.2 }}
            >
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
