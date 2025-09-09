// 프론트엔드(클라이언트)의 요청(Request)을 가장 먼저 받는 곳

package com.example.GOLDNet.controller;

import com.example.GOLDNet.domain.JobPosting;
import com.example.GOLDNet.dto.JobPostingResponse;
import com.example.GOLDNet.service.CrawlerService;
import com.example.GOLDNet.service.JobPostingService;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

// 채용 공고(Job Posting)와 관련된 API 엔드포인트들을 정의
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/postings")

public class JobsController {
private final CrawlerService crawlerService;
private final JobPostingService jobPostingService;
private final ObjectMapper objectMapper;

    // 웹에서 채용 공고를 크롤링(수집)만 하는 API
    // @return 크롤링된 결과 (Map 리스트 형태)

    @GetMapping("/crawl")
    public List<Map<String, String>> crawlJobs() {
        return crawlerService.crawlJobs();
    }

    
    // 크롤링, AI 파싱, 데이터베이스 저장을 한 번에 수행하는 API
    // @return 작업 성공 또는 실패에 대한 응답 메시지
    
    @PostMapping("/crawl-and-save")
    public ResponseEntity<String> crawlAndSaveJobs() {
        try {
            System.out.println("크롤링을 시작합니다...");
            List<Map<String, String>> crawledResults = crawlerService.crawlJobs();

            System.out.println("크롤링된 데이터를 AI로 파싱하고 저장합니다...");
            jobPostingService.processAndSaveCrawledData(crawledResults);

            System.out.println("모든 작업이 완료되었습니다.");
            return ResponseEntity.ok("Crawling, AI parsing, and saving completed successfully.");

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("An error occurred: " + e.getMessage());
        }
    }

    // 데이터베이스에 저장된 모든 채용 공고 목록을 조회하는 API
    // @return 채용 공고 목록 (JobPostingResponse DTO 리스트 형태)
    
    @GetMapping
    public ResponseEntity<List<JobPostingResponse>> getJobPostings(){
        return ResponseEntity.ok(jobPostingService.getJobPostings());
    }
}