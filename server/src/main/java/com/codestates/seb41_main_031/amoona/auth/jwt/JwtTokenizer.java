package com.codestates.seb41_main_031.amoona.auth.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.Map;

@Component // JwtTokenizer 클래스를 Spring Container 에 Bean 으로 등록
public class JwtTokenizer {
    @Getter
    @Value("${jwt.key}")
    private String secretKey; // JWT 생성 및 검증 시 사용되는 Secret Key 정보

    @Getter
    @Value("${jwt.access-token-expiration-minutes}")
    private int accessTokenExpirationMinutes; // Access Token 에 대한 만료 시간 정보

    @Getter
    @Value("${jwt.refresh-token-expiration-minutes}")
    private int refreshTokenExpirationMinutes; // Refresh Token 에 대한 만료 시간 정보

    // encodeBase64SecretKey() 메서드는 Plain Text 형태인 Secret Key 의 byte[]를 Base64 형식의 문자열로 인코딩해줍니다.
    public String encodeBase64SecretKey(String secretKey) {
        return Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
    }

    // 인증된 사용자에게 JWT 를 최초로 발급해주기 위한 JWT 생성 메서드(generateAccessToken())
    public String generateAccessToken(Map<String, Object> claims,
                                      String subject,
                                      Date expiration,
                                      String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey); // Base64 형식 Secret Key 문자열을 이용해 Key 객체를 얻음

        return Jwts.builder()
                .setClaims(claims) // JWT 에 포함시킬 Custom Claims 추가, 주로 인증된 사용자와 관련된 정보
                .setSubject(subject) // JWT 에 대한 제목 추가
                .setIssuedAt(Calendar.getInstance().getTime()) // JWT 발행 일자 설정(파라미터 타입: java.util.Date)
                .setExpiration(expiration) // JWT 의 만료일시 지정
                .signWith(key) // 서명을 위한 Key 객체 설정
                .compact(); // JWT 생성 및 직렬화
    }

    // Access Token 이 만료되었을 경우, Access Token 을 새로 생성할 수 있게 해주는 Refresh Token 을 생성하는 메서드(generateRefreshToken())
    public String generateRefreshToken(String subject, Date expiration, String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        return Jwts.builder()
                .setSubject(subject)
                .setIssuedAt(Calendar.getInstance().getTime())
                .setExpiration(expiration)
                .signWith(key)
                .compact();
    }

    public Jws<Claims> getClaims(String jws, String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        Jws<Claims> claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jws);
        return claims;
    }

    // JWT 검증을 위한 verifySignature 메서드: JWT 에 포함된 Signature 를 검증하여 JWT 의 위/변조 여부 확인
    public void verifySignature(String jws, String base64EncodedSecretKey) {
        Key key = getKeyFromBase64EncodedKey(base64EncodedSecretKey);

        Jwts.parserBuilder()
                .setSigningKey(key) // 서명에 사용된 Secret Key 설정
                .build()
                .parseClaimsJws(jws); // JWT 를 파싱해서 Claims 를 얻음
    }

    // JWT 생성 시 사용되는 JWT 의 만료 일시를 지정하기 위한 메서드
    public Date getTokenExpiration(int expirationMinutes) {
        Calendar calendar = Calendar.getInstance();
        calendar.add(Calendar.MINUTE, expirationMinutes);
        Date expiration = calendar.getTime();

        return expiration;
    }

    // JWT 의 서명에 사용할 Secret Key 생성
    private Key getKeyFromBase64EncodedKey(String base64EncodedSecretKey) {
        byte[] keyBytes = Decoders.BASE64.decode(base64EncodedSecretKey);
        // Base64 형식으로 인코딩 된 Secret Key 를 디코딩 한 후, byte array 반환
        Key key = Keys.hmacShaKeyFor(keyBytes); // key byte array 를 기반으로 적절한 HMAC 알고리즘을 적용한 Key 객체 생성

        return key;
    }


}
