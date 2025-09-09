// 데이터베이스 테이블과 직접 매핑되는 JPA Entity 클래스가 있는 곳

package com.example.GOLDNet.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

// 데이터베이스의 'resumes' 테이블과 매핑
@Entity 
@Getter 
@Table(name = "resumes") 
@NoArgsConstructor(access = AccessLevel.PROTECTED) 
public class Resume {
    @Id 
    @GeneratedValue(strategy = GenerationType.IDENTITY) 
    @Column(name = "resume_id")
    private Long id; // 이력서의 고유 식별자(ID)

    @OneToOne(fetch = FetchType.LAZY) 
    @JoinColumn(name = "member_id", nullable = false)
    private Member member; // 이 이력서를 소유한 회원

    @Column(length = 255) 
    private String education; // 학력

    @Lob // 대용량 텍스트 데이터
    private String experience; // 경험

    @Lob // 대용량 텍스트 데이터
    private String preferredConditions; // 희망 근무 조건

    @Lob // 대용량 텍스트 데이터
    private String selfIntroduction; // 자기소개

    @Lob // 대용량 텍스트 데이터
    private String skills; // 보유 기술 

    @Lob // 대용량 텍스트 데이터
    private String strengths; // 성격 강점

    @Column(length = 10) =
    private String mbti; // MBTI

    @Lob // 대용량 텍스트 데이터
    private String licensesAbilities; // 자격증 및 특기

    @Lob // 대용량 텍스트 데이터
    private String portfolioUrls; // 포트폴리오 URL

    @Column(length = 255) 
    private String preferentialTreatment; // 취업 우대사항


    // 빌더 패턴을 사용하여 Resume 객체를 생성하기 위한 생성자
    @Builder
    public Resume(Member member, String education, String experience,
                  String preferredConditions, String selfIntroduction, String skills,
                  String strengths, String mbti, String licensesAbilities,
                  String portfolioUrls, String preferentialTreatment) {
        this.member = member;
        this.education = education;
        this.experience = experience;
        this.preferredConditions = preferredConditions;
        this.selfIntroduction = selfIntroduction;
        this.skills = skills;
        this.strengths = strengths;
        this.mbti = mbti;
        this.licensesAbilities = licensesAbilities;
        this.portfolioUrls = portfolioUrls;
        this.preferentialTreatment = preferentialTreatment;
    }

    // 이력서의 내용을 업데이트하는 비즈니스 메서드 
    public void updateResume(String education, String experience, String preferredConditions,
                             String selfIntroduction, String skills, String strengths,
                             String mbti, String licensesAbilities, String portfolioUrls,
                             String preferentialTreatment) {
        this.education = education;
        this.experience = experience;
        this.preferredConditions = preferredConditions;
        this.selfIntroduction = selfIntroduction;
        this.skills = skills;
        this.strengths = strengths;
        this.mbti = mbti;
        this.licensesAbilities = licensesAbilities;
        this.portfolioUrls = portfolioUrls;
        this.preferentialTreatment = preferentialTreatment;
    }
}