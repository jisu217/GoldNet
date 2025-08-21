/* AI 맞춤 추천 페이지

import React, { useState, useEffect } from 'react'; 

const AIRecommendation = ({ userProfile, setUserProfile, jobs }) => {
  const [step, setStep] = useState(1);
  const [recommendations, setRecommendations] = useState([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleProfileChange = (key, value) => {
    setUserProfile(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const addSkill = (skill) => {
    if (skill && !userProfile.skills.includes(skill)) {
      setUserProfile(prev => ({
        ...prev,
        skills: [...prev.skills, skill]
      }));
    }
  };

  const removeSkill = (skillToRemove) => {
    setUserProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const analyzeProfile = () => {
    setIsAnalyzing(true);
    
    // AI 분석 시뮬레이션
    setTimeout(() => {
      const mockRecommendations = [
        {
          job: jobs[0],
          matchScore: 92,
          reasons: ['물류 경험과 매우 적합', '연령대가 적절함', '근무 지역이 가까움'],
          skillGaps: []
        },
        {
          job: jobs[1],
          matchScore: 78,
          reasons: ['서비스업 경험 활용 가능', '의사소통 능력 중요'],
          skillGaps: ['기본 컴퓨터 활용']
        }
      ];
      
      setRecommendations(mockRecommendations);
      setIsAnalyzing(false);
      setStep(3);
    }, 2000);
  };

  const renderStep1 = () => (
    <div className="profile-input-step">
      <h3>🤖 AI 맞춤 일자리 추천</h3>
      <p>이전 경력과 희망 조건을 알려주시면, AI가 가장 적합한 일자리를 추천해드립니다.</p>
      
      <div className="input-group">
        <label>연령대</label>
        <select
          value={userProfile.age}
          onChange={(e) => handleProfileChange('age', e.target.value)}
        >
          <option value="">선택해주세요</option>
          <option value="50-55">50-55세</option>
          <option value="55-60">55-60세</option>
          <option value="60-65">60-65세</option>
          <option value="65-70">65-70세</option>
          <option value="70+">70세 이상</option>
        </select>
      </div>

      <div className="input-group">
        <label>이전 직업 (최근 또는 주된 직업)</label>
        <input
          type="text"
          placeholder="예: 사무직, 영업, 제조업, 서비스업 등"
          value={userProfile.previousJob}
          onChange={(e) => handleProfileChange('previousJob', e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>보유 기술/역량</label>
        <div className="skills-input">
          <input
            type="text"
            placeholder="기술이나 역량을 입력하고 엔터를 누르세요"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                addSkill(e.target.value);
                e.target.value = '';
              }
            }}
          />
        </div>
        <div className="skills-list">
          {userProfile.skills.map(skill => (
            <span key={skill} className="skill-tag">
              {skill}
              <button onClick={() => removeSkill(skill)}>×</button>
            </span>
          ))}
        </div>
      </div>

      <button 
        className="btn-next-step"
        onClick={() => setStep(2)}
        disabled={!userProfile.age || !userProfile.previousJob}
      >
        다음 단계
      </button>
    </div>
  );

  const renderStep2 = () => (
    <div className="preference-input-step">
      <h3>희망 근무 조건</h3>
      
      <div className="input-group">
        <label>희망 근무 지역</label>
        <select
          value={userProfile.preferredLocation}
          onChange={(e) => handleProfileChange('preferredLocation', e.target.value)}
        >
          <option value="">상관없음</option>
          <option value="서울시">서울시</option>
          <option value="경기도">경기도</option>
          <option value="인천시">인천시</option>
          <option value="부산시">부산시</option>
        </select>
      </div>

      <div className="input-group">
        <label>희망 급여</label>
        <select
          value={userProfile.preferredSalary}
          onChange={(e) => handleProfileChange('preferredSalary', e.target.value)}
        >
          <option value="">상관없음</option>
          <option value="200만원 이하">200만원 이하</option>
          <option value="200-300만원">200-300만원</option>
          <option value="300만원 이상">300만원 이상</option>
        </select>
      </div>

      <div className="step-buttons">
        <button className="btn-prev-step" onClick={() => setStep(1)}>
          이전
        </button>
        <button className="btn-analyze" onClick={analyzeProfile}>
          AI 분석 시작
        </button>
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="recommendations-result">
      <h3>🎯 맞춤 일자리 추천 결과</h3>
      
      {recommendations.map((rec, index) => (
        <div key={index} className="recommendation-card">
          <div className="match-score">
            <div className="score-circle">
              <span className="score-number">{rec.matchScore}%</span>
              <span className="score-label">매칭률</span>
            </div>
          </div>
          
          <div className="job-info">
            <h4>{rec.job.company}</h4>
            <p>{rec.job.position}</p>
            <div className="job-details-mini">
              <span>💰 {rec.job.salary}</span>
              <span>📍 {rec.job.location}</span>
            </div>
          </div>
          
          <div className="match-analysis">
            <div className="match-reasons">
              <h5>✅ 매칭 이유</h5>
              <ul>
                {rec.reasons.map((reason, i) => (
                  <li key={i}>{reason}</li>
                ))}
              </ul>
            </div>
            
            {rec.skillGaps.length > 0 && (
              <div className="skill-gaps">
                <h5>📚 추가 필요 역량</h5>
                <ul>
                  {rec.skillGaps.map((gap, i) => (
                    <li key={i}>{gap}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="recommendation-actions">
            <button className="btn-apply-recommended">지원하기</button>
            <button className="btn-training-info">관련 교육 보기</button>
          </div>
        </div>
      ))}
      
      <button className="btn-restart" onClick={() => setStep(1)}>
        새로 분석하기
      </button>
    </div>
  );

  const renderAnalyzing = () => (
    <div className="analyzing-screen">
      <div className="loading-animation">
        <div className="spinner"></div>
        <h3>AI가 맞춤 일자리를 분석중입니다...</h3>
        <p>경력과 조건을 바탕으로 최적의 일자리를 찾고 있어요</p>
      </div>
    </div>
  );

  if (isAnalyzing) return renderAnalyzing();

  return (
    <div className="ai-recommendation">
      <div className="step-indicator">
        <div className={`step ${step >= 1 ? 'active' : ''}`}>
          <span>1</span>
          <label>경력 입력</label>
        </div>
        <div className={`step ${step >= 2 ? 'active' : ''}`}>
          <span>2</span>
          <label>희망 조건</label>
        </div>
        <div className={`step ${step >= 3 ? 'active' : ''}`}>
          <span>3</span>
          <label>추천 결과</label>
        </div>
      </div>

      <div className="step-content">
        {step === 1 && renderStep1()}
        {step === 2 && renderStep2()}
        {step === 3 && renderStep3()}
      </div>
    </div>
  );
};

export default AIRecommendation; */