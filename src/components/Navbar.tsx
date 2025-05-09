
import React, { useState } from 'react';
import { User, Mail, Menu, X, Code } from 'lucide-react';
import MinecraftThemeToggle from './MinecraftThemeToggle';
import LanguageSwitch from './LanguageSwitch';
import { useLanguage } from '@/contexts/LanguageContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <nav className="fixed top-0 z-50 w-full py-3 bg-[#222222] border-b border-[#333333]">
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#" className="text-xl font-bold flex items-center gap-2">
          <div className="minecraft-container p-2">
            <img 
              src="https://i.ibb.co/3mJF8qLG/skinmc-avatar.png" 
              alt="Axillity Logo" 
              className="h-8 w-8"
            />
          </div>
          <span className="text-white ml-2">Axillity</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="flex items-center gap-2 text-white border-b-2 border-transparent hover:border-primary transition-colors">
            <User className="h-4 w-4" />
            <span>{t('nav', 'about')}</span>
          </a>
          <a href="#projects" className="flex items-center gap-2 text-white border-b-2 border-transparent hover:border-primary transition-colors">
            <Code className="h-4 w-4" />
            <span>{t('nav', 'projects')}</span>
          </a>
          <a href="#contact" className="flex items-center gap-2 text-white border-b-2 border-transparent hover:border-primary transition-colors">
            <Mail className="h-4 w-4" />
            <span>{t('nav', 'contact')}</span>
          </a>
        </div>
        
        {/* Theme Toggle and Language Switch (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitch />
          <MinecraftThemeToggle />
          
          {/* Contact Button */}
          <a href="#contact" className="minecraft-btn">
            {t('nav', 'getInTouch')}
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitch />
          <MinecraftThemeToggle />
          <button 
            onClick={toggleMobileMenu}
            className="text-white p-2 minecraft-container"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full minecraft-container mt-1 py-4 px-4 animate-minecraft-place-block">
          <div className="flex flex-col gap-4">
            <a href="#about" className="flex items-center gap-2 text-white py-2 px-3 hover:bg-[#444] rounded-lg transition-colors">
              <User className="h-5 w-5" />
              <span>{t('nav', 'about')}</span>
            </a>
            <a href="#projects" className="flex items-center gap-2 text-white py-2 px-3 hover:bg-[#444] rounded-lg transition-colors">
              <Code className="h-5 w-5" />
              <span>{t('nav', 'projects')}</span>
            </a>
            <a href="#contact" className="flex items-center gap-2 text-white py-2 px-3 hover:bg-[#444] rounded-lg transition-colors">
              <Mail className="h-5 w-5" />
              <span>{t('nav', 'contact')}</span>
            </a>
            <a href="#contact" className="minecraft-btn text-center mt-2">
              {t('nav', 'getInTouch')}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
