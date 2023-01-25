package com.codestates.seb41_main_031.amoona.member.service;

import com.codestates.seb41_main_031.amoona.auth.utils.CustomAuthorityUtils;
import com.codestates.seb41_main_031.amoona.exception.BusinessLogicException;
import com.codestates.seb41_main_031.amoona.exception.ExceptionCode;
import com.codestates.seb41_main_031.amoona.member.entity.Member;
import com.codestates.seb41_main_031.amoona.member.repository.MemberRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class MemberService {
    // publisher 관련 코드 주석처리
    private final MemberRepository memberRepository;
    // private final ApplicationEventPublisher publisher;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public MemberService(MemberRepository memberRepository,
                         //ApplicationEventPublisher publisher,
                         PasswordEncoder passwordEncoder,
                         CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        //this.publisher = publisher;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    // Create Member
    public Member createMember(Member member) {
        verifyExistsEmail(member.getEmail());

        // Password 를 단방향 암호화함
        String encryptedPassword = passwordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        // 등록하는 사용자의 권한 정보 생성
        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        Member savedMember = memberRepository.save(member);

        // publisher.publishEvent(new MemberRegistrationApplicationEvent(this, savedMember));
        return savedMember;
    }

    // Update Member
    public Member updateMember(Member member) {
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getRegion())
                .ifPresent(region -> findMember.setRegion(region));
        Optional.ofNullable(member.getGender())
                .ifPresent(gender -> findMember.setGender(gender));
        Optional.ofNullable(member.getAge())
                .ifPresent(age -> findMember.setAge(age));
        Optional.ofNullable(member.getImage())
                .ifPresent(image -> findMember.setImage(image));

        return memberRepository.save(findMember);
    }

    // Find one member
    public Member findOneMember(long memberId){
        return findVerifiedMember(memberId);
    }

    // Find All Members
    public Page<Member> findAllMembers(int page, int size){
        Page<Member> pageMembers = memberRepository.findAll(PageRequest.of(page, size, Sort.by("memberId")));
        return pageMembers;
    }

    // Delete one member
    public void deleteOneMember(long memberId){
        Member foundMember = findVerifiedMember(memberId);
        memberRepository.delete(foundMember);
    }


    private void verifyExistsEmail(String email) {// , String password
        Optional<Member> memberByEmail = memberRepository.findByEmail(email);
        if (memberByEmail.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }

    private Member findVerifiedMember(Long memberId) {
        Optional<Member> optionalMember = memberRepository.findById(memberId);
        Member member = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return member;
    }
}
