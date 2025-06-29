// src/pages/TablePage.jsx
import React from 'react';
import { FiEdit, FiTrash2, FiEye } from 'react-icons/fi';

const users = [
  { id: 1, name: "Deekshit", email: "deekshit@example.com", role: "Admin", status: "Active", lastLogin: "2024-01-15" },
  { id: 2, name: "Mani", email: "mani@example.com", role: "Editor", status: "Inactive", lastLogin: "2024-01-10" },
  { id: 3, name: "Sai", email: "sai@example.com", role: "Viewer", status: "Active", lastLogin: "2024-01-14" },
  { id: 4, name: "Priya", email: "priya@example.com", role: "Editor", status: "Active", lastLogin: "2024-01-13" },
  { id: 5, name: "Rahul", email: "rahul@example.com", role: "Viewer", status: "Inactive", lastLogin: "2024-01-08" },
];

const TablePage = () => {
  const getStatusBadge = (status) => {
    const isActive = status === 'Active';
    return (
      <span style={{
        padding: '0.25rem 0.75rem',
        borderRadius: '12px',
        fontSize: '0.75rem',
        fontWeight: '500',
        backgroundColor: isActive ? '#dcfce7' : '#fef2f2',
        color: isActive ? '#166534' : '#dc2626',
      }}>
        {status}
      </span>
    );
  };

  const getRoleBadge = (role) => {
    const colors = {
      'Admin': { bg: '#dbeafe', color: '#1e40af' },
      'Editor': { bg: '#fef3c7', color: '#d97706' },
      'Viewer': { bg: '#f3e8ff', color: '#7c3aed' }
    };
    
    const colorScheme = colors[role] || { bg: '#f1f5f9', color: '#64748b' };
    
    return (
      <span style={{
        padding: '0.25rem 0.75rem',
        borderRadius: '12px',
        fontSize: '0.75rem',
        fontWeight: '500',
        backgroundColor: colorScheme.bg,
        color: colorScheme.color,
      }}>
        {role}
      </span>
    );
  };

  return (
    <div className="page-content">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2>👥 User Management</h2>
        <button style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span>+</span> Add User
        </button>
      </div>
      
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Last Login</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={{ fontWeight: '600', color: '#6b7280' }}>#{user.id}</td>
              <td style={{ fontWeight: '500' }}>{user.name}</td>
              <td style={{ color: '#6b7280' }}>{user.email}</td>
              <td>{getRoleBadge(user.role)}</td>
              <td>{getStatusBadge(user.status)}</td>
              <td style={{ color: '#6b7280', fontSize: '0.9rem' }}>{user.lastLogin}</td>
              <td>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button style={{ 
                    padding: '0.25rem', 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer',
                    color: '#3b82f6'
                  }}>
                    <FiEye size={16} />
                  </button>
                  <button style={{ 
                    padding: '0.25rem', 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer',
                    color: '#f59e0b'
                  }}>
                    <FiEdit size={16} />
                  </button>
                  <button style={{ 
                    padding: '0.25rem', 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer',
                    color: '#ef4444'
                  }}>
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
