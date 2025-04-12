
import React from 'react';
import { ArrowDown, Check, Github, Gamepad2, Code, Server, Youtube } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';

const Index = () => {
  // Minecraft skills
  const skills = [
    "Java Plugin Development", 
    "Spigot/Paper API", 
    "Custom Game Mechanics",
    "Server Management",
    "Mod Integration",
    "Performance Optimization"
  ];
  
  // Projects data
  const projects = [
    {
      title: "OpenMC Plugin",
      description: "Contributing to the OpenMC project with custom plugins and server optimization.",
      imageSrc: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      tags: ["Java", "Open Source", "Game Design", "GitHub"],
      githubUrl: "https://github.com/OpenMC/plugin",
    },
    {
      title: "Creatoreq Plugins",
      description: "Developed custom plugins for Creatoreq's YouTube videos, enabling unique gameplay scenarios.",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      tags: ["Java", "YouTube", "Content Creation", "Custom Mechanics"],
      githubUrl: "#",
      liveUrl: "https://youtube.com/@Creatoreq"
    },
    {
      title: "MineGuard",
      description: "Security plugin that prevents exploits and protects server assets from unauthorized access.",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      tags: ["Java", "Security", "Server Protection"],
      githubUrl: "#",
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-36 pb-16 grass-bg text-white">
        <div className="container mx-auto text-center px-4">
          <div className="inline-block minecraft-container px-4 py-2 mb-6">
            <div className="flex items-center gap-2 text-black">
              <Gamepad2 className="h-4 w-4" />
              <span>Minecraft Developer</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hey, I'm <span className="text-primary">Axillity</span>
          </h1>
          
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10">
            I create immersive experiences and innovative plugins for Minecraft servers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="minecraft-btn">
              View My Work
            </a>
            <a 
              href="https://github.com/OpenMC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="minecraft-btn bg-secondary text-secondary-foreground"
            >
              <div className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </div>
            </a>
          </div>
          
          <div className="mt-16 animate-bounce">
            <a href="#about" className="inline-block hover:text-primary transition-colors">
              <ArrowDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 dirt-bg text-white px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="mb-6">
                I'm a passionate Minecraft developer with over 5 years of experience creating custom plugins,
                game mechanics, and server experiences. My work focuses on enhancing gameplay while maintaining
                server performance and stability.
              </p>
              <p className="mb-6">
                I specialize in developing unique gameplay features that keep players engaged and excited about
                your Minecraft server. Whether you need custom mobs, items, game mechanics, or complete mini-games,
                I can bring your vision to life.
              </p>
              
              <div className="flex flex-wrap gap-6 mt-8">
                <div className="minecraft-container p-4 w-full sm:w-auto text-black">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="h-5 w-5 text-primary" />
                    <span className="font-bold">OpenMC Contributor</span>
                  </div>
                  <p className="text-sm">Active contributor to the OpenMC plugin ecosystem</p>
                </div>
                
                <div className="minecraft-container p-4 w-full sm:w-auto text-black">
                  <div className="flex items-center gap-2 mb-2">
                    <Youtube className="h-5 w-5 text-primary" />
                    <span className="font-bold">Creatoreq Plugins</span>
                  </div>
                  <p className="text-sm">Custom plugins for Creatoreq's YouTube videos</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="minecraft-container p-4">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800" 
                alt="Minecraft Development" 
                className="w-full h-auto pixelated" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 stone-bg text-white px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="max-w-2xl mx-auto">
              Here are some of my recent Minecraft development projects. Each one represents
              a unique challenge and creative solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/OpenMC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <span>See more on GitHub</span>
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 wood-bg px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="max-w-2xl mx-auto">
              Interested in working together? Have a project in mind or need a custom
              Minecraft plugin? Let's talk about how I can help bring your ideas to life.
            </p>
          </div>
          
          <div className="minecraft-container p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 minecraft-container bg-white text-black"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-black">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 minecraft-container bg-white text-black"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-black">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 minecraft-container bg-white text-black"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-black">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 minecraft-container bg-white text-black resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button type="submit" className="minecraft-btn">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
