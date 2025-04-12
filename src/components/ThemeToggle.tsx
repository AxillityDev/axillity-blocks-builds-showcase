
import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Toggle } from '@/components/ui/toggle';

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
          <Sun className="h-5 w-5 text-yellow-500 animate-pulse" />
        ) : (
          <Moon className="h-5 w-5 text-blue-400 animate-pulse" />
        )}
        <span className="text-sm">{theme === 'light' ? 'Day' : 'Night'}</span>
      </div>
    </div>
  );
};

export default ThemeToggle;
