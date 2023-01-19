package com.codestates.seb41_main_031.amoona.post.repository;

import com.codestates.seb41_main_031.amoona.post.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {

}
