package com.codestates.seb41_main_031.amoona.member.repository;

import com.codestates.seb41_main_031.amoona.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
}
