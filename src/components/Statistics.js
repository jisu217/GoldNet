// 3. 현황 분석

import React, { useState } from 'react';

const Statistics = ({ jobs }) => {
  const [selectedChart, setSelectedChart] = useState('age');

  // 통계 데이터 계산
  const calculateAgeStats = () => {
    const ageGroups = {
      '50대': { jobs: 450, applicants: 1200, ratio: 2.7 },
      '60대': { jobs: 320, applicants: 1800, ratio: 5.6 },
      '70대': { jobs: 180, applicants: 800, ratio: 4.4 }
    };
    return ageGroups;
  };

  const calculateCategoryStats = () => {
    return {
      '물류/배송': { count: 340, percentage: 28 },
      '유통/판매': { count: 290, percentage: 24 },
      '서비스': { count: 250, percentage: 21 },
      '사무/관리': { count: 180, percentage: 15 },
      '기타': { count: 140, percentage: 12 }
    };
  };

  const calculateRegionStats = () => {
    return {
      '서울시': { jobs: 420, growth: '+12%' },
      '경기도': { jobs: 380, growth: '+8%' },
      '부산시': { jobs: 150, growth: '+5%' },
      '인천시': { jobs: 130, growth: '+15%' },
      '대구시': { jobs: 120, growth: '+3%' }
    };
  };

  const ageStats = calculateAgeStats();
  const categoryStats = calculateCategoryStats();
  const regionStats = calculateRegionStats();

  const renderAgeChart = () => (
    <div className="chart-container">
      <h4>📊 나이대별 일자리 현황</h4>
      <div className="age-stats-grid">
        {Object.entries(ageStats).map(([age, data]) => (
          <div key={age} className="age-stat-card">
            <div className="age-label">{age}</div>
            <div className="stat-numbers">
              <div className="jobs-count">
                <span className="number">{data.jobs}</span>
                <span className="label">일자리 수</span>
              </div>
              <div className="applicants-count">
                <span className="number">{data.applicants}</span>
                <span className="label">지원자 수</span>
              </div>
              <div className="ratio">
                <span className="number">{data.ratio}:1</span>
                <span className="label">경쟁률</span>
              </div>
            </div>
            <div className={`ratio-bar ${data.ratio > 4 ? 'high' : data.ratio > 3 ? 'medium' : 'low'}'`}>
              <div 
                className="ratio-fill" 
                style={{width: `${Math.min(data.ratio * 20, 100)}%`}}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="insights">
        <h5>💡 주요 인사이트</h5>
        <ul>
          <li>60대 연령층의 경쟁률이 가장 높음 (5.6:1)</li>
          <li>50대 대상 일자리가 가장 많지만 상대적으로 경쟁률은 낮음</li>
          <li>70대 이상도 상당한 취업 의지를 보임</li>
        </ul>
      </div>
    </div>
  );

  const renderCategoryChart = () => (
    <div className="chart-container">
      <h4>📈 직종별 일자리 분포</h4>
      <div className="category-chart">
        {Object.entries(categoryStats).map(([category, data]) => (
          <div key={category} className="category-bar">
            <div className="category-info">
              <span className="category-name">{category}</span>
              <span className="category-count">{data.count}개 ({data.percentage}%)</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{width: `${data.percentage}%`}}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="insights">
        <h5>💡 분석 결과</h5>
        <ul>
          <li>물류/배송 분야가 28%로 가장 높은 비중</li>
          <li>유통/판매(24%), 서비스(21%) 순으로 높음</li>
          <li>경력 활용 가능한 사무/관리직은 상대적으로 적음</li>
        </ul>
      </div>
    </div>
  );

  const renderRegionChart = () => (
    <div className="chart-container">
      <h4>🌍 지역별 일자리 현황</h4>
      <div className="region-stats">
        {Object.entries(regionStats).map(([region, data]) => (
          <div key={region} className="region-card">
            <div className="region-name">{region}</div>
            <div className="region-jobs">{data.jobs}개</div>
            <div className={`growth-rate ${data.growth.includes('+') ? 'positive' : 'negative'}`}>
              {data.growth}
            </div>
          </div>
        ))}
      </div>
      
      <div className="insights">
        <h5>💡 지역별 특징</h5>
        <ul>
          <li>수도권(서울, 경기, 인천)에 전체 일자리의 75% 집중</li>
          <li>인천시가 15%로 가장 높은 성장률 기록</li>
          <li>지방 도시도 꾸준한 증가 추세</li>
        </ul>
      </div>
    </div>
  );

  const renderSupplyDemandAnalysis = () => (
    <div className="chart-container">
      <h4>⚖️ 수요-공급 분석</h4>
      <div className="supply-demand-grid">
        <div className="analysis-card">
          <h5>🔍 현재 상황</h5>
          <ul>
            <li>전체 일자리 수: 1,247개</li>
            <li>구직자 수: 4,800명</li>
            <li>평균 경쟁률: 3.8:1</li>
          </ul>
        </div>
        
        <div className="analysis-card">
          <h5>📊 미스매치 분석</h5>
          <ul>
            <li>경력 무관 일자리: 65%</li>
            <li>전문 경력 필요: 35%</li>
            <li>기술 교육 필요: 40%</li>
          </ul>
        </div>
        
        <div className="analysis-card">
          <h5>🎯 정책 제언</h5>
          <ul>
            <li>60대 대상 일자리 확대 필요</li>
            <li>기존 경력 활용 프로그램 강화</li>
            <li>맞춤형 직업 훈련 확대</li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="statistics">
      <div className="stats-header">
        <h2>📊 노인 일자리 현황 분석</h2>
        <p>데이터 기반으로 현재 노인 일자리 시장을 분석합니다.</p>
      </div>

      <div className="chart-nav">
        <button
          className={`chart-tab ${selectedChart === 'age' ? 'active' : ''}`}
          onClick={() => setSelectedChart('age')}
        >
          나이대별 분석
        </button>
        <button
          className={`chart-tab ${selectedChart === 'category' ? 'active' : ''}`}
          onClick={() => setSelectedChart('category')}
        >
          직종별 분포
        </button>
        <button
          className={`chart-tab ${selectedChart === 'region' ? 'active' : ''}`}
          onClick={() => setSelectedChart('region')}
        >
          지역별 현황
        </button>
        <button
          className={`chart-tab ${selectedChart === 'analysis' ? 'active' : ''}`}
          onClick={() => setSelectedChart('analysis')}
        >
          수급 분석
        </button>
      </div>

      <div className="chart-content">
        {selectedChart === 'age' && renderAgeChart()}
        {selectedChart === 'category' && renderCategoryChart()}
        {selectedChart === 'region' && renderRegionChart()}
        {selectedChart === 'analysis' && renderSupplyDemandAnalysis()}
      </div>
    </div>
  );
};

export default Statistics;