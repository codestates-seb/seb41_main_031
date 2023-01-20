package com.codestates.seb41_main_031.amoona.auth.handler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Slf4j
// Custom AuthenticationSuccessHandler 는 인터페이스를 직접 구현해야 함
public class MemberAuthenticationSuccessHandler implements AuthenticationSuccessHandler {

    @Override
    // 추상 메서드인 onAuthenticationSuccess() 를 구현
    public void onAuthenticationSuccess(HttpServletRequest request,
                                        HttpServletResponse response,
                                        Authentication authentication) throws IOException {
        // 인증 성공 후 로그 출력 -> Authentiation 객체에 사용자 정보를 얻은 후, HttpServletResponse 로 response 전송 가능
        log.info("# Authenticated successfully!");
    }
}
