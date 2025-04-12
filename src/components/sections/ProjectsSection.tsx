
import React from 'react';
import { Github } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';

const ProjectsSection = () => {
  // Projects data
  const projects = [
    {
      title: "OpenMC",
      description: "Contributing to the OpenMC project with custom plugins and server optimization for the Minecraft community.",
      imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy2tLNkVSFhpMZ_Ren4nqLAjJ2gztaUmJB1g&s",
      tags: ["Java", "Open Source", "Game Design", "GitHub"],
      githubUrl: "https://github.com/ServeurOpenMC/",
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
            href="https://github.com/AxillityDev" 
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
  );
};

export default ProjectsSection;
