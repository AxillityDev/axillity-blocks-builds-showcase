import React from 'react';
import { ArrowDown, Check, Github, Gamepad2, Code, Server, Youtube, MessageSquare, Mail } from 'lucide-react';
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
      title: "OpenMC",
      description: "Contributing to the OpenMC project with custom plugins and server optimization for the Minecraft community.",
      imageSrc: "https://wiki.openmc.fr/~gitbook/image?url=https%3A%2F%2F3559816266-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252F51qamS5Y3oZcOseQ9hfq%252Fsites%252Fsite_62BNZ%252Flogo%252FNRM5KGWUDUb8d7g74nwD%252FGroup%25201.png%3Falt%3Dmedia%26token%3Dbe321232-f7b9-4ac4-9b33-fba96c3222f5&width=160&dpr=3&quality=100&sign=7d26d74d&sv=3",
      tags: ["Java", "Open Source", "Game Design", "GitHub"],
      githubUrl: "https://github.com/OpenMC/plugin",
    },
    {
      title: "Creatoreq",
      description: "Developed custom plugins for Creatoreq's YouTube videos, enabling unique and exciting gameplay scenarios.",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcvpU8q5_s4bEd4Ckm-7ULcKp-jF1edqDZtA&usqp=CAU",
      tags: ["Java", "YouTube", "Content Creation", "Custom Mechanics"],
      youtubeUrl: "https://youtube.com/@Creatoreq"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-36 pb-16 grass-bg text-white">
        <div className="container mx-auto text-center px-4">
          <div className="inline-block minecraft-container px-4 py-2 mb-6 animate-bounce">
            <div className="flex items-center gap-2 text-black">
              <Gamepad2 className="h-4 w-4" />
              <span>Minecraft Developer</span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 minecraft-text">
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
              <h2 className="text-3xl font-bold mb-6 minecraft-text">About Me</h2>
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
                <div className="minecraft-container p-4 w-full sm:w-auto text-black hover:scale-105 transition-transform">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="h-5 w-5 text-primary" />
                    <span className="font-bold">OpenMC Contributor</span>
                  </div>
                  <p className="text-sm">Active contributor to the OpenMC plugin ecosystem</p>
                </div>
                
                <div className="minecraft-container p-4 w-full sm:w-auto text-black hover:scale-105 transition-transform">
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
            
            <div className="minecraft-container p-4 hover:scale-105 transition-transform">
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
            <h2 className="text-3xl font-bold mb-4 minecraft-text">Featured Projects</h2>
            <p className="max-w-2xl mx-auto">
              Here are some of my recent Minecraft development projects. Each one represents
              a unique challenge and creative solution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
            <h2 className="text-3xl font-bold mb-4 minecraft-text">Get In Touch</h2>
            <p className="max-w-2xl mx-auto">
              Interested in working together? Have a project in mind or need a custom
              Minecraft plugin? Let's talk about how I can help bring your ideas to life.
            </p>
          </div>
          
          <div className="minecraft-container p-8">
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">axillityz</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-6 w-6 text-primary" />
                <a href="mailto:contact@Axillity.xyz" className="text-lg font-bold hover:text-primary transition-colors">
                  contact@Axillity.xyz
                </a>
              </div>
              
              <div className="mt-6 w-full max-w-md flex flex-col items-center">
                <div className="minecraft-btn w-full text-center">
                  <a href="https://discord.com/users/axillityz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>Message on Discord</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
