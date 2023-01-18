package com.codestates.seb41_main_031.amoona.post.dto;

import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class PostResponseDto {

    private Long postId;

    private int playerNum;

    private String location;

    private String event;

//    private LocalDateTime time;

}
