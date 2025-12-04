import express from 'express'

const router = express.Router()

// Sample projects data
const projects = [
  {
    id: 1,
    title: 'Personal Portfolio',
    category: 'fullstack',
    description: 'A modern, responsive portfolio website built with React and Node.js showcasing my work and skills.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/PavankumarPkeshwa',
    demo: '#',
    featured: true
  },
  {
    id: 2,
    title: 'GenAI News Platform',
    category: 'genai',
    description: 'An agentic AI-based news platform that intelligently summarizes and curates news articles using advanced LLMs.',
    technologies: ['Python', 'LangChain', 'OpenAI', 'React'],
    github: 'https://github.com/PavankumarPkeshwa',
    demo: '#',
    featured: true
  },
  {
    id: 3,
    title: 'AI Chatbot',
    category: 'genai',
    description: 'Intelligent conversational AI chatbot powered by GenAI with context-aware responses and natural language understanding.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'React'],
    github: 'https://github.com/PavankumarPkeshwa',
    demo: '#',
    featured: true
  },
  {
    id: 4,
    title: 'Habit Tracker',
    category: 'fullstack',
    description: 'Full-stack habit tracking application with analytics and progress visualization using MERN stack.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/PavankumarPkeshwa',
    demo: '#',
    featured: true
  }
]

// GET /api/projects - Get all projects
router.get('/', (req, res) => {
  try {
    const { category, featured } = req.query
    
    let filteredProjects = projects

    if (category && category !== 'all') {
      filteredProjects = filteredProjects.filter(p => p.category === category)
    }

    if (featured === 'true') {
      filteredProjects = filteredProjects.filter(p => p.featured)
    }

    res.json({
      success: true,
      count: filteredProjects.length,
      projects: filteredProjects
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// GET /api/projects/:id - Get single project
router.get('/:id', (req, res) => {
  try {
    const project = projects.find(p => p.id === parseInt(req.params.id))
    
    if (!project) {
      return res.status(404).json({ error: 'Project not found' })
    }

    res.json({
      success: true,
      project
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router
