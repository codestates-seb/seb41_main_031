package com.codestates.seb41_main_031.amoona.post.controller;

import com.codestates.seb41_main_031.amoona.dto.MultiResponseDto;
import com.codestates.seb41_main_031.amoona.dto.SingleResponseDto;
import com.codestates.seb41_main_031.amoona.post.dto.PostPatchDto;
import com.codestates.seb41_main_031.amoona.post.dto.PostPostDto;
import com.codestates.seb41_main_031.amoona.post.entity.Post;
import com.codestates.seb41_main_031.amoona.post.mapper.PostMapper;
import com.codestates.seb41_main_031.amoona.post.service.PostService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/posts")
@Validated
public class PostController {

    private final PostService postService;
    private final PostMapper postMapper;

    public PostController(PostService postService, PostMapper postMapper) {
        this.postService = postService;
        this.postMapper = postMapper;
    }

    @PostMapping
    public ResponseEntity postPost(@Valid @RequestBody PostPostDto postPostDto) {   // @AuthenticationPrincipal String email

        Post post = postService.createPost(postMapper.postPostDtoToPost(postPostDto));

//        PostResponseDto postPost = postService.create(postPostDto, email);

        return new ResponseEntity<>(
                new SingleResponseDto<>(postMapper.postToPostResponseDto(post)), HttpStatus.CREATED);
    }

    @PatchMapping("/{postId}")
    public ResponseEntity patchPost(@PathVariable("postId") @Positive Long postId,
                                    @Valid @RequestBody PostPatchDto postPatchDto) {  // @AuthenticationPrincipal String email

        postPatchDto.setPostId(postId);
        Post post = postService.updatePost(postMapper.postPatchDtoToPost(postPatchDto));

        return new ResponseEntity<>(
                new SingleResponseDto<>(postMapper.postToPostResponseDto(post)), HttpStatus.OK);
    }

    @GetMapping("/{postId}")
    public ResponseEntity getPost(@PathVariable("postId") @Positive Long postId) {

        Post post = postService.findPost(postId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(postMapper.postToPostResponseDto(post)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getPosts(@Positive @RequestParam int size,
                                   @Positive @RequestParam int page) {
        Page<Post> pagePosts = postService.findPosts(page - 1, size);
        List<Post> posts = pagePosts.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(postMapper.postsToPostResponseDtos(posts), pagePosts),
                HttpStatus.OK);
    }

    @DeleteMapping("/{postId}")
    public ResponseEntity deletePost(@PathVariable("postId") @Positive Long postId) {

        postService.deletePost(postId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
