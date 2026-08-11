import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, FolderCode, Layers } from 'lucide-react';
import { projectsData } from '../data/projectsData';
import PageWrapper from '../components/PageWrapper';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  // Extract all unique technology tags across projects
  const availableTags = useMemo(() => {
    const tags = new Set(['All']);
    projectsData.forEach(p => {
      p.tags.forEach(t => tags.add(t));
      if (p.category) tags.add(p.category);
    });
    return Array.from(tags);
  }, []);

  // Filter projects by search query and category tag
  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesTag =
        selectedTag === 'All' ||
        project.category === selectedTag ||
        project.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });
  }, [searchQuery, selectedTag]);

  return (
    <PageWrapper transitionType="scaleFade">
      <div className="projects-page">
        <div className="container">
          {/* Header */}
          <div className="section-header">
            <p className="section-subtitle">Hồ Sơ Sản Phẩm</p>
            <h1 className="section-title">Dự Án Đã Thực Hiện</h1>
            <p className="section-desc">
              Khám phá các sản phẩm web tôi đã trực tiếp phát triển, từ ứng dụng React tương tác đến giao diện thương mại điện tử.
            </p>
          </div>

          {/* Search & Tag Filter Bar */}
          <div className="filter-controls-container glass-card">
            {/* Search Input */}
            <div className="search-box">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Tìm kiếm dự án theo tên, mô tả hoặc công nghệ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
                aria-label="Tìm kiếm dự án"
              />
              {searchQuery && (
                <button
                  className="clear-search-btn"
                  onClick={() => setSearchQuery('')}
                  aria-label="Xóa từ khóa tìm kiếm"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Tags Pills Filter */}
            <div className="tags-filter-bar">
              <span className="filter-label">
                <Filter size={16} />
                <span>Lọc:</span>
              </span>
              <div className="tags-pills">
                {['All', 'React', 'Fullstack', 'UI/UX'].map(tag => (
                  <button
                    key={tag}
                    className={`tag-pill ${selectedTag === tag ? 'active' : ''}`}
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag === 'All' ? 'Tất cả' : tag}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count Banner */}
          <div className="results-count">
            <FolderCode size={18} />
            <span>Hiển thị <strong>{filteredProjects.length}</strong> / {projectsData.length} dự án</span>
          </div>

          {/* PROJECTS GRID */}
          {filteredProjects.length > 0 ? (
            <motion.div className="projects-list-grid" layout>
              <AnimatePresence>
                {filteredProjects.map(project => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Empty State */
            <div className="empty-projects-state glass-card">
              <Layers size={48} className="empty-icon" />
              <h3>Không tìm thấy dự án phù hợp</h3>
              <p>Rất tiếc, không có dự án nào khớp với từ khóa "{searchQuery}". Bạn vui lòng thử tìm từ khóa khác nhé.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTag('All');
                }}
                className="btn btn-primary"
              >
                Đặt lại bộ lọc
              </button>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
};

export default Projects;
