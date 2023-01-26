package com.codestates.seb41_main_031.amoona.post.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.NotBlank;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PostPostDto {

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
