// src/AdminDashboardApp.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Dashboard from "./pages/Dashboard";
import Kanban from "./pages/Kanban";
import CalendarPage from "./pages/CalendarPage";
import ThemeContextProvider from "./contexts/ThemeContext";
import TablePage from './pages/TablePage';
import ChartPage from './pages/ChartPage';
import "./App.css";

function AdminDashboardApp() {
  return (
    <ThemeContextProvider>
      <Router>
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Topbar />
            <div className="page-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/table" element={<TablePage />} />
                <Route path="/charts" element={<ChartPage />} />
             
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </ThemeContextProvider>
  );
}

export default AdminDashboardApp;
