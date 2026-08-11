import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, MapPin, Mail, Phone, GraduationCap, Briefcase, HeartHandshake, Award, FileText, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import PageWrapper from '../components/PageWrapper';
import './Resume.css';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <PageWrapper transitionType="fadeSlide">
      <div className="resume-page">
        <div className="container">
          {/* Header */}
          <div className="section-header">
            <p className="section-subtitle">Hồ Sơ Năng Lực</p>
            <h1 className="section-title">Sơ Yếu Lý Lịch & Kinh Nghiệm</h1>
            <p className="section-desc">
              Tổng quan thông tin cá nhân, trình độ học vấn, kinh nghiệm làm việc và các hoạt động ngoại khóa.
            </p>
          </div>

          <div className="resume-grid">
            {/* Left Column: Personal Info & Career Objective */}
            <div className="resume-sidebar">
              {/* Personal Details Card */}
              <div className="glass-card info-card">
                <h3 className="card-title">
                  <User size={20} className="card-icon" />
                  <span>Thông Tin Cá Nhân</span>
                </h3>

                <ul className="info-list">
                  <li>
                    <span className="info-label"><User size={16} /> Họ và tên:</span>
                    <span className="info-value">{personalInfo.fullName}</span>
                  </li>
                  <li>
                    <span className="info-label"><Calendar size={16} /> Ngày sinh:</span>
                    <span className="info-value">{personalInfo.bio.dob}</span>
                  </li>
                  <li>
                    <span className="info-label"><User size={16} /> Giới tính:</span>
                    <span className="info-value">{personalInfo.bio.gender}</span>
                  </li>
                  <li>
                    <span className="info-label"><MapPin size={16} /> Địa chỉ:</span>
                    <span className="info-value">{personalInfo.bio.address}</span>
                  </li>
                  <li>
                    <span className="info-label"><Mail size={16} /> Email:</span>
                    <a href={`mailto:${personalInfo.bio.email}`} className="info-link">{personalInfo.bio.email}</a>
                  </li>
                  <li>
                    <span className="info-label"><Phone size={16} /> SĐT:</span>
                    <a href={`tel:${personalInfo.bio.phone}`} className="info-link">{personalInfo.bio.phone}</a>
                  </li>
                </ul>
              </div>

              {/* Objective Card */}
              <div className="glass-card objective-card">
                <h3 className="card-title">
                  <FileText size={20} className="card-icon alt" />
                  <span>Mục Tiêu Nghề Nghiệp</span>
                </h3>
                <p className="objective-text">{personalInfo.objective}</p>
              </div>
            </div>

            {/* Right Column: Timeline & Tabs */}
            <div className="resume-main-content">
              {/* Filter Tabs */}
              <div className="timeline-tabs">
                <button
                  className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveTab('all')}
                >
                  Tất Cả
                </button>
                <button
                  className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
                  onClick={() => setActiveTab('education')}
                >
                  <GraduationCap size={16} />
                  <span>Học Vấn</span>
                </button>
                <button
                  className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
                  onClick={() => setActiveTab('experience')}
                >
                  <Briefcase size={16} />
                  <span>Kinh Nghiệm</span>
                </button>
                <button
                  className={`tab-btn ${activeTab === 'activities' ? 'active' : ''}`}
                  onClick={() => setActiveTab('activities')}
                >
                  <HeartHandshake size={16} />
                  <span>Hoạt Động</span>
                </button>
              </div>

              {/* TIMELINE LIST */}
              <div className="timeline-container">
                {/* EDUCATION SECTION */}
                {(activeTab === 'all' || activeTab === 'education') && (
                  <div className="timeline-section">
                    <h3 className="timeline-category-title">
                      <GraduationCap size={22} className="cat-icon" />
                      <span>Học Vấn & Bằng Cấp</span>
                    </h3>

                    {personalInfo.education.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="timeline-item glass-card"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="timeline-header">
                          <div>
                            <h4 className="timeline-title">{item.school}</h4>
                            <p className="timeline-subtitle">{item.major}</p>
                          </div>
                          <span className="badge timeline-period">{item.period}</span>
                        </div>

                        <div className="gpa-tag">
                          <Award size={16} />
                          <span>GPA: {item.gpa}</span>
                        </div>

                        <ul className="timeline-bullets">
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx}>
                              <CheckCircle size={14} className="bullet-icon" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* WORK EXPERIENCE SECTION */}
                {(activeTab === 'all' || activeTab === 'experience') && (
                  <div className="timeline-section">
                    <h3 className="timeline-category-title">
                      <Briefcase size={22} className="cat-icon alt" />
                      <span>Kinh Nghiệm Làm Việc</span>
                    </h3>

                    {personalInfo.experience.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="timeline-item glass-card"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        <div className="timeline-header">
                          <div>
                            <h4 className="timeline-title">{item.position}</h4>
                            <p className="timeline-subtitle">{item.company}</p>
                          </div>
                          <span className="badge timeline-period">{item.period}</span>
                        </div>

                        <ul className="timeline-bullets">
                          {item.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx}>
                              <CheckCircle size={14} className="bullet-icon" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* ACTIVITIES / VOLUNTEER SECTION */}
                {/* {(activeTab === 'all' || activeTab === 'activities') && (
                  <div className="timeline-section">
                    <h3 className="timeline-category-title">
                      <HeartHandshake size={22} className="cat-icon accent" />
                      <span>Hoạt Động Ngoại Khóa & Tình Nguyện</span>
                    </h3>

                    {personalInfo.activities.map((item, idx) => (
                      <motion.div
                        key={idx}
                        className="timeline-item glass-card"
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: idx * 0.1 }}
                      >
                        <div className="timeline-header">
                          <div>
                            <h4 className="timeline-title">{item.role}</h4>
                            <p className="timeline-subtitle">{item.organization}</p>
                          </div>
                          <span className="badge timeline-period">{item.period}</span>
                        </div>

                        <ul className="timeline-bullets">
                          {item.responsibilities.map((resp, rIdx) => (
                            <li key={rIdx}>
                              <CheckCircle size={14} className="bullet-icon" />
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Resume;
