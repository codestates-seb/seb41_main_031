package com.codestates.seb41_main_031.amoona.auth.filter;

import com.codestates.seb41_main_031.amoona.auth.jwt.JwtTokenizer;
import com.codestates.seb41_main_031.amoona.auth.utils.CustomAuthorityUtils;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

// 클라이언트로부터 전송된 request header 에 포함된 JWT 에 대해 검증 작업을 수행하는 필터
public class JwtVerificationFilter extends OncePerRequestFilter{ // request 당 한 번 실행되는 필터(인증은 한 번만 성공하면 되므로)
    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public JwtVerificationFilter(JwtTokenizer jwtTokenizer,
                                 CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer; // JWT 를 검증하고 Claims(토큰에 포함된 정보)를 얻는데 사용됨
        this.authorityUtils = authorityUtils; // JWT 검증에 성공하면 Authenticiation 객체에 채울 사용자의 권한을 생성하는데 사용됨
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        // try~catch 문으로 특정 예외 타입의 Exception 이 catch 되면 해당 Exception 을 HttpServletRequest 의 애트리뷰트로 추가함
        try {
            Map<String, Object> claims = verifyJws(request); // JWT 를 검증하는데 사용되는 private 메서드
            setAuthenticationToContext(claims); // Authentication 객체를 SecurityContext 에 저장하기 위한 private 메서드
        } catch (SignatureException se) {
            request.setAttribute("exception", se);
        } catch (ExpiredJwtException ee) {
            request.setAttribute("exception", ee);
        } catch (Exception e) {
            request.setAttribute("exception", e);
        }
        filterChain.doFilter(request, response);
    }

    @Override
    // 특정 조건에 부합하면(true 이면) 해당 Filter 의 동작을 수행하지 않고 다음 Filter 로 건너뛰도록 해줌
    protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
        String authorization = request.getHeader("Authorization"); // Authorization header 값 받아옴
        // Authorization header 의 값이 null 이거나 Authorization header 의 값이 "Bearer" 로 시작하지 않는다면 이 Filter 의 동작을 수행하지 않도록 정의
        // 즉, JWT 가 Authorization header 에 포함되지 않았다면 JWT 자격 증명이 필요하지 않은 리소스에 대한 요청이라고 판단하여 다음 Filter 로 처리를 넘김
        return authorization == null || !authorization.startsWith("Bearer");
    }

    private Map<String, Object> verifyJws(HttpServletRequest request) {
        // request header 에서 JWT 를 받아옴
        String jws = request.getHeader("Authorization").replace("Bearer ", "");
        // JWT 서명(Signature)을 검증하기 위한 Secret Key 를 받아옴
        String base64EncodedSecretKey = jwtTokenizer.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
        // JWT 에서 Cliams 를 파싱(성공적으로 파싱했다면 내부적으로 서명(Signature) 검증에 성공했다는 의미, verify() 같은 검증 메서드 없음)
        Map<String, Object> claims = jwtTokenizer.getClaims(jws, base64EncodedSecretKey).getBody();

        return claims;
    }

    private void setAuthenticationToContext(Map<String, Object> claims) {
        String username = (String) claims.get("username"); // JWT 에서 파싱한 Claims 로부터 username 을 받아옴
        // JWT 의 Claims 에서 얻은 권한 정보를 기반으로 List 생성
        List<GrantedAuthority> authorities = authorityUtils.createAuthorities((List)claims.get("roles"));
        // 위의 두 정보로 Authentication 객체 생성
        Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, authorities);
        // SecurityContext 에 Authentication 객체를 저장
        SecurityContextHolder.getContext().setAuthentication(authentication);
    }
}
