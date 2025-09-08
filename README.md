# 👩🏻‍💻 GOLDNet_고령층을 위한 AI 기반 맞춤형 구직 플랫폼

<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=300&section=header&text=GOLDNet&fontSize=90" />
</p>

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

## 📖 목차

1.  [**프로젝트 개요**](#-프로젝트-개요)
2.  [**주요 기능**](#-주요-기능)
3.  [**기술 스택**](#-기술-스택)
4.  [**시스템 아키텍처**](#-시스템-아키텍처)
5.  [**API 명세서**](#-api-명세서)
6.  [**핵심 기술 및 문제 해결**](#-핵심-기술-및-문제-해결)
7.  [**프로젝트 성과**](#-프로젝트-성과)
8.  [**팀원 소개**](#-팀원-소개)

---

## 📌 프로젝트 개요

### 💡 배경 및 문제 정의
대한민국은 65세 이상 인구 비율이 20%를 넘어서는 **초고령 사회**에 진입했습니다. 경제 활동을 희망하는 고령층은 지속적으로 증가하고 있지만, 기존 구직 플랫폼들은 복잡한 UI와 작은 글씨 등 **디지털 접근성**이 낮아 고령층이 사용하기에 많은 어려움이 있습니다.

### 🎯 솔루션: GOLDNet
**GOLDNet**은 고령층의 눈높이에 맞춘 **직관적이고 접근성 높은 AI 구직 플랫폼**입니다. AI 기반 맞춤형 추천 시스템과 자동화된 채용 공고 수집 기능으로 디지털 격차를 해소하고, 고령층과 일자리를 효율적으로 연결하여 새로운 사회적 가치를 창출합니다.

### ✨ 핵심 가치
*   **접근성 강화**: 큰 글씨와 단순한 메뉴 구성을 통해 누구나 쉽게 사용할 수 있는 UI/UX
*   **AI 맞춤 추천**: 사용자의 이력서를 분석하여 개인에게 최적화된 일자리를 추천
*   **데이터 자동화**: 웹 크롤링과 AI 파싱을 통해 최신 채용 정보를 실시간으로 수집 및 정제
*   **사회적 가치 창출**: 고령층의 사회 참여를 확대하고 디지털 포용성 증진에 기여

### 📅 개발 기간
*   **사전 직무교육**: 2025.06.30 ~ 2025.07.04 (40시간)
*   **프로젝트 개발**: 2025.07.07 ~ 2025.08.31 (8주)

---

## ✨ 주요 기능

<!-- 
각 기능에 대한 스크린샷이나 GIF를 추가하면 이해도를 더욱 높일 수 있습니다.
ex: <img src="[이미지 주소]" width="500">
-->

### 🤖 채용 정보 수집 및 관리
- **자동화된 크롤링**: `Selenium`을 활용하여 여러 채용 사이트의 공고를 실시간으로 수집합니다.
- **AI 데이터 파싱**: `GPT-4o` 모델이 비정형 텍스트 공고를 정형 데이터로 자동 변환 및 정제합니다.
- **스마트 필터링**: 키워드, 지역, 직종 등 다차원적인 조건으로 원하는 공고를 빠르게 검색합니다.

### 🔍 AI 기반 맞춤형 추천
- **이력서 자동 분석**: `GPT-3.5-turbo`가 사용자의 이력서를 분석하여 핵심 역량과 경력을 파악합니다.
- **지능형 매칭 알고리즘**: 개인 프로필과 채용 공고 간의 유사도를 분석하여 최적의 일자리를 추천합니다.
- **투명한 추천 근거**: 단순 추천을 넘어, 매칭 점수와 상세한 추천 이유를 함께 제공하여 사용자의 신뢰를 높입니다.

### 👤 사용자 중심 기능
- **직관적 UI/UX**: 고령층을 최우선으로 고려한 크고 명확한 인터페이스를 설계했습니다.
- **간편한 이력서 관리**: 웹에서 손쉽게 이력서를 작성하고 수정할 수 있습니다.
- **지원 현황 추적**: 관심 공고를 저장하고, 지원한 공고의 상태를 한눈에 관리할 수 있습니다.
- **반응형 디자인**: PC, 태블릿, 모바일 등 모든 디바이스에서 최적화된 화면을 제공합니다.

---

## 🛠️ 기술 스택

| Category | Stack |
| :--- | :--- |
| **Backend** | ![Java](https://img.shields.io/badge/Java_17-007396?style=for-the-badge&logo=java&logoColor=white) ![Spring Boot](https://img.shields.io/badge/Spring_Boot_3.x-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white) <br> `Spring Data JPA` `Spring Security` `Spring Web MVC` `Validation` |
| **Frontend** | ![React](https://img.shields.io/badge/React_18.x-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![JavaScript](https://img.shields.io/badge/JavaScript_ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) <br> `Axios` `React Router` `Responsive Design` |
| **Database** | ![MySQL](https://img.shields.io/badge/MySQL_8.0-4479A1?style=for-the-badge&logo=mysql&logoColor=white) ![Flyway](https://img.shields.io/badge/Flyway-CC0200?style=for-the-badge&logo=flyway&logoColor=white) |
| **DevOps** | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white) ![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white) ![Amazon EC2](https://img.shields.io/badge/Amazon_EC2-FF9900?style=for-the-badge&logo=amazon-ec2&logoColor=white) |
| **AI & Data** | ![OpenAI](https://img.shields.io/badge/OpenAI_API-412991?style=for-the-badge&logo=openai&logoColor=white) ![Selenium](https://img.shields.io/badge/Selenium-43B02A?style=for-the-badge&logo=selenium&logoColor=white) <br> `GPT-4o` `GPT-3.5-turbo` |

---

## 🌐 시스템 아키텍처

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
