// src/pages/Dashboard.jsx
import React from 'react';

function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>🏠 Welcome to the Admin Dashboard</h2>
      <p>Use the sidebar to navigate through different sections like Kanban, Calendar, User Table, and Charts.</p>
    </div>
  );
  <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
  <div style={{ background: '#e0f2fe', padding: '1rem', borderRadius: '8px', flex: 1 }}>
    <h4>Total Users</h4>
    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>2,500</p>
  </div>
  <div style={{ background: '#dcfce7', padding: '1rem', borderRadius: '8px', flex: 1 }}>
    <h4>Active Users</h4>
    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>1,900</p>
  </div>
  <div style={{ background: '#fef9c3', padding: '1rem', borderRadius: '8px', flex: 1 }}>
    <h4>New Users</h4>
    <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>430</p>
  </div>
</div>

}

export default Dashboard;
