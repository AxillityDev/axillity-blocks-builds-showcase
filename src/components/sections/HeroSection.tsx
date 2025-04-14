
import React from 'react';
import { ArrowDown, Gamepad2, Github } from 'lucide-react';
import OpenMCLogo from '@/components/OpenMCLogo';
import { useTheme } from '@/hooks/use-theme';

const HeroSection = () => {
  const { theme } = useTheme();
  
  return (
    <section className={`pt-36 pb-16 ${theme === 'dark' ? 'stone-bg' : 'light-grass-bg'} text-white relative`}>      
      {/* Static minecraft achievement */}
      <div className="minecraft-achievement">
        <div className="achievement-icon">!</div>
        <div className="flex flex-col">
          <div className="text-sm font-bold">Website Loaded!</div>
          <div className="text-xs">Welcome to my Portfolio!</div>
        </div>
      </div>
      
      <div className="absolute top-4 left-4 z-40 minecraft-place-block animate-minecraft-bounce hidden">
        <div className="p-2 minecraft-container flex items-center">
          <img 
            src="https://i.ibb.co/3mJF8qLG/skinmc-avatar.png" 
            alt="Axillity" 
            className="h-8 w-8 mr-2"
          />
          <span className="text-white">Axillity</span>
        </div>
      </div>
      
      <div className="falling-blocks"></div>
      
      <div className="container mx-auto text-center px-4 relative z-10">
        <div className="inline-block minecraft-container px-4 py-2 mb-6 animate-minecraft-bounce shadow-lg">
          <div className="flex items-center gap-2 text-white">
            <Gamepad2 className="h-4 w-4" />
            <span>Minecraft Developer</span>
          </div>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 minecraft-text relative z-20">
          Hey, I'm <span className="text-primary animate-minecraft-pulse">Axillity</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-10 relative z-20">
          I create immersive experiences and innovative plugins for Minecraft servers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
          <a href="#projects" className="minecraft-btn minecraft-place-block">
            View My Work
          </a>
          <a 
            href="https://github.com/AxillityDev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="minecraft-btn bg-secondary text-secondary-foreground minecraft-place-block delay-200"
          >
            <div className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </div>
          </a>
        </div>
        
        <div className="mt-16 animate-minecraft-bounce">
          <a href="#about" className="inline-block hover:text-primary transition-colors">
            <ArrowDown className="h-6 w-6" />
          </a>
        </div>
        
        {/* Animated floating blocks */}
        <div className="absolute -bottom-10 left-1/4 minecraft-bounce delay-300">
          <div className="w-8 h-8 dirt-bg minecraft-container"></div>
        </div>
        <div className="absolute -bottom-16 right-1/4 minecraft-bounce delay-100">
          <div className="w-10 h-10 stone-bg minecraft-container"></div>
        </div>
        <div className="absolute top-20 left-10 minecraft-bounce delay-500 hidden md:block">
          <div className="w-6 h-6 wood-bg minecraft-container"></div>
        </div>
        <div className="absolute top-40 right-10 minecraft-bounce delay-200 hidden md:block">
          <div className="w-12 h-12 grass-bg minecraft-container"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
