import React from 'react';
import MapComponent from './MapComponent';
import '../styles/jobDetail.css';

const JobDetail = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <div className="job-detail-overlay" onClick={onClose}>
      <div className="job-detail-container" onClick={(e) => e.stopPropagation()}>
        <div className="job-detail-header">
          <h2>{job.title}</h2>
          <button className="close-btn" onClick={onClose}>
            ✕
          </button>
        </div>
        
        <div className="job-detail-content">
          {/* 1. 근무 조건 */}
          <section className="detail-section">
            <h3>근무 조건</h3>
            <div className="condition-grid">
              <div className="condition-item">
                <span className="label">급여:</span>
                <span className="value">{job.salary}</span>
              </div>
              <div className="condition-item">
                <span className="label">업직종:</span>
                <span className="value">{job.category}</span>
              </div>
              <div className="condition-item">
                <span className="label">브랜드:</span>
                <span className="value">{job.brand}</span>
              </div>
              <div className="condition-item">
                <span className="label">고용형태:</span>
                <span className="value">{job.employmentType}</span>
              </div>
              <div className="condition-item">
                <span className="label">근무기간:</span>
                <span className="value">{job.workPeriod}</span>
              </div>
              <div className="condition-item">
                <span className="label">근무요일:</span>
                <span className="value">{job.workDays}</span>
              </div>
              <div className="condition-item">
                <span className="label">근무시간:</span>
                <span className="value">{job.workHours}</span>
              </div>
            </div>
          </section>

          {/* 2. 모집조건 */}
          <section className="detail-section">
            <h3>모집조건</h3>
            <div className="condition-grid">
              <div className="condition-item">
                <span className="label">모집마감:</span>
                <span className="value">{job.deadline}</span>
              </div>
              <div className="condition-item">
                <span className="label">학력:</span>
                <span className="value">{job.education}</span>
              </div>
              <div className="condition-item">
                <span className="label">모집인원:</span>
                <span className="value">{job.recruitCount}</span>
              </div>
            </div>
          </section>

          {/* 3. 근무지역 */}
          <section className="detail-section">
            <h3>근무지역</h3>
            <div className="location-info">
              <p className="address">{job.address}</p>
              <div className="map-container">
                <MapComponent address={job.address} />
              </div>
            </div>
          </section>

          {/* 4. 상세요강 */}
          <section className="detail-section">
            <h3>상세요강</h3>
            <div className="job-description">
              <p>{job.description}</p>
              {job.requirements && (
                <div className="requirements">
                  <h4>자격요건</h4>
                  <ul>
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              )}
              {job.benefits && (
                <div className="benefits">
                  <h4>복리혜택</h4>
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

        <div className="job-detail-footer">
          <button className="apply-btn">지원하기</button>
          <button className="bookmark-btn">관심등록</button>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;