import React from 'react';
import { Github, ExternalLink, AlertCircle } from 'lucide-react';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const { title, shortDesc, image, tags, githubUrl, demoUrl } = project;

  return (
    <article className="project-card glass-card">
      {/* Thumbnail image with overlay badge */}
      <div className="project-image-wrapper">
        <img src={image} alt={`Screenshot thumbnail dự án ${title}`} className="project-image" loading="lazy" />
        <div className="image-overlay"></div>
      </div>

      {/* Card Body */}
      <div className="project-card-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{shortDesc}</p>

        {/* Tech Stack Tags */}
        <div className="project-tags">
          {tags.map((tag, idx) => (
            <span key={idx} className="badge">
              {tag}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="project-actions">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              aria-label={`Xem mã nguồn GitHub của ${title}`}
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          )}

          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              aria-label={`Xem bản demo trực tuyến của ${title}`}
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          ) : (
            <div className="disabled-demo-wrapper">
              <button
                disabled
                className="btn btn-secondary btn-sm disabled-btn"
                aria-disabled="true"
              >
                <AlertCircle size={16} />
                <span>Chưa triển khai</span>
              </button>
              <span className="tooltip-text">Dự án đang trong giai đoạn phát triển Demo</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
