package com.codestates.seb41_main_031.amoona.post.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.NotBlank;

@AllArgsConstructor
@Getter
public class PostPostDto {

    @Range(min = 2, max = 30)
    private int playerNum;

    @NotBlank
    private String location;

    @NotBlank
    private String event;

//    private LocalDateTime time;

}
