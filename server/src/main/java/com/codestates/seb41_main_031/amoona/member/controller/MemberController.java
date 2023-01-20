package com.codestates.seb41_main_031.amoona.member.controller;

import com.codestates.seb41_main_031.amoona.auth.jwt.JwtTokenizer;
import com.codestates.seb41_main_031.amoona.dtoUtils.SingleResponseDto;
import com.codestates.seb41_main_031.amoona.member.dto.MemberDto;
import com.codestates.seb41_main_031.amoona.member.entity.Member;
import com.codestates.seb41_main_031.amoona.member.mapper.MemberMapper;
import com.codestates.seb41_main_031.amoona.member.service.MemberService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/members")
@Validated
@Slf4j
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;
    private final JwtTokenizer jwtTokenizer;

    public MemberController(MemberService memberService, MemberMapper mapper, JwtTokenizer jwtTokenizer) {
        this.memberService = memberService;
        this.mapper = mapper;
        this.jwtTokenizer = jwtTokenizer;
    }

    // TODO DTO, Service 구현
    // 회원 가입
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post postRequest) {
        Member member = mapper.memberPostToMemberDto(postRequest);
        Member createdMember = memberService.createMember(member);
        MemberDto.Response response = mapper.memberToMemberResponseDto(createdMember);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    // 회원 정보 수정
    @PatchMapping("/{memberId}")
    public ResponseEntity patchMember(@PathVariable("memberId") Long memberId,
                                      @RequestBody MemberDto.Patch patchRequest) {
        Member member = mapper.memberPatchToMemberDto(patchRequest);
        member.setMemberId(memberId);
        Member updateMember = memberService.updateMember(member);
        MemberDto.Response response = mapper.memberToMemberResponseDto(updateMember);
        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    // 특정 회원 상세 조회(마이페이지? 프로필?)
    @GetMapping("/{memberId}")
    public ResponseEntity getMember(@PathVariable("memberId") Long memberId) {
        Member findOneMember = memberService.findOneMember(memberId);
        MemberDto.Response response = mapper.memberToMemberResponseDto(findOneMember);
        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    // 회원 삭제
    @DeleteMapping("{memberId}")
    public ResponseEntity deleteMember(@PathVariable("memberId") Long memberId) {
        memberService.deleteOneMember(memberId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    //TODO get all 필요?
}
