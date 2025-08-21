// 마이페이지 - 저장한 공고

import React from 'react';
import JobCard from '../JobCard';
import './SavedJobs.css';

const sampleSavedJobs = [
    {
      id: 2,
      company: "오아시스",
      position: "오아시스 신입사원 물량/재료/배송/운반",
      salary: "월급 5,000,000원",
      location: "서울시",
      ageGroup: "60대",
      experience: "신입",
      category: "운송/배송"
    },
    {
      id: 3,
      company: "이마트",
      position: "이마트 물류센터 스태프 모집",
      salary: "시급 11,200원",
      location: "인천시",
      ageGroup: "50대",
      experience: "경력무관",
      category: "유통/판매"
    }
];

const SavedJobs = () => {
  return (
    <div className="saved-jobs-container">
      <h2>저장한 공고 ({sampleSavedJobs.length}개)</h2>
      <p className="page-description"></p>

      {sampleSavedJobs.length > 0 ? (
        <div className="job-grid">
          {sampleSavedJobs.map(job => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <div className="empty-message">
          <p>저장된 공고가 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default SavedJobs;