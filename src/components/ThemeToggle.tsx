
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div 
      onClick={toggleTheme}
      className="minecraft-container p-2 cursor-pointer hover:scale-105 transition-transform"
    >
      <div className="flex items-center gap-2 text-black dark:text-white">
        {theme === 'light' ? (
          <>
            <Sun className="h-5 w-5 text-yellow-500 minecraft-bounce" />
            <span className="text-sm font-bold">Day Mode</span>
          </>
        ) : (
          <>
            <Moon className="h-5 w-5 text-blue-400 minecraft-pulse" />
            <span className="text-sm font-bold">Night Mode</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
