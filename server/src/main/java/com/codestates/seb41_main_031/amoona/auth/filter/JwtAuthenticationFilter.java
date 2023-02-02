package com.codestates.seb41_main_031.amoona.auth.filter;

import com.codestates.seb41_main_031.amoona.auth.dto.LoginDto;
import com.codestates.seb41_main_031.amoona.auth.jwt.JwtTokenizer;
import com.codestates.seb41_main_031.amoona.member.entity.Member;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

// 폼로그인 방식에서 사용하는 디폴트 Security Filter 인 UsernamePasswordAuthenticationFilter 를 상속
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
    private final AuthenticationManager authenticationManager;
    private final JwtTokenizer jwtTokenizer;

    public JwtAuthenticationFilter(AuthenticationManager authenticationManager, JwtTokenizer jwtTokenizer) {
        // 로그인 인증 정보를 전달받아 UserDetailsService 와 인터랙션 한 뒤 인증 여부 판단
        this.authenticationManager = authenticationManager;
        // 클라이언트가 인증에 성공할 경우, JWT 를 생성 및 발급
        this.jwtTokenizer = jwtTokenizer;
    }

    @SneakyThrows
    @Override
    // 인증을 시도하는 로직
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {

        // 클라이언트에서 받은 인증 정보를 DTO 클래스로 역직렬화 하기 위해 ObjectMapper 인스턴스 생성
        ObjectMapper objectMapper = new ObjectMapper();
        // ServeletInpustStream 을 LoginDto 클래스의 객체로 역직렬화
        LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);

        // 인증 정보를 포함한 UsernamePasswordAuthenticationToken 생성
        UsernamePasswordAuthenticationToken authenticationToken =
                new UsernamePasswordAuthenticationToken(loginDto.getEmail(), loginDto.getPassword());

        // Token 을 AuthenticationManager 에게 전달하여 인증 처리 위임
        return authenticationManager.authenticate(authenticationToken);
    }

    @Override
    // 클라이언트의 인증 정보를 이용해 인증에 성공할 경우 호출
    protected void successfulAuthentication(HttpServletRequest request,
                                            HttpServletResponse response,
                                            FilterChain chain,
                                            Authentication authResult) throws ServletException, IOException {
        // Member 엔티티 클래스의 객체를 받아옴, AuthenticationManager 내부에서 인증에 성공하면
        // 인증된 Authentication 객체가 생성되면서 principal 필ㄹ드에 Member 객체가 할당됨
        Member member = (Member) authResult.getPrincipal();

        String accessToken = delegateAccessToken(member); // Access Token 생성
        String refreshToken = delegateRefreshToken(member);  // Refresh Token 생성
        String memberId = String.valueOf(member.getMemberId()); // MemberId 값 생성

        // response header(Authorization) 에 Access Token 을 추가
        // Access Token 은 클라이언트가 서버에 요청을 보낼 때마다 request header 에 추가해서 클라이언트의 자격을 증명하는데 사용됨
        response.setHeader("Authorization", "Bearer " + accessToken);

        // response header(Refresh) 에 Refresh Token 을 추가
        // Refresh Token 은 Access Token 이 만료될 경우, 클라이언트가 Access Token 을 새로 발급받을 수 있도록 추가적으로 제공
        response.setHeader("Refresh", refreshToken);

        // header 에 memberId 값 추가
        response.setHeader("MemberId", memberId);

        this.getSuccessHandler().onAuthenticationSuccess(request, response, authResult);
    }

    private String delegateAccessToken(Member member) {
        Map<String, Object> claims = new HashMap<>();
        claims.put("username", member.getEmail());
        claims.put("roles", member.getRoles());

        String subject = member.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getAccessTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String accessToken = jwtTokenizer.generateAccessToken(claims, subject, expiration, base64EncodedSecretKey);

        return accessToken;
    }

    private String delegateRefreshToken(Member member) {
        String subject = member.getEmail();
        Date expiration = jwtTokenizer.getTokenExpiration(jwtTokenizer.getRefreshTokenExpirationMinutes());

        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());

        String refreshToken = jwtTokenizer.generateRefreshToken(subject, expiration, base64EncodedSecretKey);

        return refreshToken;
    }
}
