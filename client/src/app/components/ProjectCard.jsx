import React from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project }) => {
  const { title, description, image, tags, demoLink, githubLink, category } = project;

  return (
    <div 
      className="project-card overflow-hidden border border-border bg-white"
      data-aos="fade-up"
    >
      <div className="relative h-48 overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
            {title}
          </div>
        )}
        {category && (
          <span className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
            {category}
          </span>
        )}
      </div>
      <div className="p-5 space-y-3">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-text-light text-sm line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 py-2">
          {tags && tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-gray-100 text-text-light text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 pt-2">
          {demoLink && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-primary hover:underline text-sm"
            >
              <FiExternalLink size={16} className="mr-1" /> Live Demo
            </a>
          )}
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-primary hover:underline text-sm"
            >
              <FiGithub size={16} className="mr-1" /> Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;