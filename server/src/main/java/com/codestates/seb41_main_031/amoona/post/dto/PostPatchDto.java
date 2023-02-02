package com.codestates.seb41_main_031.amoona.post.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.NotBlank;


@Data
public class PostPatchDto {

    private Long postId;

    @NotBlank
    @ApiModelProperty(example = "한강공원")
    private String location;

    @NotBlank
    @ApiModelProperty(example = "농구")
    private String event;

    @Range(min = 2, max = 30)
    private int playerNum;

    private String date;

    private String time;

    private String lat;

    private String lng;

}
