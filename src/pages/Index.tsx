
import React from 'react';
import { useTheme } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import { showMinecraftNotification } from '@/components/MinecraftNotification';
import CornerThemeToggle from '@/components/CornerThemeToggle';

const Index = () => {
  const { theme } = useTheme();
  
  React.useEffect(() => {
    // Show a welcome notification when the page loads
    const timer = setTimeout(() => {
      showMinecraftNotification(
        'Website Loaded Successfully!',
        'Welcome to Axillity\'s Minecraft developer portfolio',
        'achievement'
      );
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <CornerThemeToggle />
    </div>
  );
};

export default Index;
