import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, User, Tag } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalInfo } from '../data/personalInfo';
import PageWrapper from '../components/PageWrapper';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form Field Validation Logic
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ và tên của bạn';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Vui lòng nhập địa chỉ email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ (Ví dụ: user@example.com)';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Vui lòng nhập tiêu đề thư';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Vui lòng nhập nội dung tin nhắn';
    } else if (formData.message.trim().length < 20) {
      newErrors.message = `Nội dung tối thiểu 20 ký tự (Hiện tại: ${formData.message.trim().length} ký tự)`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time error clearing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Mock Network Delay of 1.5 seconds
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // Fallback if canvas-confetti is not loaded
      }
    }, 1500);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <PageWrapper transitionType="fadeSlide">
      <div className="contact-page">
        <div className="container">
          {/* Header */}
          <div className="section-header">
            <p className="section-subtitle">Gửi Lời Nhắn</p>
            <h1 className="section-title">Liên Hệ & Hợp Tác</h1>
            <p className="section-desc">
              Bạn có câu hỏi, đề xuất dự án hoặc cơ hội ứng tuyển? Hãy điền vào form bên dưới hoặc liên hệ trực tiếp.
            </p>
          </div>

          <div className="contact-grid">
            {/* Direct Contact Info Sidebar */}
            <div className="contact-info-sidebar">
              <div className="glass-card contact-details-card">
                <h3 className="card-title">
                  <Mail size={20} className="card-icon" />
                  <span>Kênh Liên Lạc Trực Tiếp</span>
                </h3>

                <div className="contact-methods-list">
                  <a href={`mailto:${personalInfo.bio.email}`} className="method-item">
                    <div className="method-icon-box">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="method-label">Email cá nhân</span>
                      <span className="method-value">{personalInfo.bio.email}</span>
                    </div>
                  </a>

                  <a href={`tel:${personalInfo.bio.phone}`} className="method-item">
                    <div className="method-icon-box alt-1">
                      <Phone size={20} />
                    </div>
                    <div>
                      <span className="method-label">Số điện thoại / Zalo</span>
                      <span className="method-value">{personalInfo.bio.phone}</span>
                    </div>
                  </a>

                  <div className="method-item">
                    <div className="method-icon-box alt-2">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <span className="method-label">Địa điểm hiện tại</span>
                      <span className="method-value">{personalInfo.bio.address}</span>
                    </div>
                  </div>
                </div>

                <div className="sidebar-divider"></div>

                <h4 className="social-heading">Mạng Xã Hội Professional</h4>
                <div className="sidebar-socials">
                  <a href={personalInfo.bio.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                    GitHub Profile
                  </a>
                  <a href={personalInfo.bio.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="contact-form-wrapper">
              <div className="glass-card form-card">
                {isSuccess ? (
                  /* Success State Screen */
                  <motion.div
                    className="success-state-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="success-icon-box">
                      <CheckCircle2 size={56} />
                    </div>
                    <h2>Gửi Thư Thành Công!</h2>
                    <p>
                      Cảm ơn bạn <strong>{formData.name}</strong> đã liên hệ. Tôi đã nhận được phản hồi của bạn và sẽ phản hồi qua email <strong>{formData.email}</strong> trong thời gian sớm nhất!
                    </p>

                    <button onClick={handleReset} className="btn btn-primary">
                      Gửi Tin Nhắn Khác
                    </button>
                  </motion.div>
                ) : (
                  /* Controlled Form */
                  <form onSubmit={handleSubmit} noValidate className="contact-form">
                    <h3 className="form-title">Mẫu Đăng Ký Liên Hệ</h3>

                    {/* Name Input */}
                    <div className={`form-group ${errors.name ? 'has-error' : ''}`}>
                      <label htmlFor="name">
                        <User size={16} /> Họ và Tên <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Ví dụ: Nguyễn Văn A"
                        value={formData.name}
                        onChange={handleChange}
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                      />
                      {errors.name && (
                        <span id="name-error" className="error-message">
                          <AlertCircle size={14} /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email Input */}
                    <div className={`form-group ${errors.email ? 'has-error' : ''}`}>
                      <label htmlFor="email">
                        <Mail size={16} /> Địa Chỉ Email <span className="required-star">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="nguyenvana@gmail.com"
                        value={formData.email}
                        onChange={handleChange}
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                      />
                      {errors.email && (
                        <span id="email-error" className="error-message">
                          <AlertCircle size={14} /> {errors.email}
                        </span>
                      )}
                    </div>

                    {/* Subject Input */}
                    <div className={`form-group ${errors.subject ? 'has-error' : ''}`}>
                      <label htmlFor="subject">
                        <Tag size={16} /> Tiêu Đề <span className="required-star">*</span>
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Cơ hội tuyển dụng Frontend Intern / Trao đổi dự án"
                        value={formData.subject}
                        onChange={handleChange}
                        aria-invalid={!!errors.subject}
                        aria-describedby={errors.subject ? 'subject-error' : undefined}
                      />
                      {errors.subject && (
                        <span id="subject-error" className="error-message">
                          <AlertCircle size={14} /> {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message Input */}
                    <div className={`form-group ${errors.message ? 'has-error' : ''}`}>
                      <label htmlFor="message">
                        <MessageSquare size={16} /> Nội Dung Tin Nhắn <span className="required-star">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Xin chào Huy, công ty chúng tôi ấn tượng với hồ sơ của bạn và muốn mời bạn tham gia phỏng vấn..."
                        value={formData.message}
                        onChange={handleChange}
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                      ></textarea>

                      <div className="textarea-footer">
                        {errors.message ? (
                          <span id="message-error" className="error-message">
                            <AlertCircle size={14} /> {errors.message}
                          </span>
                        ) : (
                          <span className="char-counter">Tối thiểu 20 ký tự</span>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn btn-primary btn-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="spinner-icon" />
                          <span>Đang Gửi Tin Nhắn...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Gửi Tin Nhắn Ngay</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
