
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { Button } from './ui/button';

const LanguageSwitch = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pl' : 'en');
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleLanguage}
      className="flex items-center gap-2 minecraft-container"
    >
      <Globe className="h-4 w-4" />
      <span className="sr-only">
        {language === 'en' ? 'Switch to Polish' : 'Przełącz na Angielski'}
      </span>
    </Button>
  );
};

export default LanguageSwitch;
