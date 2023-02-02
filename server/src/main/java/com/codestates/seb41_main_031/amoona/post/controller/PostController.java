package com.codestates.seb41_main_031.amoona.post.controller;

import com.codestates.seb41_main_031.amoona.dtoUtils.MultiResponseDto;
import com.codestates.seb41_main_031.amoona.dtoUtils.SingleResponseDto;
import com.codestates.seb41_main_031.amoona.post.dto.PostPatchDto;
import com.codestates.seb41_main_031.amoona.post.dto.PostPostDto;
import com.codestates.seb41_main_031.amoona.post.dto.PostResponseDto;
import com.codestates.seb41_main_031.amoona.post.entity.Post;
import com.codestates.seb41_main_031.amoona.post.mapper.PostMapper;
import com.codestates.seb41_main_031.amoona.post.service.PostService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@Api(tags = {"게시글"})
@RestController
@RequiredArgsConstructor
@RequestMapping("/posts")
public class PostController {

    private final PostService postService;
    private final PostMapper postMapper;

    @ApiOperation(value = "게시글 등록", notes = "게시글 API")
    @PostMapping
    public ResponseEntity postPost(@Valid @RequestBody PostPostDto postPostDto,
                                   @AuthenticationPrincipal String email) {

        Post post = postMapper.postPostDtoToPost(postPostDto);
        Post savedPost = postService.createPost(post, email);
        PostResponseDto response = postMapper.postToPostResponseDto(savedPost);

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @ApiOperation(value = "게시글 수정", notes = "게시글 수정 API")
    @ApiImplicitParam(name = "postId", value = "게시글 번호", paramType = "path")
    @PatchMapping("/{postId}")
    public ResponseEntity patchPost(@PathVariable("postId") @Positive Long postId,
                                    @Valid @RequestBody PostPatchDto postPatchDto,
                                    @AuthenticationPrincipal String email) {

        Post post = postMapper.postPatchDtoToPost(postPatchDto);
        post.setPostId(postId);
        Post response = postService.updatePost(post, email);

        return new ResponseEntity<>(postMapper.postToPostResponseDto(response), HttpStatus.OK);
    }

    @ApiOperation(value = "게시글 조회", notes = "게시글 조회 API")
    @ApiImplicitParam(name = "postId", value = "게시글 번호", paramType = "path")
    @GetMapping("/{postId}")
    public ResponseEntity getPost(@PathVariable("postId") @Positive Long postId) {

        Post post = postService.detail(postId);

        return new ResponseEntity<>(
                new SingleResponseDto<>(postMapper.postToPostDetailDto(post)),
                HttpStatus.OK);
    }

    @ApiOperation(value = "게시글 전체 조회", notes = "게시글 목록 조회 API")
    @GetMapping
    public ResponseEntity getPosts(@Positive @RequestParam int page,
                                   @Positive @RequestParam int size) {
        Page<Post> pagePosts = postService.list(page - 1, size);
        List<Post> posts = pagePosts.getContent();

        return new ResponseEntity<>(
                new MultiResponseDto<>(postMapper.postsToPostListDtos(posts), pagePosts),
                HttpStatus.OK);
    }

    @ApiOperation(value = "게시글 삭제", notes = "게시글 삭제 API")
    @ApiImplicitParam(name = "postId", value = "게시글 번호", paramType = "path")
    @DeleteMapping("/{postId}")
    public ResponseEntity deletePost(@PathVariable("postId") @Positive Long postId,
                                     @AuthenticationPrincipal String email) {

        postService.deletePost(postId, email);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
