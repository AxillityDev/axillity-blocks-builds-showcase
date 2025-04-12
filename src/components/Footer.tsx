
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Axillity</h3>
            <p className="text-muted-foreground mt-2">Minecraft Developer</p>
          </div>
          
          <div className="flex gap-4">
            <a href="#" className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:contact@axillity.dev" className="h-10 w-10 rounded-full bg-background flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Axillity. All rights reserved.</p>
          <p className="mt-2">Built with passion for Minecraft development.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
