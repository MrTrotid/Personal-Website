'use client';
import React from 'react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  status: 'completed' | 'in-progress' | 'planned';
  onClick?: () => void;
}

export default function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies, 
  status, 
  onClick 
}: ProjectCardProps) {
  return (
    <div 
      onClick={status === 'completed' ? onClick : undefined}
      className={`group p-4 rounded-lg bg-black/20 backdrop-blur-sm transition-all duration-300
        ${status === 'completed' ? 'cursor-pointer hover:bg-black/30' : 'opacity-75'}`}
    >
      <div className="relative w-28 h-28 mx-auto mb-4 rounded-lg overflow-hidden bg-black/40">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-2"
          priority
        />
      </div>
      <h3 className="text-xl font-semibold text-blue-200 mb-2 group-hover:text-blue-300">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="px-2 py-1 text-xs rounded-full bg-blue-900/30 text-blue-200">
            {tech}
          </span>
        ))}
      </div>
      {status !== 'completed' && (
        <span className="absolute top-2 right-2 px-2 py-1 text-xs rounded-full bg-blue-900/50 text-blue-200">
          {status}
        </span>
      )}
    </div>
  );
}
