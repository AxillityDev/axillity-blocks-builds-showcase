
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import { useTheme } from '@/hooks/use-theme';

const MinecraftThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className={`flex items-center gap-2 ${isDark ? 'minecraft-container-dark' : 'minecraft-container'} p-2`}>
      <Switch 
        checked={isDark}
        onCheckedChange={toggleTheme}
        className="minecraft-switch"
        aria-label="Toggle theme"
      />
      <div className="flex items-center gap-1">
        {isDark ? (
          <Moon className="h-4 w-4 text-yellow-300" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
        <span className={`text-xs ${isDark ? 'text-white' : 'text-gray-800'}`}>
          {isDark ? 'Night' : 'Day'}
        </span>
      </div>
    </div>
  );
};

export default MinecraftThemeToggle;
