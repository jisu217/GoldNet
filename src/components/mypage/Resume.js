// 마이페이지 - 자기소개서

import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  const [profileData, setProfileData] = useState({
    name: '김골드',
    age: '62세',
    address: '서울시 강남구 테헤란로 123',
    phone: '010-1234-5678',
    email: 'goldnet@example.com',
    education: '골드대학교 졸업',
    experience: 'OO물류센터에서 10년 근무',
    preferredConditions: '주 5일, 오전 근무 선호, 월 300만원 이상 희망',
    introduction: '성실하고 책임감이 강합니다. 맡은 바 임무를 완수하기 위해 항상 최선을 다합니다. 동료들과의 협업에도 능숙하며 긍정적인 분위기를 만드는 데 기여합니다.',
    skills: '지게차 운전, 재고 관리 시스템 사용',
    strengths: '꼼꼼함, 성실함, 강한 체력',
    mbti: 'ISTJ',
    certifications: '지게차운전기능사, 1종보통운전면허',
    portfolio: 'https://my-portfolio.com',
    preferential: '국가유공자 자녀',
    receiveOffers: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSave = () => {
    console.log("저장될 데이터:", profileData);
    alert("이력서가 저장되었습니다!");
  };

  return (
    <div className="resume-editor-container">
      {/* 1. 사용자 기본 정보 섹션 */}
      <header className="profile-header">
        <div className="profile-picture">
          <span>👤</span>
        </div>
        <div className="profile-info">
          <h2>{profileData.name} ({profileData.age})</h2>
          <p>{profileData.address}</p>
          <p>{profileData.phone} | {profileData.email}</p>
        </div>
        <div className="profile-actions">
          <button className="edit-profile-btn">회원정보 수정</button>
        </div>
      </header>

      {/* 2. 이력서 상세 정보 섹션 */}
      <main className="resume-body">
        <section className="resume-section">
          <h3>기본 정보</h3>
          <div className="form-group">
            <label>학력</label>
            <input type="text" name="education" value={profileData.education} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>경력</label>
            <textarea name="experience" value={profileData.experience} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>희망 근무 조건</label>
            <input type="text" name="preferredConditions" value={profileData.preferredConditions} onChange={handleChange} />
          </div>
        </section>

        <section className="resume-section">
          <h3>자기소개</h3>
          <textarea name="introduction" value={profileData.introduction} onChange={handleChange} className="intro-textarea" />
        </section>

        <section className="resume-section">
          <h3>나의 강점</h3>
          <div className="form-grid">
            <div className="form-group">
              <label>스킬</label>
              <input type="text" name="skills" value={profileData.skills} onChange={handleChange} placeholder="예: OA 활용, 지게차 운전" />
            </div>
            <div className="form-group">
              <label>강점</label>
              <input type="text" name="strengths" value={profileData.strengths} onChange={handleChange} placeholder="예: 성실함, 책임감" />
            </div>
            <div className="form-group">
              <label>MBTI (선택)</label>
              <input type="text" name="mbti" value={profileData.mbti} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label>자격 / 능력 (선택)</label>
              <input type="text" name="certifications" value={profileData.certifications} onChange={handleChange} placeholder="예: 지게차운전기능사" />
            </div>
            <div className="form-group">
              <label>포트폴리오 (선택)</label>
              <input type="text" name="portfolio" value={profileData.portfolio} onChange={handleChange} placeholder="https://..." />
            </div>
            <div className="form-group">
              <label>취업 우대사항 (선택)</label>
              <input type="text" name="preferential" value={profileData.preferential} onChange={handleChange} placeholder="예: 국가유공자 자녀" />
            </div>
          </div>
        </section>
        
        {/* 3. 제안 받기 및 저장 버튼 */}
        <section className="resume-section offer-section">
          <div className="checkbox-group">
            <input 
              type="checkbox" 
              id="receiveOffers" 
              name="receiveOffers" 
              checked={profileData.receiveOffers}
              onChange={handleChange} 
            />
            <label htmlFor="receiveOffers">구인자로부터 알바 제의를 받겠습니다.</label>
          </div>
        </section>

        <div className="save-button-container">
          <button className="save-btn" onClick={handleSave}>이력서 저장</button>
        </div>
      </main>
    </div>
  );
};

export default Resume;