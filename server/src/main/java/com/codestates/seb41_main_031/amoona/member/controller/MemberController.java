package com.codestates.seb41_main_031.amoona.member.controller;

import com.codestates.seb41_main_031.amoona.member.dto.MemberDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/members")
public class MemberController {

    // TODO DTO, Service 구현
    // 회원 가입
    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post memberDto) {
        return new ResponseEntity<>(memberDto, HttpStatus.CREATED);
    }

    // 회원 정보 수정
    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") Long memberId,
                                      MemberDto memberDto) {
        return new ResponseEntity<>(memberDto, HttpStatus.OK);
    }

    // 특정 회원 상세 조회(마이페이지? 프로필?)
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") Long memberId) {
        return new ResponseEntity<>(HttpStatus.OK);
    }

    // 회원 삭제
    @DeleteMapping("{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") Long memberId) {
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    //TODO get all 필요?
}