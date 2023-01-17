package com.codestates.seb41_main_031.amoona.auth.handler;

import com.codestates.seb41_main_031.amoona.response.ErrorResponse;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
// 인터페이스 구현
public class MemberAuthenticationFailureHandler implements AuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(HttpServletRequest request,
                                        HttpServletResponse response,
                                        AuthenticationException exception) throws IOException {
        // 인증 실패 시 로그 출력
        log.error("# Authentication failed: {}", exception.getMessage());

        sendErrorResponse(response); // sendErrorResponse() 메서드를 호출해 출력 스트림에 Error 정보를 담음
    }

    private void sendErrorResponse(HttpServletResponse response) throws IOException {
        Gson gson = new Gson(); // Error 정보가 담긴 객체(ErrorResponse) 를 JSON 문자열로 변환하는 Gson 라이브러리의 인스턴스 생성
        ErrorResponse errorResponse = ErrorResponse.of(HttpStatus.UNAUTHORIZED); // 객체 생성 + HttpStatus.UNAUTHORIZED 상태코드 전달
        response.setContentType(MediaType.APPLICATION_JSON_VALUE); // response 의 content type 이 "application/json" 이라는 것을 header 에 추가
        response.setStatus(HttpStatus.UNAUTHORIZED.value()); // response 의 status 가 401인 것을 header 에 추가
        response.getWriter().write(gson.toJson(errorResponse, ErrorResponse.class)); // ErrorResponse 객체를 JSON 포맷 문자열로 변환 후 스트림 생성
    }
}
