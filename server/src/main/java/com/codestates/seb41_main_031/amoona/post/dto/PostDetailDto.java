package com.codestates.seb41_main_031.amoona.post.dto;

import com.codestates.seb41_main_031.amoona.joinMember.entity.JoinMember;
import com.codestates.seb41_main_031.amoona.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public class PostDetailDto {

    private Long postId;

    private Member member;

    private List<JoinMember> joinMembers;

    private String location;

    private String event;

    private int playerNum;

    private String date;

    private String time;

    private String lat;

    private String lng;

}
