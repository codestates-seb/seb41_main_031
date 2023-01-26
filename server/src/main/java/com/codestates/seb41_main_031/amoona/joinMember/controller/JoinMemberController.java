package com.codestates.seb41_main_031.amoona.joinMember.controller;

import com.codestates.seb41_main_031.amoona.joinMember.dto.JoinMemberPostDto;
import com.codestates.seb41_main_031.amoona.joinMember.dto.JoinMemberResponseDto;
import com.codestates.seb41_main_031.amoona.joinMember.entity.JoinMember;
import com.codestates.seb41_main_031.amoona.joinMember.mapper.JoinMemberMapper;
import com.codestates.seb41_main_031.amoona.joinMember.service.JoinMemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/joinMembers")
public class JoinMemberController {

    JoinMemberService joinMemberService;
    JoinMemberMapper joinMemberMapper;

    @PostMapping("/{postId}")
    public ResponseEntity postJoinMember(@PathVariable("postId") Long postId,
                                         @RequestBody JoinMemberPostDto joinMemberPostDto,
                                         @AuthenticationPrincipal String email) {

        JoinMember joinMember = joinMemberMapper.joinMemberPostDtoToJoinMember(joinMemberPostDto);
        JoinMember savedJoinMember = joinMemberService.createJoinMember(joinMember, postId, email);
        JoinMemberResponseDto response = joinMemberMapper.joinMemberToJoinMemberResponseDto(savedJoinMember);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @DeleteMapping("/{joinMemberId}")
    public ResponseEntity deleteJoinMember(@PathVariable("joinMemberId") Long joinMemberId,
                                           @AuthenticationPrincipal String email) {
        joinMemberService.deleteJoinMember(joinMemberId, email);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
