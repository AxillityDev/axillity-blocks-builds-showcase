
import React from 'react';
import { ArrowDown, Check, Github, Gamepad2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
      title: "BlockQuest",
      description: "A custom Minecraft mini-game plugin with RPG elements, quests, and custom items.",
      imageSrc: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
      tags: ["Java", "Spigot API", "Game Design", "MySQL"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "CraftEconomy",
      description: "Advanced economy system for Minecraft servers with shop integration and player markets.",
      imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
      tags: ["Java", "Data Storage", "Economy", "API"],
      githubUrl: "#"
    },
    {
      title: "MineGuard",
      description: "Security plugin that prevents exploits and protects server assets from unauthorized access.",
      imageSrc: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      tags: ["Java", "Security", "Server Protection"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-4 w-4" />
              <span>Minecraft Developer</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hey, I'm <span className="text-primary">Axillity</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10">
            I create immersive experiences and innovative plugins for Minecraft servers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="minecraft-btn">
              View My Work
            </a>
            <a 
              href="https://github.com" 
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
            <a href="#about" className="inline-block text-muted-foreground hover:text-primary transition-colors">
              <ArrowDown className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-muted px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Me</h2>
              <p className="text-muted-foreground mb-6">
                I'm a passionate Minecraft developer with over 5 years of experience creating custom plugins,
                game mechanics, and server experiences. My work focuses on enhancing gameplay while maintaining
                server performance and stability.
              </p>
              <p className="text-muted-foreground mb-6">
                I specialize in developing unique gameplay features that keep players engaged and excited about
                your Minecraft server. Whether you need custom mobs, items, game mechanics, or complete mini-games,
                I can bring your vision to life.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-lg pixel-border">
              <img 
                src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=800" 
                alt="Minecraft Development" 
                className="rounded-lg w-full h-auto shadow-lg" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <span>See more on GitHub</span>
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-card px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in working together? Have a project in mind or need a custom
              Minecraft plugin? Let's talk about how I can help bring your ideas to life.
            </p>
          </div>
          
          <div className="bg-background p-8 rounded-lg shadow-lg pixel-border">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-md border bg-card"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-md border bg-card"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-md border bg-card"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 rounded-md border bg-card resize-none"
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
