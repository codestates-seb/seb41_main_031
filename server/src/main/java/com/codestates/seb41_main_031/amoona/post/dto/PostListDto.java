package com.codestates.seb41_main_031.amoona.post.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;

@AllArgsConstructor
@Builder
@Getter
public class PostListDto {

    private Long postId;

    private String nickname;

    private String image;

    private String location;
  
    private String event;

    private int joinCount;

    private int playerNum;

    private String date;

    private String time;

    private String lat;

    private String lng;

}
