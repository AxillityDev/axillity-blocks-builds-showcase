
import React, { useEffect, useState } from 'react';
import { ArrowDown, Gamepad2, Github } from 'lucide-react';

const HeroSection = () => {
  const [showAchievement, setShowAchievement] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAchievement(false);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="min-h-screen pt-32 pb-16 text-white relative overflow-hidden">      
      {/* Achievement notification */}
      {showAchievement && (
        <div className="fixed top-4 right-4 z-50 animate-minecraft-slide-right">
          <img 
            src="https://skinmc.net/achievement/7/Website+Loaded%21/Welcome+to+my+Portfolio%21" 
            alt="Achievement unlocked" 
            className="h-auto w-64"
          />
        </div>
      )}
      
      {/* Cherry Blossom video background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ 
          filter: 'brightness(0.7)',
          zIndex: -1
        }}
      >
        <source src="https://motionbgs.com/media/3227/cherry-blossom.960x540.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Minecraft animated background layers */}
      <div className="absolute inset-0 stone-bg opacity-20"></div>
      <div className="absolute inset-0 dirt-bg opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div>
      
      <div className="container mx-auto text-center px-4 relative z-10">
        <div className="inline-block minecraft-container px-4 py-2 mb-6 animate-minecraft-bounce">
          <div className="flex items-center gap-2 text-white">
            <Gamepad2 className="h-4 w-4" />
            <span className="animate-minecraft-pulse">Minecraft Developer</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-4">
            <img 
              src="https://i.ibb.co/3mJF8qLG/skinmc-avatar.png" 
              alt="Axillity" 
              className="h-16 w-16 animate-minecraft-bounce"
            />
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold minecraft-text relative z-20">
              <span className="text-white">Hey, I'm</span>{" "}
              <span className="text-primary animate-minecraft-pulse">Axillity</span>
            </h1>
          </div>
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 relative z-20 text-white">
          I create immersive experiences and innovative plugins for Minecraft servers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center relative z-20">
          <a href="#projects" className="minecraft-btn animate-minecraft-bounce">
            View My Work
          </a>
          <a 
            href="https://github.com/AxillityDev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="minecraft-btn bg-secondary text-secondary-foreground animate-minecraft-bounce delay-200"
          >
            <div className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </div>
          </a>
        </div>
        
        <div className="mt-16">
          <a href="#about" className="inline-block hover:text-primary transition-colors animate-minecraft-bounce">
            <ArrowDown className="h-6 w-6 text-white" />
          </a>
        </div>
        
        {/* Animated floating blocks */}
        <div className="absolute bottom-10 left-1/4 animate-minecraft-bounce delay-300">
          <div className="w-8 h-8 dirt-bg minecraft-container"></div>
        </div>
        <div className="absolute bottom-16 right-1/4 animate-minecraft-bounce delay-100">
          <div className="w-10 h-10 stone-bg minecraft-container"></div>
        </div>
        <div className="absolute top-20 left-10 animate-minecraft-bounce delay-500 hidden md:block">
          <div className="w-6 h-6 wood-bg minecraft-container"></div>
        </div>
        <div className="absolute top-40 right-10 animate-minecraft-bounce delay-200 hidden md:block">
          <div className="w-12 h-12 grass-bg minecraft-container"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
