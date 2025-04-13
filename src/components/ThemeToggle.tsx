
import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { showMinecraftNotification } from './MinecraftNotification';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  
  const toggleTheme = () => {
    setIsAnimating(true);
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    // Show notification for theme change
    showMinecraftNotification(
      `Switched to ${newTheme === 'light' ? 'Day' : 'Night'} Mode!`,
      `The world is now in ${newTheme === 'light' ? 'daylight' : 'moonlight'}`,
      'info'
    );
    
    setTimeout(() => {
      setTheme(newTheme);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div 
      onClick={toggleTheme}
      className={`
        minecraft-container p-2 cursor-pointer transition-transform
        ${isAnimating ? 'minecraft-dig' : 'hover:scale-105'}
      `}
    >
      <div className="flex items-center gap-2 text-black dark:text-white">
        {theme === 'light' ? (
          <>
            <Sun className="h-5 w-5 text-yellow-500 minecraft-bounce" />
            <span className="text-sm font-bold hidden sm:inline">Day Mode</span>
            <span className="text-sm font-bold inline sm:hidden">Day</span>
          </>
        ) : (
          <>
            <Moon className="h-5 w-5 text-blue-400 minecraft-pulse" />
            <span className="text-sm font-bold hidden sm:inline">Night Mode</span>
            <span className="text-sm font-bold inline sm:hidden">Night</span>
          </>
        )}
      </div>
    </div>
  );
};

export default ThemeToggle;
