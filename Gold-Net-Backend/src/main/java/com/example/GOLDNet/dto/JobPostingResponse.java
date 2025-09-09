// 채용 공고 정보를 클라이언트에게 응답(Response)하기 위한 DTO 클래스

package com.example.GOLDNet.dto;

public record JobPostingResponse(
        Long id,
        String title,
        String category,
        String salaryInfo,
        String location,
        String preferredAgeGroup,
        String industry,
        String brandName,
        String workDays,
        String workHours,
        String recruitmentConditions,
        String workRegion,
        String detailedDescription
) {
}
