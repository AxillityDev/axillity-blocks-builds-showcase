
import React from 'react';
import { Github } from 'lucide-react';
import ProjectCard from '@/components/ProjectCard';

const ProjectsSection = () => {
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
  );
};

export default ProjectsSection;
