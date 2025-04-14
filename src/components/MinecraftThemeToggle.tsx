
import React from 'react';
import { Moon } from 'lucide-react';

const MinecraftThemeToggle = () => {
  return (
    <div className="flex items-center gap-2 minecraft-container-dark p-2">
      <div className="flex items-center gap-1">
        <Moon className="h-4 w-4 text-yellow-300" />
        <span className="text-xs text-white">Night</span>
      </div>
    </div>
  );
};

export default MinecraftThemeToggle;
