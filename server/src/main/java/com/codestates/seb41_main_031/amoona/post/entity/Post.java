package com.codestates.seb41_main_031.amoona.post.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Post {

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

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

//    @OneToMany(mappedBy = "post")
//    private List<Post> posts;

}
