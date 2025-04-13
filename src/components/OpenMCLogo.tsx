
import React, { useState, useEffect } from 'react';

const OpenMCLogo = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const [rotateAnimation, setRotateAnimation] = useState(false);
  
  // Size classes based on the size prop
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };
  
  useEffect(() => {
    // Randomly trigger the animation occasionally
    const intervalId = setInterval(() => {
      if (Math.random() > 0.7) {
        setRotateAnimation(true);
        setTimeout(() => setRotateAnimation(false), 2000);
      }
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className={`relative ${sizeClasses[size]} minecraft-container overflow-hidden ${rotateAnimation ? 'minecraft-3d-rotate' : ''}`}>
      <div className="absolute inset-0 dirt-bg opacity-40"></div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-bold text-green-600 text-center leading-none" 
              style={{ textShadow: '1px 1px 0 #000' }}>
          Open<br />MC
        </span>
      </div>
    </div>
  );
};

export default OpenMCLogo;
