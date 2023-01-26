package com.codestates.seb41_main_031.amoona.post.dto;

import com.codestates.seb41_main_031.amoona.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class PostListDto {

    private Long postId;

    private Member member;

    private String location;
  
    private String event;

    private int playerNum;

    private String date;

    private String time;

    private String address;

    private String lat;

    private String lng;

}
