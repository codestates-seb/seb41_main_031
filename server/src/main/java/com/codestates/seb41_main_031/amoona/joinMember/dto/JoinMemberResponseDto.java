package com.codestates.seb41_main_031.amoona.joinMember.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class JoinMemberResponseDto {

    private Long joinMemberId;

    private String nickname;

    private String image;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

}
