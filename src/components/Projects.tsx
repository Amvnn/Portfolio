import React, { useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveDemo: string;
  github: string;
  problem: string;
  solution: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management",
    techStack: ["React", "Node.js", "MongoDB", "Redux"],
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80",
    liveDemo: "#",
    github: "#",
    problem: "Creating a scalable and performant e-commerce solution with real-time updates",
    solution: "Implemented WebSocket for real-time inventory updates and Redux for state management"
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered platform for generating marketing content",
    techStack: ["Next.js", "OpenAI API", "TailwindCSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1677442719456-6397d4c11a8a?auto=format&fit=crop&q=80",
    liveDemo: "#",
    github: "#",
    problem: "Streamlining content creation process for marketing teams",
    solution: "Leveraged OpenAI's GPT-3 API with custom prompts and templates"
  },
  {
    title: "Task Management System",
    description: "A collaborative task management platform for remote teams",
    techStack: ["React", "Firebase", "Material-UI", "Redux"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
    liveDemo: "#",
    github: "#",
    problem: "Coordinating tasks and communication in remote teams",
    solution: "Built real-time collaboration features using Firebase"
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-blue-900 to-indigo-900">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="px-4 py-2 rounded-full bg-white/20 text-white backdrop-blur-sm">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 rounded-full bg-white/10 text-sm text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setSelectedProject(null)} />
            <div className="relative w-full max-w-4xl backdrop-blur-xl bg-white/10 rounded-3xl border border-white/20 p-8">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white hover:text-gray-300"
              >
                <X size={24} />
              </button>
              
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <h3 className="text-2xl font-bold text-white mb-4">{selectedProject.title}</h3>
              <p className="text-gray-300 mb-6">{selectedProject.description}</p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Problem</h4>
                  <p className="text-gray-300">{selectedProject.problem}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                  <p className="text-gray-300">{selectedProject.solution}</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors"
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 text-white font-semibold hover:bg-white/20 transition-colors"
                >
                  <Github size={20} />
                  View Code
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}