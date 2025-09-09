// 데이터베이스 테이블과 직접 매핑되는 JPA Entity 클래스가 있는 곳

package com.example.GOLDNet.domain;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

// 데이터베이스의 'job_postings' 테이블과 매핑
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Builder
@AllArgsConstructor
@Table(name = "job_postings")
public class JobPosting {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    @Column(name = "job_posting_id")
    private Long id; // 채용 공고의 고유 식별자(ID)

    @Column 
    private String title; // 채용 공고 제목

    @Column 
    private String category; // 직무 카테고리

    @Column(length = 100) 
    private String salaryInfo; // 급여 정보

    private String location; // 근무 지역 (구 단위)

    @Column(length = 50) 
    private String preferredAgeGroup; // 선호 연령대

    @OneToMany(mappedBy = "jobPosting", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SavedJobPosting> savedJobPostings = new ArrayList<>();

    // --- 근무 조건 ---
    @Column(length = 100)
    private String industry; // 업직종

    @Column(length = 100) 
    private String brandName; // 브랜드명

    @Column(length = 50) 
    private String workDays; // 근무요일

    @Column(length = 50) 
    private String workHours; // 근무시간

    // --- 모집 조건 ---
    @Lob /
    private String recruitmentConditions; // 모집 조건

    @Column(length = 100)
    private String workRegion; // 근무 상세 지역

    @Lob 
    private String detailedDescription; // 상세 요강
}