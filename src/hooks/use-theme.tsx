
import React, { createContext, useContext, useState } from 'react';

type Theme = 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme] = useState<Theme>('dark'); // Fixed to dark theme only

  // Update document when component mounts
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Dummy toggle function (won't actually change the theme)
  const toggleTheme = () => {
    // Empty function as we're always in dark mode
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
