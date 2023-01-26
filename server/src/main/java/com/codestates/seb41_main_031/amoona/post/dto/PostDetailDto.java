package com.codestates.seb41_main_031.amoona.post.dto;

import com.codestates.seb41_main_031.amoona.member.entity.Member;
import com.codestates.seb41_main_031.amoona.memberPost.entity.MemberPost;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@AllArgsConstructor
@Getter
public class PostDetailDto {

    private Long postId;

    private Member member;

    private List<MemberPost> memberPosts;

    private String location;

    private String event;

    private int playerNum;

    private String date;

    private String time;

    private String lat;

    private String lng;

}
