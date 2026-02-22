import React, { useState } from 'react';
import { ExternalLink, Github, Eye, ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Royal Rastaurant - Contactless Dining Experience',
      description: 'Royal Rastaurant – A Next.js and MongoDB-based contactless dining platform with QR ordering, real-time kitchen updates, and admin management.',
      image: 'https://github.com/Tirth29/Royal_Restaurant/assets/97218429/a1429a5c-b7f1-4548-9847-f9d1ae0f6613',
      technologies: ['MongoDB','Next.js'],
      category: 'Full Stack',
      githubUrl: 'https://github.com/Tirth29/Royal_Restaurant/',
      featured: true,
      liveUrl: 'royal-restaurant-eight.vercel.app/'
    },
    {
      id: 2,
      title: 'Store@Svnit',
      description: 'Developed a scalable Store@SVNIT app with JWT authentication (15-day login), Cloudinary uploads, Stripe payments, and a React Native + Redux Toolkit UI, delivering a production-ready MERN application.',
      image: '',
      technologies: ['React Native', 'MongoDB', 'Express.Js', 'Node.Js', 'Redux'],
      category: 'Mobile Application',
      githubUrl: 'https://github.com/Tirth29/Store-Svnit',
      //liveUrl: '',
      featured: true
    },
    {
      id: 3,
      title: 'Chat with codebase',
      description: 'Built an AI Code Assistant using ChatGPT with a RAG pipeline for context-aware bug detection and optimization, plus an embeddings-based search engine enabling LLM interaction with local code.',
      image: '',
      technologies: ['Python', 'LLMs', 'Vector DBs', 'RAG'],
      category: 'VS Code Extension',
      githubUrl: 'https://github.com/Peacexoom/Chat-with-Codebase',
      //liveUrl: '',
      featured: true
    },
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'Full Stack', label: 'Full Stack' },
    { key: 'VS Code Extension', label: 'VS Code Extension' },
    {key:'Mobile Application',label:'Mobile Application'}
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const ProjectCard = ({ project }) => (
    <div className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:shadow-xl hover:border-indigo-100 dark:hover:border-yellow-900/50 transition-all duration-300 flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden bg-gray-50 dark:bg-gray-800">
        <div className="absolute inset-0 bg-indigo-900/5 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Badges */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2">
          {project.featured && (
            <span className="bg-indigo-600/90 dark:bg-yellow-500/90 backdrop-blur-sm text-white dark:text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
              Featured
            </span>
          )}
          {project.Ongoing && (
            <span className="bg-amber-500/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
              Ongoing
            </span>
          )}
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-yellow-500 transition-colors">
            {project.title}
          </h3>
          <a
            href={project.liveUrl || project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-indigo-600 dark:hover:text-yellow-500 transition-colors"
          >
            <ArrowUpRight className="h-5 w-5" />
          </a>
        </div>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed flex-grow">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-indigo-50 dark:bg-yellow-900/20 text-indigo-700 dark:text-yellow-400 rounded-full text-xs font-medium border border-indigo-100 dark:border-yellow-900/30"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50 dark:border-gray-800">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-sm font-medium group/btn"
          >
            <Github className="h-4 w-4 text-gray-500 dark:text-gray-400 group-hover/btn:text-gray-900 dark:group-hover/btn:text-white" />
            Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 dark:bg-yellow-500 text-white dark:text-gray-900 rounded-lg hover:bg-indigo-700 dark:hover:bg-yellow-400 hover:shadow-md transition-all text-sm font-medium"
            >
              <Eye className="h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-24 bg-gray-50/50 dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Featured <span className="text-indigo-600 dark:text-yellow-500 transition-colors duration-300">Projects</span>
          </h2>
          <div className="w-24 h-1.5 bg-indigo-600 dark:bg-yellow-500 mx-auto rounded-full mb-6 transition-colors duration-300"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed transition-colors duration-300">
            A showcase of my recent work, side projects, and open source contributions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-indigo-600 dark:bg-yellow-500 text-white dark:text-gray-900 shadow-lg scale-105'
                  : 'bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm transition-colors duration-300">
            <p className="text-gray-500 dark:text-gray-400 text-lg">No projects found for the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;