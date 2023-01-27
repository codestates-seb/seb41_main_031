package com.codestates.seb41_main_031.amoona.post.dto;

import com.codestates.seb41_main_031.amoona.joinMember.entity.JoinMember;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public class PostDetailDto {

    private Long postId;

    private String nickname;

    private String image;

    private String location;

    private String event;

    private int playerNum;

    private String date;

    private String time;

    private String lat;

    private String lng;

    private List<JoinMember> joinMembers;

}
