// In Topbar.jsx or wherever you want the toggle
import React from "react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};

export default ThemeToggle;
