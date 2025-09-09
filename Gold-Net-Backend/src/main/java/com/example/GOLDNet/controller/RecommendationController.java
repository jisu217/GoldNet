// 프론트엔드(클라이언트)의 요청(Request)을 가장 먼저 받는 곳

package com.example.GOLDNet.controller;

import com.example.GOLDNet.dto.JobRecommendationResponse;
import com.example.GOLDNet.service.RecommendationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// 채용 공고 추천과 관련된 API 엔드포인트들을 정의
@RestController
@RequestMapping("/api/recommendations")
@RequiredArgsConstructor
public class RecommendationController {
    
    private final RecommendationService recommendationService;
    
    // 특정 회원에게 채용 공고를 추천하는 API
    // @return 추천된 채용 공고 목록 (JobRecommendationResponse DTO 리스트 형태)
    @GetMapping("/jobs")
    public ResponseEntity<List<JobRecommendationResponse>> getJobRecommendations(
            @RequestParam Long memberId, 
            @RequestParam(defaultValue = "10") int limit) { 
        
        List<JobRecommendationResponse> recommendations = 
            recommendationService.getJobRecommendations(memberId, limit);
        
        return ResponseEntity.ok(recommendations);
    }
    
    // 특정 회원의 추천 채용 공고를 새로고침(재계산)하는 API
    // @return 새로고침된 추천 공고 목록 (JobRecommendationResponse DTO 리스트 형태)
    @PostMapping("/jobs/refresh")
    public ResponseEntity<List<JobRecommendationResponse>> refreshJobRecommendations(
            @RequestParam Long memberId, 
            @RequestParam(defaultValue = "10") int limit) { 
        
        List<JobRecommendationResponse> recommendations = 
            recommendationService.refreshJobRecommendations(memberId, limit);
        
        return ResponseEntity.ok(recommendations);
    }
}