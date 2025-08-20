import React, { useState, useRef, useEffect } from 'react';

const Header = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // ✨ 1. 로그아웃 확인 창의 표시 여부를 관리할 state 추가
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleMenuClick = (action) => {
    if (onNavigate) {
      onNavigate(action);
    }
    setIsMenuOpen(false); 
  };

  // ✨ 2. 로그아웃 버튼 클릭 시 확인 창을 띄우는 함수
  const handleLogoutClick = () => {
    setIsMenuOpen(false); // 먼저 드롭다운 메뉴를 닫고
    setShowLogoutConfirm(true); // 확인 창을 띄웁니다.
  };

  // ✨ 3. 확인 창에서 '예'를 눌렀을 때 실행될 함수
  const handleConfirmLogout = () => {
    console.log("로그아웃이 실행되었습니다.");
    // 여기에 실제 로그아웃 로직을 구현합니다 (예: 토큰 삭제, 로그인 페이지로 리디렉션)
    setShowLogoutConfirm(false); // 확인 창 닫기
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo" onClick={() => onNavigate('jobs')} style={{ cursor: 'pointer' }}>
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

        <div className="user-menu" ref={menuRef}>
          <button className="profile-btn" onClick={toggleMenu}>
            <div className="profile-icon">
              <span>👤</span>
            </div>
            <span className="profile-name">마이페이지</span>
            <span className={`arrow ${isMenuOpen ? 'up' : 'down'}`}>▼</span>
          </button>

          {isMenuOpen && (
            <div className="dropdown-menu">
              <div className="menu-item" onClick={() => handleMenuClick('resume')}>
                <span className="menu-icon">📝</span>
                <span>자기소개서</span>
              </div>
              <div className="menu-item" onClick={() => handleMenuClick('saved-jobs')}>
                <span className="menu-icon">⭐</span>
                <span>저장한 공고</span>
              </div>
              <div className="menu-item" onClick={() => handleMenuClick('applications')}>
                <span className="menu-icon">📋</span>
                <span>지원 현황</span>
              </div>
              <div className="menu-divider"></div>
              <div className="menu-item" onClick={() => handleMenuClick('settings')}>
                <span className="menu-icon">⚙️</span>
                <span>설정</span>
              </div>
              {/* ✨ 4. 로그아웃 메뉴의 onClick을 handleLogoutClick으로 변경 */}
              <div className="menu-item logout" onClick={handleLogoutClick}>
                <span className="menu-icon">🚪</span>
                <span>로그아웃</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ✨ 5. 로그아웃 확인 창(Modal) JSX 추가 */}
      {showLogoutConfirm && (
        <div className="confirm-overlay">
          <div className="confirm-modal">
            <h3>로그아웃</h3>
            <p>정말로 로그아웃 하시겠습니까?</p>
            <div className="modal-buttons">
              <button className="btn-no" onClick={() => setShowLogoutConfirm(false)}>아니요</button>
              <button className="btn-yes" onClick={handleConfirmLogout}>예</button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* 기존 스타일은 그대로 유지 */
        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }

        .user-menu {
          position: relative;
          margin-left: 20px;
        }

        .profile-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          padding: 8px 12px;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .profile-btn:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }

        .profile-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: #f0f0f0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
        }

        .profile-name {
          font-size: 14px;
          font-weight: 500;
          color: #333;
        }

        .arrow {
          font-size: 10px;
          color: #666;
          transition: transform 0.2s;
        }

        .arrow.up {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          right: 0;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          min-width: 180px;
          z-index: 1000;
          margin-top: 4px;
        }

        .menu-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .menu-item:hover {
          background-color: #f5f5f5;
        }

        .menu-item:first-child {
          border-radius: 8px 8px 0 0;
        }

        .menu-item:last-child {
          border-radius: 0 0 8px 8px;
        }

        .menu-item.logout {
          color: #e74c3c;
          font-size: 1.5rem;
        }

        .menu-item.logout:hover {
          background-color: #fef2f2;
        }

        .menu-icon {
          font-size: 16px;
          width: 20px;
          text-align: center;
        }

        .menu-divider {
          height: 1px;
          background-color: #e0e0e0;
          margin: 4px 0;
        }
        
        /* 로그아웃 확인 창 스타일 */
        .confirm-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 2000;
        }

        .confirm-modal {
          background-color: white;
          padding: 24px;
          border-radius: 8px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
          text-align: center;
          width: 320px;
        }
        
        .confirm-modal h3 {
          margin-top: 0;
          font-size: 1.25rem;
        }
        
        .confirm-modal p {
          margin: 8px 0 24px;
          color: #333;
          /* --- ✨ 변경된 부분 --- */
          font-size: 1.3rem; 
        }

        .modal-buttons {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .modal-buttons button {
          padding: 10px 24px;
          border: none;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.2s;
          font-size: 1.3rem;
        }

        .modal-buttons .btn-no {
          background-color: #e9ecef;
          color: #495057;
        }
        .modal-buttons .btn-no:hover {
          background-color: #ced4da;
        }

        .modal-buttons .btn-yes {
          background-color: #e74c3c;
          color: white;
        }
        .modal-buttons .btn-yes:hover {
          background-color: #c0392b;
        }
      `}</style>
    </header>
  );
};

export default Header;