// 데이터베이스 테이블과 직접 매핑되는 JPA Entity 클래스

package com.example.GOLDNet.domain;

import com.example.GOLDNet.global.enums.ApplicationStatus;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

// 데이터베이스의 'job_applications' 테이블과 매핑
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "application_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id", nullable = false)
    private Member member;

    @Column(nullable = false)
    private LocalDate applicationDate;

    @Column(length = 100, nullable = false)
    private String companyName;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private ApplicationStatus status;