import React from 'react';
import { NavLink } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-section">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <NavLink to="/" className="footer-logo">
              <span className="logo-icon">NQH</span>
              <span><span className="text-gradient">.Dev</span></span>
            </NavLink>
            <p className="footer-bio">
              {personalInfo.shortIntro}
            </p>
          </div>

          <div className="footer-links">
            <h4 className="footer-title">Điều Hướng</h4>
            <ul>
              <li><NavLink to="/">Trang Chủ</NavLink></li>
              <li><NavLink to="/resume">Hồ Sơ CV</NavLink></li>
              <li><NavLink to="/skills">Kỹ Năng</NavLink></li>
              <li><NavLink to="/projects">Dự Án</NavLink></li>
              <li><NavLink to="/contact">Liên Hệ</NavLink></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-title">Kết Nối</h4>
            <div className="social-links">
              <a href={personalInfo.bio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
                <Github size={20} />
              </a>
              <a href={personalInfo.bio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${personalInfo.bio.email}`} aria-label="Gửi Email">
                <Mail size={20} />
              </a>
              <a href={`tel:${personalInfo.bio.phone}`} aria-label="Gọi Điện">
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} {personalInfo.fullName}</p>
  
        </div>
      </div>
    </footer>
  );
};
export default Footer;
