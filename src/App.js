import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import JobCard from './components/JobCard';
import Statistics from './components/Statistics';
import AIRecommendation from './components/AIRecommendation';
import JobDetail from './components/JobDetail';

// --- ✨ 1. 이 부분을 수정합니다 ---
// 기존에 있던 const Resume = ... , const SavedJobs = ... 코드를 모두 삭제하고
// 아래 import 문으로 교체합니다.
import Resume from './components/mypage/Resume';
import SavedJobs from './components/mypage/SavedJobs';
import Applications from './components/mypage/Applications';
// --- 여기까지 수정 ---

function App() {
  // 'jobs'가 기본 탭이 되도록 설정합니다.
  const [currentTab, setCurrentTab] = useState('jobs');
  
  const [selectedJob, setSelectedJob] = useState(null);

  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: "쿠팡 풀필먼트 서비스",
      position: "물류창고보조 시니어 (안전관리)",
      salary: "월급 3,662,000원",
      location: "경기도",
      ageGroup: "50대",
      experience: "경력무관",
      category: "물류/배송",
      title: "물류창고보조 시니어(안전관리)",
      brand: "쿠팡 풀필먼트 서비스",
      workDays: "주 5일 (월~금)",
      workHours: "09:00 - 18:00",
      education: "고졸 이상",
      address: "경기도 김포시 물류단지로 123",
      description: "물류창고에서 안전관리 업무를 담당하실 시니어 분을 모집합니다. 풍부한 경험을 바탕으로 안전한 작업환경 조성에 기여해주세요.",
      benefits: [
        "4대보험 완비",
        "퇴직금 지급",
        "연차 및 각종 휴가",
        "교통비 지원"
      ]
    },
    // ... (나머지 jobs 데이터는 그대로 유지)
    {
      id: 2,
      company: "오아시스",
      position: "오아시스 신입사원 물량/재료/배송/운반",
      salary: "월급 5,000,000원",
      location: "서울시",
      ageGroup: "60대",
      experience: "신입",
      category: "운송/배송",
      title: "오아시스 신입사원 물량/재료/배송/운반",
      brand: "오아시스",
      workDays: "주 6일 (월~토)",
      workHours: "08:00 - 17:00",
      education: "학력무관",
      address: "서울특별시 강서구 공항대로 456",
      description: "물량 관리 및 배송 업무를 담당하실 신입 직원을 모집합니다.",
      benefits: [
        "4대보험 완비",
        "중식 제공",
        "유니폼 지급",
        "성과급 지급"
      ]
    },
    {
      id: 3,
      company: "이마트",
      position: "이마트 물류센터 스태프 모집",
      salary: "시급 11,200원",
      location: "인천시",
      ageGroup: "50대",
      experience: "경력무관",
      category: "유통/판매",
      title: "이마트 물류센터 스태프 모집",
      brand: "이마트",
      workDays: "주 5일 (월~금)",
      workHours: "09:00 - 18:00",
      education: "학력무관",
      address: "인천광역시 서구 물류단지로 789",
      description: "이마트 물류센터에서 상품 정리 및 포장 업무를 담당하실 분을 모집합니다.",
      benefits: [
        "주휴수당 지급",
        "교통비 지원",
        "직원할인 혜택"
      ]
    },
    {
      id: 4,
      company: "이마트",
      position: "이마트 물류센터 스태프 모집",
      salary: "시급 11,200원",
      location: "인천시",
      ageGroup: "50대",
      experience: "경력무관",
      category: "유통/판매",
      title: "이마트 물류센터 스태프 모집",
      brand: "이마트",
      workDays: "주 5일",
      workHours: "09:00 - 18:00",
      education: "학력무관",
      address: "인천광역시 서구 물류단지로 789",
      description: "물류센터 업무",
      benefits: ["교통비 지원"]
    },
    {
      id: 5,
      company: "이마트",
      position: "이마트 물류센터 스태프 모집",
      salary: "시급 11,200원",
      location: "인천시",
      ageGroup: "50대",
      experience: "경력무관",
      category: "유통/판매",
      title: "이마트 물류센터 스태프 모집",
      brand: "이마트",
      workDays: "주 5일",
      workHours: "09:00 - 18:00",
      education: "학력무관",
      address: "인천광역시 서구 물류단지로 789",
      description: "물류센터 업무",
      benefits: ["교통비 지원"]
    },
    {
      id: 6,
      company: "이마트",
      position: "이마트 물류센터 스태프 모집",
      salary: "시급 11,200원",
      location: "인천시",
      ageGroup: "50대",
      experience: "경력무관",
      category: "유통/판매",
      title: "이마트 물류센터 스태프 모집",
      brand: "이마트",
      workDays: "주 5일",
      workHours: "09:00 - 18:00",
      education: "학력무관",
      address: "인천광역시 서구 물류단지로 789",
      description: "물류센터 업무",
      benefits: ["교통비 지원"]
    },
    {
      id: 7,
      company: "이마트",
      position: "이마트 물류센터 스태프 모집",
      salary: "시급 11,200원",
      location: "인천시",
      ageGroup: "50대",
      experience: "경력무관",
      category: "유통/판매",
      title: "이마트 물류센터 스태프 모집",
      brand: "이마트",
      workDays: "주 5일",
      workHours: "09:00 - 18:00",
      education: "학력무관",
      address: "인천광역시 서구 물류단지로 789",
      description: "물류센터 업무",
      benefits: ["교통비 지원"]
    },
    {
      id: 8,
      company: "이마트",
      position: "이마트 물류센터 스태프 모집",
      salary: "시급 11,200원",
      location: "인천시",
      ageGroup: "50대",
      experience: "경력무관",
      category: "유통/판매",
      title: "이마트 물류센터 스태프 모집",
      brand: "이마트",
      workDays: "주 5일",
      workHours: "09:00 - 18:00",
      education: "학력무관",
      address: "인천광역시 서구 물류단지로 789",
      description: "물류센터 업무",
      benefits: ["교통비 지원"]
    },
    {
      id: 9,
      company: "이마트",
      position: "이마트 물류센터 스태프 모집",
      salary: "시급 11,200원",
      location: "인천시",
      ageGroup: "50대",
      experience: "경력무관",
      category: "유통/판매",
      title: "이마트 물류센터 스태프 모집",
      brand: "이마트",
      workDays: "주 5일",
      workHours: "09:00 - 18:00",
      education: "학력무관",
      address: "인천광역시 서구 물류단지로 789",
      description: "물류센터 업무",
      benefits: ["교통비 지원"]
    }
  ]);
  
  const [userProfile, setUserProfile] = useState({
    age: '',
    previousJob: '',
    skills: [],
    preferredLocation: '',
    preferredSalary: ''
  });

  const handleApplyClick = (job) => {
    setSelectedJob(job);
  };

  const handleCloseJobDetail = () => {
    setSelectedJob(null);
  };

  // --- ✨ 2. 이 부분은 수정할 필요 없습니다 ---
  // 이제 외부에서 불러온 컴포넌트들을 정확히 렌더링할 것입니다.
  const renderContent = () => {
    switch(currentTab) {
      case 'jobs':
        return (
          <div className="jobs-section">
            <SearchFilter jobs={jobs} setJobs={setJobs} />
            <div className="job-results">
              <h3>전체 {jobs.length}개의 일자리</h3>
              <div className="job-grid">
                {jobs.map(job => (
                  <JobCard 
                    key={job.id} 
                    job={job} 
                    onApplyClick={handleApplyClick}
                  />
                ))}
              </div>
            </div>
          </div>
        );
      
      case 'ai-recommend':
        return (
          <AIRecommendation 
            userProfile={userProfile} 
            setUserProfile={setUserProfile}
            jobs={jobs}
          />
        );
      
      case 'statistics':
        return <Statistics jobs={jobs} />;
      
      case 'resume':
        return <Resume />; // 이 <Resume />는 이제 mypage/Resume.js를 가리킵니다.
      
      case 'saved-jobs':
        return <SavedJobs />;

      case 'applications':
        return <Applications />;

      case 'training':
        return (
          <div className="training-section">
            <h2>맞춤형 훈련 프로그램</h2>
            <p>기존 경력을 활용한 재취업 지원 훈련과 신규 직무 적응 교육을 제공합니다.</p>
          </div>
        );
      
      default:
        return (
            <div className="jobs-section">
            <SearchFilter jobs={jobs} setJobs={setJobs} />
            <div className="job-results">
              <h3>전체 {jobs.length}개의 일자리</h3>
              <div className="job-grid">
                {jobs.map(job => (
                  <JobCard 
                    key={job.id} 
                    job={job} 
                    onApplyClick={handleApplyClick}
                  />
                ))}
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="App">
      <Header onNavigate={setCurrentTab} />

      <main className="main-content">
        {renderContent()}
      </main>

      {selectedJob && (
        <JobDetail 
          job={selectedJob} 
          onClose={handleCloseJobDetail}
        />
      )}
    </div>
  );
}

export default App;