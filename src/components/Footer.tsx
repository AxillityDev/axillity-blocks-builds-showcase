import React from 'react';
import { GithubIcon, TwitterIcon, LinkedinIcon, CodeIcon } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-background py-8 border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="minecraft-container p-2">
              <img 
                src="https://i.ibb.co/3mJF8qLG/skinmc-avatar.png" 
                alt="AxillityDev Logo" 
                className="h-8 w-8"
              />
            </div>
            <span className="text-lg font-bold ml-3">Axillity</span>
          </div>
          
          <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
            <a href="#home" className="mx-2 my-1 md:my-0 hover:text-primary transition-colors">Home</a>
            <a href="#about" className="mx-2 my-1 md:my-0 hover:text-primary transition-colors">{t('nav', 'about')}</a>
            <a href="#projects" className="mx-2 my-1 md:my-0 hover:text-primary transition-colors">{t('nav', 'projects')}</a>
            <a href="#contact" className="mx-2 my-1 md:my-0 hover:text-primary transition-colors">{t('nav', 'contact')}</a>
          </div>
          
          <div className="flex space-x-4">
            <a href="https://github.com/AxillityDev" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <GithubIcon className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Axillity Development. {t('footer', 'rights')}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            {t('footer', 'madeWith')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
