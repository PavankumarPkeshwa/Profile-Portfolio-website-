import React from 'react'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo">
              <span className="logo-bracket">{'<'}</span>
              Pavan<span className="logo-accent">.</span>dev
              <span className="logo-bracket">{'/>'}</span>
            </h3>
            <p className="footer-description">
              Building intelligent solutions with GenAI and modern web technologies.
            </p>
            <div className="footer-social">
              <a href="https://github.com/PavankumarPkeshwa" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/pavan-kumar-p-a6512217a/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li>GenAI Development</li>
              <li>Full Stack Development</li>
              <li>AI Chatbots</li>
              <li>Web Applications</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            © {currentYear} Pavan Kumar P. Made with <FaHeart className="heart" /> using React & Node.js
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
