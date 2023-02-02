package com.codestates.seb41_main_031.amoona.joinMember.repository;

import com.codestates.seb41_main_031.amoona.joinMember.entity.JoinMember;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JoinMemberRepository extends JpaRepository<JoinMember, Long> {

}
