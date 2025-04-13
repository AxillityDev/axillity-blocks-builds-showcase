
import React from 'react';
import { Check, Code, Youtube, Pick, Blocks } from 'lucide-react';

const AboutSection = () => {
  // Minecraft skills
  const skills = [
    "Java Plugin Development", 
    "Spigot/Paper API", 
    "Custom Game Mechanics",
    "Server Management",
    "Mod Integration",
    "Performance Optimization"
  ];
  
  return (
    <section id="about" className="py-20 dirt-bg text-white px-4 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 minecraft-text">About Me</h2>
            <div className="space-y-4">
              <p className="minecraft-build delay-100">
                I'm a passionate Minecraft developer with over 5 years of experience creating custom plugins,
                game mechanics, and server experiences. My journey began with simple command plugins and has evolved
                into developing complex gameplay systems that enhance the Minecraft experience.
              </p>
              <p className="minecraft-build delay-200">
                I specialize in developing unique gameplay features that keep players engaged and excited about
                your Minecraft server. Whether you need custom mobs with special abilities, innovative game mechanics,
                or complete mini-games, I can bring your creative vision to life with clean, optimized code.
              </p>
              <p className="minecraft-build delay-300">
                Beyond writing code, I'm deeply involved in the Minecraft community, contributing to open-source
                projects and collaborating with content creators to develop plugins that power their creative videos.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="minecraft-container p-4 w-full sm:w-auto text-black hover:scale-105 transition-transform hover-block minecraft-place-block">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-5 w-5 text-primary" />
                  <span className="font-bold">OpenMC Contributor</span>
                </div>
                <p className="text-sm">Active contributor to the OpenMC plugin ecosystem</p>
              </div>
              
              <div className="minecraft-container p-4 w-full sm:w-auto text-black hover:scale-105 transition-transform hover-block minecraft-place-block delay-200">
                <div className="flex items-center gap-2 mb-2">
                  <Youtube className="h-5 w-5 text-primary" />
                  <span className="font-bold">Creatoreq</span>
                </div>
                <p className="text-sm">Custom plugins for YouTube videos</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {skills.map((skill, index) => (
                <div key={index} className={`flex items-center gap-2 minecraft-build delay-${index * 100}`}>
                  <Check className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="minecraft-container p-4 hover:scale-105 transition-transform minecraft-3d-rotate hover-block">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800" 
                alt="Minecraft Development" 
                className="w-full h-auto pixelated" 
              />
              <div className="absolute -top-6 -left-6 w-12 h-12 grass-bg minecraft-container minecraft-bounce"></div>
              <div className="absolute -bottom-8 -right-8 w-16 h-16 stone-bg minecraft-container minecraft-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
