import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Eye, Code, Briefcase, Award, CheckCircle2, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { projectsData } from '../data/projectsData';
import PageWrapper from '../components/PageWrapper';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);

  // Try to download CV from public folder (place CV_Nguyen_Quoc_Huy.pdf in /public)
  const handleDownloadCV = async () => {
    const cvPath = '/CV_Nguyen_Quoc_Huy.pdf';
    try {
      const res = await fetch(cvPath, { method: 'HEAD' });
      if (res.ok) {
        const link = document.createElement('a');
        link.href = cvPath;
        link.setAttribute('download', 'CV_Nguyen_Quoc_Huy.pdf');
        document.body.appendChild(link);
        link.click();
        link.remove();
      } else {
        alert('Không tìm thấy tệp CV trên server. Vui lòng đặt file vào /public/ với tên CV_Nguyen_Quoc_Huy.pdf');
      }
    } catch (err) {
      console.error('Download CV error:', err);
      alert('Có lỗi khi tải CV. Vui lòng thử lại sau.');
    }
  };

  return (
    <PageWrapper transitionType="fadeSlide">
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-container">
          {/* Hero Left Content */}
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-badge">
              <Sparkles size={16} className="badge-sparkle" />
              <span>Sẵn sàng cho cơ hội Fresher</span>
            </div>

            <h1 className="hero-title">
              Xin chào, Tôi là <br />
              <span className="text-gradient">{personalInfo.fullName}</span>
            </h1>

            <h2 className="hero-subtitle">{personalInfo.title}</h2>

            <p className="hero-intro">{personalInfo.shortIntro}</p>

            {/* CTAs */}
            <div className="hero-actions">
              <Link to="/resume" className="btn btn-primary">
                <span>Xem Hồ Sơ Chi Tiết</span>
                <ArrowRight size={18} />
              </Link>

              <Link to="/projects" className="btn btn-secondary">
                <Eye size={18} />
                <span>Xem Dự Án</span>
              </Link>

              <button onClick={handleDownloadCV} className="btn btn-outline">
                <Download size={18} />
                <span>Tải CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="hero-socials">
              <span className="social-label">Kênh truyền thông:</span>
              <div className="social-icons">
                <a href={personalInfo.bio.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href={personalInfo.bio.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
                <a href={`mailto:${personalInfo.bio.email}`} aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Hero Right Avatar Image */}
          <motion.div
            className="hero-avatar-container"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="avatar-frame animate-float">
              <img
                src={personalInfo.avatarUrl}
                alt={`Ảnh đại diện của ${personalInfo.fullName}`}
                className="avatar-image"
              />
              <div className="avatar-glow"></div>

              {/* Floating Stat Badges */}
              <div className="stat-badge stat-badge-1 glass-card">
                <Code size={20} className="stat-icon" />
                <div>
                  <div className="stat-number">15+</div>
                  <div className="stat-text">Dự án & Component</div>
                </div>
              </div>

              <div className="stat-badge stat-badge-2 glass-card">
                <Award size={20} className="stat-icon alt" />
                <div>
                  <div className="stat-number">GPA 3.0</div>
                  <div className="stat-text">ĐHCNSG - STU</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK HIGHLIGHTS SECTION */}
      <section className="highlights-section">
        <div className="container">
          <div className="highlights-grid">
            <div className="highlight-card glass-card">
              <div className="highlight-icon-wrapper">
                <Code size={28} />
              </div>
              <h3>Frontend Core</h3>
              <p>Thành thạo React.js (Hooks, Context, Router v6), ES6+, HTML5/CSS3 và Tailwind CSS.</p>
            </div>

            <div className="highlight-card glass-card">
              <div className="highlight-icon-wrapper alt-1">
                <Briefcase size={28} />
              </div>
              <h3>Kinh Nghiệm Thực Tế</h3>
              <p>Đã trải qua 5+ tháng thực tập Frontend tại doanh nghiệp, tích hợp RESTful API và tối ưu Lighthouse.</p>
            </div>

            <div className="highlight-card glass-card">
              <div className="highlight-icon-wrapper alt-2">
                <CheckCircle2 size={28} />
              </div>
              <h3>Tối Ưu & Accessible</h3>
              <p>Chú trọng trải nghiệm người dùng, tương thích thiết bị di động và chuẩn Accessibility WCAG.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS PREVIEW */}
      <section className="home-projects-section">
        <div className="container">
          <div className="section-header">
            <p className="section-subtitle">Sản phẩm tiêu biểu</p>
            <h2 className="section-title">Dự Án Nổi Bật</h2>
            <p className="section-desc">
              Một số sản phẩm thực tế tôi đã thiết kế và phát triển bằng các công nghệ web tiên tiến.
            </p>
          </div>

          <div className="projects-grid">
            {featuredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          <div className="view-more-container">
            <Link to="/projects" className="btn btn-primary btn-lg">
              <span>Khám Phá Tất Cả Dự Án</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Home;
