
import React from 'react';
import { Pickaxe, Code, User, Mail, MessageSquare } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full py-3 minecraft-container">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="text-xl font-bold flex items-center gap-2">
          <Pickaxe className="h-6 w-6 text-primary" />
          <span className="text-black">Axillity</span>
        </a>
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="flex items-center gap-2 text-black border-b-2 border-transparent hover:border-primary transition-colors">
            <User className="h-4 w-4" />
            <span>About</span>
          </a>
          <a href="#projects" className="flex items-center gap-2 text-black border-b-2 border-transparent hover:border-primary transition-colors">
            <Code className="h-4 w-4" />
            <span>Projects</span>
          </a>
          <a href="#contact" className="flex items-center gap-2 text-black border-b-2 border-transparent hover:border-primary transition-colors">
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
};

export default Navbar;
