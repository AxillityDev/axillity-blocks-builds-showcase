
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
    
    setTimeout(() => {
      setTheme(newTheme);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div 
        onClick={toggleTheme}
        className={`
          minecraft-container p-2 cursor-pointer transition-transform flex items-center gap-2
          ${isAnimating ? 'minecraft-dig' : 'hover:scale-105'}
        `}
      >
        {theme === 'light' ? (
          <>
            <Sun className="h-5 w-5 text-yellow-500 minecraft-bounce" />
            <Switch checked={false} className="minecraft-switch" />
          </>
        ) : (
          <>
            <Moon className="h-5 w-5 text-blue-400 minecraft-pulse" />
            <Switch checked={true} className="minecraft-switch" />
          </>
        )}
      </div>
    </div>
  );
};

export default CornerThemeToggle;
