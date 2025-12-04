import React, { useState } from 'react'
import { FaGithub, FaExternalLinkAlt, FaBrain, FaNewspaper, FaComments, FaCalendarCheck } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio',
      category: 'fullstack',
      description: 'A modern, responsive portfolio website built with React and Node.js showcasing my work and skills.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      image: '🎨',
      github: '#',
      demo: '#',
      icon: <FaBrain />
    },
    {
      id: 2,
      title: 'GenAI News Platform',
      category: 'genai',
      description: 'An agentic AI-based news platform that intelligently summarizes and curates news articles using advanced LLMs.',
      technologies: ['Python', 'LangChain', 'OpenAI', 'React'],
      image: '📰',
      github: '#',
      demo: '#',
      icon: <FaNewspaper />
    },
    {
      id: 3,
      title: 'AI Chatbot',
      category: 'genai',
      description: 'Intelligent conversational AI chatbot powered by GenAI with context-aware responses and natural language understanding.',
      technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      image: '🤖',
      github: '#',
      demo: '#',
      icon: <FaComments />
    },
    {
      id: 4,
      title: 'Habit Tracker',
      category: 'fullstack',
      description: 'Full-stack habit tracking application with analytics and progress visualization using MERN stack.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: '📊',
      github: '#',
      demo: '#',
      icon: <FaCalendarCheck />
    }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'genai' ? 'active' : ''}`}
            onClick={() => setFilter('genai')}
          >
            GenAI Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            Full Stack
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <div className="project-emoji">{project.image}</div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} className="project-link" aria-label="GitHub">
                      <FaGithub />
                    </a>
                    <a href={project.demo} className="project-link" aria-label="Live Demo">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <div className="project-icon">{project.icon}</div>
                  <span className={`project-badge ${project.category}`}>
                    {project.category === 'genai' ? 'GenAI' : 'Full Stack'}
                  </span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
