import React from 'react'
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress, SiPython, SiTensorflow,
  SiJavascript, SiTypescript, SiHtml5, SiCss3, SiGit, SiDocker,
  SiOpenaigym, SiPostgresql, SiRedis, SiFastapi
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      color: '#00d4ff',
      skills: [
        { name: 'Python', icon: <SiPython />, level: 90 },
        { name: 'TensorFlow', icon: <SiTensorflow />, level: 85 },
        { name: 'OpenAI APIs', icon: <SiOpenaigym />, level: 88 },
        { name: 'LangChain', icon: '🦜', level: 85 }
      ]
    },
    {
      title: 'Frontend Development',
      color: '#7c3aed',
      skills: [
        { name: 'React', icon: <SiReact />, level: 92 },
        { name: 'JavaScript', icon: <SiJavascript />, level: 90 },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85 },
        { name: 'HTML5', icon: <SiHtml5 />, level: 95 },
        { name: 'CSS3', icon: <SiCss3 />, level: 90 }
      ]
    },
    {
      title: 'Backend Development',
      color: '#10b981',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, level: 88 },
        { name: 'Express', icon: <SiExpress />, level: 90 },
        { name: 'MongoDB', icon: <SiMongodb />, level: 87 },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 82 },
        { name: 'FastAPI', icon: <SiFastapi />, level: 85 }
      ]
    },
    {
      title: 'Tools & DevOps',
      color: '#f59e0b',
      skills: [
        { name: 'Git', icon: <SiGit />, level: 90 },
        { name: 'Docker', icon: <SiDocker />, level: 80 },
        { name: 'Redis', icon: <SiRedis />, level: 75 }
      ]
    }
  ]

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title" style={{ color: category.color }}>
                {category.title}
              </h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ 
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${category.color}, ${category.color}dd)`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tools-section">
          <h3 className="tools-title">Additional Tools & Frameworks</h3>
          <div className="tools-grid">
            {['VS Code', 'Postman', 'Jupyter', 'Figma', 'GitHub', 'AWS', 'Vercel', 'Netlify'].map((tool, index) => (
              <div key={index} className="tool-badge">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
