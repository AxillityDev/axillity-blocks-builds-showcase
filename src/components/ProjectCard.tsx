
import React from 'react';
import { ExternalLink, Github, Youtube } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  githubUrl?: string;
  youtubeUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ 
  title, 
  description, 
  imageSrc, 
  tags,
  githubUrl,
  youtubeUrl,
  liveUrl
}: ProjectCardProps) => {
  return (
    <div className="minecraft-container overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-all duration-500 hover:scale-105" 
        />
        <div className="absolute inset-0 pixel-border pointer-events-none"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-black mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 minecraft-container inline-block"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {githubUrl && (
            <a href={githubUrl} className="text-black hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          )}
          {youtubeUrl && (
            <a href={youtubeUrl} className="text-black hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <Youtube className="h-5 w-5" />
            </a>
          )}
          {liveUrl && (
            <a href={liveUrl} className="text-black hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
