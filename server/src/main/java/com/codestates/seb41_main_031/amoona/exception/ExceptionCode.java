package com.codestates.seb41_main_031.amoona.exception;

import lombok.Getter;

public enum ExceptionCode {

    POST_NOT_FOUND(404, "Post Not Found"),
    POST_EXISTS(409, "Post Exists"),
    POST_CANNOT_CHANGE(403, "Post Can Not Be Changed"),
    JOIN_MEMBER_NOT_FOUND(404, "Join Member Not Found"),
    MEMBER_NOT_FOUND(404, "Member Not Found"),
    EMAIL_EXISTS(409, "Email Exists"),
    MEMBER_EXISTS(409, "Member Exists"),
    JOIN_MEMBER_EXISTS(409, "Join Member Exists"),

    MEMBER_NOT_ALLOWED(403, "MEMBER Not Allowed"),
    MEMBER_CANNOT_CHANGE(403,"MEMBER Can Not Be Changed"),
    UNAUTHORIZED(401, "Unauthorized");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}
