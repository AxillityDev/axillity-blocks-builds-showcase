
import React, { useEffect } from 'react';
import { useTheme } from '@/components/ThemeProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import { showMinecraftNotification } from '@/components/MinecraftNotification';

const Index = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    // Show a welcome notification when the page loads
    const timer = setTimeout(() => {
      showMinecraftNotification(
        'Website Loaded Successfully!',
        'Welcome to my Minecraft developer portfolio',
        'info'
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
    </div>
  );
};

export default Index;
