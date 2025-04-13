
import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';
import OpenMCLogo from './OpenMCLogo';

const Footer = () => {
  return (
    <footer className="bg-background py-8 border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="mr-3">
              <OpenMCLogo size="sm" />
            </div>
            <span className="text-lg font-bold">OpenMC Dev</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <a href="#home" className="mx-2 my-1 md:my-0 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="mx-2 my-1 md:my-0 hover:text-primary transition-colors">About</a>
            <a href="#projects" className="mx-2 my-1 md:my-0 hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="mx-2 my-1 md:my-0 hover:text-primary transition-colors">Contact</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com" className="hover:text-primary transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" className="hover:text-primary transition-colors">
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" className="hover:text-primary transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} OpenMC Development. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Made with 💚 using React and Minecraft-inspired design
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
