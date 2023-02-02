package com.codestates.seb41_main_031.amoona.config;

import com.codestates.seb41_main_031.amoona.auth.filter.JwtAuthenticationFilter;
import com.codestates.seb41_main_031.amoona.auth.filter.JwtVerificationFilter;
import com.codestates.seb41_main_031.amoona.auth.handler.MemberAccessDeniedHandler;
import com.codestates.seb41_main_031.amoona.auth.handler.MemberAuthenticationEntryPoint;
import com.codestates.seb41_main_031.amoona.auth.handler.MemberAuthenticationFailureHandler;
import com.codestates.seb41_main_031.amoona.auth.handler.MemberAuthenticationSuccessHandler;
import com.codestates.seb41_main_031.amoona.auth.jwt.JwtTokenizer;
import com.codestates.seb41_main_031.amoona.auth.utils.CustomAuthorityUtils;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
public class SecurityConfiguration {

    private final JwtTokenizer jwtTokenizer;
    private final CustomAuthorityUtils authorityUtils;

    public SecurityConfiguration(JwtTokenizer jwtTokenizer, CustomAuthorityUtils authorityUtils) {
        this.jwtTokenizer = jwtTokenizer;
        this.authorityUtils = authorityUtils;
    }

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
                .headers().frameOptions().sameOrigin() // 동일 출처로부터 들어오는 request 만 페이지 렌더링을 허용
                .and()
                .csrf().disable() // CSRF 공격에 대한 설정 비활성화 -> 설정하지 않으면 error 403
                .cors(withDefaults()) // CORS 설정 추가 -> .cors(withDefaults())의 경우 corsConfigurationSource 라는 이름으로 등록된 Bean 이용
                // 세션을 생성하지 않도록 설정
                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and()
                .formLogin().disable() // 폼 로그인 방식 비활성화
                .httpBasic().disable() // request 전송할 때마다 Username/Password 정보를 Header 에 실어서 인증하는 방식으로 사용하지 않으므로 비활성화
                .exceptionHandling()
                .authenticationEntryPoint(new MemberAuthenticationEntryPoint())
                .accessDeniedHandler(new MemberAccessDeniedHandler())
                .and()
                .apply(new CustomFilterConfigurer()) // Custom Configurer 를 추가해 개발자 입맛대로 커스터마이징 함
                .and()
                .authorizeHttpRequests(authorize -> authorize
                        .antMatchers(HttpMethod.POST, "/members").permitAll() // 회원 가입
                        .antMatchers(HttpMethod.GET, "/members/**").hasRole("USER") // 회원 정보 조회
                        .antMatchers(HttpMethod.PATCH, "/members/**").hasRole("USER") // 회원 정보 수정
                        .antMatchers(HttpMethod.GET, "/members").hasRole("ADMIN") // 모든 회원 정보 조회
                        .antMatchers(HttpMethod.DELETE, "/members/**").hasRole("USER") // 회원 삭제
                        .antMatchers(HttpMethod.POST, "/posts").hasRole("USER") // 게시글 등록
                        .antMatchers(HttpMethod.PATCH, "/posts/**").hasRole("USER") // 게시글 수정
                        .antMatchers(HttpMethod.DELETE, "/posts/**").hasAnyRole("USER", "ADMIN") // 게시글 삭제
                        .antMatchers(HttpMethod.POST, "/joinMembers/**").hasRole("USER")
                        .antMatchers(HttpMethod.DELETE, "/joinMembers/**").hasRole("USER")
                        .anyRequest().permitAll()
                );
        return http.build();
    }

    // PasswordEncoder Bean 객체 생성
    @Bean
    public PasswordEncoder passwordEncoder() {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
    }

    // CorsConfigurationSource Bean 생성을 통해 구체적인 CORS 정책을 설정
    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("*"));
        // 모든 출처(Origin) 에 대해 스크립트 기반의 http 통신을 허용 -> 운영 서버 환경에서 요구사항에 맞게 변경 가능
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PATCH", "DELETE"));
        // 파라미터로 지정한 http 메서드에 대한 http 통신을 허용

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        // CorsConfigurationSource 인터페이스의 구현 클래스인 UrlBasedCorsConfigurationSource 클래스의 객체 생성
        source.registerCorsConfiguration("/**", configuration);
        // 모든 URL 에 지금까지 구성한 CORS 정책(CorsConfiguration) 을 적용
        return source;
    }

    // JwtAuthenticationFilter 를 등록하는 역할을 하는 클래스 구현
    public class CustomFilterConfigurer extends AbstractHttpConfigurer<CustomFilterConfigurer, HttpSecurity> {
        @Override
        public void configure(HttpSecurity builder) throws Exception {
            AuthenticationManager authenticationManager = builder.getSharedObject(AuthenticationManager.class);

            JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(authenticationManager, jwtTokenizer);
            jwtAuthenticationFilter.setFilterProcessesUrl("/login");
            jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());
            jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());

            // JwtVerificationFilter 의 인스턴스를 생성하면서 사용되는 객체들을 DI 받음
            JwtVerificationFilter jwtVerificationFilter = new JwtVerificationFilter(jwtTokenizer, authorityUtils);

            builder
                    .addFilter(jwtAuthenticationFilter) // 필터를 Spring Security Filter Chain 에 추가
                    .addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
        }
    }
}

