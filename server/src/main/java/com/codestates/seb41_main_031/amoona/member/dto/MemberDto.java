package com.codestates.seb41_main_031.amoona.member.dto;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;

public class MemberDto {
    // 회원 가입 dto
    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    public static class Post {
        @ApiModelProperty(example = "abc@abc.com")
        @NotBlank
        @Email
        private String email;

        @ApiModelProperty(example = "a1234567")
        @NotBlank
        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
                message = "비밀번호는 최소 8자, 최소 하나의 문자 및 하나의 숫자를 포함해야 합니다.")
        private String password;

        @ApiModelProperty(example = "홍길동")
        @NotBlank(message = "닉네임은 공백이 아니어야 합니다.")
        private String nickname;
    }

    // 회원 프로필 정보 수정 dto
    @AllArgsConstructor
    @NoArgsConstructor
    @Getter
    public static class Patch {
        private Long memberId;
        private String region;
        private String gender;
        private int age;
        private String image;

        public void setMemberId(Long memberId) {
            this.memberId = memberId;
        }

    }

    // response dto
    @AllArgsConstructor
    @Getter
    public static class Response {
        private Long memberId;
        private String email;
        private String region;
        private String gender;
        private String image;
        private String nickname;
        private int age;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
    }
}
