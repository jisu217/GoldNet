// 일자리 검색 필터 영역

import React, { useState } from 'react';

const SearchFilter = ({ jobs, setJobs }) => {
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    ageGroup: '',
    category: '',
    experience: '',
    salaryRange: ''
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const applyFilters = () => {
    console.log('필터 적용:', filters);
  };

  const clearFilters = () => {
    setFilters({
      keyword: '',
      location: '',
      ageGroup: '',
      category: '',
      experience: '',
      salaryRange: ''
    });
  };

  return (
    <div className="search-filter">
      <div className="filter-section">
        <h3>🔍 일자리 검색 및 필터</h3>
        
        <div className="filter-grid">
          {/* 키워드 검색 */}
          <div className="filter-item">
            <label>키워드 검색</label>
            <input
              type="text"
              placeholder="직무명, 회사명 검색"
              value={filters.keyword}
              onChange={(e) => handleFilterChange('keyword', e.target.value)}
            />
          </div>
          
          {/* 지역 선택 */}
          <div className="filter-item">
            <label>근무 지역</label>
            <select
              value={filters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            >
              <option value="">전체 지역</option>
              <option value="서울시">서울시</option>
              <option value="경기도">경기도</option>
              <option value="인천시">인천시</option>
              <option value="부산시">부산시</option>
              <option value="대구시">대구시</option>
              <option value="광주시">광주시</option>
              <option value="대전시">대전시</option>
              <option value="울산시">울산시</option>
              <option value="세종시">세종시</option>
              <option value="강원도">강원도</option>
              <option value="충청북도">충청북도</option>
              <option value="충청남도">충청남도</option>
              <option value="전라북도">전라북도</option>
              <option value="전라남도">전라남도</option>
              <option value="경상북도">경상북도</option>
              <option value="경상남도">경상남도</option>
              <option value="제주도">제주도</option>
            </select>
          </div>

          {/* 직무 카테고리 */}
          <div className="filter-item">
            <label>업직종</label>
            <select
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              <option value="">전체 분야</option>
              <option value="물류/배송">물류/배송</option>
              <option value="운송/배송">운송/배송</option>
              <option value="유통/판매">유통/판매</option>
              <option value="사무/관리">사무/관리</option>
              <option value="서비스">서비스</option>
              <option value="청소/미화">청소/미화</option>
              <option value="경비/보안">경비/보안</option>
              <option value="시설관리">시설 관리</option>
              <option value="돌봄/요양">돌봄/요양</option>
              <option value="조리/급식">조리/급식</option>
              <option value="환경/재활용">환경/재활용</option>
              <option value="교육/강의">교육/강의</option>
              <option value="상담/안내">상담/안내</option>
              <option value="기타">기타</option>
            </select>
          </div>

          {/* 연령대 */}
          <div className="filter-item">
            <label>연령대</label>
            <select
              value={filters.ageGroup}
              onChange={(e) => handleFilterChange('ageGroup', e.target.value)}
            >
              <option value="">전체 연령</option>
              <option value="50~54세">50~54세</option>
              <option value="55~59세">55~59세</option>
              <option value="60~64세">60~64세</option>
              <option value="65~69세">65~69세</option>
              <option value="70~74세">70~74세</option>
              <option value="75~79세">75~79세</option>
              <option value="80세 이상">80세 이상</option>
            </select>
          </div>

          {/* 경력 조건 */}
          <div className="filter-item">
            <label>경력 조건</label>
            <select
              value={filters.experience}
              onChange={(e) => handleFilterChange('experience', e.target.value)}
            >
              <option value="">전체</option>
              <option value="신입">신입 가능 (경력 무관)</option>
              <option value="무관">경력 무관</option>
              <option value="경력1년이상">경력 1년 이상</option>
              <option value="경력3년이상">경력 3년 이상</option>
              <option value="경력5년이상">경력 5년 이상</option>
              <option value="관련경력">관련 경력 필수</option>
              <option value="우대">경력자 우대</option>
            </select>
          </div>

          {/* 급여 범위 */}
          <div className="filter-item">
            <label>급여 범위</label>
            <select
              value={filters.salaryRange}
              onChange={(e) => handleFilterChange('salaryRange', e.target.value)}
            >
              <option value="">전체</option>
              <option value="~100만원">100만원 이하</option>
              <option value="100-150만원">100~150만원</option>
              <option value="150-200만원">150~200만원</option>
              <option value="200-250만원">200~250만원</option>
              <option value="250-300만원">250~300만원</option>
              <option value="300-350만원">300~350만원</option>
              <option value="350-400만원">350~400만원</option>
              <option value="400만원 이상">400만원 이상</option>
            </select>
          </div>
        </div>

        <div className="filter-buttons">
          <button className="btn-apply-filter" onClick={applyFilters}>
            필터 적용
          </button>
          <button className="btn-clear-filter" onClick={clearFilters}>
            필터 초기화
          </button>
        </div>
      </div>

      {/* 인기 검색어 */}
      <div className="popular-keywords">
        <h4>🔥 인기 검색어</h4>
        <div className="keyword-tags">
          {['돌봄', '청소', '급식', '경비', '안내', '공공 근로', '시설 관리'].map(keyword => (
            <span
              key={keyword}
              className="keyword-tag"
              onClick={() => handleFilterChange('keyword', keyword)}
            >
              #{keyword}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchFilter;