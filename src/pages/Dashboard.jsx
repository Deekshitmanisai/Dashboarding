// src/pages/Dashboard.jsx
import React from 'react';

function Dashboard() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>🏠 Welcome to the Admin Dashboard</h2>
      <p>Use the sidebar to navigate through different sections like Kanban, Calendar, User Table, and Charts.</p>
      
      <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
          padding: '1.5rem', 
          borderRadius: '12px', 
          flex: '1', 
          minWidth: '200px',
          color: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', opacity: 0.9 }}>Total Users</h4>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>2,500</p>
        </div>
        
        <div style={{ 
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', 
          padding: '1.5rem', 
          borderRadius: '12px', 
          flex: '1', 
          minWidth: '200px',
          color: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', opacity: 0.9 }}>Active Users</h4>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>1,900</p>
        </div>
        
        <div style={{ 
          background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', 
          padding: '1.5rem', 
          borderRadius: '12px', 
          flex: '1', 
          minWidth: '200px',
          color: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', opacity: 0.9 }}>New Users</h4>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>430</p>
        </div>
        
        <div style={{ 
          background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', 
          padding: '1.5rem', 
          borderRadius: '12px', 
          flex: '1', 
          minWidth: '200px',
          color: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}>
          <h4 style={{ margin: '0 0 0.5rem 0', fontSize: '0.9rem', opacity: 0.9 }}>Revenue</h4>
          <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: 0 }}>$45.2K</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
