package com.codestates.seb41_main_031.amoona.joinMember.controller;

import com.codestates.seb41_main_031.amoona.joinMember.dto.JoinMemberResponseDto;
import com.codestates.seb41_main_031.amoona.joinMember.entity.JoinMember;
import com.codestates.seb41_main_031.amoona.joinMember.mapper.JoinMemberMapper;
import com.codestates.seb41_main_031.amoona.joinMember.service.JoinMemberService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

@Api(tags = {"모임인원"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/joinMembers")
public class JoinMemberController {

    private final JoinMemberService joinMemberService;
    private final JoinMemberMapper joinMemberMapper;

    @ApiOperation(value = "모임참여", notes = "모임참여 API")
    @PostMapping("/{postId}")
    public ResponseEntity postJoinMember(@PathVariable("postId") Long postId,
                                         @AuthenticationPrincipal String email) {

        JoinMember savedJoinMember = joinMemberService.createJoinMember(postId, email);
        JoinMemberResponseDto response = joinMemberMapper.joinMemberToJoinMemberResponseDto(savedJoinMember);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @ApiOperation(value = "모임취소", notes = "모임취소 API")
    @DeleteMapping("/{joinMemberId}")
    public ResponseEntity deleteJoinMember(@PathVariable("joinMemberId") Long joinMemberId,
                                           @AuthenticationPrincipal String email) {
        joinMemberService.deleteJoinMember(joinMemberId, email);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
