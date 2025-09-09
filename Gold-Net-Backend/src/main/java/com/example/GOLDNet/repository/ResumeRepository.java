// Resume 엔티티의 데이터베이스 연산을 처리하는 리포지토리 인터페이스

package com.example.GOLDNet.repository;

import com.example.GOLDNet.domain.Member;
import com.example.GOLDNet.domain.Resume;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ResumeRepository extends JpaRepository<Resume, Integer> {
    Optional<Resume> findResumeByMember(Member member);
    Optional<Resume> findByMemberId(Long id);
}
