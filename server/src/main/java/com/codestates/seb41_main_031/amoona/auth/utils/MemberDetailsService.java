package com.codestates.seb41_main_031.amoona.auth.utils;

import com.codestates.seb41_main_031.amoona.exception.BusinessLogicException;
import com.codestates.seb41_main_031.amoona.exception.ExceptionCode;
import com.codestates.seb41_main_031.amoona.member.entity.Member;
import com.codestates.seb41_main_031.amoona.member.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

import java.util.Collection;
import java.util.Optional;

@Component
public class MemberDetailsService implements UserDetailsService { // UserDetailsService 인터페이스 구현
    @Autowired
    private final MemberRepository memberRepository;
    private final CustomAuthorityUtils authorityUtils;

    // DB 에서 User 를 조회하고, 조회한 User 의 권한 정보를 생성하기 위해 두 클래스를 DI 받음
    public MemberDetailsService(MemberRepository memberRepository, CustomAuthorityUtils authorityUtils) {
        this.memberRepository = memberRepository;
        this.authorityUtils = authorityUtils;
    }

    @Override
    // UserDetailsService 인터페이스를 implements 하는 구현 클래스는
    // loadUserByUsername(String username) 이라는 추상 메서드를 구현해야 함
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Optional<Member> optionalMember = memberRepository.findByEmail(username);
        Member findMember = optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return new MemberDetails(findMember);
    }

    private final class MemberDetails extends Member implements UserDetails {
        MemberDetails(Member member) {
            setMemberId(member.getMemberId());
            setEmail(member.getEmail());
            setPassword(member.getPassword());
            setRoles(member.getRoles());
        }

        @Override
        // DB 에서 조회한 회원의 권한 정보를 이용해 Role 기반의 권한 정보 컬렉션 생성
        public Collection<? extends GrantedAuthority> getAuthorities() {
            // DB 에 저장된 Role 정보를 이용해 User 의 권한 정보 생성
            return authorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() {
            return getEmail();
        }

        @Override
        public boolean isAccountNonExpired() {
            return true;
        }

        @Override
        public boolean isAccountNonLocked() {
            return true;
        }

        @Override
        public boolean isCredentialsNonExpired() {
            return true;
        }

        @Override
        public boolean isEnabled() {
            return true;
        }
    }
}