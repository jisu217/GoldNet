// 데이터베이스 테이블과 직접 매핑되는 JPA Entity 클래스가 있는 곳

package com.example.GOLDNet.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

// 데이터베이스의 'saved_job_postings' 테이블과 매핑
@Entity 
@NoArgsConstructor(access = AccessLevel.PROTECTED) 
@Table(name = "saved_job_postings")
public class SavedJobPosting {

    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    @Column(name = "saved_job_posting_id") 
    private Long id; 

    @ManyToOne(fetch = FetchType.LAZY) 
    @JoinColumn(name = "member_id", nullable = false) 
    private Member member; 

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "job_posting_id", nullable = false) 
    private JobPosting jobPosting;

    @Column(name = "created_at", nullable = false) 
    private LocalDateTime createdAt = LocalDateTime.now(); 