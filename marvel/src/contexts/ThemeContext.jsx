import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(); // Criação do contexto

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(true); // State de controle do tema

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme != null) {
      setDarkMode(savedTheme === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
