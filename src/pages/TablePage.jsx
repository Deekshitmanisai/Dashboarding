// src/pages/TablePage.jsx
import React from 'react';

const users = [
  { id: 1, name: "Deekshit", role: "Admin", status: "Active" },
  { id: 2, name: "Mani", role: "Editor", status: "Inactive" },
  { id: 3, name: "Sai", role: "Viewer", status: "Active" },
];

const TablePage = () => {
  return (
    <div className="page-content">
      <h2>👥 <strong>User Table</strong></h2>
      <table style={{ width: '100%', marginTop: '2rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f1f5f9', textAlign: 'left' }}>
            <th style={{ padding: '12px' }}>ID</th>
            <th style={{ padding: '12px' }}>Name</th>
            <th style={{ padding: '12px' }}>Role</th>
            <th style={{ padding: '12px' }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
              <td style={{ padding: '12px' }}>{user.id}</td>
              <td style={{ padding: '12px' }}>{user.name}</td>
              <td style={{ padding: '12px' }}>{user.role}</td>
              <td style={{ padding: '12px' }}>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;
