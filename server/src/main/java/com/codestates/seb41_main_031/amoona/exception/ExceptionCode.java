package com.codestates.seb41_main_031.amoona.exception;

import lombok.Getter;

public enum ExceptionCode {
    POST_NOT_FOUND(404, "Post Not Found"),
    MEMBER_NOT_FOUND(404, "Member Not Found"),
    MEMBER_NOT_ALLOWED(409, "Member Not Allowed");

    @Getter
    private int status;
    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
