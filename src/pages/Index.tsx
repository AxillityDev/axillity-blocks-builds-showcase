
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import { useTheme } from '@/hooks/use-theme';

const Index = () => {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen font-minecraft ${theme === 'dark' ? 'dark bg-background text-white' : 'bg-background text-gray-800'}`}>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
