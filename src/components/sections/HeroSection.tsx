
import React from 'react';
import { ArrowDown, Gamepad2, Github } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const HeroSection = () => {
  return (
    <section className="pt-36 pb-16 grass-bg text-white relative">
      <div className="absolute top-4 right-4 z-40">
        <ThemeToggle />
      </div>
      
      <div className="falling-blocks"></div>
      
      <div className="container mx-auto text-center px-4 relative z-10">
        <div className="inline-block minecraft-container px-4 py-2 mb-6 animate-minecraft-bounce shadow-lg">
          <div className="flex items-center gap-2 text-black">
            <Gamepad2 className="h-4 w-4" />
            <span>Minecraft Developer</span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 minecraft-text relative z-20">
          Hey, I'm <span className="text-primary animate-minecraft-pulse">Axillity</span>
        </h1>
        
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 relative z-20">
          I create immersive experiences and innovative plugins for Minecraft servers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-20">
          <a href="#projects" className="minecraft-btn">
            View My Work
          </a>
          <a 
            href="https://github.com/OpenMC" 
            target="_blank" 
            rel="noopener noreferrer"
            className="minecraft-btn bg-secondary text-secondary-foreground"
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
      </div>
    </section>
  );
};

export default HeroSection;
