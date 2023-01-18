package com.codestates.seb41_main_031.amoona.post.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.NotBlank;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PostPostDto {

    @Range(min = 2, max = 30)
    private int playerNum;

    @NotBlank
    private String location;

    @NotBlank
    private String event;

    private String date;

    private String time;

}
