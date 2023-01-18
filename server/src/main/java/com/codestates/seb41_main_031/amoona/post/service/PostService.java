package com.codestates.seb41_main_031.amoona.post.service;

import com.codestates.seb41_main_031.amoona.exception.BusinessLogicException;
import com.codestates.seb41_main_031.amoona.exception.ExceptionCode;
import com.codestates.seb41_main_031.amoona.post.entity.Post;
import com.codestates.seb41_main_031.amoona.post.repository.PostRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class PostService {

    private final PostRepository postRepository;
//    private final MemberRepository memberRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    public Post createPost(Post post) {
//
//        memberService.findVerifiedMember(post.getMember().getMemberId());
//
//        post.getPostPosts().stream()
//                .forEach(postPost -> postService.findVerifiedPost(postPost.getPost().getPostId()));
//
//        return postRepository.save(post);
    }

    public Post updatePost(Post post) {
//        Post findPost = findVerifiedPost(post.getPostId());
//        Optional.ofNullable(post.getPostStatus())
//                .ifPresent(postStatus -> findPost.setPostStatus(postStatus));
//        findPost.setModifiedAt(LocalDateTime.now());
//        return postRepository.save(findPost);
    }

    public Post findPost(Long postId) {
        return findVerifiedPost(postId);
    }

    public Page<Post> findPosts(int page, int size) {
        return postRepository.findAll(PageRequest.of(page, size,
                Sort.by("postId").descending()));
    }

    public void deletePost(Long postId) {
//        Post findPost = findVerifiedPost(postId);
//        int step = findPost.getPostStatus().getStepNumber();
//
//        if (step >= 2) {
//            throw new BusinessLogicException(ExceptionCode.CANNOT_CHANGE_POST);
//        }
//        findPost.setPostStatus(Post.PostStatus.POST_CANCEL);
//        findPost.setModifiedAt(LocalDateTime.now());
//        postRepository.save(findPost);
    }

    private Post findVerifiedPost(Long postId) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        Post findPost =
                optionalPost.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));
        return findPost;
    }
}
