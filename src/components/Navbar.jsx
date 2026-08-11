import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon, Menu, X, Code, Briefcase, User, Wrench, Mail, Home } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Trang Chủ', icon: <Home size={18} /> },
    { path: '/resume', label: 'Hồ Sơ CV', icon: <Briefcase size={18} /> },
    { path: '/skills', label: 'Kỹ Năng', icon: <Wrench size={18} /> },
    { path: '/projects', label: 'Dự Án', icon: <Code size={18} /> },
    { path: '/contact', label: 'Liên Hệ', icon: <Mail size={18} /> }
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Handle sticky header scroll background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard trap for ESC key on mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <NavLink to="/" className="navbar-logo" aria-label="Alex Nguyễn Portfolio Trang Chủ">
          <span className="logo-icon">NQH</span>
          <span className="logo-text"><span className="text-gradient">.Dev</span></span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="navbar-desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  end={item.path === '/'}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Controls: Theme Switch & Mobile Menu Button */}
        <div className="navbar-controls">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label={`Chuyển sang chế độ ${theme === 'dark' ? 'Sáng' : 'Tối'}`}
            title={`Chuyển sang chế độ ${theme === 'dark' ? 'Sáng' : 'Tối'}`}
          >
            {theme === 'dark' ? <Sun size={20} className="sun-icon" /> : <Moon size={20} className="moon-icon" />}
          </button>

          <button
            onClick={toggleMobileMenu}
            className="mobile-menu-btn"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMobileMenuOpen ? "Đóng menu điều hướng" : "Mở menu điều hướng"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-navigation"
        className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-drawer-content">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  end={item.path === '/'}
                >
                  <span className="mobile-nav-icon">{item.icon}</span>
                  <span>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mobile-drawer-footer">
            <p className="mobile-footer-text">Frontend Developer Portfolio</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
