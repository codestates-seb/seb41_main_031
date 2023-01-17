package com.codestates.seb41_main_031.amoona.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;

public class MemberDto {
    // 회원 가입 dto
    @AllArgsConstructor
    @Getter
    public static class Post {
        @NotBlank
        @Email
        private String email;
        @NotBlank
        @Pattern(regexp = "^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$",
                message = "비밀번호는 최소 8자, 최소 하나의 문자 및 하나의 숫자를 포함해야 합니다.")
        private String password;
        @NotBlank(message = "닉네임은 공백이 아니어야 합니다.")
        private String nickName;
    }

    // 회원 프로필 정보 수정 dto
    @AllArgsConstructor
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