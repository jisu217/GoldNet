// 채용 공고 상세 정보 모달 UI 컴포넌트

import React from 'react';
import MapComponent from './MapComponent'; // 주소 기반 지도 컴포넌트
import '../styles/jobDetail.css'; // CSS 스타일링 파일 불러오기

// JobDetail 컴포넌트 정의, props로 job 데이터와 닫기 이벤트 전달
const JobDetail = ({ job, onClose }) => {
  if (!job) return null; // job이 없으면 아무것도 렌더링하지 않음 (모달 안 띄움)

  return (
    // 모달 오버레이: 바깥 회색 배경 클릭 시 닫힘
    <div className="job-detail-overlay" onClick={onClose}>
      {/* 모달 내부 클릭 시 닫히지 않도록 이벤트 전파 방지 */}
      <div className="job-detail-container" onClick={(e) => e.stopPropagation()}>
        
        {/* 헤더 영역 */}
        <div className="job-detail-header">
          <h2>{job.title}</h2> {/* 공고 제목 */}
          <button className="close-btn" onClick={onClose}>
            ✕ {/* 닫기 버튼 */}
          </button>
        </div>
        
        {/* 콘텐츠 영역 */}
        <div className="job-detail-content">
          
          {/* 1. 근무 조건 섹션 */}
          <section className="detail-section">
            <h3>근무 조건</h3>
            <div className="condition-grid">
              {/* 각 조건 항목 */}
              <div className="condition-item">
                <span className="label">급여:</span>
                <span className="value">{job.salary}</span>
              </div>
              <div className="condition-item">
                <span className="label">브랜드:</span>
                <span className="value">{job.brand}</span>
              </div>
              <div className="condition-item">
                <span className="label">업직종:</span>
                <span className="value">{job.category}</span>
              </div>
              <div className="condition-item">
                <span className="label">고용형태:</span>
                <span className="value">{job.employmentType}</span>
              </div>
              <div className="condition-item">
                <span className="label">근무요일:</span>
                <span className="value">{job.workDays}</span>
              </div>
              <div className="condition-item">
                <span className="label">근무기간:</span>
                <span className="value">{job.workPeriod}</span>
              </div>
              <div className="condition-item">
                <span className="label">근무시간:</span>
                <span className="value">{job.workHours}</span>
              </div>
            </div>
          </section>

          {/* 2. 모집 조건 섹션 */}
          <section className="detail-section">
            <h3>모집 조건</h3>
            <div className="condition-grid">
              <div className="condition-item">
                <span className="label">모집인원:</span>
                <span className="value">{job.recruitCount}</span>
              </div>
              <div className="condition-item">
                <span className="label">학력:</span>
                <span className="value">{job.education}</span>
              </div>
              <div className="condition-item">
                <span className="label">모집마감:</span>
                <span className="value">{job.deadline}</span>
              </div>
            </div>
          </section>

          {/* 3. 근무 지역 섹션 */}
          <section className="detail-section">
            <h3>근무 지역</h3>
            <div className="location-info">
              <p className="address">{job.address}</p> {/* 텍스트 주소 */}
              <div className="map-container">
                <MapComponent address={job.address} /> {/* 지도 컴포넌트 */}
              </div>
            </div>
          </section>

          {/* 4. 상세 요강 섹션 */}
          <section className="detail-section">
            <h3>상세 요강</h3>
            <div className="job-description">
              <p>{job.description}</p> {/* 상세 설명 */}

              {/* 자격요건 있을 경우 렌더링 */}
              {job.requirements && (
                <div className="requirements">
                  <h4>자격 요건</h4>
                  <ul>
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li> // 배열 순회하며 항목 렌더링
                    ))}
                  </ul>
                </div>
              )}

              {/* 복리혜택 있을 경우 렌더링 */}
              {job.benefits && (
                <div className="benefits">
                  <h4>복리 혜택</h4>
                  <ul>
                    {job.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        </div>

        {/* 푸터 버튼 영역 */}
        <div className="job-detail-footer">
          <button className="apply-btn">지원하기</button> {/* 지원 버튼 */}
          <button className="bookmark-btn">저장하기</button> {/* 북마크 버튼 */}
        </div>

      </div>
    </div>
  );
};

export default JobDetail; // 컴포넌트 외부로 내보내기