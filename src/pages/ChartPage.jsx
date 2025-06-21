
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const data = [
  { month: 'Jan', users: 400, sales: 240 },
  { month: 'Feb', users: 800, sales: 400 },
  { month: 'Mar', users: 600, sales: 350 },
  { month: 'Apr', users: 1200, sales: 700 },
  { month: 'May', users: 900, sales: 650 },
];

const pieData = [
  { name: 'Admin', value: 2 },
  { name: 'Editor', value: 3 },
  { name: 'Viewer', value: 5 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const ChartPage = () => {
  return (
    <div className="page-content" style={{ paddingBottom: '4rem' }}>
      <h2>📈 <strong>Analytics Dashboard</strong></h2>

    
      <div style={{
        height: 300,
        marginTop: '2rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
        padding: '1rem'
      }}>
        <h3>User Growth</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      
      <div style={{
        height: 300,
        marginTop: '3rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
        padding: '1rem'
      }}>
        <h3>Monthly Sales</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="sales" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{
        height: 300,
        marginTop: '3rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
        padding: '1rem'
      }}>
        <h3>User Roles Distribution</h3>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) =>
                `${name} (${(percent * 100).toFixed(0)}%)`
              }
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div style={{
        height: 300,
        marginTop: '3rem',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
        padding: '1rem'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>📊 Monthly Revenue</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartPage;
