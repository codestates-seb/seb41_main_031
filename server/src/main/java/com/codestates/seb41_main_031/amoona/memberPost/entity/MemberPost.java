package com.codestates.seb41_main_031.amoona.memberPost.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class MemberPost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberPostId;

//    @ManyToOne
//    @JoinColumn(name = "memberId")
//    private Member member;
//
//    @ManyToOne
//    @JoinColumn(name = "postId")
//    private Post post;

}
