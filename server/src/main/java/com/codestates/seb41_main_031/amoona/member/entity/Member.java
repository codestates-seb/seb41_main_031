package com.codestates.seb41_main_031.amoona.member.entity;

import com.codestates.seb41_main_031.amoona.audit.BaseTimeEntity;
import com.codestates.seb41_main_031.amoona.joinMember.entity.JoinMember;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Member extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(length = 255, nullable = false, updatable = false, unique = true)
    private String email;

    @Column(length = 255, nullable = false)
    @JsonIgnore
    private String password;

    @Column(length = 255, nullable = false)
    private String nickname;

    private String region;

    private String image;

    private String gender;

    private int age;

    @JsonIgnore
    @OneToMany(mappedBy = "member", cascade = CascadeType.PERSIST)
    private List<JoinMember> joinMembers;

    @ElementCollection(fetch = FetchType.EAGER) // 사용자 등록 시, 사용자의 권한을 등록하는 권한 테이블 생성을 위한 애너테이션
    private List<String> roles = new ArrayList<>();
}
