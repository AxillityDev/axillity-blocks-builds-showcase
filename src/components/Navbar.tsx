
import React from 'react';
import { Code, User, Mail } from 'lucide-react';
  
  return (
    <nav className={`fixed top-0 z-50 w-full py-3 minecraft-container ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="text-xl font-bold flex items-center gap-2">
          <img 
            src="https://i.ibb.co/3mJF8qLG/skinmc-avatar.png" 
            alt="Axillity Logo" 
            className="h-6 w-6"
          />
          <span className="text-black dark:text-white">Axillity</span>
        </a>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="flex items-center gap-2 text-black dark:text-white border-b-2 border-transparent hover:border-primary transition-colors">
            <User className="h-4 w-4" />
            <span>About</span>
          </a>
          <a href="#projects" className="flex items-center gap-2 text-black dark:text-white border-b-2 border-transparent hover:border-primary transition-colors">
            <Code className="h-4 w-4" />
            <span>Projects</span>
          </a>
          <a href="#contact" className="flex items-center gap-2 text-black dark:text-white border-b-2 border-transparent hover:border-primary transition-colors">
            <Mail className="h-4 w-4" />
            <span>Contact</span>
          </a>
        </div>
        
        <a href="#contact" className="minecraft-btn">
          Get In Touch
        </a>
      </div>
    </nav>
  );

export default Navbar;
