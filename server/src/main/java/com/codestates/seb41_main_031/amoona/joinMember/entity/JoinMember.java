package com.codestates.seb41_main_031.amoona.joinMember.entity;

import com.codestates.seb41_main_031.amoona.audit.BaseTimeEntity;
import com.codestates.seb41_main_031.amoona.member.entity.Member;
import com.codestates.seb41_main_031.amoona.post.entity.Post;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
@Entity
public class JoinMember extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long joinMemberId;

    @ManyToOne
    @JoinColumn(name = "memberId")
    private Member member;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "postId")
    private Post post;

}
