package com.codestates.seb41_main_031.amoona.post.entity;

import com.codestates.seb41_main_031.amoona.audit.BaseTimeEntity;
import com.codestates.seb41_main_031.amoona.memberPost.entity.MemberPost;
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

    @OneToMany(mappedBy = "post")
    private List<MemberPost> memberPosts;

}
