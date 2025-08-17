import React from 'react';
import './Applications.css';

const Applications = () => {
  // 지원 현황 예시 데이터
  const applicationList = [
    { id: 1, company: "쿠팡 풀필먼트 서비스", position: "물류창고보조 시니어", date: "2023-10-25", status: "서류 검토 중" },
    { id: 2, company: "이마트", position: "물류센터 스태프", date: "2023-10-24", status: "최종 합격" },
    { id: 3, company: "마켓컬리", position: "배송 기사", date: "2023-10-21", status: "불합격" },
    { id: 4, company: "오아시스", position: "신입사원 물량/재료/배송", date: "2023-10-20", status: "지원서 접수" },
  ];

  const getStatusClass = (status) => {
    if (status.includes('합격')) return 'status-pass';
    if (status.includes('불합격')) return 'status-fail';
    if (status.includes('검토')) return 'status-pending';
    return 'status-submitted';
  };

  return (
    <div className="applications-container">
      <h2>지원 현황</h2>
      <p className="page-description">지원한 공고의 진행 상태를 한눈에 파악할 수 있습니다.</p>

      <div className="table-wrapper">
        <table className="application-table">
          <thead>
            <tr>
              <th>지원 날짜</th>
              <th>회사명</th>
              <th>채용 공고</th>
              <th>진행 상태</th>
              <th>액션</th>
            </tr>
          </thead>
          <tbody>
            {applicationList.map(app => (
              <tr key={app.id}>
                <td>{app.date}</td>
                <td>{app.company}</td>
                <td>{app.position}</td>
                <td>
                  <span className={`status-badge ${getStatusClass(app.status)}`}>
                    {app.status}
                  </span>
                </td>
                <td>
                  <button className="cancel-btn">지원 취소</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Applications;