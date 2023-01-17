package com.codestates.seb41_main_031.amoona.member.entity;

import com.codestates.seb41_main_031.amoona.audit.BaseTimeEntity;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

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
    private String password;

    @Column(length = 255, nullable = false)
    private String nickName;

    private String region;

    private String image;

    private String gender;

    private int age;

    // todo Post와 다대다 연관관계 매핑
}
