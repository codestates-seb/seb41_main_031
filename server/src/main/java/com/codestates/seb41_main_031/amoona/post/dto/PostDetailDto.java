package com.codestates.seb41_main_031.amoona.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

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

}
