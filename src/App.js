import React, { useState } from 'react';
import './App.css';

// 컴포넌트들
import Header from './components/Header';
import SearchFilter from './components/SearchFilter';
import JobCard from './components/JobCard';
import Statistics from './components/Statistics';
import AIRecommendation from './components/AIRecommendation';

function App() {
  const [currentTab, setCurrentTab] = useState('jobs');
  const [jobs, setJobs] = useState([
    {
      id: 1,
      company: "쿠팡 풀필먼트 서비스",
      position: "물류창고보조 시니어(안전관리)",
      salary: "월급 3,662,000원",
      location: "경기도",
      ageGroup: "50대",
      experience: "경력무관",
      category: "물류/배송"
    },
    {
      id: 2,
      company: "오아시스",
      position: "오아시스 신입사원 물량 / 재료 / 배송 / 운반",
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
    },
    {
      id: 4,
      company: "이마트",
      position: "이마트 물류센터 스태프 모집",
      salary: "시급 11,200원",
      location: "인천시",
      ageGroup: "50대",
      experience: "경력무관",
      category: "유통/판매"
    },
    {
      id: 5,
      company: "이마트",
      position: "이마트 물류센터 스태프 모집",
      salary: "시급 11,200원",
      location: "인천시",
      ageGroup: "50대",
      experience: "경력무관",
      category: "유통/판매"
    },
    {
      id: 6,
      company: "이마트",
      position: "이마트 물류센터 스태프 모집",
      salary: "시급 11,200원",
      location: "인천시",
      ageGroup: "50대",
      experience: "경력무관",
      category: "유통/판매"
    },
    {
      id: 7,
      company: "이마트",
      position: "이마트 물류센터 스태프 모집",
      salary: "시급 11,200원",
      location: "인천시",
      ageGroup: "50대",
      experience: "경력무관",
      category: "유통/판매"
    },
    {
      id: 8,
      company: "이마트",
      position: "이마트 물류센터 스태프 모집",
      salary: "시급 11,200원",
      location: "인천시",
      ageGroup: "50대",
      experience: "경력무관",
      category: "유통/판매"
    },
    {
      id: 9,
      company: "이마트",
      position: "이마트 물류센터 스태프 모집",
      salary: "시급 11,200원",
      location: "인천시",
      ageGroup: "50대",
      experience: "경력무관",
      category: "유통/판매"
    }
  ]);

  const [userProfile, setUserProfile] = useState({
    age: '',
    previousJob: '',
    skills: [],
    preferredLocation: '',
    preferredSalary: ''
  });

  const navigationTabs = [
    { id: 'jobs', label: '통합 일자리 검색', icon: '🔍' },
    { id: 'ai-recommend', label: 'AI 맞춤 추천', icon: '🤖' },
    { id: 'statistics', label: '현황 분석', icon: '📊' },
    { id: 'training', label: '훈련 프로그램', icon: '📚' }
  ];

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
                  <JobCard key={job.id} job={job} />
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
      
      case 'training':
        return (
          <div className="training-section">
            <h2>맞춤형 훈련 프로그램</h2>
            <p>기존 경력을 활용한 재취업 지원 훈련과 신규 직무 적응 교육을 제공합니다.</p>
            {/* 훈련 프로그램 컨텐츠 */}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="App">
      <Header />
      
      {/* 네비게이션 탭 */}
      <nav className="main-navigation">
        {navigationTabs.map(tab => (
          <button
            key={tab.id}
            className={`nav-tab ${currentTab === tab.id ? 'active' : ''}`}
            onClick={() => setCurrentTab(tab.id)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.label}</span>
          </button>
        ))}
      </nav>

      {/* 메인 컨텐츠 */}
      <main className="main-content">
        {renderContent()}
      </main>

      {/* 푸터 */}
      <footer className="footer">
        <p>노인 일자리 현황 분석 및 정책 제언을 위한 데이터 기반 플랫폼</p>
      </footer>
    </div>
  );
}

export default App;