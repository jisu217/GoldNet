// 이력서 생성 및 수정을 요청(Request)하기 위한 DTO 클래스

package com.example.GOLDNet.dto;

public record ResumeUpsertRequest(
        String education,
        String experience,
        String preferredConditions,
        String selfIntroduction,
        String skills,
        String strengths,
        String mbti,
        String licensesAbilities,
        String portfolioUrls,
        String preferentialTreatment
) {
}
