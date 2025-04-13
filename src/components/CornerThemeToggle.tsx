
import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { showMinecraftNotification } from './MinecraftNotification';
import { Switch } from './ui/switch';

const CornerThemeToggle = () => {
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
    
    setTheme(newTheme);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={toggleTheme}
        className={`
          minecraft-container p-3 cursor-pointer transition-transform flex items-center gap-2
          ${isAnimating ? 'minecraft-dig' : 'hover:scale-105'}
        `}
      >
        {theme === 'light' ? (
          <>
            <Sun className="h-6 w-6 text-yellow-500 minecraft-bounce" />
            <div className="w-10 h-5 bg-gray-300 rounded-full relative">
              <div className="w-4 h-4 bg-yellow-500 absolute left-0.5 top-0.5 rounded-full"></div>
            </div>
          </>
        ) : (
          <>
            <Moon className="h-6 w-6 text-blue-400 minecraft-pulse" />
            <div className="w-10 h-5 bg-gray-700 rounded-full relative">
              <div className="w-4 h-4 bg-blue-400 absolute right-0.5 top-0.5 rounded-full"></div>
            </div>
          </>
        )}
      </button>
    </div>
  );
};

export default CornerThemeToggle;
