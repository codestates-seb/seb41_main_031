package com.codestates.seb41_main_031.amoona.post.service;

import com.codestates.seb41_main_031.amoona.exception.BusinessLogicException;
import com.codestates.seb41_main_031.amoona.exception.ExceptionCode;
import com.codestates.seb41_main_031.amoona.member.entity.Member;
import com.codestates.seb41_main_031.amoona.member.repository.MemberRepository;
import com.codestates.seb41_main_031.amoona.post.entity.Post;
import com.codestates.seb41_main_031.amoona.post.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class PostService {

    private final PostRepository postRepository;
//    private final MemberRepository memberRepository;

    public Post createPost(Post post/*, String email*/) {       //     MemberRepository에 Optional<Member> findByEmail(String email); 추가필요

//        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
//        post.setMember(member);

        return postRepository.save(post);
    }

    public Post updatePost(Post post/*, String email*/) {
        Post findPost = postRepository.findById(post.getPostId()).orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));

//        if ( !findPost.getMember().getEmail().equals(email)){
//            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_ALLOWED);
//        }

        findPost.setPlayerNum(post.getPlayerNum());
        findPost.setLocation(post.getLocation());
        findPost.setEvent(post.getEvent());
        findPost.setDate(post.getDate());
        findPost.setTime(post.getTime());
        findPost.setModifiedAt(LocalDateTime.now().withNano(0));

        return postRepository.save(findPost);
    }

    public Post detail(Long postId) {
        return findVerifiedPost(postId);
    }

    public Page<Post> list(int page, int size) {
        return postRepository.findAll(PageRequest.of(page, size,
                Sort.by("postId").descending()));
    }

    public void deletePost(Long postId/*, String email*/) {
        Post findPost = postRepository.findById(postId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));
//        if (!findPost.getMember().getEmail().equals(email)) {
//            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_ALLOWED);
//        }
        postRepository.delete(findPost);
    }

    public Post findVerifiedPost(long postId) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        Post findPost =
                optionalPost.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.POST_NOT_FOUND));

        return findPost;
    }
}
