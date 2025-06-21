// src/contexts/ThemeContext.js
import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

function ThemeContextProvider({ children }) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark(prev => !prev);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={isDark ? "dark-theme" : "light-theme"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
