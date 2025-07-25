import React, { createContext, useContext, useEffect, useState } from "react";
import { ConfigProvider, theme } from "antd";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: Theme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "light",
}) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem("chat-app-theme") as Theme;
    if (savedTheme) {
      setCurrentTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("chat-app-theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const antdTheme = {
    algorithm:
      currentTheme === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: "#000000",
      colorBgContainer: currentTheme === "dark" ? "#2d2d2d" : "#ffffff",
      colorText: currentTheme === "dark" ? "#ffffff" : "#000000",
      colorTextSecondary: currentTheme === "dark" ? "#d0d0d0" : "#454545",
      colorBorder: currentTheme === "dark" ? "#404040" : "#e0e0e0",
      borderRadius: 8,
      fontFamily: '"Inter", -apple-system, "Roboto", "Helvetica", sans-serif',
    },
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, toggleTheme }}>
      <ConfigProvider theme={antdTheme}>{children}</ConfigProvider>
    </ThemeContext.Provider>
  );
};
