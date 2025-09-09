// 프론트엔드(클라이언트)의 요청(Request)을 가장 먼저 받는 곳

package com.example.GOLDNet.controller;

import com.example.GOLDNet.dto.ResumeUpsertRequest;
import com.example.GOLDNet.dto.ResumeResponse;
import com.example.GOLDNet.service.ResumeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

// 이력서(Resume)와 관련된 API 엔드포인트들을 정의
@RestController
@RequiredArgsConstructor
@RequestMapping("/resumes")
public class ResumesController {
    private final ResumeService resumeService;

    // 특정 회원의 이력서를 조회하는 API
    // @return 조회된 이력서 정보 (ResumeResponse DTO 형태)
    @GetMapping
    public ResponseEntity<ResumeResponse> getResume(@RequestParam Long memberId){ 
        return ResponseEntity.ok(resumeService.getResume(memberId));
    }

    // 특정 회원의 이력서를 생성하거나 업데이트하는 API (Upsert: Update + Insert)
    // @return 생성 또는 업데이트된 이력서 정보 (ResumeResponse DTO 형태)
    @PostMapping
    public ResponseEntity<ResumeResponse> upsertResume(@RequestParam Long memberId, 
                                                       @RequestBody ResumeUpsertRequest request){ 
        return ResponseEntity.ok(resumeService.upsertResume(memberId, request));
    }
}