import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import PageWrapper from '../components/PageWrapper';
import './NotFound.css';

const NotFound = () => {
  return (
    <PageWrapper transitionType="scaleFade">
      <div className="not-found-page">
        <div className="container">
          <div className="not-found-card glass-card">
            <div className="not-found-badge">
              <AlertTriangle size={48} />
            </div>
            <h1 className="not-found-code text-gradient">404</h1>
            <h2 className="not-found-title">Trang Không Tồn Tại</h2>
            <p className="not-found-desc">
              Rất tiếc, đường dẫn bạn đang truy cập không tồn tại hoặc đã bị di chuyển. Hãy quay về Trang chủ để tiếp tục khám phá nhé!
            </p>
            <Link to="/" className="btn btn-primary btn-lg">
              <Home size={20} />
              <span>Quay Về Trang Chủ</span>
            </Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default NotFound;
