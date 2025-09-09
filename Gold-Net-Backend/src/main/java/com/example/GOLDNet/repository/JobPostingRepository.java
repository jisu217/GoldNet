// JobPosting 엔티티의 데이터베이스 연산을 처리하는 리포지토리 인터페이스

package com.example.GOLDNet.repository;

import com.example.GOLDNet.domain.JobPosting;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobPostingRepository extends JpaRepository<JobPosting, Integer> {
}
