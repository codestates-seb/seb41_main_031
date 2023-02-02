package com.codestates.seb41_main_031.amoona.post.entity;

import com.codestates.seb41_main_031.amoona.audit.BaseTimeEntity;
import com.codestates.seb41_main_031.amoona.member.entity.Member;
import com.codestates.seb41_main_031.amoona.joinMember.entity.JoinMember;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Post extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postId;

    private int playerNum;

    @Column(length = 30, nullable = false)
    private String location;

    @Column(length = 30, nullable = false)
    private String event;

    private String date;

    private String time;

    private String lat;

    private String lng;

    @OneToMany(mappedBy = "post", cascade = CascadeType.PERSIST)
    private List<JoinMember> joinMembers;

    @JoinColumn(name = "memberId")
    @ManyToOne
    private Member member;

}
