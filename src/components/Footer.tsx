import React from 'react';
import { Github, Twitter, Linkedin, Mail, Youtube, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="stone-bg py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Axillity</h3>
            <p className="mt-2">Minecraft Developer</p>
          </div>
          
          <div className="flex gap-4">
            <a href="https://github.com/AxillityDev" target="_blank" rel="noopener noreferrer" className="h-10 w-10 minecraft-container flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Github className="h-5 w-5 text-black" />
            </a>
            <a href="https://discord.com/users/axillityz" target="_blank" rel="noopener noreferrer" className="h-10 w-10 minecraft-container flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <MessageSquare className="h-5 w-5 text-black" />
            </a>
         </a>
            <a href="mailto:contact@Axillity.xyz" className="h-10 w-10 minecraft-container flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Mail className="h-5 w-5 text-black" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>© {new Date().getFullYear()} Axillity. All rights reserved.</p>
          <p className="mt-2">Built with passion for Minecraft development.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
