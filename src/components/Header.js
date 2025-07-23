// 웹사이트의 상단 메뉴 바(네비게이션 바)

import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>골드넷</h1>
          <span className="subtitle">노인 일자리 통합 플랫폼</span>
        </div>
        
        <div className="header-stats">
          <div className="stat-item">
            <span className="stat-number">1,247</span>
            <span className="stat-label">등록된 일자리</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">89%</span>
            <span className="stat-label">매칭 성공률</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15,832</span>
            <span className="stat-label">회원 수</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;