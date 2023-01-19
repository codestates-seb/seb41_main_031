package com.codestates.seb41_main_031.amoona.post.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PostResponseDto {

    private Long postId;

    private int playerNum;

    private String location;

    private String event;

    private String date;

    private String time;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

}
