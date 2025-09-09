// 데이터베이스 테이블과 직접 매핑되는 JPA Entity 클래스가 있는 곳

package com.example.GOLDNet.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


// 데이터베이스의 'members' 테이블과 매핑
@Entity 
@NoArgsConstructor(access = AccessLevel.PROTECTED) 
@Table(name = "members") 
public class Member {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "member_id")
    private Long id; // 회원의 고유 식별자(ID)

    @Column(name = "name", nullable = false)
    private String name; // 회원 이름

    @Column(name = "created_at", nullable = false) 
    private LocalDateTime createdAt = LocalDateTime.now(); // 회원 가입일 

    OneToOne(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private Resume resume; // 회원이 소유한 이력서

    // JobApplication 엔티티와 일대다(1:N) 관계 설정
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<JobApplication> applications = new ArrayList<>(); // 회원의 입사 지원 내역 리스트

    // SavedJobPosting 엔티티와 일대다(1:N) 관계 설정 
    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SavedJobPosting> savedJobPostings = new ArrayList<>(); // 회원이 저장(스크랩)한 채용 공고 리스트
}