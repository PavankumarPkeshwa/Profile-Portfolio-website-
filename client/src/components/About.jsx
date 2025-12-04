import React from 'react'
import { FaBrain, FaRobot, FaCode, FaServer } from 'react-icons/fa'
import './About.css'

const About = () => {
  const highlights = [
    {
      icon: <FaBrain />,
      title: 'GenAI Expert',
      description: 'Specialized in Generative AI technologies and LLM applications'
    },
    {
      icon: <FaRobot />,
      title: 'Agentic AI',
      description: 'Building intelligent autonomous systems and AI agents'
    },
    {
      icon: <FaCode />,
      title: 'Full Stack Dev',
      description: 'Proficient in React, Node.js, Express, and MongoDB'
    },
    {
      icon: <FaServer />,
      title: 'Backend Engineer',
      description: 'Expertise in scalable server architectures and APIs'
    }
  ]

  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h3 className="about-subtitle">
                <span className="gradient-text">GenAI Engineer</span> & Full Stack Developer
              </h3>
              <p className="about-description">
                I'm a passionate <strong>Generative AI Engineer</strong> currently working as a Software Developer
                trainee at <strong>Bosch Global Software Technologies (BGSW)</strong> in Hyderabad. 
              </p>
              <p className="about-description">
                My journey in technology combines cutting-edge AI with robust full-stack development. I specialize
                in building <strong>intelligent systems</strong> powered by GenAI, creating <strong>agentic AI solutions</strong>,
                and developing full-featured applications using modern technologies like React, Node.js, and MongoDB.
              </p>
              <p className="about-description">
                From AI-powered chatbots to news summarization platforms and habit tracking applications, I'm
                dedicated to creating solutions that make a real impact. My work bridges the gap between
                artificial intelligence and practical, user-friendly applications.
              </p>

              <div className="about-stats">
                <div className="stat">
                  <h4>4+</h4>
                  <p>Major Projects</p>
                </div>
                <div className="stat">
                  <h4>10+</h4>
                  <p>Technologies</p>
                </div>
                <div className="stat">
                  <h4>100%</h4>
                  <p>Dedication</p>
                </div>
              </div>
            </div>

            <div className="about-highlights">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon">{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
