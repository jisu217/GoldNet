# GOLDNet_고령층을 위한 AI 기반 맞춤형 구직 플랫폼

<div align="center">
  <strong>65세 이상 인구 20% 시대, 디지털 격차를 해소하고 새로운 기회를 연결합니다.</strong>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white" />
  <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" />
</div>

<br>

> 본 프로젝트는 **한국오라클 Data Activism! 공공데이터로 도시문제 해결하기** 프로그램의 일환으로 진행되었습니다.

---

## 목차

1.  [**프로젝트 개요**](#1-프로젝트-개요)
2.  [**주요 기능**](#2-주요-기능)
3.  [**기술 스택**](#3-기술-스택)
4.  [**API 명세서**](#4-api-명세서)
5.  [**핵심 기술 및 문제 해결**](#5-핵심-기술-및-문제-해결)
6.  [**프로젝트 성과**](#6-프로젝트-성과)
7.  [**팀원 소개**](#7-팀원-소개)
8.  [**시스템 아키텍처**](#8-시스템-아키텍처)

---

## 1. 프로젝트 개요

### A. 배경 및 문제 정의
대한민국은 65세 이상 인구 비율이 20%를 넘어서는 **초고령 사회**에 진입했습니다. 경제 활동을 희망하는 고령층은 지속적으로 증가하고 있지만, 기존 구직 플랫폼들은 복잡한 UI와 작은 글씨 등 **디지털 접근성**이 낮아 고령층이 사용하기에 많은 어려움이 있습니다.

### B. 솔루션: GOLDNet
**GOLDNet**은 고령층의 눈높이에 맞춘 **직관적이고 접근성 높은 AI 구직 플랫폼**입니다. AI 기반 맞춤형 추천 시스템과 자동화된 채용 공고 수집 기능으로 디지털 격차를 해소하고, 고령층과 일자리를 효율적으로 연결하여 새로운 사회적 가치를 창출합니다.

### C. 핵심 가치
- **접근성 강화**: 큰 글씨와 단순한 메뉴 구성을 통해 누구나 쉽게 사용할 수 있는 UI/UX
- **AI 맞춤 추천**: 사용자의 이력서를 분석하여 개인에게 최적화된 일자리를 추천
- **데이터 자동화**: 웹 크롤링과 AI 파싱을 통해 최신 채용 정보를 실시간으로 수집 및 정제
- **사회적 가치 창출**: 고령층의 사회 참여를 확대하고 디지털 포용성 증진에 기여

### D. 개발 기간
- **사전 직무교육**: 2025.06.30 ~ 2025.07.04 (40시간)
- **프로젝트 개발**: 2025.07.07 ~ 2025.08.31 (8주)

---

## 2. 주요 기능

<!-- 
각 기능에 대한 스크린샷이나 GIF를 추가하면 이해도를 더욱 높일 수 있습니다.
ex: <img src="[이미지 주소]" width="500">
-->

### A. 채용 정보 수집 및 관리
- **자동화된 크롤링**: `Selenium`을 활용하여 여러 채용 사이트의 공고를 실시간으로 수집
- **AI 데이터 파싱**: `GPT-4o` 모델이 비정형 텍스트 공고를 정형 데이터로 자동 변환 및 정제
- **스마트 필터링**: 키워드, 지역, 직종 등 다차원적인 조건으로 원하는 공고를 빠르게 검색

### B. AI 기반 맞춤형 추천
- **이력서 자동 분석**: `GPT-3.5-turbo`가 사용자의 이력서를 분석하여 핵심 역량과 경력을 파악
- **지능형 매칭 알고리즘**: 개인 프로필과 채용 공고 간의 유사도를 분석하여 최적의 일자리를 추천
- **투명한 추천 근거**: 단순 추천을 넘어, 매칭 점수와 상세한 추천 이유를 함께 제공하여 사용자의 신뢰를 높임

### C. 사용자 중심 기능
- **직관적 UI/UX**: 고령층을 최우선으로 고려한 크고 명확한 인터페이스를 설계
- **간편한 이력서 관리**: 웹에서 손쉽게 이력서를 작성하고 수정할 수 있음
- **지원 현황 추적**: 관심 공고를 저장하고, 지원한 공고의 상태를 한눈에 관리할 수 있음
- **반응형 디자인**: PC, 태블릿, 모바일 등 모든 디바이스에서 최적화된 화면을 제공

---

## 3. 기술 스택

| Category | Stack |
| :--- | :--- |
| **Backend** | ![Java](https://img.shields.io/badge/Java_17-007396?style=for-the-badge&logo=java&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring_Boot_3.x-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) <br> `Spring Data JPA` `Spring Security` `Spring Web MVC` `Validation` |
| **Frontend** | ![React](https://img.shields.io/badge/React_18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) <br> `Axios` `React Router` `Responsive Design` |
| **Database** | ![MySQL](https://img.shields.io/badge/MySQL_8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white) ![Flyway](https://img.shields.io/badge/Flyway-CC0200?style=for-the-badge&logo=flyway&logoColor=white) |
| **DevOps** | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white) ![Amazon EC2](https://img.shields.io/badge/Amazon_EC2-FF9900?style=for-the-badge&logo=amazon-ec2&logoColor=white) |
| **AI & Data** | ![OpenAI](https://img.shields.io/badge/OpenAI_API-412991?style=for-the-badge&logo=openai&logoColor=white) ![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white) <br> `GPT-4o` `GPT-3.5-turbo` |

---
## 4. API 명세서

### A. 채용 공고
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/job-postings` | 채용 공고 목록 조회 |
| `GET` | `/api/job-postings/{id}` | 특정 채용 공고 상세 조회 |
| `POST` | `/api/job-postings/search` | 조건별 채용 공고 검색 |
| `POST` | `/api/crawling/execute` | 채용 공고 크롤링 실행 |

### B. 사용자 및 이력서
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/users/{id}/resume` | 사용자 이력서 조회 |
| `POST` | `/api/users/{id}/resume` | 이력서 생성 |
| `PUT` | `/api/users/{id}/resume` | 이력서 수정 |
| `DELETE`| `/api/users/{id}/resume` | 이력서 삭제 |

### C. AI 추천
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/recommendations/generate` | AI 기반 맞춤형 일자리 추천 |
| `GET` | `/api/recommendations/{userId}` | 사용자별 추천 목록 조회 |

---

## 5. 핵심 기술 및 문제 해결

### A. AI 기반 데이터 파싱 시스템 구축

**문제**: 웹 크롤링으로 수집한 채용 공고는 형식이 제각각인 **비정형 텍스트** 데이터라 정형화된 DB 스키마에 저장하기 어려움
>
**해결**: **OpenAI GPT-4o** 모델을 활용하여 공고 내용을 분석하고, 직무, 자격요건, 급여 등을 정확히 추출하여 JSON 형식으로 구조화하는 지능형 파서를 구현
>
**성과**: 데이터 정제 및 입력 과정을 **100% 자동화**하여 휴먼 에러를 최소화하고 데이터 품질을 극대화

### B. Flyway를 이용한 DB 스키마 버전 관리

**문제**: 애자일 개발 환경에서 DB 스키마 변경이 잦아 팀원 간 개발 환경이 불일치했으며 배포 시 DB 동기화 문제 발생
>
**해결**: **Flyway**를 도입하여 모든 DB 스키마 변경 이력을 SQL 스크립트로 관리하고 버전을 부여 및 애플리케이션 실행 시 자동으로 최신 버전으로 마이그레이션
>
**성과**: 팀 협업의 안정성을 확보하고, 배포 과정에서 발생할 수 있는 DB 관련 이슈를 원천적으로 제거

### C. GitHub Actions 기반 CI/CD 파이프라인 구축

**문제**: 수동으로 코드를 빌드, 테스트, 배포하는 과정은 시간이 많이 소요되고 실수가 발생할 가능성이 높았음
>
**해결**: **GitHub Actions** 워크플로우를 작성하여, Main 브랜치에 코드가 Push될 때마다 자동으로 빌드, 테스트, Docker 이미지 생성 및 EC2 서버 배포가 이루어지도록 파이프라인을 구축
>
**성과**: 배포 과정을 완전히 자동화하여 개발 생산성을 극대화하고, 신속하고 안정적인 서비스 운영이 가능


---

## 6. 프로젝트 성과

### A. 정량적 성과
| 항목 | 내용 |
| :--- | :--- |
| **자동화율** | 채용 공고 수집 및 데이터 정제 100% 자동화 |
| **핵심 기능** | 5개의 주요 기능 구현 완료 |
| **API 엔드포인트** | 총 10개의 RESTful API 엔드포인트 구현 |
| **CI/CD** | 2개의 자동화 파이프라인 구축 (빌드/배포) |
| **데이터 정확성** | AI 파싱을 통해 휴먼 에러 99% 이상 감소 |

### B. 기술적 성과
- **비정형 데이터 처리 혁신**: GPT-4o를 활용한 자연어 처리 기술로 웹 데이터 정형화에 성공, 일관된 데이터 품질을 확보
- **확장 가능한 아키텍처**: MSA(Microservices Architecture)를 고려한 모듈화된 설계로, 향후 새로운 채용 사이트나 AI 모델을 유연하게 추가할 수 있음
- **DevOps 문화 내재화**: Docker를 통한 환경 일관성 확보 및 GitHub Actions 기반의 완전 자동화된 배포 파이프라인을 구축하여 안정적인 개발 및 운영 체계를 마련

### C. 사회적 가치
- **디지털 포용성 증진**: 고령층의 정보 격차를 해소하고 디지털 세상에 더 쉽게 참여할 수 있는 발판을 마련
- **일자리 매칭 효율성 증대**: AI 추천을 통해 구직에 소요되는 시간과 노력을 단축시켜 고령층의 경제 활동을 지원
- **사회 참여 기회 확대**: 안정적인 일자리를 통해 고령층이 사회의 일원으로서 활발하게 기여할 수 있는 기회를 넓힘

---

## 7. 팀원 소개

| 역할 | 이름 | 담당 업무 | 
| :--- | :--- | :--- |
| 팀장 | 김지현 | 프로젝트 총괄, 기획, 백엔드 개발 |
| 팀원 | 강지수 | 기획, 프론트엔드 개발 | 
| 팀원 | 김이림 | 기획, 데이터 수집 및 분석 |
| 팀원 | 박지우 | 기획, 데이터 수집 및 분석 | 
| 팀원 | 정선영 | 기획, 데이터 수집 및 분석 | 
| 멘토 | 김기태 | 프로젝트 멘토링 |
---

## 8. 시스템 아키텍처

```mermaid
graph TB
    subgraph "Frontend Layer"
        A[React Application]
        B[Responsive UI/UX]
    end
    
    subgraph "Backend Layer"
        C[Spring Boot API Server]
        D[JPA/Hibernate ORM]
        E[AI Service Module]
    end
    
    subgraph "Data Layer"
        F[MySQL Database]
        G[Flyway Migration]
    end
    
    subgraph "External Services"
        H[OpenAI API]
        I[Job Posting Websites]
        J[Selenium WebDriver]
    end
    
    subgraph "Infrastructure"
        K[Docker Containers]
        L[GitHub Actions CI/CD]
        M[EC2 Deployment]
    end
    
    A --> C
    C --> D
    D --> F
    C --> E
    E --> H
    J --> I
    J --> E
    G --> F
    L --> K
    K --> M
