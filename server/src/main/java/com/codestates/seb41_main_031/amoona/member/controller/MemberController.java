package com.codestates.seb41_main_031.amoona.member.controller;

import com.codestates.seb41_main_031.amoona.auth.jwt.JwtTokenizer;
import com.codestates.seb41_main_031.amoona.dtoUtils.MultiResponseDto;
import com.codestates.seb41_main_031.amoona.dtoUtils.SingleResponseDto;
import com.codestates.seb41_main_031.amoona.member.dto.MemberDto;
import com.codestates.seb41_main_031.amoona.member.entity.Member;
import com.codestates.seb41_main_031.amoona.member.mapper.MemberMapper;
import com.codestates.seb41_main_031.amoona.member.service.MemberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@Api(tags = {"회원"})
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

    // 회원 가입
    @ApiOperation(value = "회원가입", notes = "회원정보 등록 API")
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post postRequest) {
        Member member = mapper.memberPostToMemberDto(postRequest);
        Member createdMember = memberService.createMember(member);
        MemberDto.Response response = mapper.memberToMemberResponseDto(createdMember);

        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.CREATED);
    }

    // 회원 정보 수정
    @ApiOperation(value = "회원정보 수정", notes = "회원정보 수정 API")
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
    @ApiOperation(value = "회원 조회", notes = "회원 조회 API")
    @GetMapping("/{memberId}")
    public ResponseEntity getMember(@PathVariable("memberId") Long memberId) {
        Member findOneMember = memberService.findOneMember(memberId);
        MemberDto.Response response = mapper.memberToMemberResponseDto(findOneMember);
        return new ResponseEntity(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    // 전체 회원 조회
    @ApiOperation(value = "전체 회원 조회", notes = "전체 회원 조회 API")
    @GetMapping
    public ResponseEntity getAllMembers(@Positive @RequestParam int page,
                                        @Positive @RequestParam int size) {
        Page<Member> pageMember = memberService.findAllMembers(page - 1, size);
        List<Member> findAllMembers = pageMember.getContent();
        List<MemberDto.Response> response = mapper.memberListToMemberResponseListDto(findAllMembers);

        return new ResponseEntity(new MultiResponseDto<>(response, pageMember), HttpStatus.OK);
    }

    // 회원 삭제
    @ApiOperation(value = "회원 탈퇴", notes = "회원정보 삭제 API")
    @DeleteMapping("{memberId}")
    public ResponseEntity deleteMember(@PathVariable("memberId") Long memberId) {
        memberService.deleteOneMember(memberId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

}
