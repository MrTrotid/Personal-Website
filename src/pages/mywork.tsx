'use client';
import Link from 'next/link';
import BackgroundCircles from '@/components/BackgroundCircles';
import Modal from '@/components/Modal';
import { useState } from 'react';
import '../app/globals.css';
import Image from 'next/image';
import type { Metadata } from 'next';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  details: string;
  previewUrl?: string;
  githubUrl?: string;
  image: string;
  additionalImages: string[]; // Add this new property
  category: 'personal' | 'group';
}

export const metadata: Metadata = {
  title: 'My Work',
  description: 'Explore MrTrotid\'s projects and work',
};

export default function MyWork() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const projects: Project[] = [
    {
      title: "Sherlock Scramble Solver",
      description: "A Simple Python code made to solve a 15x15 grid word game where one has to find given words from the grid.",
      techStack: ["Python", "Algorithm", "Grid Search", "Pattern Matching"],
      details: "A Python-based tool designed to solve word search puzzles automatically. It processes a 15x15 letter grid and efficiently finds the location of specified words in any direction (horizontal, vertical, or diagonal).",
      githubUrl: "https://github.com/MrTrotid/Sherlock-Scramble-Solver",
      image: "/projects/sherlock.png",
      additionalImages: [
        "/projects/sherlock1.png",
        "/projects/sherlock2.png"
      ],
      category: 'personal',
    },
    {
      title: "AQ Sentinel",
      description: "A low-cost, real-time air quality monitoring system powered by ESP32 microcontroller.",
      techStack: ["IoT", "ESP32", "React", "Node.js", "Web Application"],
      details: "AQ Sentinel is an innovative air quality monitoring solution that combines hardware and software to provide real-time environmental data. The system uses ESP32 microcontroller for data collection and processing, with a modern web interface for monitoring and analysis.",
      githubUrl: "https://github.com/MrTrotid/aqsentinel",
      image: "/projects/aqsentinel.png",
      additionalImages: [
        "/projects/aqsentinel1.png",
        "/projects/aqsentinel2.png",
        "/projects/aqsentinel3.png"
      ],
      category: 'group',
    },
    {
      title: "Personal Portfolio",
      description: "A modern portfolio website built with Next.js and TailwindCSS",
      techStack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
      details: "A responsive portfolio website showcasing my work and skills...",
      githubUrl: "https://github.com/mrtrotid/portfolio",
      image: "/projects/portfolio.png",
      additionalImages: [
        "/projects/portfolio1.png",
        "/projects/portfolio2.png",
        "/projects/portfolio3.png"
      ],
      category: 'personal',
    },
    // Add more projects here
  ];

  const personalProjects = projects.filter(p => p.category === 'personal');
  const groupProjects = projects.filter(p => p.category === 'group');

  return (
    <>
      <main className="cursor-gradient min-h-screen p-8 relative overflow-hidden animate-fadeIn bg-transparent">
        <BackgroundCircles />
        <div className="max-w-6xl mx-auto relative z-10 text-white">
          <Link 
            href="/" 
            className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md 
              bg-white/5 backdrop-blur-sm hover:bg-white/10 
              transition-all duration-300 ease-in-out
              hover:translate-x-[-2px] text-sm animate-slideInLeft"
          >
            <span className="inline-block leading-none relative top-[0.5px]">←</span>
            <span className="inline-block leading-tight">Home</span>
          </Link>

          <div className="space-y-12 backdrop-blur-sm bg-black/30 p-8 rounded-lg mt-8 
            animate-slideInUp hover:bg-black/40 transition-all duration-500">
            <h1 className="text-4xl font-bold animate-slideInRight hover:scale-[1.02] transition-all duration-500">
              My Work
            </h1>

            {/* Personal Projects Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-blue-200">Personal Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {personalProjects.map((project, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedProject(project)}
                    className="p-6 rounded-lg bg-black/20 backdrop-blur-sm 
                      hover:bg-black/30 cursor-pointer
                      transform-gpu hover:scale-[1.05]
                      transition-transform duration-300 ease-out
                      hover:shadow-lg hover:z-50
                      relative"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-blue-200 
                      transition-colors duration-300 group-hover:text-blue-100">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm bg-blue-500/10 rounded-full text-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Group Projects Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-blue-200">Group Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {groupProjects.map((project, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedProject(project)}
                    className="p-6 rounded-lg bg-black/20 backdrop-blur-sm 
                      hover:bg-black/30 cursor-pointer
                      transform-gpu hover:scale-[1.05]
                      transition-transform duration-300 ease-out
                      hover:shadow-lg hover:z-50
                      relative"
                    style={{ 
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-blue-200 
                      transition-colors duration-300 group-hover:text-blue-100">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 text-sm bg-blue-500/10 rounded-full text-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Modal 
          isOpen={!!selectedProject} 
          onClose={() => setSelectedProject(null)}
        >
          {selectedProject && (
            <div className="text-white">
              <h2 className="text-2xl font-bold text-blue-200 mb-4">
                {selectedProject.title}
              </h2>
              
              <p className="text-gray-300 mb-6">
                {selectedProject.details}
              </p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                {selectedProject.previewUrl && (
                  <a 
                    href={selectedProject.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 
                      rounded-md transition-all duration-300"
                  >
                    Live Preview →
                  </a>
                )}
                {selectedProject.githubUrl && (
                  <a 
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-white/10 hover:bg-white/20 
                      rounded-md transition-all duration-300"
                  >
                    View Code →
                  </a>
                )}
              </div>

              {/* Gallery Dropdown */}
              <div className="border-t border-white/10 pt-4">
                <button 
                  onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                  className="w-full flex items-center justify-between text-lg font-semibold 
                    hover:text-blue-300 transition-colors"
                >
                  <span>Project Gallery ({selectedProject.additionalImages.length + 1} images)</span>
                  <svg 
                    className={`w-5 h-5 transform transition-transform ${isGalleryOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {isGalleryOpen && (
                  <div className="mt-4 space-y-4 animate-slideInDown">
                    {/* Main Image */}
                    <div className="relative h-80 rounded-lg overflow-hidden">
                      <Image
                        src={selectedProject.image}
                        alt={`${selectedProject.title} main`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    
                    {/* Additional Images Grid */}
                    {selectedProject.additionalImages.length > 0 && (
                      <div className={`grid gap-4 ${
                        selectedProject.additionalImages.length === 1 ? 'grid-cols-1' :
                        selectedProject.additionalImages.length === 2 ? 'grid-cols-2' :
                        'grid-cols-2 md:grid-cols-3'
                      }`}>
                        {selectedProject.additionalImages.map((img, index) => (
                          <div key={index} 
                            className={`relative rounded-lg overflow-hidden ${
                              selectedProject.additionalImages.length <= 2 ? 'h-52' : 'h-40'
                            }`}
                          >
                            <Image
                              src={img}
                              alt={`${selectedProject.title} ${index + 1}`}
                              fill
                              className="object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </Modal>
      </main>
    </>
  );
}
