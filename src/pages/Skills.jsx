import React from 'react';
import { motion } from 'framer-motion';
import {
  Wrench,
  Code2,
  FileCode,
  Layout,
  Terminal,
  Atom,
  Compass,
  Sparkles,
  Layers,
  Palette,
  GitBranch,
  Zap,
  Globe,
  Figma,
  Cloud,
  Brain,
  Languages,
  Check
} from 'lucide-react';
import { skillsData } from '../data/skillsData';
import PageWrapper from '../components/PageWrapper';
import './Skills.css';

// Icon Map for dynamic icon lookup
const iconMap = {
  Code2: <Code2 size={20} />,
  FileCode: <FileCode size={20} />,
  Layout: <Layout size={20} />,
  Terminal: <Terminal size={20} />,
  Atom: <Atom size={20} />,
  Compass: <Compass size={20} />,
  Sparkles: <Sparkles size={20} />,
  Layers: <Layers size={20} />,
  Palette: <Palette size={20} />,
  GitBranch: <GitBranch size={20} />,
  Zap: <Zap size={20} />,
  Globe: <Globe size={20} />,
  Figma: <Figma size={20} />,
  Cloud: <Cloud size={20} />
};

const Skills = () => {
  return (
    <PageWrapper transitionType="scaleFade">
      <div className="skills-page">
        <div className="container">
          {/* Header */}
          <div className="section-header">
            <p className="section-subtitle">Năng Lực Chuyên Môn</p>
            <h1 className="section-title">Kỹ Năng & Công Nghệ</h1>
            <p className="section-desc">
              Các kỹ năng kỹ thuật (Technical Skills), kỹ năng mềm (Soft Skills) và trình độ ngoại ngữ của tôi.
            </p>
          </div>

          {/* 1. TECHNICAL SKILLS SECTION */}
          <section className="tech-skills-section">
            <h2 className="skills-category-heading">
              <Wrench size={24} className="cat-icon" />
              <span>Technical Skills (Kỹ Năng Kỹ Thuật)</span>
            </h2>

            <div className="tech-skills-grid">
              {skillsData.technical.map((cat, cIdx) => (
                <div key={cIdx} className="glass-card skill-category-card">
                  <h3 className="category-title">{cat.category}</h3>

                  <div className="skills-list">
                    {cat.items.map((skill, sIdx) => (
                      <div key={sIdx} className="skill-item">
                        <div className="skill-info">
                          <span className="skill-name">
                            <span className="skill-icon">{iconMap[skill.icon] || <Code2 size={18} />}</span>
                            <span>{skill.name}</span>
                          </span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>

                        {/* Animated Progress Bar */}
                        <div className="progress-track">
                          <motion.div
                            className="progress-fill"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: 'easeOut', delay: sIdx * 0.1 }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2. SOFT SKILLS SECTION */}
          <section className="soft-skills-section">
            <h2 className="skills-category-heading">
              <Brain size={24} className="cat-icon alt" />
              <span>Soft Skills (Kỹ Năng Mềm)</span>
            </h2>

            <div className="soft-skills-grid">
              {skillsData.softSkills.map((soft, idx) => (
                <motion.div
                  key={idx}
                  className="glass-card soft-skill-card"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                >
                  <div className="soft-skill-header">
                    <div className="check-badge">
                      <Check size={16} />
                    </div>
                    <h4>{soft.title}</h4>
                  </div>
                  <p>{soft.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* 3. FOREIGN LANGUAGES SECTION */}
          <section className="languages-section">
            <h2 className="skills-category-heading">
              <Languages size={24} className="cat-icon accent" />
              <span>Ngoại Ngữ (Languages)</span>
            </h2>

            <div className="languages-grid">
              {skillsData.languages.map((lang, idx) => (
                <div key={idx} className="glass-card language-card">
                  <div className="lang-header">
                    <h3 className="lang-name">{lang.name}</h3>
                    <span className="badge lang-badge">{lang.proficiency}</span>
                  </div>
                  <p className="lang-detail">{lang.detail}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Skills;
