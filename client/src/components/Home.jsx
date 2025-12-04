import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaDownload } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import './Home.css'

const Home = () => {
  const [typedText, setTypedText] = useState('')
  const roles = ['GenAI Engineer', 'AI/ML Developer', 'Full Stack Developer', 'Agentic AI Specialist']
  const [roleIndex, setRoleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[roleIndex]
    const typingSpeed = isDeleting ? 50 : 100

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setTypedText(currentRole.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setTypedText(currentRole.substring(0, charIndex - 1))
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setRoleIndex((roleIndex + 1) % roles.length)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, roleIndex])

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/PavankumarPkeshwa', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/pavan-kumar-p-a6512217a/', label: 'LinkedIn' },
    { icon: <FaInstagram />, url: 'https://www.instagram.com/pavankumarp6787/', label: 'Instagram' },
    { icon: <FaFacebook />, url: 'https://www.facebook.com/pavan.kumarp.980/', label: 'Facebook' },
    { icon: <SiGmail />, url: 'mailto:your.email@gmail.com', label: 'Email' }
  ]

  return (
    <section className="home section" id="home">
      <div className="container home-container">
        <div className="home-content">
          <div className="home-text">
            <p className="greeting">👋 Hello, I'm</p>
            <h1 className="name">
              Pavan Kumar <span className="gradient-text">P</span>
            </h1>
            <h2 className="role">
              <span className="role-label">I'm a </span>
              <span className="typed-text">{typedText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="description">
              Building intelligent systems with <span className="highlight">Generative AI</span> and{' '}
              <span className="highlight">Agentic AI</span>. Passionate about creating innovative solutions
              that leverage cutting-edge AI technologies, from AI-powered chatbots to intelligent news
              platforms and full-stack applications.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary">
                <FaDownload /> Download CV
              </button>
              <button className="btn btn-secondary" onClick={() => {
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }}>
                Get In Touch
              </button>
            </div>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="home-visual">
          <div className="visual-wrapper">
            <div className="ai-circuit">
              <div className="node node-1"></div>
              <div className="node node-2"></div>
              <div className="node node-3"></div>
              <div className="node node-4"></div>
              <div className="connection connection-1"></div>
              <div className="connection connection-2"></div>
              <div className="connection connection-3"></div>
            </div>
            <div className="code-snippet">
              <pre>
                <code>
                  {`const ai = {
  passion: "GenAI",
  skills: ["AI/ML", "React", "Node.js"],
  mission: "Build intelligent solutions"
};`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  )
}

export default Home
